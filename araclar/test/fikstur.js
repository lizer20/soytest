// SAHTE VERİ — yalnızca testler için. Sayılar ve kişi adları uydurmadır; sitede ASLA kullanılmaz.
// Parti id'leri gerçek soyağacından seçildi ki bağlantı mantığı sınanabilsin.
// Node'da require ile, tarayıcıda (araclar/denetim/fikstur.html) window.SANDIK olarak yüklenir.
const F = {
  secimler: [
    { id: "1927-09-genel", tur: "genel", tarih: "1927-09-02", tekParti: true, meclis: null,
      kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [{ parti: "chp23", oy: null, sandalye: null }] },
    { id: "1999-04-genel", tur: "genel", tarih: "1999-04-18", tekParti: false, meclis: 10,
      kayitli: 1000, kullanilan: 800, gecerli: 700, baraj: 10,
      sonuc: [
        { parti: "mhp93", oy: 200, sandalye: 4 },
        { parti: "dsp", oy: 300, sandalye: 6 },
        { parti: "fp", oy: 60, sandalye: 0 },
        { ad: "Bağımsız", oy: 40, sandalye: 0 },
        { ad: "Diğer", partiSayisi: 3, oy: 100, sandalye: 0 }] },
    { id: "2002-11-genel", tur: "genel", tarih: "2002-11-03", tekParti: false, meclis: 10,
      kayitli: 1000, kullanilan: 800, gecerli: 700, baraj: 10,
      sonuc: [
        { parti: "chp92", oy: 150, sandalye: 5 },
        { parti: "akp", oy: 250, sandalye: 5 },
        { ad: "Diğer", partiSayisi: 5, oy: 300, sandalye: 0 }],
      ittifak: [{ ad: "Sahte İttifak", liste: "chp92", icinden: [{ parti: "dsp", sandalye: 2 }] }] },
    { id: "2004-03-yerel", tur: "yerel", tarih: "2004-03-28", olcu: "belediye-meclisi",
      kayitli: 1000, kullanilan: 700, gecerli: 690,
      sonuc: [{ parti: "akp", oy: 400 }, { parti: "dsp", oy: 90 }, { ad: "Diğer", partiSayisi: 9, oy: 200 }],
      buyuksehir: { istanbul: { parti: "akp", aday: "D" }, ankara: { parti: "akp", aday: "E" }, izmir: { parti: "chp92", aday: "F" } } },
    // referandumda `sonuc` yok, `karar` var: partininSecimleri gibi bütün kayıtları gezen kod bunu da görmeli
    { id: "2007-10-referandum", tur: "referandum", tarih: "2007-10-21", konu: "Sahte konu",
      kayitli: 100, kullanilan: 90, gecerli: 88, evet: 80, hayir: 8, karar: "kabul",
      tutumlar: [{ parti: "akp", tutum: "evet" }] }
  ],
  hukumetler: [
    { no: 57, basbakan: "A", partiler: ["dsp", "mhp93"], baslangic: "1999-05-28",
      bitis: "2002-11-18", tip: "koalisyon", bitisNedeni: "erken-secim" },
    { no: 58, basbakan: "B", partiler: ["akp"], baslangic: "2002-11-18",
      bitis: null, tip: "tek-parti", bitisNedeni: null }
  ]
};
if (typeof module === "object" && module.exports) module.exports = F;
else window.SANDIK = F;
