const test = require("node:test");
const assert = require("node:assert/strict");
const { yukle } = require("../yukle");
const O = require("../../ortak");
const F = require("./fikstur");

const P = yukle(["veri/partiler.js"]).PARTILER;
const M = require("../../sandik-mantik").olustur(P, O);
const kayit = id => F.secimler.find(k => k.id === id);
const kisa = id => P.N.find(n => n.id === id).kisa;

test("partiAdi soyağacındaki partiyi ve düz metin satırı ayırır", () => {
  const a = M.partiAdi({ parti: "dsp" });
  assert.equal(a.id, "dsp");
  assert.equal(a.kisa, kisa("dsp"));
  assert.match(a.renk, /^#[0-9A-F]{6}$/i);
  assert.deepEqual(M.partiAdi({ ad: "Bağımsız" }), { id: null, kisa: "Bağımsız", ad: "Bağımsız", renk: M.NOTR });
});

test("oyDegeri ve katilimDegeri sayılardan hesaplar, yoksa yedeğe düşer", () => {
  const k = kayit("1999-04-genel");
  assert.ok(Math.abs(M.oyDegeri(k.sonuc[1], k) - 300 / 700 * 100) < 1e-9);
  assert.equal(M.katilimDegeri(k), 80);
  assert.equal(M.oyDegeri({ parti: "dsp", oyYuzde: 12.5 }, { gecerli: null }), 12.5);
  assert.equal(M.oyDegeri({ parti: "dsp", oy: null }, k), null);
  assert.equal(M.katilimDegeri({ katilimYuzde: 71.2 }), 71.2);
});

test("siralaGenel sandalyeye, eşitlikte oya göre sıralar; bağımsız ve diğeri dışlar", () => {
  assert.deepEqual(M.siralaGenel(kayit("1999-04-genel")).map(s => s.parti), ["dsp", "mhp93", "fp"]);
  assert.deepEqual(M.siralaGenel(kayit("2002-11-genel")).map(s => s.parti), ["akp", "chp92"]);
});

test("baslikGenel çoğunluk, birincilik ve tek parti durumlarını ayırır", () => {
  assert.equal(M.baslikGenel(kayit("1999-04-genel")), kisa("dsp") + " kazandı · tek başına iktidar");
  assert.equal(M.baslikGenel(kayit("2002-11-genel")), kisa("akp") + " birinci parti");
  assert.equal(M.baslikGenel(kayit("1927-09-genel")), "tek parti seçimi · iki dereceli");
});

test("meclisDurumu girenleri, giremeyenleri, bağımsızı ve diğeri ayırır", () => {
  const d = M.meclisDurumu(kayit("1999-04-genel"));
  assert.deepEqual(d.girenler.map(s => s.parti), ["dsp", "mhp93"]);
  assert.deepEqual(d.giremeyenler.map(s => s.parti), ["fp"]);
  assert.equal(d.bagimsiz.ad, "Bağımsız");
  assert.equal(d.diger.partiSayisi, 3);
});

test("donemBul tarihi doğru banda koyar", () => {
  assert.deepEqual(M.donemBul("1927-09-02"), { tur: "donem", i: 0 });
  assert.deepEqual(M.donemBul("1999-04-18"), { tur: "donem", i: 5 });
  assert.deepEqual(M.donemBul("2002-11-03"), { tur: "donem", i: 6 });
});

test("donemBul askerî yönetim aralığını banttan önce denetler", () => {
  const i = P.DONEMLER.findIndex(d => d.kesinti && d.kesinti.yonetim);
  if (i === -1) return;   // Görev 1'de yönetim tarihleri doğrulanamadıysa sınanacak bir şey yok
  const y = P.DONEMLER[i].kesinti.yonetim;
  assert.deepEqual(M.donemBul(y.bas), { tur: "yonetim", i });
  assert.deepEqual(M.donemBul(y.bit), { tur: "yonetim", i });
});

test("donemBul hiçbir yere düşmeyen tarihte null döner", () => {
  assert.equal(M.donemBul("1900-01-01"), null);
});

test("kronoloji seçimleri ve hükümetleri tarih sırasıyla bantlara dağıtır", () => {
  const kr = M.kronoloji(F);
  assert.deepEqual(kr.bantlar[5].ogeler.map(o => o.tur === "secim" ? o.kayit.id : "h" + o.hukumet.no),
    ["1999-04-genel", "h57"]);
  assert.deepEqual(kr.bantlar[6].ogeler.map(o => o.tur === "secim" ? o.kayit.id : "h" + o.hukumet.no),
    ["2002-11-genel", "h58", "2004-03-yerel", "2007-10-referandum"]);
  assert.equal(kr.yersiz.length, 0);
});

test("sonrakiHukumetler bir sonraki genel seçime kadar kurulanları verir", () => {
  assert.deepEqual(M.sonrakiHukumetler(kayit("1999-04-genel"), F).map(h => h.no), [57]);
  assert.deepEqual(M.sonrakiHukumetler(kayit("2002-11-genel"), F).map(h => h.no), [58]);
});

test("partininSecimleri ittifak listesinden seçilmeyi de bulur", () => {
  const s = M.partininSecimleri("dsp", F);
  assert.deepEqual(s.genel.map(x => x.kayit.id), ["1999-04-genel", "2002-11-genel"]);
  assert.equal(s.genel[1].satir, null);
  assert.deepEqual(s.genel[1].ittifak, { ad: "Sahte İttifak", liste: "chp92", sandalye: 2 });
  assert.deepEqual(s.yerel.map(x => x.kayit.id), ["2004-03-yerel"]);
});

test("meclisDurumu sandalyesi bilinmeyen partileri ayrı listeler", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  k.sonuc.find(s => s.parti === "fp").sandalye = null;
  const d = M.meclisDurumu(k);
  assert.deepEqual(d.bilinmeyen.map(s => s.parti), ["fp"]);
  assert.deepEqual(d.giremeyenler, []);
  assert.deepEqual(d.girenler.map(s => s.parti), ["dsp", "mhp93"]);
});

test("kronoloji askerî yönetim aralığındaki kayıtları kaba koyar, bantlara koymaz", () => {
  const i = P.DONEMLER.findIndex(d => d.kesinti && d.kesinti.tarih === "1980-09-12");
  const y = P.DONEMLER[i].kesinti.yonetim;
  assert.ok(y, "1980 kesintisinde yonetim aralığı yok");
  const S = { secimler: [{ id: y.bas.slice(0, 7) + "-referandum", tur: "referandum", tarih: y.bas }],
              hukumetler: [{ no: 1, basbakan: "X", partiler: [], baslangic: y.bit, bitis: null,
                             tip: "partiluestu", bitisNedeni: null }] };
  const kr = M.kronoloji(S);
  assert.deepEqual((kr.kaplar[i] || []).map(o => o.tarih), [y.bas, y.bit]);
  assert.equal(kr.bantlar.reduce((n, b) => n + b.ogeler.length, 0), 0);
  assert.equal(kr.yersiz.length, 0);
});

test("kronoloji aynı tarihte seçimi hükümetten önce koyar", () => {
  // Bugün hem ekleme sırası (seçimler önce) hem karşılaştırıcının eşitlik kuralı bunu garanti ediyor;
  // test, ikisinden biri değişirse davranışın korunduğunu denetler.
  const S = { secimler: [{ id: "2002-11-genel", tur: "genel", tarih: "2002-11-18", sonuc: [] }],
              hukumetler: [{ no: 58, basbakan: "B", partiler: ["akp"], baslangic: "2002-11-18",
                             bitis: null, tip: "tek-parti", bitisNedeni: null }] };
  assert.deepEqual(M.kronoloji(S).bantlar[6].ogeler.map(x => x.tur), ["secim", "hukumet"]);
});
