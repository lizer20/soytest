const test = require("node:test");
const assert = require("node:assert/strict");
const { yukle } = require("../yukle");
const { dogrulaSandik } = require("../dogrula");
const F = require("./fikstur");

const P = yukle(["veri/partiler.js"]).PARTILER;
const kopya = () => structuredClone(F);
const hatalar = S => dogrulaSandik(P, S).hatalar.join("\n");
const uyarilar = S => dogrulaSandik(P, S).uyarilar.join("\n");
const bul = (S, id) => S.secimler.find(k => k.id === id);

test("geçerli fikstür hatasız geçer", () => {
  assert.equal(hatalar(kopya()), "");
});

test("kimlik biçimi ve tekrarı", () => {
  const S = kopya();
  bul(S, "1999-04-genel").id = "1999-05-genel";       // tarihle uyuşmuyor
  S.secimler.push(structuredClone(bul(S, "2002-11-genel")));
  const h = hatalar(S);
  assert.match(h, /kimlik tarihle uyuşmuyor: 1999-05-genel/);
  assert.match(h, /yinelenen kimlik: 2002-11-genel/);
});

test("sıra ve bilinmeyen değerler", () => {
  const S = kopya();
  S.secimler.reverse();
  S.hukumetler[0].tip = "tuhaf";
  S.hukumetler[0].bitisNedeni = "tuhaf";
  const h = hatalar(S);
  assert.match(h, /secimler tarih sırasında değil/);
  assert.match(h, /bilinmeyen hükümet tipi/);
  assert.match(h, /bilinmeyen bitiş nedeni/);
});

test("parti referansları", () => {
  const S = kopya();
  bul(S, "1999-04-genel").sonuc.push({ parti: "yok", ad: "X", oy: 0, sandalye: 0 });
  S.hukumetler[0].partiler.push("yok2");
  const h = hatalar(S);
  assert.match(h, /bilinmeyen parti: yok\b/);
  assert.match(h, /hem parti hem ad/);
  assert.match(h, /bilinmeyen parti: yok2/);
});

test("sandalye ve oy toplamları", () => {
  const S = kopya();
  bul(S, "1999-04-genel").sonuc[0].sandalye = 5;     // toplam 11 > 10
  bul(S, "2002-11-genel").sonuc[0].oy = 160;          // toplam 710 ≠ 700 (%1,4 fark)
  const h = hatalar(S);
  assert.match(h, /1999-04-genel: sandalye toplamı 11, meclis 10/);
  assert.match(h, /2002-11-genel: oy toplamı 710, geçerli 700/);
});

test("kaynağın kendi içindeki %0,5'e kadar oy farkı hata değil uyarıdır", () => {
  const S = kopya();
  bul(S, "2002-11-genel").sonuc[0].oy = 153;          // toplam 703, geçerli 700 (%0,43)
  assert.doesNotMatch(hatalar(S), /2002-11-genel: oy toplamı/);
  assert.match(uyarilar(S), /2002-11-genel: oy toplamı 703, geçerli 700 — kaynağın kendi farkı/);
});

test("seçmen sayılarının tutarlılığı ve yedek alanların karışması", () => {
  const S = kopya();
  const k = bul(S, "2004-03-yerel");
  k.gecerli = 900;                                    // > kullanilan
  k.katilimYuzde = 70;                                // sayılarla birlikte
  k.sonuc[0].oyYuzde = 50;                            // oy ile birlikte
  const h = hatalar(S);
  assert.match(h, /2004-03-yerel: geçerli > kullanılan/);
  assert.match(h, /2004-03-yerel: seçmen sayıları ve katilimYuzde birlikte/);
  assert.match(h, /2004-03-yerel: aynı satırda oy ve oyYuzde/);
});

test("referandum: evet + hayır = geçerli, sonuç ve tutum değerleri", () => {
  const S = kopya();
  S.secimler.push({ id: "2010-09-referandum", tur: "referandum", tarih: "2010-09-12", konu: "sahte",
    kayitli: 100, kullanilan: 90, gecerli: 88, evet: 80, hayir: 9, karar: "belki",
    tutumlar: [{ parti: "akp", tutum: "kararsiz" }] });
  const h = hatalar(S);
  assert.match(h, /2010-09-referandum: evet \+ hayır 89, geçerli 88/);
  assert.match(h, /bilinmeyen referandum sonucu/);
  assert.match(h, /bilinmeyen tutum/);
});

test("hükümet çakışması hata, boşluk uyarı", () => {
  const S = kopya();
  S.hukumetler[0].bitis = "2002-12-01";
  assert.match(hatalar(S), /hükümetler çakışıyor: 57 \/ 58/);
  const T = kopya();
  T.hukumetler[0].bitis = "2002-11-01";
  assert.match(uyarilar(T), /hükümetler arasında boşluk: 57 → 58/);
});

test("hiçbir banda düşmeyen kayıt hata", () => {
  const S = kopya();
  S.secimler.unshift({ id: "1900-01-ara", tur: "ara", tarih: "1900-01-01", bolge: "x",
    sandalyeSayisi: 1, sonuc: [] });
  assert.match(hatalar(S), /yersiz kayıt: 1900-01-ara/);
});

test("ittifak listesinden seçilenler liste partisini aşarsa uyarı, — sayısı raporlanır", () => {
  const S = kopya();
  bul(S, "2002-11-genel").ittifak[0].icinden[0].sandalye = 6;
  const u = uyarilar(S);
  assert.match(u, /2002-11-genel: ittifak Sahte İttifak içinden 6 > liste partisi 5/);
  assert.match(uyarilar(kopya()), /— sayısı: genel/);
});

test("soyağacında olmayan ama sandalye kazanan parti uyarılır", () => {
  const S = kopya();
  const k = bul(S, "1999-04-genel");
  k.sonuc.push({ ad: "Sahte Parti", oy: 0, sandalye: 0 });   // sandalyesiz: uyarı yok
  assert.doesNotMatch(uyarilar(S), /Sahte Parti/);
  k.sonuc[k.sonuc.length - 1].sandalye = 1;
  k.meclis = 11;                                               // toplam tutsun, yalnızca uyarı sınansın
  assert.match(uyarilar(S), /soyağacında olmayan ama sandalye kazanan: Sahte Parti \(1999-04-genel\)/);
  assert.doesNotMatch(uyarilar(S), /sandalye kazanan: Bağımsız/);
});

test("tarih biçimi: ay hassasiyeti kabul, bozuk biçim hata", () => {
  const S = kopya();
  bul(S, "1927-09-genel").tarih = "1927-09";          // günü bilinmeyen kayıt
  assert.doesNotMatch(hatalar(S), /geçersiz tarih biçimi/);
  bul(S, "1999-04-genel").tarih = "1999-4-18";
  assert.match(hatalar(S), /geçersiz tarih biçimi: 1999-04-genel/);
  const T = kopya();
  T.hukumetler[0].baslangic = "1999-05";
  assert.match(hatalar(T), /hükümet tarihi gün dahil olmalı: 57/);
});

test("cb-halk adayında ad kişinin adıdır; parti ile birlikte yazılabilir", () => {
  const S = { secimler: [{ id: "2014-08-cb-halk", tur: "cb-halk", tarih: "2014-08-10",
    turlar: [{ tarih: "2014-08-10", kayitli: null, kullanilan: null, gecerli: 100,
      adaylar: [{ ad: "A", parti: "akp", oy: 60 }, { ad: "B", destek: "Çatı", oy: 40 }] }],
    secilen: "A", not: null }], hukumetler: [] };
  assert.deepEqual(dogrulaSandik(P, S).hatalar, []);
  S.secimler[0].turlar[0].adaylar[1] = { ad: "B", parti: "chp92", destek: "Çatı", oy: 40 };
  assert.match(dogrulaSandik(P, S).hatalar.join("|"), /hem parti hem destek/);
});

test("hükümetler tarih sırasında değilse hata", () => {
  const S = kopya();
  S.hukumetler.reverse();
  assert.match(hatalar(S), /hukumetler tarih sırasında değil/);
});

test("ara seçimin bilinmeyen sandalye sayısı '— sayısı' raporuna girer", () => {
  const S = kopya();
  S.secimler.push({ id: "2003-03-ara", tur: "ara", tarih: "2003-03-09", bolge: "Siirt",
    sandalyeSayisi: null, sonuc: [{ parti: "dsp", sandalye: null }] });
  assert.match(uyarilar(S), /— sayısı: ara bant \d+: 2/);
});

test("kaynakFarki: ilandaki açıklanmamış eksik toplamda hesaba katılır", () => {
  const S = kopya();
  const k = bul(S, "2002-11-genel");
  k.sonuc[0].oy -= 50;                                 // toplam 650, geçerli 700
  assert.match(hatalar(S), /2002-11-genel: oy toplamı 650/);
  k.kaynakFarki = 50;
  assert.doesNotMatch(hatalar(S), /2002-11-genel: oy toplamı/);
});

test("yerel: kazanılan belediye başkanlıkları denetlenir", () => {
  const S = kopya();
  const k = bul(S, "2004-03-yerel");
  k.belediye = { yapilan: 10, sonuc: [{ parti: "yokparti", sayi: 5 }, { ad: "Bağımsız", sayi: 0 }, { parti: "dsp", sayi: 7 }] };
  const h = hatalar(S);
  assert.match(h, /bilinmeyen parti: yokparti \(2004-03-yerel belediye\)/);
  assert.match(h, /2004-03-yerel belediye: geçersiz sayı 0/);
  assert.match(h, /kazanılan başkanlık 12 > seçimi yapılan 10/);
  k.belediye = { yapilan: 10, sonuc: [{ parti: "dsp", sayi: 7 }] };
  assert.equal(hatalar(S), "");
  assert.match(uyarilar(S), /kazanılan başkanlık 7 < seçimi yapılan 10 \(not yok\)/);
});

test("hükümet adı ve öne çıkarma: ad boş olamaz, öne çıkan hükümetin adı olmalı", () => {
  const S = kopya();
  S.hukumetler[0].lakap = " ";
  assert.match(hatalar(S), /hükümet adı boş olamaz: 57/);
  const T = kopya();
  T.hukumetler[0].onemli = true;
  assert.match(hatalar(T), /öne çıkan hükümetin adı olmalı: 57/);
  T.hukumetler[0].lakap = "ANASOL-M";
  assert.equal(hatalar(T), "");
});

test("genel başkanlar: gerçek veri hatasız; bozuk kayıtlar yakalanır", () => {
  const { dogrulaBaskanlar } = require("../dogrula");
  const G = yukle(["veri/genel-baskanlar.js"]).GENEL_BASKANLAR;
  assert.deepEqual(dogrulaBaskanlar(P, G).hatalar, []);
  const h = dogrulaBaskanlar(P, {
    yokparti: [{ ad: "A", bas: "1990", bit: "1991" }],
    ap: [{ ad: "A", bas: "1970", bit: "1965" }, { ad: "B", bas: "196", bit: null }, { ad: "C", bas: "1960", bit: null, gorevde: true }],
    akp: [{ ad: "D", bas: "2001", bit: "2014" }]
  }).hatalar.join("\n");
  assert.match(h, /bilinmeyen parti yokparti/);
  assert.match(h, /bitişi başlangıçtan önce: ap → A/);
  assert.match(h, /dört haneli olmalı: ap → B/);
  assert.match(h, /faal olmayan partide görevdeki genel başkan: ap → C/);
  assert.match(h, /tarih sırasında değil: ap → B/);
  assert.match(dogrulaBaskanlar(P, { akp: [{ ad: "D", bas: "2001", bit: "2014" }] }).uyarilar.join(), /görevdeki genel başkanı yok: akp/);
});

test("seçimden sonra dolan sandalyeler (sonradan) meclis toplamına katılır; biçimi denetlenir", () => {
  const S = kopya();
  const k = bul(S, "1999-04-genel");
  k.sonuc.find(s => s.parti === "dsp").sandalye = 4;   // 4 + 4 = 8, meclis 10
  assert.match(hatalar(S), /1999-04-genel: sandalye toplamı 8, meclis 10/);
  k.sonradan = 2;
  assert.equal(hatalar(S), "");
  k.sonradan = 0;
  assert.match(hatalar(S), /sonradan pozitif tam sayı olmalı/);
});
