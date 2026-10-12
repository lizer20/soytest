const test = require("node:test");
const assert = require("node:assert/strict");
const { yukle } = require("../yukle");
const O = require("../../ortak");

const w = yukle(["veri/partiler.js", "veri/iller.js"]);
const M = require("../../sandik-mantik").olustur(w.PARTILER, O);
const H = require("../../harita-mantik").olustur(w.ILLER, M, O);
const k = { id: "x", tur: "genel", tarih: "2000-01-01" };

test("il geometrisi: 81 il, plakalar tekil", () => {
  assert.equal(w.ILLER.iller.length, 81);
  assert.equal(new Set(w.ILLER.iller.map(i => i.plaka)).size, 81);
});

test("il adı eşleştirme: büyük harf ve eski adlar", () => {
  assert.equal(H.ilBul("İSTANBUL").plaka, "34");
  assert.equal(H.ilBul("İçel").ad, "Mersin");
  assert.equal(H.ilBul("Urfa").ad, "Şanlıurfa");
  assert.equal(H.ilBul("Maraş").ad, "Kahramanmaraş");
  assert.equal(H.ilBul("Yokil"), null);
});

test("genel seçim: en çok oy alan parti kazanır; tabloda olmayan il 'yok' sayılır", () => {
  const veri = { iller: { "Adana": { gecerli: 100, oy: { chp92: 40, akp: 50, Bağımsız: 10 } },
    "Batman": { gecerli: 10, oy: { Bağımsız: 6, akp: 4 } }, "Yokil": { gecerli: 1, oy: { akp: 1 } } } };
  const { iller, eslesmeyen } = H.iller(k, veri);
  assert.equal(iller.get("01").kazanan, "akp");
  assert.equal(iller.get("01").sira[0].pay, 50);
  assert.equal(iller.get("72").kazanan, "Bağımsız");
  assert.equal(iller.get("06").durum, "yok");
  assert.deepEqual(eslesmeyen, ["Yokil"]);
});

test("yerel seçim: kazanan alanı; bilinmeyen il null ile işaretlenir", () => {
  const veri = { iller: { "İzmir": { kazanan: "chp92", oy: 5, ikinci: "akp", ikinciOy: 3 }, "Ankara": { kazanan: null } } };
  const { iller } = H.iller(k, veri);
  assert.equal(iller.get("35").kazanan, "chp92");
  assert.equal(iller.get("06").durum, "bilinmiyor");
  assert.match(H.ipucu(w.ILLER.iller[34], iller.get("35")), /İzmir — CHP 5 oy/);
});

test("yerel seçim: kazananı olan ilin notu da ipucunda görünür", () => {
  const { iller } = H.iller(k, { iller: { "Sinop": { kazanan: "ap", not: "kaynakta fark var" } } });
  assert.equal(iller.get("57").durum, "var");
  assert.match(H.ipucu(w.ILLER.iller[56], iller.get("57")), /Sinop — AP \(kaynakta fark var\)/);
});

test("aynı aileden iki parti farklı tonda boyanır, en çok il kazanan ailenin rengini alır", () => {
  const veri = { iller: { "Adana": { kazanan: "akp" }, "Ankara": { kazanan: "akp" }, "Yozgat": { kazanan: "yrp" } } };
  const r = H.renkler(H.iller(k, veri).iller);
  const akp = r.find(p => p.anahtar === "akp"), yrp = r.find(p => p.anahtar === "yrp");
  assert.equal(akp.renk, yrp.renk);
  assert.equal(akp.dolgu, akp.renk);
  assert.notEqual(yrp.dolgu, akp.dolgu);
  assert.equal(akp.il, 2);
});

test("SVG: 81 il yolu, ipuçları kaçırılmış, açıklama il sayılarını verir", () => {
  const veri = { iller: { "Adana": { kazanan: "akp" }, "Hatay": { kazanan: null } } };
  const svg = H.haritaSVG(k, veri);
  assert.equal((svg.match(/<path class="h-il/g) || []).length, 81);
  assert.match(svg, /h-tarama/);
  assert.match(svg, /role="img"/);
  const lj = H.lejantHTML(k, veri);
  assert.match(lj, /1 il/);
  assert.match(lj, /sonuç bilinmiyor/);
  assert.match(lj, /o tarihte ayrı il değildi<span>79 il/);
  const t = H.tabloHTML(k, veri);
  assert.match(t, /<th scope="row">Adana<\/th>/);
  // sonucu bilinmeyen il satır olmaz; hiçbir ilde değeri olmayan sütun çizilmez; "—" yazılmaz
  assert.doesNotMatch(t, /Hatay|—|Sonrakiler|Birincinin payı/);
});

test("il tablosu: bilinen pay yazılır, yalnız bazı illerde bilinen değer boş hücre olur", () => {
  const veri = { iller: { "Adana": { gecerli: 100, oy: { akp: 60, chp92: 40 } }, "Aydın": { kazanan: "chp92" } } };
  const t = H.tabloHTML({ id: "y", tur: "yerel", tarih: "2000-01-01" }, veri);
  assert.match(t, /Birincinin payı/);
  assert.match(t, /%60,0/);
  assert.doesNotMatch(t, /—/);
});

test("referandum: evet oranına göre çoğunluk ve renk basamağı", () => {
  const veri = { olcu: "referandum", iller: { "Adana": { gecerli: 100, evet: 62, hayir: 38 }, "Aydın": { gecerli: 100, evet: 47, hayir: 53 } } };
  const { iller } = H.iller(k, veri);
  assert.equal(iller.get("01").kazanan, "Evet");
  assert.equal(iller.get("09").kazanan, "Hayır");
  assert.match(H.ipucu(w.ILLER.iller[0], iller.get("01")), /Adana — Evet %62,0 · Hayır %38,0/);
  const svg = H.haritaSVG(k, veri);
  assert.match(svg, /data-plaka="01"[^>]*fill="#7FA6CC"/);   // evet %55–65
  assert.match(svg, /data-plaka="09"[^>]*fill="#F2CDB8"/);   // hayır %50–55
  assert.match(H.lejantHTML(k, veri), /Evet çoğunlukta<\/b><span>1 il/);
});

test("referandum: Türkiye geneli özet ve il tablosunda evet/hayır yüzdeleri", () => {
  const ozet = H.referandumOzetHTML({ evet: 60, hayir: 40, gecerli: 100, karar: "kabul" });
  assert.match(ozet, /Türkiye geneli/);
  assert.match(ozet, /<b>Evet<\/b><span>%60,0 · 60 oy/);
  assert.match(ozet, /<b>Hayır<\/b><span>%40,0 · 40 oy/);
  assert.match(ozet, /kabul edildi/);
  assert.equal(H.referandumOzetHTML({}), "");
  const veri = { olcu: "referandum", iller: { "Adana": { gecerli: 100, evet: 62, hayir: 38 } } };
  const t = H.tabloHTML(k, veri);
  assert.match(t, /<th scope="col">Evet<\/th><th scope="col">Hayır<\/th>/);
  assert.match(t, /Adana<\/th><td>Evet<\/td><td>%62,0<\/td><td>%38,0/);
});

test("genel seçim lejantı: il kazananların Türkiye geneli oy oranı ve kalanlar 'Diğer'", () => {
  const kg = { id: "x", tur: "genel", tarih: "2000-01-01", gecerli: 100,
    sonuc: [{ parti: "akp", oy: 50 }, { parti: "chp92", oy: 30 }, { parti: "mhp93", oy: 15 }, { ad: "Bağımsız", oy: 5 }] };
  const veri = { iller: { "Adana": { gecerli: 10, oy: { akp: 6, chp92: 4 } }, "İzmir": { gecerli: 10, oy: { chp92: 6, akp: 4 } } } };
  const l = H.lejantHTML(kg, veri);
  assert.match(l, /AK Parti<\/a><span>%50,0 oy · 1 il/);
  assert.match(l, /CHP<\/a><span>%30,0 oy · 1 il/);
  assert.match(l, /Diğer<span>%20,0 oy/);
  // oranı bilinmeyen parti varsa "Diğer" gösterilmez
  kg.sonuc[2] = { parti: "mhp93", oy: null };
  assert.ok(!/Diğer/.test(H.lejantHTML(kg, veri)));
});

test("yerel seçim lejantı: belediye meclisi oyuna göre Türkiye geneli oran ve 'Diğer'", () => {
  const ky = { id: "y", tur: "yerel", tarih: "2000-01-01", gecerli: 100,
    sonuc: [{ parti: "akp", oy: 45 }, { parti: "chp92", oy: 35 }, { parti: "mhp93", oy: 12 }, { ad: "Bağımsız", oy: 8 }] };
  const veri = { olcu: "yerel", iller: { "Adana": { kazanan: "chp92" }, "Konya": { kazanan: "akp" } } };
  const l = H.lejantHTML(ky, veri);
  assert.match(l, /belediye meclisi oyu/);
  assert.match(l, /AK Parti<\/a><span>%45,0 oy · 1 il/);
  assert.match(l, /Diğer<span>%20,0 oy/);
});
