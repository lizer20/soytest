const test = require("node:test");
const assert = require("node:assert/strict");
const { yukle } = require("../yukle");
const O = require("../../ortak");
const F = require("./fikstur");

const P = yukle(["veri/partiler.js"]).PARTILER;
const M = require("../../sandik-mantik").olustur(P, O);
const kayit = id => F.secimler.find(k => k.id === id);
const kisa = id => P.N.find(n => n.id === id).kisa;

test("kacis HTML karakterlerini kaçırır", () => {
  assert.equal(M.kacis(`<a href="x">'&'</a>`), "&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;");
  assert.equal(M.kacis(null), "");
});

test("genel seçim kartı: kimlik, rozet, başlık, meclis çizimi, oy çubuğu, sandalye listesi ve baraj altı", () => {
  const h = M.kartHTML(kayit("1999-04-genel"));
  assert.match(h, /data-id="1999-04-genel"/);
  assert.match(h, /t-rozet t-genel/);
  assert.ok(h.includes(M.kacis(kisa("dsp") + " kazandı · tek başına iktidar")));
  assert.equal((h.match(/<svg class="meclis"/g) || []).length, 1);
  assert.equal((h.match(/class="cubuk"/g) || []).length, 1);
  assert.match(h, /class="s-koltuk"/);
  assert.ok(h.includes("%42,9"));
  assert.match(h, /baraj altı/);
});

test("tek parti kartı oy çubuğu çizmez; sandalye biliniyorsa meclisi çizer", () => {
  const k = structuredClone(kayit("1927-09-genel"));
  let h = M.kartHTML(k);
  assert.match(h, /tek parti seçimi/);
  assert.doesNotMatch(h, /class="cubuk"/);
  assert.doesNotMatch(h, /<svg/);          // sandalye bilinmiyor: çizim yok
  k.meclis = 12; k.sonuc[0].sandalye = 12;
  h = M.kartHTML(k);
  assert.doesNotMatch(h, /class="cubuk"/);
  assert.match(h, /<svg class="meclis"/);
});

const noktaSayisi = svg => (svg.match(/h0/g) || []).length + (svg.match(/<circle/g) || []).length;

test("meclis çizimi: her sandalye bir nokta, sıra sandalyeye göre, bağımsızlar sonda", () => {
  const k = kayit("1999-04-genel");
  const g = M.meclisGruplari(k);
  assert.equal(g.reduce((t, x) => t + x.sandalye, 0), k.meclis);
  for (let i = 1; i < g.length; i++)
    if (g[i].id) assert.ok(g[i - 1].sandalye >= g[i].sandalye, "sıra bozuk");
  const svg = M.meclisSVG(k, false);
  assert.equal(noktaSayisi(svg), k.meclis);
  assert.match(svg, /role="img"/);
  assert.ok(svg.includes("aria-label=\"Meclis dağılımı, " + M.kacis(String(k.meclis)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")));
  assert.match(svg, /class="m-cogunluk"/);
  assert.match(svg, /<title>/);
});

test("meclis çizimi: dağılımı bilinmeyen sandalyeler boş halka olur, uydurulmaz", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  const eksik = k.sonuc.find(s => s.sandalye > 0);
  eksik.sandalye -= 3;
  const g = M.meclisGruplari(k);
  const bos = g.find(x => !x.renk);
  assert.equal(bos.sandalye, 3);
  const svg = M.meclisSVG(k, true);
  assert.equal(noktaSayisi(svg), k.meclis);
  assert.equal((svg.match(/<circle/g) || []).length, 3);
  assert.match(M.panelHTML(k, F).html, /3 sandalyenin dağılımı kaynaklarda bulunamadı/);
});

test("meclis bilgisi yoksa çizim boş", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  k.meclis = null; k.sonuc.forEach(s => { s.sandalye = null; });
  assert.equal(M.meclisSVG(k, false), "");
});

test("yerel kart büyükşehirleri gösterir", () => {
  const h = M.kartHTML(kayit("2004-03-yerel"));
  assert.match(h, /İstanbul/);
  assert.ok(h.includes(M.kacis(kisa("chp92"))));
});

test("bilinmeyen oy yazılmaz (— da yazılmaz); hiç değer yoksa çubuk ve oy sütunu çizilmez", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  k.sonuc[1].oy = null;
  const h = M.kartHTML(k);
  assert.ok(!h.includes("—"));
  assert.match(h, /class="cubuk"/);
  assert.equal(M.cubukHTML([{ kisa: "X", deger: null, renk: "#000000" }], "oy"), "");
  k.sonuc.forEach(s => { s.oy = null; });
  const bos = M.kartHTML(k);
  assert.doesNotMatch(bos, /class="cubuk"|veri yok|<span>oy<\/span>/);
  assert.match(bos, /s-koltuk s-oysuz/);
});

test("hükümet satırı: numara, soyağacı bağlantısı, bitiş nedeni; görevdeki hükümet", () => {
  const h57 = M.hukumetSatiriHTML(F.hukumetler[0]);
  assert.match(h57, /57\. Hükümet/);
  assert.match(h57, /href="index\.html#dsp"/);
  assert.match(h57, /<span class="s-o-neden">erken seçim kararı<\/span>/);
  const h58 = M.hukumetSatiriHTML(F.hukumetler[1]);
  assert.match(h58, /görevde/);
  assert.doesNotMatch(h58, /s-o-neden/);
});

test("partilerüstü hükümet kesinti rengini alır", () => {
  const h = M.hukumetSatiriHTML({ no: null, baskan: "C", partiler: [], baslangic: "1980-09-21",
    bitis: "1983-12-13", tip: "partiluestu", bitisNedeni: null });
  assert.ok(h.includes("--aile:" + M.KESINTI));
  assert.match(h, /partilerüstü/);
});

test("askerî yönetim hükümetleri kendi organının adıyla gösterilir", () => {
  const mgk = M.hukumetSatiriHTML({ no: 1, basbakan: "C", partiler: [], baslangic: "1980-09-20",
    bitis: "1983-12-13", tip: "mgk", bitisNedeni: null });
  assert.match(mgk, /Millî Güvenlik Konseyi/);
  assert.ok(mgk.includes("--aile:" + M.KESINTI));
  const mbk = M.hukumetSatiriHTML({ no: 1, basbakan: "C", partiler: [], baslangic: "1960-05-30",
    bitis: "1961-01-05", tip: "mbk", bitisNedeni: null });
  assert.match(mbk, /Millî Birlik Komitesi/);
});

test("genel seçim paneli bölümleri ve sonraki hükümetler", () => {
  const { html, renk } = M.panelHTML(kayit("1999-04-genel"), F);
  assert.match(html, /id="p-kisa"/);
  for (const b of ["Meclise girenler", "Giremeyenler", "Bağımsız", "Diğer (3 parti)", "57. Hükümet"])
    assert.ok(html.includes(b), b + " yok");
  assert.match(renk, /^#[0-9A-F]{6}$/i);
  assert.match(html, /<figure class="p-meclis"><svg class="meclis meclis-buyuk"/);
  assert.match(html, /salt çoğunluğu \(6\)/);
  assert.match(html, /<table class="p-tablo">/);
});

test("sandalyesi bilinmeyen parti panelde ayrı listede görünür", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  k.sonuc.find(s => s.parti === "fp").sandalye = null;
  const { html } = M.panelHTML(k, F);
  assert.ok(html.includes("Sandalye bilgisi yok"));
  assert.ok(!html.includes("—"));
  assert.ok(!html.includes(">Giremeyenler<"));   // fp artık giremeyenlerde değil
});

test("ittifak notu panelde görünür", () => {
  const { html } = M.panelHTML(kayit("2002-11-genel"), F);
  assert.ok(html.includes("Sahte İttifak"));
  // parti adı soyağacına bağlantı olarak yazılır
  assert.ok(html.includes('href="index.html#dsp">' + M.kacis(kisa("dsp")) + "</a> 2"));
});

test("referandum paneli: evet/hayır, sonuç ve tutum grupları", () => {
  const k = { id: "2010-09-referandum", tur: "referandum", tarih: "2010-09-12", konu: "Sahte konu",
    kayitli: 100, kullanilan: 90, gecerli: 88, evet: 80, hayir: 8, karar: "kabul",
    tutumlar: [{ parti: "akp", tutum: "evet" }, { parti: "chp92", tutum: "hayir" }] };
  const { html } = M.panelHTML(k, F);
  for (const b of ["Sahte konu", "kabul", "Evet", "Hayır", "%90,9"]) assert.ok(html.includes(b), b + " yok");
  assert.ok(M.kartHTML(k).includes("t-referandum"));
});

test("not alanı kaçırılır", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  k.not = "<x>";
  assert.ok(M.panelHTML(k, F).html.includes("&lt;x&gt;"));
});

test("künye: girdiği genel seçimler (kendi listesi ve ittifak listesi) ve yerel seçimler", () => {
  const h = M.kunyeSecimleriHTML("dsp", F);
  assert.match(h, /Girdiği genel seçimler/);
  assert.match(h, /href="sandik\.html#1999-04-genel">1999</);
  assert.ok(h.includes("%42,9 · 6 sandalye"));
  assert.match(h, /href="sandik\.html#2002-11-genel">2002</);
  assert.ok(h.includes(M.kacis(kisa("chp92")) + " listesinden 2 vekil"));
  assert.match(h, /Girdiği yerel seçimler/);
  assert.match(h, /href="sandik\.html#2004-03-yerel">2004</);
  assert.ok(h.includes("%13,0"));
});

test("künye: aynı yıl aynı türde iki seçim ay adıyla ayrışır", () => {
  const S = structuredClone(F);
  const ikinci = structuredClone(S.secimler.find(k => k.id === "1999-04-genel"));
  ikinci.id = "1999-11-genel"; ikinci.tarih = "1999-11-07";
  S.secimler.splice(2, 0, ikinci);
  const h = M.kunyeSecimleriHTML("dsp", S);
  assert.match(h, />Nis 1999</);
  assert.match(h, />Kas 1999</);
});

test("künye: haritada birinci çıktığı iller (genel: en çok oy, yerel: kazanan)", () => {
  const V = { "1999-04-genel": { olcu: "genel", iller: { "Adana": { oy: { dsp: 50, mhp93: 40 } }, "Aydın": { oy: { mhp93: 60, dsp: 10 } }, "Bolu": { oy: { dsp: null } } } },
              "2004-03-yerel": { olcu: "yerel", iller: { "Adana": { kazanan: "dsp" }, "Aydın": { kazanan: null } } } };
  const l = M.birinciIller("dsp", F, V);
  assert.deepEqual(l.map(x => [x.kayit.id, x.il, x.toplam]), [["1999-04-genel", 1, 3], ["2004-03-yerel", 1, 2]]);
  const h = M.haritaKunyeHTML("dsp", F, V);
  assert.match(h, /Haritada birinci çıktığı iller/);
  assert.match(h, /href="harita\.html#1999-04-genel">1999 genel<\/a><span>1 il</);
  assert.match(h, /href="harita\.html#2004-03-yerel">2004 yerel<\/a><span>1 il \(il merkezi\)/);
  assert.equal(M.haritaKunyeHTML("tcf", F, V), "");
});

test("künye: seçim kaydı olmayan partide boş", () => {
  assert.equal(M.kunyeSecimleriHTML("tcf", F), "");
});

test("yerel seçimde oy bilinmiyorsa kart boş uyarı yazmaz; zaman çizelgesinde satır olur", () => {
  const bos = { id: "1984-03-yerel", tur: "yerel", tarih: "1984-03-25", olcu: "belediye-meclisi",
    kayitli: null, kullanilan: null, gecerli: null, not: "Ayrıntı <yok>; ülke geneli bulunamadı.",
    sonuc: [{ parti: "dsp", oy: null }, { parti: "dsp", oy: null }] };
  const h = M.kartHTML(bos);
  assert.doesNotMatch(h, /kayıtlı değil|veri yok|—/);
  assert.doesNotMatch(h, /s-ilk3/);
  assert.equal(M.kartMi(bos), false);
  assert.equal(M.kartMi(kayit("2004-03-yerel")), true);
  const o = M.olayHTML(bos);
  assert.match(o, /class="s-olay s-ac s-o-yerel" data-id="1984-03-yerel"/);
  assert.ok(o.includes(">Ayrıntı &lt;yok&gt;</span>"));   // satırda notun yalnız ilk cümlesi
  assert.ok(M.panelHTML(bos, F).html.includes("ülke geneli bulunamadı"));
  const p = M.panelHTML(bos, F).html;
  assert.doesNotMatch(p, /katılım|belediye meclisi oyları|—/);
});

test("tek şehirlik yenileme seçimi: kapsam yazılır, 'belediye meclisi oyları' yazılmaz", () => {
  const k = { id: "2019-06-yerel", tur: "yerel", tarih: "2019-06-23", kapsam: "İstanbul",
    buyuksehir: { istanbul: { parti: "chp92" } } };
  assert.match(M.kartHTML(k), /yalnız İstanbul/);
  const { html } = M.panelHTML(k, F);
  assert.match(html, /İstanbul/);
  assert.doesNotMatch(html, /belediye meclisi oyları/);
});

test("yerel panel satırı yüzde bilinmezken '— · N oy' diye başlamaz", () => {
  const k = { id: "1984-03-yerel", tur: "yerel", tarih: "1984-03-25", olcu: "belediye-meclisi",
    kayitli: null, kullanilan: null, gecerli: null, sonuc: [{ parti: "dsp", oy: 500 }] };
  const { html } = M.panelHTML(k, F);
  assert.match(html, /belediye meclisi oyları/);
  assert.ok(html.includes("<span>500 oy</span>"));
});

test("hükümet satırı bilinmeyen tipte 'undefined' yazmaz", () => {
  const h = M.hukumetSatiriHTML({ no: 1, basbakan: "C", partiler: [], baslangic: "1960-05-30",
    bitis: null, tip: "yeni-tip", bitisNedeni: null });
  assert.doesNotMatch(h, /undefined/);
});

test("meclis çizimi: rastgele dağılımlarda her grubun nokta sayısı tam tutar", () => {
  let tohum = 7;
  const rast = () => (tohum = (tohum * 16807) % 2147483647) / 2147483647;
  const ids = P.N.slice(0, 12).map(n => n.id);
  for (let deneme = 0; deneme < 300; deneme++) {
    const meclis = [5, 10, 12, 287, 399, 450, 541, 550, 600, 610][deneme % 10];
    const grup = 1 + Math.floor(rast() * 9);
    const pay = Array.from({ length: grup }, () => rast() ** 3 + 0.001);
    const top = pay.reduce((a, b) => a + b, 0);
    const sayi = pay.map(p => Math.floor(p / top * meclis));
    sayi[0] += meclis - sayi.reduce((a, b) => a + b, 0);
    const k = { id: "x", tur: "genel", tarih: "2000-01-01", meclis,
      sonuc: sayi.map((s, i) => ({ parti: ids[i], oy: null, sandalye: s })) };
    const g = M.meclisGruplari(k);
    const parca = M.meclisSVG(k, false).split('<g class="m-grup').slice(1);
    assert.equal(parca.length, g.length);
    parca.forEach((t, i) => assert.equal(noktaSayisi(t), g[i].sandalye, meclis + " / " + sayi.join(",")));
  }
});

test("yerel panelde 'Diğer' ve 'Bağımsız' partilerden sonra gelir", () => {
  const k = { id: "2024-03-yerel", tur: "yerel", tarih: "2024-03-31", olcu: "belediye-meclisi",
    kayitli: 100, kullanilan: 90, gecerli: 80,
    sonuc: [{ ad: "Diğer", partiSayisi: 3, oy: 30 }, { parti: "dsp", oy: 20 }, { ad: "Bağımsız", oy: 25 }, { parti: "akp", oy: 5 }] };
  const h = M.panelHTML(k, F).html;
  const yer = t => h.indexOf(t);
  assert.ok(yer('href="index.html#dsp"') < yer('href="index.html#akp"'));
  assert.ok(yer('href="index.html#akp"') < yer(">Diğer<"));
  assert.ok(yer('href="index.html#akp"') < yer(">Bağımsız<"));
});

test("bütün değerler 0 ise çubuk 'veri yok' demez", () => {
  const h = M.cubukHTML([{ kisa: "X", deger: 0, renk: "#000000" }], "oy");
  assert.doesNotMatch(h, /veri yok/);
  assert.match(h, /class="cubuk"/);
  assert.match(h, /X %0,0/);
});

test("panel, sayfanın verdiği haritayı genel ve yerel seçimde gösterir", () => {
  const g = M.panelHTML(kayit("1999-04-genel"), F, { harita: "<i>HARITA</i>" }).html;
  assert.ok(g.includes("<i>HARITA</i>") && g.indexOf("<i>HARITA</i>") < g.indexOf('<table class="p-tablo">'));
  const y = M.panelHTML(kayit("2004-03-yerel"), F, { harita: "<i>HARITA</i>" }).html;
  assert.ok(y.includes("<i>HARITA</i>"));
  assert.ok(!M.panelHTML(kayit("1999-04-genel"), F).html.includes("HARITA"));
});

test("yerel: kazanılan belediye başkanlıkları kartta ve pencerede", () => {
  const k = structuredClone(kayit("2004-03-yerel"));
  k.belediye = { yapilan: 12, sonuc: [{ parti: "dsp", sayi: 6 }, { ad: "Bağımsız", sayi: 3 }, { ad: "Genç Parti", sayi: 2 }],
                 buyuksehir: [{ parti: "dsp", sayi: 1 }], not: "ilan <x>" };
  const kart = M.kartHTML(k);
  assert.match(kart, /belediye başkanlığı<\/span><span class="s-nw"><b>DSP<\/b> 6<\/span><span class="s-ayrac">·<\/span><span class="s-nw"><b>Genç Parti<\/b> 2/);
  assert.ok(!/Bağımsız<\/b>/.test(kart));
  const h = M.panelHTML(k, F).html;
  assert.match(h, /Kazanılan belediye başkanlıkları · 11/);
  assert.match(h, /DSP<\/a><span>6 · %54,5/);
  assert.match(h, /Genç Parti<span>2 · %18,2/);
  assert.match(h, /Kazanılan büyükşehir başkanlıkları · 1/);
  assert.ok(h.includes("ilan &lt;x&gt;"));
  assert.equal(M.panelHTML(kayit("2004-03-yerel"), F).html.includes("Kazanılan belediye"), false);
});

test("hükümet satırı: yaygın adı numaranın yanında, öne çıkan hükümet büyük gösterilir", () => {
  const sade = M.hukumetSatiriHTML(F.hukumetler[1]);
  assert.doesNotMatch(sade, /s-lakap|s-onemli/);
  const h = M.hukumetSatiriHTML(Object.assign({}, F.hukumetler[0], { lakap: "ANASOL-M", onemli: true }));
  assert.match(h, /class="s-olay s-hukumet s-ac s-onemli" data-id="hukumet-57"/);
  assert.match(h, /57\. Hükümet<\/button><\/span><span class="s-o-ana"><span class="s-lakap">ANASOL-M<\/span> /);
  const k = M.hukumetSatiriHTML(Object.assign({}, F.hukumetler[0], { lakap: "A<B" }));
  assert.match(k, /class="s-olay s-hukumet s-ac"/);
  assert.match(k, /A&lt;B/);
});

test("genel başkanlar: yıl aralığı, görevde, bilinmeyen yıl, not ve eş başkanlık başlığı", () => {
  const GB = {
    a: [{ ad: "Birinci", bas: "1950", bit: "1960" }, { ad: "İkinci", bas: "1960", bit: "1960" },
      { ad: "Üçüncü", bas: null, bit: null }, { ad: "Dördüncü <x>", bas: "1970", bit: null, gorevde: true, not: "vekil dönemi" }],
    b: [{ ad: "X ve Y", bas: "2012", bit: "2013" }],
    c: [{ ad: "Yarım", bas: "1966", bit: null }]
  };
  const h = M.genelBaskanlarHTML("a", GB);
  assert.match(h, /Genel başkanlar/);
  assert.match(h, /<b>Birinci<\/b><span>1950 – 1960<\/span>/);
  assert.match(h, /<b>İkinci<\/b><span>1960<\/span>/);
  assert.match(h, /<b>Üçüncü<\/b><span><\/span>/);
  assert.match(h, /Dördüncü &lt;x&gt;<\/b><span>1970 – görevde<em class="p-bnot">vekil dönemi<\/em>/);
  assert.match(M.genelBaskanlarHTML("b", GB), /Eş genel başkanlar/);
  assert.match(M.genelBaskanlarHTML("c", GB), /<span>1966'dan<\/span>/);
  assert.doesNotMatch(M.genelBaskanlarHTML("c", GB), /\?/);
  assert.equal(M.genelBaskanlarHTML("yok", GB), "");
  assert.equal(M.genelBaskanlarHTML("a", undefined), "");
});

test("zaman çizelgesi: kart/satır ayrımı, yıl grupları ve hükümet satırı", () => {
  for (const id of ["1999-04-genel", "2007-10-referandum"]) assert.equal(M.kartMi(kayit(id)), true);
  assert.equal(M.kartMi({ id: "x", tur: "cb-tbmm", tarih: "2000-05-05" }), false);
  assert.equal(M.kartMi({ id: "x", tur: "ara", tarih: "2003-03-09" }), false);
  const g = M.yilGruplari([{ tarih: "1999-04-18" }, { tarih: "1999-05-28" }, { tarih: "2002-11-03" }, { tarih: "1999-12-01" }]);
  assert.deepEqual(g.map(x => [x.yil, x.ogeler.length]), [["1999", 2], ["2002", 1], ["1999", 1]]);
  const h = M.hukumetSatiriHTML(Object.assign({}, F.hukumetler[0], { lakap: "ANASOL-D", onemli: true }));
  assert.match(h, /class="s-olay s-hukumet s-ac s-onemli"/);
  assert.match(h, /<button type="button" class="s-hk-ac">57\. Hükümet<\/button>/);
  assert.match(h, /<span class="s-lakap">ANASOL-D<\/span>/);
  assert.match(h, /href="index\.html#dsp"/);
  assert.match(h, /→ 18 Kas 2002/);
  assert.match(h, /erken seçim kararı/);
  assert.match(M.hukumetSatiriHTML(F.hukumetler[1]), /görevde/);
  const tb = M.olayHTML({ id: "1980-03-cb-tbmm", tur: "cb-tbmm", tarih: "1980-03-25", secilen: null, turSayisi: null });
  assert.match(tb, /sonuçsuz kaldı/);
  assert.doesNotMatch(tb, /tur<|—|null/);
  const ara = M.olayHTML({ id: "1951-09-ara", tur: "ara", tarih: "1951-09-16", bolge: "17 il", sandalyeSayisi: 20, sonuc: [] });
  assert.match(ara, /17 il · 20 sandalye/);
});

test("pencerede bilinmeyen değerler yazılmaz: katılım, ittifak sandalyesi, boş bağımsız satırı", () => {
  const k = structuredClone(kayit("2002-11-genel"));
  k.kayitli = null; k.ittifak[0].icinden.push({ parti: "akp", sandalye: null });
  k.sonuc.push({ ad: "Bağımsız", oy: null, sandalye: null });
  const h = M.panelHTML(k, F).html;
  assert.doesNotMatch(h, /katılım|—|Bağımsızlar/);
  assert.match(h, /href="index\.html#akp">[^<]+<\/a><\/div>/);
  const tek = M.panelHTML(kayit("1927-09-genel"), F).html;
  assert.doesNotMatch(tek, /<th scope="col">Oy<\/th>|—/);
});

test("yıl ekleri okunuşa göre: 1955'ten, 1966'dan, 2002'ye, 1958'e, 1990'dan, 2000'e", () => {
  const den = ["1955'ten", "1966'dan", "1983'ten", "1990'dan", "1997'den", "1998'den", "2010'dan", "1975'ten", "1991'den", "1992'den",
    "2007'den", "1940'tan", "1960'tan", "1970'ten", "1980'den", "1920'den", "1930'dan", "1950'den", "2000'den", "1900'den", "1964'ten", "1969'dan"];
  for (const x of den) assert.equal(M.yilEki(+x.slice(0, 4), "den"), x);
  const e = ["1958'e", "2002'ye", "1993'e", "2009'a", "2025'e", "1966'ya", "1990'a", "1970'e", "2000'e", "1950'ye", "1961'e", "1940'a"];
  for (const x of e) assert.equal(M.yilEki(+x.slice(0, 4), "e"), x);
});

test("süre: takvime göre yıl/ay/gün ve toplam gün", () => {
  assert.deepEqual(M.sure("1999-05-28", "2002-11-18"), { y: 3, m: 5, d: 21, gun: 1270 });
  assert.equal(M.sureYaz(M.sure("1995-10-05", "1995-10-30")), "25 gün");
  assert.equal(M.sureYaz(M.sure("2000-01-31", "2000-03-01")), "1 ay 1 gün");
  assert.equal(M.sureYaz(M.sure("2000-01-01", "2001-01-01")), "1 yıl");
  assert.equal(M.gunYaz(1270), "3 yıl 5 ay");
  assert.equal(M.gunYaz(20), "20 gün");
});

test("hükümet penceresi: ad, kişi, süre, partiler, bitiş, not ve bağlantılar", () => {
  const S = structuredClone(F);
  S.hukumetler[0].not = "Not <x>"; S.hukumetler[0].lakap = "ANASOL-M";
  const { html, renk } = M.hukumetPanelHTML(S.hukumetler[0], S);
  assert.match(html, /id="p-kisa">57\. Hükümet</);
  assert.match(html, /<span class="p-lakap">ANASOL-M<\/span>Başbakan A/);
  assert.match(html, /28 Mayıs 1999 – 18 Kasım 2002 · 3 yıl 5 ay 21 gün · koalisyon/);
  assert.match(html, /Hükümetteki partiler/);
  assert.match(html, /href="index\.html#dsp"/);
  assert.match(html, /erken seçim kararı/);
  assert.ok(html.includes("Not &lt;x&gt;"));
  assert.match(html, /Önceki genel seçim<\/b><a class="p-git" href="#1999-04-genel">1999 Genel Seçimi/);
  assert.match(html, /Sonraki hükümet<\/b><a class="p-git" href="#hukumet-58">58\. Hükümet · B/);
  assert.doesNotMatch(html, /Önceki hükümet/);
  assert.match(renk, /^#[0-9A-F]{6}$/i);
  const g = M.hukumetPanelHTML(S.hukumetler[1], S).html;
  assert.match(g, /– görevde/);
  assert.doesNotMatch(g, /Bitiş|undefined|null/);
  const cb = M.hukumetPanelHTML({ no: null, baskan: "C", partiler: [], baslangic: "2018-07-09", bitis: null, tip: "cumhurbaskanligi" }, { secimler: [], hukumetler: [] }).html;
  assert.match(cb, /Cumhurbaşkanlığı Hükümeti/);
  assert.match(cb, /Cumhurbaşkanı C/);
  assert.equal(M.hukumetId({ no: null, baslangic: "2018-07-09" }), "hukumet-2018-07-09");
});

test("parti künyesi: yer aldığı hükümetler ve toplam süre", () => {
  const h = M.partiHukumetleriHTML("dsp", F);
  assert.match(h, /Yer aldığı hükümetler/);
  assert.match(h, /1 hükümet · toplam yaklaşık 3 yıl 5 ay/);
  assert.match(h, /href="sandik\.html#hukumet-57">57\. Hükümet<\/a><span>A · 1999–2002/);
  const g = M.partiHukumetleriHTML("akp", F);
  assert.match(g, /1 hükümet \(görevdeki hükümet hariç\)/);
  assert.equal(M.partiHukumetleriHTML("tcf", F), "");
});

test("arama: Türkçe harfler sadeleşir, her sözcük eşleşmeli; kayıt ve hükümet metinleri", () => {
  assert.equal(M.aramaNormal("Özal ŞIĞ İnönü"), "ozal sig inonu");
  const k = M.aramaMetni(kayit("1999-04-genel"));
  assert.ok(M.aramaEslesir(k, "1999 genel"));
  assert.ok(M.aramaEslesir(k, "dsp"));
  assert.ok(M.aramaEslesir(k, "demokratik sol"));
  assert.ok(!M.aramaEslesir(k, "referandum"));
  const h = M.aramaMetni(Object.assign({}, F.hukumetler[0], { basbakan: "Bülent Ecevit", lakap: "ANASOL-M" }));
  assert.ok(M.aramaEslesir(h, "ecevit anasol"));
  assert.ok(M.aramaEslesir(h, "BULENT"));
  assert.ok(M.aramaEslesir(h, "57. hükümet"));
});

test("seçimden sonra dolan sandalyeler: boş halka, ayrı açıklama, kart künyesinde", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  k.sonuc.find(s => s.parti === "dsp").sandalye = 4; k.sonradan = 2;
  const g = M.meclisGruplari(k);
  assert.deepEqual(g.filter(x => !x.renk).map(x => [x.kisa, x.sandalye]), [["seçimden sonra dolan", 2]]);
  const p = M.panelHTML(k, F).html;
  assert.match(p, /2 sandalye seçimde boştu, sonradan dolduruldu/);
  assert.doesNotMatch(p, /dağılımı kaynaklarda bulunamadı/);
  assert.match(M.kartHTML(k), /2 sandalye seçimden sonra doldu/);
});
