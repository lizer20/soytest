/* Sandık verisi: seçimler, referandumlar, hükümetler.
   Kurallar: docs/superpowers/specs/2026-09-11-sandik-design.md §5 ve §8.
   Her değerin kaynağı araclar/kaynak-defteri.md'dedir. null = doğrulanamadı (ekranda —). */
window.SANDIK = {
  secimler: [
    // --- dönem 0 (1923 – 1945) ---

    // kaynak: araclar/kaynak-defteri.md#1923-06-genel
    { id: "1923-06-genel", tur: "genel", tarih: "1923-06", tekParti: true,
      meclis: 287, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 287 } ],
      not: "Seçim il il farklı günlerde ve iki dereceli yapıldı; kaynaklar yalnızca Haziran–Temmuz 1923 aralığını veriyor, tek bir gün yok." },

    // kaynak: araclar/kaynak-defteri.md#1923-10-cb-tbmm
    { id: "1923-10-cb-tbmm", tur: "cb-tbmm", tarih: "1923-10-29",
      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
      not: "Cumhuriyet'in ilanıyla aynı gün, tek aday olarak oybirliğiyle seçildi (158 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1927-09-genel
    { id: "1927-09-genel", tur: "genel", tarih: "1927-09-02", tekParti: true,
      meclis: 316, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 316 } ],
      not: "İkinci seçmenler 30 Temmuz–5 Ağustos, milletvekilleri 2–6 Eylül 1927 arasında seçildi." },

    // kaynak: araclar/kaynak-defteri.md#1927-11-cb-tbmm
    { id: "1927-11-cb-tbmm", tur: "cb-tbmm", tarih: "1927-11-01",
      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
      not: "Atatürk 2. kez, tek aday, oybirliğiyle seçildi (288 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1930-10-yerel
    { id: "1930-10-yerel", tur: "yerel", tarih: "1930-10-05",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "Serbest Cumhuriyet Fırkası'nın girdiği tek seçimdi; İstanbul'da CHF 35.934, SCF 12.813 oy aldı (ülke geneli toplam bulunamadı)." },

    // kaynak: araclar/kaynak-defteri.md#1931-04-genel
    { id: "1931-04-genel", tur: "genel", tarih: "1931-04-25", tekParti: true,
      meclis: 317, kayitli: null, kullanilan: null, gecerli: null, baraj: null, sonradan: 10,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 287 }, { ad: "Bağımsız", oy: null, sandalye: 20 } ],
      not: "İkinci seçmenler 7–10 Nisan, milletvekilleri 25 Nisan 1931'de seçildi. CHP 30 milletvekilliği için aday göstermeyip bu yerleri bağımsız (müstakil) adaylara bıraktı; bunlardan 20'si bağımsızlarca kazanıldı, seçimde boş kalan 10 sandalye sonradan CHP adaylarıyla dolduruldu." },

    // kaynak: araclar/kaynak-defteri.md#1931-05-cb-tbmm
    { id: "1931-05-cb-tbmm", tur: "cb-tbmm", tarih: "1931-05-04",
      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
      not: "Atatürk 3. kez, tek aday, oybirliğiyle seçildi (289 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1934-10-yerel
    { id: "1934-10-yerel", tur: "yerel", tarih: "1934-10",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "Tek parti döneminin ikinci ülke geneli belediye seçimiydi; ülke geneli oy sayısı bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1935-02-genel
    { id: "1935-02-genel", tur: "genel", tarih: "1935-02-08", tekParti: true,
      meclis: 399, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 386 }, { ad: "Bağımsız", oy: null, sandalye: 13 } ],
      not: "CHP 13 ilde birer milletvekilliği için aday göstermedi; bu yerlerden 13 bağımsız (müstakil) milletvekili seçildi." },

    // kaynak: araclar/kaynak-defteri.md#1935-03-cb-tbmm
    { id: "1935-03-cb-tbmm", tur: "cb-tbmm", tarih: "1935-03-01",
      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
      not: "Atatürk 4. ve son kez, tek aday, oybirliğiyle seçildi (386 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1938-10-yerel
    { id: "1938-10-yerel", tur: "yerel", tarih: "1938-10",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "Tek parti döneminin üçüncü ülke geneli belediye seçimiydi (Ankara 29 Eylül–8 Ekim, İstanbul 1–10 Ekim 1938); ülke geneli oy sayısı bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1938-11-cb-tbmm
    { id: "1938-11-cb-tbmm", tur: "cb-tbmm", tarih: "1938-11-11",
      secilen: "İsmet İnönü", turSayisi: 1,
      not: "Atatürk'ün 10 Kasım 1938'deki ölümü üzerine olağanüstü toplanan TBMM'de, tek aday, oybirliğiyle seçildi (348 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1939-03-genel
    { id: "1939-03-genel", tur: "genel", tarih: "1939-03-26", tekParti: true,
      meclis: 429, kayitli: null, kullanilan: null, gecerli: null, baraj: null, sonradan: 5,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 420 }, { ad: "Bağımsız", oy: null, sandalye: 4 } ],
      not: "Seçimde 424 milletvekili seçildi: CHP Afyonkarahisar, Ankara, Eskişehir ve Niğde'de birer milletvekilliği için aday göstermedi, bu yerlerden 4 bağımsız (müstakil) seçildi. Hatay'ın Türkiye'ye katılmasından sonra seçilen 5 Hatay milletvekiliyle meclis 429 üyeye çıktı." },

    // kaynak: araclar/kaynak-defteri.md#1939-04-cb-tbmm
    { id: "1939-04-cb-tbmm", tur: "cb-tbmm", tarih: "1939-04-03",
      secilen: "İsmet İnönü", turSayisi: 1,
      not: "İnönü 2. kez, tek aday, oybirliğiyle seçildi (413 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1942-10-yerel
    { id: "1942-10-yerel", tur: "yerel", tarih: "1942-10",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "Tek parti döneminin dördüncü ve son ülke geneli belediye seçimiydi (İstanbul 1–11 Ekim 1942); ülke geneli oy sayısı bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1943-02-genel
    { id: "1943-02-genel", tur: "genel", tarih: "1943-02-28", tekParti: true,
      meclis: 455, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 451 }, { ad: "Bağımsız", oy: null, sandalye: 4 } ],
      not: "İkinci Dünya Savaşı'nın en yoğun döneminde yapılan, tek parti döneminin son genel seçimidir. CHP Afyonkarahisar, Ankara, Eskişehir ve Niğde'de birer milletvekilliği için aday göstermedi; bu yerlerden 4 bağımsız (müstakil) seçildi." },

    // kaynak: araclar/kaynak-defteri.md#1943-03-cb-tbmm
    { id: "1943-03-cb-tbmm", tur: "cb-tbmm", tarih: "1943-03-08",
      secilen: "İsmet İnönü", turSayisi: 1,
      not: "İnönü 3. kez, tek aday, oybirliğiyle seçildi (435 oy)." },

    // --- dönem 1 (1946 – 1960) ---

    // kaynak: araclar/kaynak-defteri.md#1946-05-yerel
    { id: "1946-05-yerel", tur: "yerel", tarih: "1946-05-26",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "Çok partili hayatın ilk yerel seçimiydi; DP örgütlenme yetersizliğini gerekçe göstererek katılmadı, Milli Kalkınma Partisi de seçim günü yarıştan çekilince seçim fiilen tek partili geçti." },

    // kaynak: araclar/kaynak-defteri.md#1946-07-genel
    { id: "1946-07-genel", tur: "genel", tarih: "1946-07-21", tekParti: false,
      meclis: 465, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 397 }, { parti: "dp46", oy: null, sandalye: 61 }, { ad: "Bağımsız", oy: null, sandalye: 7 } ],
      not: "Açık oy, gizli tasnif usulüyle yapıldı; ülke geneli oy sayıları hiç yayımlanmadı, yalnızca milletvekili dağılımı bilinmektedir." },

    // kaynak: araclar/kaynak-defteri.md#1946-08-cb-tbmm
    { id: "1946-08-cb-tbmm", tur: "cb-tbmm", tarih: "1946-08-05",
      secilen: "İsmet İnönü", turSayisi: 1,
      not: "İnönü 4. ve son kez, DP'nin adayı Fevzi Çakmak'a karşı seçildi (388/59 oy, 2 oy Tengirşenk'e, 2 boş)." },

    // kaynak: araclar/kaynak-defteri.md#1950-05-genel
    { id: "1950-05-genel", tur: "genel", tarih: "1950-05-14", tekParti: false,
      meclis: 487, kayitli: 8905743, kullanilan: 7953085, gecerli: null, baraj: null,
      sonuc: [ { parti: "dp46", oy: 4241393, sandalye: 408 }, { parti: "chp23", oy: 3176561, sandalye: 69 }, { parti: "mp48", oy: null, sandalye: 1 }, { ad: "Bağımsız", oy: null, sandalye: null } ],
      not: "İktidar ilk kez seçim yoluyla el değiştirdi: CHP'den DP'ye. Resmî kaynaklar 8 sandalyeyi farklı sayıyor: TBMM kayıtlarına göre DP 408, bağımsızlar 9; YSK ve TÜİK tablolarına göre DP 416, bağımsızlar 1 sandalye kazandı. Bu yüzden bağımsızların sandalye sayısı yazılmadı; DP için iki sayımın ortak kısmı (408) yazıldı ve kalan 9 sandalye meclis çiziminde boş halka olarak gösterilir." },

    // kaynak: araclar/kaynak-defteri.md#1950-05-cb-tbmm
    { id: "1950-05-cb-tbmm", tur: "cb-tbmm", tarih: "1950-05-22",
      secilen: "Celâl Bayar", turSayisi: 1,
      not: "DP'nin genel başkanı, yeni meclisçe 1. turda seçildi (387/453 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1950-09-yerel
    { id: "1950-09-yerel", tur: "yerel", tarih: "1950-09-03",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [ { parti: "dp46", oyYuzde: 57.6 }, { parti: "chp23", oyYuzde: 37.5 } ],
      not: "DP ülke genelinde 600'den fazla belediyeden 560'ından fazlasını kazandı; ülke geneli oy sayısı yayımlanmadı. Kaynaklar yalnızca DP ve CHP'nin oy oranını veriyor; kalan %4,9'un dağılımı bilinmiyor." },

    // kaynak: araclar/kaynak-defteri.md#1951-09-ara
    { id: "1951-09-ara", tur: "ara", tarih: "1951-09-16",
      bolge: "17 il", sandalyeSayisi: 20,
      sonuc: [],
      not: "1950 seçiminde birden fazla yerden seçilen ya da vefat eden milletvekillerinin yerine yapıldı; Bilecik'te DP kazandı. 17 il ve 20 sandalye, yeni milletvekillerinin TBMM'deki andiçme tutanaklarıyla doğrulandı. Partilere göre sandalye dağılımı resmî bir belgede bulunamadığı için yazılmadı." },

    // kaynak: araclar/kaynak-defteri.md#1954-05-genel
    { id: "1954-05-genel", tur: "genel", tarih: "1954-05-02", tekParti: false,
      meclis: 541, kayitli: 10262063, kullanilan: 9095617, gecerli: null, baraj: null,
      sonuc: [ { parti: "dp46", oy: null, sandalye: 503 }, { parti: "chp23", oy: null, sandalye: 31 }, { parti: "cmp", oy: null, sandalye: 5 }, { ad: "Bağımsız", oy: null, sandalye: null } ],
      not: "DP ikinci seçimini de kazanarak iktidarını pekiştirdi. Bağımsızların kazandığı sandalye sayısı (TÜİK'e göre 503+31+5'ten geriye kalan 2, Yılmaz 2010'a göre 1) kaynaklar arasındaki DP sandalyesi uyuşmazlığı nedeniyle kesinleştirilemedi." },

    // kaynak: araclar/kaynak-defteri.md#1954-05-cb-tbmm
    { id: "1954-05-cb-tbmm", tur: "cb-tbmm", tarih: "1954-05-14",
      secilen: "Celâl Bayar", turSayisi: 1,
      not: "Bayar 2. kez seçildi (486/513 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1955-11-yerel
    { id: "1955-11-yerel", tur: "yerel", tarih: "1955-11-13",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "CHP ve Cumhuriyetçi Millet Partisi seçime katılmadı; il genel meclisi seçimi ayrı olarak 25 Eylül 1955'te yapıldı. Ülke geneli oy sayısı bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1957-10-genel
    { id: "1957-10-genel", tur: "genel", tarih: "1957-10-27", tekParti: false,
      meclis: 610, kayitli: 12078623, kullanilan: 9250949, gecerli: null, baraj: null,
      sonuc: [ { parti: "dp46", oy: null, sandalye: 424 }, { parti: "chp23", oy: null, sandalye: 178 }, { parti: "cmp", oy: null, sandalye: 4 }, { parti: "hurriyet", oy: null, sandalye: 4 } ],
      not: "DP oy kaybetmesine rağmen çoğunluk sistemi sayesinde sandalyelerin çoğunu korudu." },

    // kaynak: araclar/kaynak-defteri.md#1957-11-cb-tbmm
    { id: "1957-11-cb-tbmm", tur: "cb-tbmm", tarih: "1957-11-01",
      secilen: "Celâl Bayar", turSayisi: 1,
      not: "Bayar 3. ve son kez seçildi (413/602 oy); muhalefet milletvekilleri oylama sırasında Meclis'i terk etti." },

    // --- 27 Mayıs 1960 kabı (bkz. veri/partiler.js DONEMLER[1].kesinti.yonetim) ---

    // kaynak: araclar/kaynak-defteri.md#1961-07-referandum
    { id: "1961-07-referandum", tur: "referandum", tarih: "1961-07-09",
      konu: "1961 Anayasası'nın kabulü",
      kayitli: 12747901, kullanilan: 10321111, gecerli: 10282036,
      evet: 6348092, hayir: 3933944, karar: "kabul",
      tutumlar: [ { parti: "chp23", tutum: "evet" }, { parti: "ap", tutum: "evet" } ],
      not: "Milli Birlik Komitesi döneminde yapıldı. 11 ilde (Aydın, Bolu, Bursa, Çorum, Denizli, İzmir, Kütahya, Manisa, Sakarya, Samsun, Zonguldak) 'hayır' oyu çoğunlukta çıktı." },

    // --- dönem 2 (1961 – 1971) ---

    // kaynak: araclar/kaynak-defteri.md#1961-10-genel
    { id: "1961-10-genel", tur: "genel", tarih: "1961-10-15", tekParti: false,
      meclis: 450, kayitli: 12925395, kullanilan: 10522716, gecerli: 10138035, baraj: null,
      sonuc: [ { parti: "chp23", oy: 3724752, sandalye: 173 }, { parti: "ap", oy: 3527435, sandalye: 158 }, { parti: "ytp", oy: 1391934, sandalye: 65 }, { parti: "ckmp", oy: 1415390, sandalye: 54 }, { ad: "Bağımsız", oy: 81732, sandalye: 0 } ],
      not: "27 Mayıs sonrası ilk genel seçim; ilk kez nispi temsil (çevre barajlı d'Hondt) uygulandı. Hiçbir parti tek başına çoğunluk sağlayamadı, Cumhuriyet tarihinin ilk koalisyon dönemi bu seçimle başladı." },

    // kaynak: araclar/kaynak-defteri.md#1961-10-cb-tbmm
    { id: "1961-10-cb-tbmm", tur: "cb-tbmm", tarih: "1961-10-26",
      secilen: "Cemal Gürsel", turSayisi: 1,
      not: "1961 Anayasası'nın kabulünün ardından oluşan yeni TBMM'nin ortak toplantısında, tek aday olarak seçildi; rakip aday Ali Fuat Başgil, MBK baskısıyla adaylıktan çekilmişti." },

    // kaynak: araclar/kaynak-defteri.md#1963-11-yerel
    { id: "1963-11-yerel", tur: "yerel", tarih: "1963-11-17",
      olcu: "belediye-meclisi",
      kayitli: 5861239, kullanilan: 3937626, gecerli: 2901695, kaynakFarki: 185299,
      sonuc: [ { parti: "ap", oy: 1356610 }, { parti: "chp23", oy: 1037939 }, { parti: "ytp", oy: 122459 }, { parti: "mp62", oy: 79174 }, { parti: "ckmp", oy: 63113 }, { parti: "tip61", oy: 18397 }, { ad: "Bağımsız", oy: 38704 } ],
      belediye: { yapilan: 1028, sonuc: [ { parti: "ap", sayi: 505 }, { parti: "chp23", sayi: 335 }, { parti: "ytp", sayi: 58 }, { parti: "ckmp", sayi: 9 }, { parti: "mp62", sayi: 8 }, { ad: "Bağımsız", sayi: 113 } ],
        not: "YSK'nın seçim arşivindeki sonuç tablosu; tablo sonradan yenilenen seçimleri içerip içermediğini belirtmiyor." },
      buyuksehir: {
        istanbul: { parti: "chp23", aday: "Haşim İşcan" }, ankara: { parti: "chp23" }, izmir: { parti: "ap" }
      },
      not: "1961 Anayasası sonrası belediye başkanlarının ilk doğrudan halk oyuyla seçildiği yerel seçim. İstanbul'da en çok oyu alan AP adayı Nuri Eroğan, adaylık için öngörülen sürede kamu görevinden istifa etmediği gerekçesiyle YSK kararıyla diskalifiye edildi; ikinci sıradaki CHP adayı Haşim İşcan belediye başkanı sayıldı (Resmî Gazete, 13.12.1963). İzmir'de AP, Ankara'da CHP kazandı (DİE il tablosu; Ankara kentinin dört ilçesinin toplamı CHP 63.684, AP 57.527). Resmî ilanda parti oylarının toplamı (2.716.396) geçerli oydan (2.901.695) 185.299 eksiktir; fark ilanda açıklanmamıştır, yüzdeler ilandaki gibi geçerli oya göre hesaplanır." },

    // kaynak: araclar/kaynak-defteri.md#1965-10-genel
    { id: "1965-10-genel", tur: "genel", tarih: "1965-10-10", tekParti: false,
      meclis: 450, kayitli: 13679753, kullanilan: 9748678, gecerli: 9307563, baraj: null,
      sonuc: [ { parti: "ap", oy: 4921235, sandalye: 240 }, { parti: "chp23", oy: 2675785, sandalye: 134 }, { parti: "mp62", oy: 582704, sandalye: 31 }, { parti: "ytp", oy: 346514, sandalye: 19 }, { parti: "tip61", oy: 276101, sandalye: 14 }, { parti: "ckmp", oy: 208696, sandalye: 11 }, { ad: "Bağımsız", oy: 296528, sandalye: 1 } ],
      not: "Millî bakiye (ulusal artık) sistemiyle yapılan tek seçim. AP tek başına iktidara geldi; TİP ilk kez meclise girdi (14 sandalye + 1 senatörlük)." },

    // kaynak: araclar/kaynak-defteri.md#1966-03-cb-tbmm
    { id: "1966-03-cb-tbmm", tur: "cb-tbmm", tarih: "1966-03-28",
      secilen: "Cevdet Sunay", turSayisi: 1,
      not: "Cemal Gürsel'in sağlık nedeniyle görevi bırakmasının ardından, AP ve CHP'nin ortak desteğiyle 1. turda seçildi; CKMP lideri Alparslan Türkeş de aday oldu." },

    // kaynak: araclar/kaynak-defteri.md#1966-06-ara
    { id: "1966-06-ara", tur: "ara", tarih: "1966-06-05",
      bolge: "Hatay", sandalyeSayisi: 1,
      sonuc: [ { parti: "ap", sandalye: 1 } ],
      not: "Hatay milletvekilliğinin boşalması üzerine yapıldı; seçilen: Şemsettin Mursaloğlu (AP)." },

    // kaynak: araclar/kaynak-defteri.md#1968-06-yerel
    { id: "1968-06-yerel", tur: "yerel", tarih: "1968-06-02",
      olcu: "belediye-meclisi",
      kayitli: 6155701, kullanilan: 3498737, gecerli: 2848207,
      sonuc: [ { parti: "ap", oy: 1412044 }, { parti: "chp23", oy: 991161 }, { parti: "gp", oy: 126384 }, { parti: "mp62", oy: 98619 }, { parti: "tip61", oy: 55610 }, { parti: "ckmp", oy: 42506 }, { parti: "tbp", oy: 33777 }, { parti: "ytp", oy: 21741 }, { ad: "Bağımsız", oy: 66365 } ],
      belediye: { yapilan: 1238, sonuc: [ { parti: "ap", sayi: 693 }, { parti: "chp23", sayi: 292 }, { parti: "gp", sayi: 23 }, { parti: "mp62", sayi: 12 }, { parti: "ytp", sayi: 9 }, { parti: "ckmp", sayi: 7 }, { ad: "Bağımsız", sayi: 202 } ],
        not: "YSK'nın seçim arşivindeki sonuç tablosu; tablo sonradan yenilenen seçimleri içerip içermediğini belirtmiyor." },
      buyuksehir: { istanbul: { parti: "ap" }, ankara: { parti: "ap" }, izmir: { parti: "ap" } },
      not: "AP çoğu ilde kazandı; İstanbul (Fahri Atabey), Ankara (Ekrem Barlas) ve İzmir'i de AP aldı. İstanbul için DİE'nin il tablosunda kent ilçelerinin toplamı AP 134.730, CHP 99.313'tür. Aynı gün 5 ilde milletvekili ara seçimi de yapıldı." },

    // kaynak: araclar/kaynak-defteri.md#1968-06-ara
    { id: "1968-06-ara", tur: "ara", tarih: "1968-06-02",
      bolge: "5 il", sandalyeSayisi: 5,
      sonuc: [ { parti: "ap", sandalye: 5 } ],
      not: "Yerel seçimle aynı gün Adana, Çorum, Diyarbakır, İstanbul ve Urfa'da birer milletvekilliği için yapıldı; beşini de AP kazandı." },

    // kaynak: araclar/kaynak-defteri.md#1969-10-genel
    { id: "1969-10-genel", tur: "genel", tarih: "1969-10-12", tekParti: false,
      meclis: 450, kayitli: 14788552, kullanilan: 9516035, gecerli: 9086296, baraj: null,
      sonuc: [ { parti: "ap", oy: 4229712, sandalye: 256 }, { parti: "chp23", oy: 2487006, sandalye: 143 }, { parti: "gp", oy: 597818, sandalye: 15 }, { ad: "Bağımsız", oy: 511023, sandalye: 13 }, { parti: "tbp", oy: 254695, sandalye: 8 }, { parti: "mp62", oy: 292961, sandalye: 6 }, { parti: "ytp", oy: 197929, sandalye: 6 }, { parti: "tip61", oy: 243631, sandalye: 2 }, { parti: "mhp69", oy: 275091, sandalye: 1 } ],
      not: "Cumhuriyet tarihinin en düşük katılımlı genel seçimi (%64,3). MHP ve Türkiye Birlik Partisi ilk kez meclise girdi; MHP'nin tek sandalyesi Alparslan Türkeş'e ait." },

    // --- dönem 3 (1972 – 1980) ---

    // kaynak: araclar/kaynak-defteri.md#1973-04-cb-tbmm
    { id: "1973-04-cb-tbmm", tur: "cb-tbmm", tarih: "1973-04-06",
      secilen: "Fahri Korutürk", turSayisi: 15,
      not: "13 Mart – 6 Nisan 1973 arası 15 turda tamamlanan maraton seçimde, bağımsız/kontenjan senatörü Korutürk, DP'nin adayı Ferruh Bozbeyli'ye karşı 365 oyla seçildi." },

    // kaynak: araclar/kaynak-defteri.md#1973-10-genel
    { id: "1973-10-genel", tur: "genel", tarih: "1973-10-14", tekParti: false,
      meclis: 450, kayitli: 16798164, kullanilan: 11223843, gecerli: 10723658, baraj: null,
      sonuc: [ { parti: "chp23", oy: 3570583, sandalye: 185 }, { parti: "ap", oy: 3197897, sandalye: 149 }, { parti: "msp", oy: 1265771, sandalye: 48 }, { parti: "demp70", oy: 1275502, sandalye: 45 }, { parti: "cgp", oy: 564343, sandalye: 13 }, { ad: "Bağımsız", oy: 303218, sandalye: 6 }, { parti: "mhp69", oy: 362208, sandalye: 3 }, { parti: "tbp", oy: 121759, sandalye: 1 }, { parti: "mp62", oy: 62377, sandalye: 0 } ],
      not: "12 Mart sonrası ilk genel seçim; CHP birinci parti oldu ama tek başına iktidar için gereken çoğunluğu sağlayamadı, uzun bir hükümet krizi başladı." },

    // kaynak: araclar/kaynak-defteri.md#1973-12-yerel
    { id: "1973-12-yerel", tur: "yerel", tarih: "1973-12-09",
      olcu: "belediye-meclisi",
      kayitli: 8607082, kullanilan: 4706719, gecerli: 3914801,
      sonuc: [ { parti: "chp23", oy: 1624490 }, { parti: "ap", oy: 1382150 }, { parti: "demp70", oy: 351746 }, { parti: "msp", oy: 212477 }, { ad: "Bağımsız", oy: 150621 }, { parti: "cgp", oy: 102908 }, { parti: "mhp69", oy: 62165 }, { parti: "tbp", oy: 19860 }, { parti: "mp62", oy: 8384 } ],
      belediye: { yapilan: 1620, sonuc: [ { parti: "ap", sayi: 643 }, { parti: "chp23", sayi: 554 }, { parti: "demp70", sayi: 104 }, { parti: "cgp", sayi: 37 }, { parti: "msp", sayi: 31 }, { ad: "Bağımsız", sayi: 246 } ],
        not: "YSK'nın seçim arşivindeki sonuç tablosu; tablo sonradan yenilenen seçimleri içerip içermediğini belirtmiyor. Tablonun başlığında 1.620 başkanlık yazıyor, partilere dağılan başkanlıkların toplamı ise 1.615; fark kaynakta açıklanmıyor." },
      buyuksehir: { istanbul: { parti: "chp23" }, ankara: { parti: "chp23" }, izmir: { parti: "chp23" } },
      not: "CHP, İstanbul (Ahmet İsvan), Ankara (Vedat Dalokay) ve İzmir (İhsan Alyanak) dahil büyük şehirlerde kazandı." },

    // kaynak: araclar/kaynak-defteri.md#1975-10-ara
    { id: "1975-10-ara", tur: "ara", tarih: "1975-10-12",
      bolge: "6 il", sandalyeSayisi: 6,
      sonuc: [ { parti: "ap", sandalye: 5 }, { parti: "chp23", sandalye: 1 } ],
      not: "Cumhuriyet Senatosu üye seçimiyle aynı gün Amasya, Bursa, Eskişehir, Niğde, Urfa ve Zonguldak'ta birer milletvekilliği için yapıldı; Amasya'yı CHP, diğer beşini AP kazandı." },

    // kaynak: araclar/kaynak-defteri.md#1977-06-genel
    { id: "1977-06-genel", tur: "genel", tarih: "1977-06-05", tekParti: false,
      meclis: 450, kayitli: 21207303, kullanilan: 15358210, gecerli: 14827172, baraj: null,
      sonuc: [ { parti: "chp23", oy: 6136171, sandalye: 213 }, { parti: "ap", oy: 5468202, sandalye: 189 }, { parti: "msp", oy: 1269918, sandalye: 24 }, { parti: "mhp69", oy: 951544, sandalye: 16 }, { ad: "Bağımsız", oy: 370035, sandalye: 4 }, { parti: "cgp", oy: 277713, sandalye: 3 }, { parti: "demp70", oy: 274484, sandalye: 1 }, { parti: "tbp", oy: 58540, sandalye: 0 }, { parti: "tip75", oy: 20565, sandalye: 0 } ],
      not: "CHP oyunu artırarak yine birinci parti oldu ama yine tek başına iktidar için gereken çoğunluğu sağlayamadı." },

    // kaynak: araclar/kaynak-defteri.md#1977-12-yerel
    { id: "1977-12-yerel", tur: "yerel", tarih: "1977-12-11",
      olcu: "belediye-meclisi",
      kayitli: 12067618, kullanilan: 6197718, gecerli: 5680318,
      sonuc: [ { parti: "chp23", oy: 2663642 }, { parti: "ap", oy: 2148885 }, { parti: "msp", oy: 315733 }, { parti: "mhp69", oy: 302831 }, { ad: "Bağımsız", oy: 107953 }, { parti: "demp70", oy: 51411 }, { parti: "cgp", oy: 40587 }, { parti: "tbp", oy: 23506 }, { parti: "tip75", oy: 15992 }, { parti: "tsip74", oy: 6417 }, { parti: "sdp75", oy: 3280 }, { parti: "tukp", oy: 81 } ],
      belediye: { yapilan: 1710, sonuc: [ { parti: "ap", sayi: 708 }, { parti: "chp23", sayi: 707 }, { parti: "mhp69", sayi: 55 }, { parti: "msp", sayi: 51 }, { parti: "cgp", sayi: 9 }, { parti: "demp70", sayi: 4 }, { parti: "tbp", sayi: 1 }, { ad: "Bağımsız", sayi: 175 } ],
        not: "YSK'nın seçim arşivindeki sonuç tablosu; tablo sonradan yenilenen seçimleri içerip içermediğini belirtmiyor." },
      buyuksehir: { istanbul: { parti: "chp23" }, ankara: { parti: "chp23" }, izmir: { parti: "chp23" } },
      not: "CHP, İstanbul, Ankara ve İzmir dahil büyük şehirlerde yine kazandı." },

    // kaynak: araclar/kaynak-defteri.md#1979-10-ara
    { id: "1979-10-ara", tur: "ara", tarih: "1979-10-14",
      bolge: "5 il", sandalyeSayisi: 5,
      sonuc: [ { parti: "ap", sandalye: 5 } ],
      not: "Cumhuriyet Senatosu üye seçimiyle aynı gün Aydın, Edirne, Konya, Manisa ve Muğla'da birer milletvekilliği için yapıldı; beşini de AP kazandı." },

    // kaynak: araclar/kaynak-defteri.md#1980-03-cb-tbmm
    { id: "1980-03-cb-tbmm", tur: "cb-tbmm", tarih: "1980-03-25",
      secilen: null, turSayisi: null,
      not: "Adaysızlık nedeniyle 25 Mart 1980'e ertelenen seçim süreci 100'den fazla turda sonuçsuz sürdü; 12 Eylül 1980 darbesiyle TBMM'nin kapatılmasıyla kendiliğinden sona erdi; Cumhuriyet Senatosu Başkanı İhsan Sabri Çağlayangil darbeye kadar cumhurbaşkanlığına vekalet etti." },

    // --- 12 Eylül 1980 kabı (bkz. veri/partiler.js DONEMLER[3].kesinti.yonetim) ---

    // kaynak: araclar/kaynak-defteri.md#1982-11-referandum
    { id: "1982-11-referandum", tur: "referandum", tarih: "1982-11-07",
      konu: "1982 Anayasası'nın kabulü (cumhurbaşkanlığı seçimiyle birleştirildi)",
      kayitli: 20690914, kullanilan: 18885488, gecerli: 18841990,
      evet: 17215559, hayir: 1626431, karar: "kabul",
      tutumlar: [],
      not: "Anayasanın geçici 1. maddesi gereği, referandumun kabulüyle tek aday Kenan Evren de cumhurbaşkanı seçilmiş sayıldı; bütün partiler zaten 16 Ekim 1981'de kapatıldığından resmî parti tutumu yoktu." },

    // --- dönem 4 (1983 – 1990) ---

    // kaynak: araclar/kaynak-defteri.md#1983-11-genel
    { id: "1983-11-genel", tur: "genel", tarih: "1983-11-06", tekParti: false,
      meclis: 399, kayitli: 19767366, kullanilan: 18238362, gecerli: 17351510, baraj: 10,
      sonuc: [ { parti: "anap", oy: 7833148, sandalye: 211 }, { parti: "hp83", oy: 5285804, sandalye: 117 }, { parti: "mdp", oy: 4036970, sandalye: 71 }, { ad: "Bağımsız", oy: 195588, sandalye: 0 } ],
      not: "12 Eylül sonrası ilk genel seçim; yalnızca askeri yönetimin izin verdiği 3 parti (ANAP, HP, MDP) katılabildi." },

    // kaynak: araclar/kaynak-defteri.md#1984-03-yerel
    { id: "1984-03-yerel", tur: "yerel", tarih: "1984-03-25",
      olcu: "belediye-meclisi",
      kayitli: 12341328, kullanilan: 10559948, gecerli: 9873876,
      sonuc: [ { parti: "anap", oy: 4295246 }, { parti: "sodep", oy: 2521392 }, { parti: "dyp", oy: 1189978 }, { parti: "hp83", oy: 803795 }, { parti: "mdp", oy: 561038 }, { parti: "rp", oy: 384201 }, { ad: "Bağımsız", oy: 118226 } ],
      belediye: { yapilan: 1701, sonuc: [ { parti: "anap", sayi: 883 }, { parti: "sodep", sayi: 284 }, { parti: "dyp", sayi: 238 }, { parti: "mdp", sayi: 106 }, { parti: "hp83", sayi: 94 }, { parti: "rp", sayi: 16 }, { ad: "Bağımsız", sayi: 80 } ],
        buyuksehir: [ { parti: "anap", sayi: 3 } ],
        not: "YSK'nın Resmî Gazete'deki kesin sonuç ilanı (seçim günü tutanakları)." },
      buyuksehir: { istanbul: { parti: "anap" }, ankara: { parti: "anap" }, izmir: { parti: "anap" } },
      not: "12 Eylül sonrası ilk yerel seçim. Ülke geneli sayılar yalnızca YSK'nın Resmî Gazete'de yayımlanan kararına dayanır; bağımsız ikinci bir kaynak bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1986-09-ara
    { id: "1986-09-ara", tur: "ara", tarih: "1986-09-28",
      bolge: "10 il", sandalyeSayisi: 11,
      sonuc: [ { parti: "anap", sandalye: 6 }, { parti: "dyp", sandalye: 4 }, { parti: "shp", sandalye: 1 } ],
      not: "10 ilde 11 seçim çevresinde yapıldı (Manisa'da iki çevre); SHP'nin tek sandalyesini İzmir'de Erdal İnönü kazandı." },

    // kaynak: araclar/kaynak-defteri.md#1987-09-referandum
    { id: "1987-09-referandum", tur: "referandum", tarih: "1987-09-06",
      konu: "1982 Anayasası'nın geçici 4. maddesiyle getirilen, eski parti liderlerine yönelik 5-10 yıllık siyasi yasakların kaldırılması",
      kayitli: 26095630, kullanilan: 24436821, gecerli: 23347856,
      evet: 11711461, hayir: 11636395, karar: "kabul",
      tutumlar: [ { parti: "dyp", tutum: "evet" }, { parti: "dsp", tutum: "evet" }, { parti: "mcp", tutum: "evet" }, { parti: "rp", tutum: "evet" }, { parti: "shp", tutum: "evet" }, { parti: "anap", tutum: "hayir" } ],
      not: "Sonuç yalnızca 75.066 oy farkla 'evet' çıktı; yasaklı eski liderlerin (Demirel, Ecevit, Türkeş, Erbakan) partileri 'evet', iktidardaki ANAP 'turuncu-hayır' kampanyası yürüttü. Sayılar il ve gümrük kapısı oylarının toplamıdır." },

    // kaynak: araclar/kaynak-defteri.md#1987-11-genel
    { id: "1987-11-genel", tur: "genel", tarih: "1987-11-29", tekParti: false,
      meclis: 450, kayitli: 26376926, kullanilan: 24603541, gecerli: 23971629, baraj: 10,
      sonuc: [ { parti: "anap", oy: 8704335, sandalye: 292 }, { parti: "shp", oy: 5931000, sandalye: 99 }, { parti: "dyp", oy: 4587062, sandalye: 59 }, { parti: "dsp", oy: 2044576, sandalye: 0 }, { parti: "rp", oy: 1717425, sandalye: 0 }, { parti: "mcp", oy: 701538, sandalye: 0 }, { ad: "Diğer", partiSayisi: 1, oy: 196272, sandalye: 0 }, { ad: "Bağımsız", oy: 89421, sandalye: 0 } ],
      not: "6 Eylül 1987 referandumunun akşamı Özal'ın açıkladığı erken seçim kararıyla yapıldı; ANAP çoğunluğunu korudu." },

    // kaynak: araclar/kaynak-defteri.md#1988-09-referandum
    { id: "1988-09-referandum", tur: "referandum", tarih: "1988-09-25",
      konu: "Yerel seçim tarihinin bir yıl öne alınması (Anayasa'nın 127. maddesinde değişiklik)",
      kayitli: 26739227, kullanilan: 23750873, gecerli: 22956878,
      evet: 8034933, hayir: 14921945, karar: "ret",
      tutumlar: [ { parti: "anap", tutum: "evet" }, { parti: "dyp", tutum: "hayir" }, { parti: "shp", tutum: "hayir" } ],
      not: "Katılım %88,8 — Türkiye'de sonucu 'hayır' çıkan tek referandum. Sayılar 67 ilin ve 4 gümrük kapısının toplamıdır." },

    // kaynak: araclar/kaynak-defteri.md#1989-03-yerel
    { id: "1989-03-yerel", tur: "yerel", tarih: "1989-03-26",
      olcu: "belediye-meclisi",
      kayitli: 18090657, kullanilan: 14107146, gecerli: 13237086,
      sonuc: [ { parti: "shp", oy: 4389132 }, { parti: "dyp", oy: 3137522 }, { parti: "anap", oy: 3111259 }, { parti: "rp", oy: 1181950 }, { parti: "dsp", oy: 890164 }, { parti: "mcp", oy: 436951 }, { parti: "idp", oy: 69195 }, { ad: "Bağımsız", oy: 20913 } ],
      belediye: { yapilan: 1976, sonuc: [ { parti: "shp", sayi: 650 }, { parti: "anap", sayi: 565 }, { parti: "dyp", sayi: 552 }, { parti: "rp", sayi: 74 }, { parti: "dsp", sayi: 38 }, { parti: "mcp", sayi: 24 }, { parti: "idp", sayi: 6 }, { ad: "Bağımsız", sayi: 63 } ],
        buyuksehir: [ { parti: "shp", sayi: 6 }, { parti: "dyp", sayi: 1 }, { parti: "rp", sayi: 1 } ],
        not: "YSK'nın Resmî Gazete'deki kesin sonuç ilanı (seçim günü tutanakları). 1.976 başkanlık seçiminin 4'ü sonuçlanmadı (Bitlis ve Pervari'de eşit oy, iki beldede iptal)." },
      buyuksehir: { istanbul: { parti: "shp" }, ankara: { parti: "shp" }, izmir: { parti: "shp" } },
      not: "ANAP'ın 1984'e göre oy kaybettiği, SHP'nin İstanbul, Ankara ve İzmir'i kazandığı seçim. Ülke geneli sayılar yalnızca YSK'nın Resmî Gazete'de yayımlanan kararına dayanır; bağımsız ikinci bir kaynak bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1989-10-cb-tbmm
    { id: "1989-10-cb-tbmm", tur: "cb-tbmm", tarih: "1989-10-31",
      secilen: "Turgut Özal", turSayisi: 3,
      not: "1. tur (20 Ekim, 247 oy) ve 2. tur (24 Ekim, 256 oy) 2/3 çoğunluğu (300) sağlayamadı; 3. turda (31 Ekim) salt çoğunlukla (263 oy) seçildi. SHP ve DYP oylamalara katılmadı." },

    // --- dönem 5 (1991 – 2000) ---

    // kaynak: araclar/kaynak-defteri.md#1991-10-genel
    { id: "1991-10-genel", tur: "genel", tarih: "1991-10-20", tekParti: false,
      meclis: 450, kayitli: 29979123, kullanilan: 25157089, gecerli: 24416666, baraj: 10,
      sonuc: [ { parti: "dyp", oy: 6600726, sandalye: 178 }, { parti: "anap", oy: 5862623, sandalye: 115 }, { parti: "shp", oy: 5066571, sandalye: 88 }, { parti: "rp", oy: 4121355, sandalye: 62 }, { parti: "dsp", oy: 2624301, sandalye: 7 }, { ad: "Diğer", partiSayisi: 1, oy: 108369, sandalye: 0 }, { ad: "Bağımsız", oy: 32721, sandalye: 0 } ],
      not: "RP listesinde MÇP ve IDP adaylarının da yer aldığı bu seçimde hiçbir parti tek başına hükümet kuracak çoğunluğu sağlayamadı; sayılar il ve gümrük kapısı oylarının toplamıdır." },

    // kaynak: araclar/kaynak-defteri.md#1993-05-cb-tbmm
    { id: "1993-05-cb-tbmm", tur: "cb-tbmm", tarih: "1993-05-16",
      secilen: "Süleyman Demirel", turSayisi: 3,
      not: "İlk iki turda Anayasa'nın 102. maddesindeki 2/3 çoğunluk sağlanamadı; 431 üyenin katıldığı üçüncü turda Demirel 244 oyla 9. Cumhurbaşkanı seçildi." },

    // kaynak: araclar/kaynak-defteri.md#1994-03-yerel
    { id: "1994-03-yerel", tur: "yerel", tarih: "1994-03-27",
      olcu: "belediye-meclisi",
      kayitli: 23366089, kullanilan: 21102428, gecerli: 19734355,
      sonuc: [ { parti: "anap", oy: 4482333 }, { parti: "rp", oy: 3776425 }, { parti: "dyp", oy: 3728521 }, { parti: "shp", oy: 3316716 }, { parti: "dsp", oy: 1649104 }, { parti: "mhp93", oy: 1508713 }, { parti: "chp92", oy: 851232 }, { parti: "bbp", oy: 211136 }, { parti: "dp92", oy: 65022 }, { parti: "ydp", oy: 35754 }, { parti: "mp92", oy: 34197 }, { parti: "ip92", oy: 32559 }, { parti: "sbp91", oy: 21011 }, { ad: "Bağımsız", oy: 21632 } ],
      belediye: { yapilan: 2695, sonuc: [ { parti: "dyp", sayi: 882 }, { parti: "anap", sayi: 789 }, { parti: "shp", sayi: 432 }, { parti: "rp", sayi: 324 }, { parti: "mhp93", sayi: 118 }, { parti: "chp92", sayi: 63 }, { parti: "dsp", sayi: 23 }, { parti: "bbp", sayi: 11 }, { parti: "dp92", sayi: 6 }, { ad: "Bağımsız", sayi: 44 } ],
        buyuksehir: [ { parti: "rp", sayi: 6 }, { parti: "anap", sayi: 3 }, { parti: "dyp", sayi: 3 }, { parti: "shp", sayi: 2 }, { parti: "chp92", sayi: 1 } ],
        not: "YSK'nın Resmî Gazete'deki kesin sonuç ilanı; ilan tarihinden sonraki iptal ve değişiklikler dahil değil. 2.695 başkanlık seçiminin 3'ü sonuçlanmadı." },
      buyuksehir: { istanbul: { parti: "rp" }, ankara: { parti: "rp" }, izmir: { parti: "dyp" } },
      not: "Refah Partisi'nin İstanbul ve Ankara büyükşehir belediyelerini kazandığı seçim. Ülke geneli sayılar yalnızca YSK'nın Resmî Gazete'de yayımlanan kararına dayanır (seçim günü tutanaklarına göre; sonraki iptal ve yenilemeler dahil değil); bağımsız ikinci bir kaynak bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1995-12-genel
    { id: "1995-12-genel", tur: "genel", tarih: "1995-12-24", tekParti: false,
      meclis: 550, kayitli: 34155981, kullanilan: 29101469, gecerli: 28126993, baraj: 10,
      sonuc: [ { parti: "rp", oy: 6012450, sandalye: 158 }, { parti: "dyp", oy: 5396009, sandalye: 135 }, { parti: "anap", oy: 5527288, sandalye: 132 }, { parti: "dsp", oy: 4118025, sandalye: 76 }, { parti: "chp92", oy: 3011076, sandalye: 49 }, { parti: "mhp93", oy: 2301343, sandalye: 0 }, { parti: "hadep", oy: 1171623, sandalye: 0 }, { parti: "ydh", oy: 133889, sandalye: 0 }, { parti: "ip92", oy: 61428, sandalye: 0 }, { ad: "Diğer", partiSayisi: 3, oy: 259967, sandalye: 0 }, { ad: "Bağımsız", oy: 133895, sandalye: 0 } ],
      not: "Bu seçimden önce kontenjan usulü ve seçim çevresi barajı kaldırılıp %10 ülke barajlı d'Hondt sistemine geçildi, milletvekili sayısı 450'den 550'ye çıkarıldı ve seçmen yaşı 18'e indirildi." },

    // kaynak: araclar/kaynak-defteri.md#1999-04-genel
    { id: "1999-04-genel", tur: "genel", tarih: "1999-04-18", tekParti: false,
      meclis: 550, kayitli: 37495217, kullanilan: 32656070, gecerli: 31184496, baraj: 10,
      sonuc: [ { parti: "dsp", oy: 6919670, sandalye: 136 }, { parti: "mhp93", oy: 5606583, sandalye: 129 }, { parti: "fp", oy: 4805381, sandalye: 111 }, { parti: "anap", oy: 4122929, sandalye: 86 }, { parti: "dyp", oy: 3745417, sandalye: 85 }, { parti: "chp92", oy: 2716094, sandalye: 0 }, { parti: "hadep", oy: 1482196, sandalye: 0 }, { parti: "bbp", oy: 456353, sandalye: 0 }, { parti: "odp", oy: 248553, sandalye: 0 }, { parti: "dtp97", oy: 179871, sandalye: 0 }, { parti: "ldp", oy: 127174, sandalye: 0 }, { parti: "dp92", oy: 92093, sandalye: 0 }, { parti: "ip92", oy: 57607, sandalye: 0 }, { parti: "emep", oy: 51756, sandalye: 0 }, { ad: "Diğer", partiSayisi: 6, oy: 302554, sandalye: 0 }, { ad: "Bağımsız", oy: 270265, sandalye: 3 } ],
      not: "Genel seçim ile mahalli idareler seçimi aynı gün yapıldı; CHP %10'luk ülke barajını aşamayarak meclis dışında kaldı." },

    // kaynak: araclar/kaynak-defteri.md#1999-04-yerel
    { id: "1999-04-yerel", tur: "yerel", tarih: "1999-04-18",
      olcu: "belediye-meclisi",
      kayitli: 28889819, kullanilan: 24527241, gecerli: 23164822,
      sonuc: [ { parti: "fp", oy: 4225409 }, { parti: "anap", oy: 3956557 }, { parti: "dsp", oy: 3755293 }, { parti: "mhp93", oy: 3636853 }, { parti: "chp92", oy: 3074207 }, { parti: "dyp", oy: 2896847 }, { parti: "hadep", oy: 800599 }, { parti: "bbp", oy: 302651 }, { parti: "dtp97", oy: 159864 }, { parti: "odp", oy: 152030 }, { parti: "mp92", oy: 33338 }, { parti: "baris96", oy: 38467 }, { parti: "dp92", oy: 32781 }, { parti: "emep", oy: 22398 }, { parti: "ldp", oy: 20203 }, { parti: "ip92", oy: 20597 }, { parti: "ydp", oy: 13523 }, { parti: "dbp96", oy: 3474 }, { parti: "depar", oy: 3110 }, { parti: "sip93", oy: 392 }, { parti: "dehap", oy: 115 }, { ad: "Bağımsız", oy: 16114 } ],
      belediye: { yapilan: 3200, sonuc: [ { parti: "anap", sayi: 778 }, { parti: "dyp", sayi: 737 }, { parti: "mhp93", sayi: 499 }, { parti: "fp", sayi: 484 }, { parti: "chp92", sayi: 366 }, { parti: "dsp", sayi: 184 }, { parti: "hadep", sayi: 36 }, { parti: "bbp", sayi: 25 }, { parti: "dtp97", sayi: 14 }, { parti: "baris96", sayi: 6 }, { parti: "dp92", sayi: 4 }, { parti: "odp", sayi: 2 }, { parti: "dbp96", sayi: 1 }, { ad: "Bağımsız", sayi: 52 } ],
        buyuksehir: [ { parti: "dsp", sayi: 4 }, { parti: "fp", sayi: 4 }, { parti: "chp92", sayi: 3 }, { parti: "anap", sayi: 2 }, { parti: "hadep", sayi: 1 }, { parti: "mhp93", sayi: 1 } ],
        not: "YSK'nın Resmî Gazete'deki kesin sonuç ilanı (seçim günü tutanakları). 3.200 başkanlık seçiminden 12 beldenin seçimi iptal edildi." },
      buyuksehir: { istanbul: { parti: "fp" }, ankara: { parti: "fp" }, izmir: { parti: "dsp" } },
      not: "Genel seçimle aynı gün yapıldı. Ülke geneli sayılar yalnızca YSK'nın Resmî Gazete'de yayımlanan kararına dayanır; bağımsız ikinci bir kaynak bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#2000-05-cb-tbmm
    { id: "2000-05-cb-tbmm", tur: "cb-tbmm", tarih: "2000-05-05",
      secilen: "Ahmet Necdet Sezer", turSayisi: 3,
      not: "Anayasa Mahkemesi Başkanı olan Sezer, 533 üyenin katıldığı üçüncü turda 330 oyla 10. Cumhurbaşkanı seçildi; andiçme töreni 16 Mayıs 2000'de yapıldı." },

    // --- dönem 6 (2001 – 2015) ---

    // kaynak: araclar/kaynak-defteri.md#2002-11-genel
    { id: "2002-11-genel", tur: "genel", tarih: "2002-11-03", tekParti: false,
      meclis: 550, kayitli: 41407027, kullanilan: 32768161, gecerli: 31528783, baraj: 10,
      sonuc: [ { parti: "akp", oy: 10808229, sandalye: 363 }, { parti: "chp92", oy: 6113352, sandalye: 178 }, { parti: "dyp", oy: 3008942, sandalye: 0 }, { parti: "mhp93", oy: 2635787, sandalye: 0 }, { parti: "genc", oy: 2285598, sandalye: 0 }, { parti: "dehap", oy: 1960660, sandalye: 0 }, { parti: "anap", oy: 1618465, sandalye: 0 }, { parti: "sp", oy: 785489, sandalye: 0 }, { parti: "dsp", oy: 384009, sandalye: 0 }, { parti: "ytp02", oy: 363869, sandalye: 0 }, { parti: "bbp", oy: 322093, sandalye: 0 }, { parti: "ip92", oy: 159843, sandalye: 0 }, { parti: "odp", oy: 106023, sandalye: 0 }, { parti: "ldp", oy: 89331, sandalye: 0 }, { ad: "Diğer", partiSayisi: 4, oy: 572842, sandalye: 0 }, { ad: "Bağımsız", oy: 314251, sandalye: 9 } ],
      not: "Seçime katılan 18 partiden yalnızca ikisi %10'luk ülke barajını aşabildi ve AK Parti ilk seçiminde tek başına iktidar oldu; sayılar il ve gümrük kapısı oylarının toplamıdır." },

    // kaynak: araclar/kaynak-defteri.md#2003-03-ara
    { id: "2003-03-ara", tur: "ara", tarih: "2003-03-09",
      bolge: "Siirt", sandalyeSayisi: 3,
      sonuc: [ { parti: "akp", sandalye: 3 } ],
      not: "2002 Siirt seçiminin YSK tarafından iptali üzerine yapılan yenileme seçimidir; seçilenler arasında Recep Tayyip Erdoğan da vardı." },

    // kaynak: araclar/kaynak-defteri.md#2004-03-yerel
    { id: "2004-03-yerel", tur: "yerel", tarih: "2004-03-28",
      olcu: "belediye-meclisi",
      kayitli: 34213138, kullanilan: 25067950, gecerli: 23893656,
      sonuc: [ { parti: "akp", oy: 9635145 }, { parti: "chp92", oy: 4912313 }, { parti: "mhp93", oy: 2500601 }, { parti: "dyp", oy: 2286020 }, { parti: "shp02", oy: 1204431 }, { parti: "sp", oy: 1111017 }, { parti: "anap", oy: 682264 }, { parti: "genc", oy: 607847 }, { parti: "dsp", oy: 484555 }, { parti: "bbp", oy: 179090 }, { parti: "ytp02", oy: 56912 }, { parti: "ip92", oy: 33770 }, { parti: "odp", oy: 29269 }, { parti: "emep", oy: 28011 }, { parti: "dp92", oy: 3742 }, { parti: "ldp", oy: 391 }, { ad: "Diğer", partiSayisi: 4, oy: 98310 }, { ad: "Bağımsız", oy: 39968 } ],
      belediye: { yapilan: 3193, sonuc: [ { parti: "akp", sayi: 1750 }, { parti: "chp92", sayi: 467 }, { parti: "dyp", sayi: 388 }, { parti: "mhp93", sayi: 247 }, { parti: "anap", sayi: 100 }, { parti: "shp02", sayi: 64 }, { parti: "sp", sayi: 63 }, { parti: "dsp", sayi: 30 }, { parti: "genc", sayi: 13 }, { parti: "bbp", sayi: 10 }, { parti: "ytp02", sayi: 5 }, { parti: "odp", sayi: 2 }, { parti: "btp", sayi: 1 }, { parti: "dp92", sayi: 1 }, { ad: "Bağımsız", sayi: 52 } ],
        buyuksehir: [ { parti: "akp", sayi: 12 }, { parti: "chp92", sayi: 2 }, { parti: "shp02", sayi: 1 }, { parti: "dsp", sayi: 1 } ],
        not: "YSK'nın Resmî Gazete'deki kesin sonuç ilanı; iptal edilen 15 belde ve itirazı süren 1 belde dahil değil." },
      buyuksehir: { istanbul: { parti: "akp" }, ankara: { parti: "akp" }, izmir: { parti: "chp92" } },
      not: "AK Parti'nin ilk yerel seçiminde 3.193 belediye başkanlığı ve 34.477 belediye meclisi üyeliği için oy verildi. Ülke geneli sayılar yalnızca YSK'nın resmî ilanına dayanır; bağımsız ikinci bir kaynak bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#2007-04-cb-tbmm
    { id: "2007-04-cb-tbmm", tur: "cb-tbmm", tarih: "2007-04-27",
      secilen: null, turSayisi: 1,
      not: "361 üyenin katıldığı ilk turda Abdullah Gül 357 oy aldı ama Anayasa Mahkemesi 1 Mayıs 2007'de bu birleşimin toplantı yeter sayısı kararını iptal edince 6 Mayıs'ta 367 nisabı sağlanamadı ve süreç sonuçsuz kaldı." },

    // kaynak: araclar/kaynak-defteri.md#2007-07-genel
    { id: "2007-07-genel", tur: "genel", tarih: "2007-07-22", tekParti: false,
      meclis: 550, kayitli: 42799303, kullanilan: 36056293, gecerli: 35049691, baraj: 10,
      sonuc: [ { parti: "akp", oy: 16327291, sandalye: 341 }, { parti: "chp92", oy: 7317808, sandalye: 112 }, { parti: "mhp93", oy: 5001869, sandalye: 71 }, { parti: "dp07", oy: 1898873, sandalye: 0 }, { parti: "genc", oy: 1064871, sandalye: 0 }, { parti: "sp", oy: 820289, sandalye: 0 }, { parti: "ip92", oy: 128148, sandalye: 0 }, { parti: "odp", oy: 52055, sandalye: 0 }, { parti: "ldp", oy: 35364, sandalye: 0 }, { parti: "emep", oy: 26292, sandalye: 0 }, { ad: "Diğer", partiSayisi: 4, oy: 541345, sandalye: 0 }, { ad: "Bağımsız", oy: 1835486, sandalye: 26 } ],
      not: "891 sayılı TBMM kararıyla 22 Temmuz 2007'ye alınan bu yenileme seçimine DTP ile BBP parti olarak girmeyip destekledikleri bağımsız adaylarla meclise girdi; sayılar il ve gümrük kapısı oylarının toplamıdır." },

    // kaynak: araclar/kaynak-defteri.md#2007-08-cb-tbmm
    { id: "2007-08-cb-tbmm", tur: "cb-tbmm", tarih: "2007-08-28",
      secilen: "Abdullah Gül", turSayisi: 3,
      not: "Yeni seçilen 23. Dönem Meclisi'nde 448 üyenin katıldığı üçüncü turda Gül 339 oyla 11. Cumhurbaşkanı seçildi." },

    // kaynak: araclar/kaynak-defteri.md#2007-10-referandum
    { id: "2007-10-referandum", tur: "referandum", tarih: "2007-10-21",
      konu: "5678 sayılı Kanunla Anayasa'da yapılan ve cumhurbaşkanının halk tarafından seçilmesini, milletvekili seçim döneminin beş yıldan dört yıla inmesini öngören değişiklikler.",
      kayitli: 42690252, kullanilan: 28819319, gecerli: 28167661,
      evet: 19422714, hayir: 8744947, karar: "kabul",
      tutumlar: [ { parti: "chp92", tutum: "hayir" } ],
      not: "Kayıtlı seçmen ve oy sayıları gümrük kapılarında kullanılan oyları da içeriyor. Partilerin tutumlarından yalnızca iki bağımsız kaynakla doğrulanabilen listelenmiştir." },

    // kaynak: araclar/kaynak-defteri.md#2009-03-yerel
    { id: "2009-03-yerel", tur: "yerel", tarih: "2009-03-29",
      olcu: "belediye-meclisi",
      kayitli: 39787986, kullanilan: 33447257, gecerli: 32072363,
      sonuc: [ { parti: "akp", oy: 12237325 }, { parti: "chp92", oy: 7966710 }, { parti: "mhp93", oy: 5336695 }, { parti: "sp", oy: 1807745 }, { parti: "dtp", oy: 1687733 }, { parti: "dp07", oy: 1181074 }, { parti: "dsp", oy: 945722 }, { parti: "bbp", oy: 508055 }, { parti: "anap", oy: 202976 }, { parti: "odp", oy: 25557 }, { parti: "emep", oy: 21100 }, { parti: "ldp", oy: 2451 }, { parti: "ip92", oy: 2258 }, { parti: "bdp", oy: 203 }, { ad: "Diğer", partiSayisi: 5, oy: 103126 }, { ad: "Bağımsız", oy: 43633 } ],
      belediye: { yapilan: 2903, sonuc: [ { parti: "akp", sayi: 1442 }, { parti: "chp92", sayi: 503 }, { parti: "mhp93", sayi: 483 }, { parti: "dp07", sayi: 148 }, { parti: "dtp", sayi: 96 }, { parti: "sp", sayi: 80 }, { parti: "dsp", sayi: 60 }, { parti: "bbp", sayi: 20 }, { parti: "anap", sayi: 16 }, { parti: "odp", sayi: 4 }, { parti: "btp", sayi: 4 }, { parti: "emep", sayi: 2 }, { ad: "Bağımsız", sayi: 45 } ],
        buyuksehir: [ { parti: "akp", sayi: 10 }, { parti: "chp92", sayi: 3 }, { parti: "mhp93", sayi: 1 }, { parti: "dsp", sayi: 1 }, { parti: "dtp", sayi: 1 } ],
        not: "YSK'nın Resmî Gazete'deki kesin sonuç ilanı; iptal edilip 7 Haziran 2009'da yenilenen 28 belediye dahil değil." },
      buyuksehir: { istanbul: { parti: "akp" }, ankara: { parti: "akp" }, izmir: { parti: "chp92" } },
      not: "32.392 belediye meclisi üyeliği için oy verildi. Ülke geneli sayılar yalnızca YSK'nın resmî ilanına dayanır; bağımsız ikinci bir kaynak bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#2010-09-referandum
    { id: "2010-09-referandum", tur: "referandum", tarih: "2010-09-12",
      konu: "7 Mayıs 2010 tarihli 5982 sayılı Kanunla Türkiye Cumhuriyeti Anayasası'nın bazı maddelerinde yapılan değişiklikler.",
      kayitli: 52051828, kullanilan: 38369099, gecerli: 37644037,
      evet: 21787244, hayir: 15856793, karar: "kabul",
      tutumlar: [ { parti: "akp", tutum: "evet" }, { parti: "chp92", tutum: "hayir" }, { parti: "mhp93", tutum: "hayir" }, { parti: "bdp", tutum: "boykot" } ],
      not: "Sayılara gümrük kapıları ve ceza infaz kurumlarında kullanılan oylar dahildir; kayıtlı seçmen sayısı yalnızca gümrük kapılarında oy kullanabilen 2.556.335 yurt dışı seçmeni de içeriyor." },

    // kaynak: araclar/kaynak-defteri.md#2011-06-genel
    { id: "2011-06-genel", tur: "genel", tarih: "2011-06-12", tekParti: false,
      meclis: 550, kayitli: 52806322, kullanilan: 43914948, gecerli: 42941763, baraj: 10,
      sonuc: [ { parti: "akp", oy: 21399082, sandalye: 327 }, { parti: "chp92", oy: 11155972, sandalye: 135 }, { parti: "mhp93", oy: 5585513, sandalye: 53 }, { parti: "sp", oy: 543454, sandalye: 0 }, { parti: "has", oy: 329723, sandalye: 0 }, { parti: "bbp", oy: 323251, sandalye: 0 }, { parti: "dp07", oy: 279480, sandalye: 0 }, { parti: "dsp", oy: 108089, sandalye: 0 }, { parti: "emep", oy: 32128, sandalye: 0 }, { parti: "ldp", oy: 15222, sandalye: 0 }, { ad: "Diğer", partiSayisi: 5, oy: 349932, sandalye: 0 }, { ad: "Bağımsız", oy: 2819917, sandalye: 35 } ],
      not: "Parti olarak seçime girmeyen BDP'nin desteklediği bağımsız adaylar meclise girdi ve AK Parti üst üste üçüncü kez tek başına iktidar oldu; sayılar il ve gümrük kapısı oylarının toplamıdır." },

    // kaynak: araclar/kaynak-defteri.md#2014-03-yerel
    { id: "2014-03-yerel", tur: "yerel", tarih: "2014-03-30",
      olcu: "belediye-meclisi",
      kayitli: 48843157, kullanilan: 43543717, gecerli: 41527387,
      sonuc: [ { parti: "akp", oy: 17802976 }, { parti: "chp92", oy: 10938262 }, { parti: "mhp93", oy: 7399119 }, { parti: "bdp", oy: 1729297 }, { parti: "sp", oy: 1180322 }, { parti: "hdp", oy: 881830 }, { parti: "bbp", oy: 628729 }, { parti: "dp07", oy: 287209 }, { parti: "dsp", oy: 144337 }, { parti: "ip92", oy: 100021 }, { parti: "odp", oy: 45204 }, { parti: "ldp", oy: 9122 }, { parti: "emep", oy: 489 }, { parti: "hudapar", oy: 87726 }, { ad: "Diğer", partiSayisi: 8, oy: 243150 }, { ad: "Bağımsız", oy: 49594 } ],
      belediye: { yapilan: 1351, sonuc: [ { parti: "akp", sayi: 799 }, { parti: "chp92", sayi: 226 }, { parti: "mhp93", sayi: 166 }, { parti: "bdp", sayi: 97 }, { parti: "sp", sayi: 27 }, { parti: "dp07", sayi: 14 }, { parti: "dsp", sayi: 6 }, { parti: "bbp", sayi: 6 }, { parti: "tkp01", sayi: 1 }, { parti: "odp", sayi: 1 }, { parti: "mp92", sayi: 1 }, { parti: "hakpar", sayi: 1 }, { parti: "ldp", sayi: 1 }, { ad: "Bağımsız", sayi: 5 } ],
        buyuksehir: [ { parti: "akp", sayi: 18 }, { parti: "chp92", sayi: 6 }, { parti: "mhp93", sayi: 3 }, { parti: "bdp", sayi: 2 }, { ad: "Bağımsız", sayi: 1 } ],
        not: "YSK'nın Resmî Gazete'deki kesin sonuç ilanı; iptal edilen 13 belediye dahil değil. YSK'nın sonraki bir tablosunda AK Parti 800, DSP 5 yazıyor; burada ilandaki sayılar esas alındı." },
      buyuksehir: { istanbul: { parti: "akp" }, ankara: { parti: "akp" }, izmir: { parti: "chp92" } },
      not: "Büyükşehir belediye başkanlığı seçimi bu kez 16 yerine 30 ilde yapıldı ve 20.500 belediye meclisi üyeliği için oy verildi. Ülke geneli sayılar yalnızca YSK'nın resmî ilanına dayanır; bağımsız ikinci bir kaynak bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#2014-08-cb-halk
    { id: "2014-08-cb-halk", tur: "cb-halk", tarih: "2014-08-10",
      turlar: [ { tarih: "2014-08-10", kayitli: 55692841, kullanilan: 41283627, gecerli: 40545911,
        adaylar: [ { ad: "Recep Tayyip Erdoğan", parti: "akp", oy: 21000143 }, { ad: "Ekmeleddin Mehmet İhsanoğlu", destek: "CHP ve MHP'nin ortak adayı", oy: 15587720 }, { ad: "Selahattin Demirtaş", destek: "HDP adayı", oy: 3958048 } ] } ],
      secilen: "Recep Tayyip Erdoğan",
      not: "Cumhurbaşkanının ilk kez halk tarafından seçildiği bu seçimde Erdoğan geçerli oyların salt çoğunluğunu ilk turda aldığı için 24 Ağustos'a hazırlanan ikinci tura gerek kalmadı." },

    // kaynak: araclar/kaynak-defteri.md#2015-06-genel
    { id: "2015-06-genel", tur: "genel", tarih: "2015-06-07", tekParti: false,
      meclis: 550, kayitli: 56608817, kullanilan: 47507467, gecerli: 46163243, baraj: 10,
      sonuc: [ { parti: "akp", oy: 18867411, sandalye: 258 }, { parti: "chp92", oy: 11518139, sandalye: 132 }, { parti: "mhp93", oy: 7520006, sandalye: 80 }, { parti: "hdp", oy: 6058489, sandalye: 80 }, { parti: "sp", oy: 949178, sandalye: 0 }, { parti: "vatan", oy: 161674, sandalye: 0 }, { parti: "dsp", oy: 85810, sandalye: 0 }, { parti: "dp07", oy: 75784, sandalye: 0 }, { parti: "anadolu", oy: 27688, sandalye: 0 }, { parti: "ldp", oy: 26500, sandalye: 0 }, { ad: "Diğer", partiSayisi: 10, oy: 384338, sandalye: 0 }, { ad: "Bağımsız", oy: 488226, sandalye: 0 } ],
      not: "HDP'nin ilk kez parti olarak girip barajı aştığı bu seçimde hiçbir parti tek başına hükümet kuracak çoğunluğu sağlayamadı; sayılar yurt içi, yurt dışı ve gümrük sandıklarının toplamıdır." },

    // kaynak: araclar/kaynak-defteri.md#2015-11-genel
    { id: "2015-11-genel", tur: "genel", tarih: "2015-11-01", tekParti: false,
      meclis: 550, kayitli: 56949009, kullanilan: 48537695, gecerli: 47840231, baraj: 10,
      sonuc: [ { parti: "akp", oy: 23681926, sandalye: 317 }, { parti: "chp92", oy: 12111812, sandalye: 134 }, { parti: "hdp", oy: 5148085, sandalye: 59 }, { parti: "mhp93", oy: 5694136, sandalye: 40 }, { parti: "sp", oy: 325978, sandalye: 0 }, { parti: "bbp", oy: 253204, sandalye: 0 }, { parti: "vatan", oy: 118803, sandalye: 0 }, { parti: "dp07", oy: 69319, sandalye: 0 }, { parti: "dsp", oy: 31805, sandalye: 0 }, { parti: "ldp", oy: 26816, sandalye: 0 }, { ad: "Diğer", partiSayisi: 6, oy: 327309, sandalye: 0 }, { ad: "Bağımsız", oy: 51038, sandalye: 0 } ],
      not: "Anayasa'nın 116. maddesi uyarınca alınan yenileme kararıyla yapılan bu seçimde AK Parti yeniden tek başına iktidar oldu; sayılar yurt içi, yurt dışı ve gümrük sandıklarının toplamıdır." },

    // --- dönem 7 (2016 – 2026) ---

    // kaynak: araclar/kaynak-defteri.md#2017-04-referandum
    { id: "2017-04-referandum", tur: "referandum", tarih: "2017-04-16",
      konu: "TBMM'nin 21 Ocak 2017'de kabul ettiği 6771 sayılı Kanunla yapılan, yürütme yetkisini Cumhurbaşkanına veren ve Başbakanlık ile Bakanlar Kurulunun yetkilerini Cumhurbaşkanına devreden Anayasa değişiklikleri.",
      kayitli: 58291898, kullanilan: 49798855, gecerli: 48936604,
      evet: 25157463, hayir: 23779141, karar: "kabul",
      tutumlar: [ { parti: "akp", tutum: "evet" }, { parti: "mhp93", tutum: "evet" }, { parti: "chp92", tutum: "hayir" }, { parti: "hdp", tutum: "hayir" }, { parti: "sp", tutum: "hayir" }, { parti: "vatan", tutum: "hayir" } ],
      not: "Sayılar yurt içi, yurt dışı temsilcilik ve gümrük kapısı sandıklarının toplamıdır." },

    // kaynak: araclar/kaynak-defteri.md#2018-06-genel
    { id: "2018-06-genel", tur: "genel", tarih: "2018-06-24", tekParti: false,
      meclis: 600, kayitli: 59367469, kullanilan: 51189444, gecerli: 50137175, baraj: 10,
      sonuc: [ { parti: "akp", oy: 21338693, sandalye: 295 }, { parti: "chp92", oy: 11354190, sandalye: 146 }, { parti: "hdp", oy: 5867302, sandalye: 67 }, { parti: "mhp93", oy: 5565331, sandalye: 49 }, { parti: "iyi", oy: 4993479, sandalye: 43 }, { parti: "sp", oy: 672139, sandalye: 0 }, { parti: "vatan", oy: 114872, sandalye: 0 }, { parti: "hudapar", oy: 155539, sandalye: 0 }, { ad: "Bağımsız", oy: 75630, sandalye: 0 } ],
      ittifak: [ { ad: "Millet İttifakı", liste: "iyi", icinden: [ { parti: "dp07", sandalye: null } ] } ],
      not: "Cumhurbaşkanı seçimiyle birlikte yapılan ve milletvekili sayısının 600'e çıktığı bu seçimde AK Parti ile MHP Cumhur İttifakı, CHP, İYİ Parti ve Saadet Partisi Millet İttifakı olarak oy pusulasında yer aldı." },

    // kaynak: araclar/kaynak-defteri.md#2018-06-cb-halk
    { id: "2018-06-cb-halk", tur: "cb-halk", tarih: "2018-06-24",
      turlar: [ { tarih: "2018-06-24", kayitli: 59367469, kullanilan: 51197959, gecerli: 50068627,
        adaylar: [ { ad: "Recep Tayyip Erdoğan", destek: "AK Parti ve MHP gruplarının adayı", oy: 26330823 }, { ad: "Muharrem İnce", parti: "chp92", oy: 15340321 }, { ad: "Selahattin Demirtaş", parti: "hdp", oy: 4205794 }, { ad: "Meral Akşener", destek: "seçmenlerin yazılı teklifiyle aday", oy: 3649030 }, { ad: "Temel Karamollaoğlu", destek: "seçmenlerin yazılı teklifiyle aday", oy: 443704 }, { ad: "Doğu Perinçek", destek: "seçmenlerin yazılı teklifiyle aday", oy: 98955 } ] } ],
      secilen: "Recep Tayyip Erdoğan",
      not: "Erdoğan geçerli oyların salt çoğunluğunu ilk oylamada aldığı için ikinci oylamaya gerek kalmadı." },

    // kaynak: araclar/kaynak-defteri.md#2019-03-yerel
    { id: "2019-03-yerel", tur: "yerel", tarih: "2019-03-31",
      olcu: "belediye-meclisi",
      kayitli: 53203842, kullanilan: 44881860, gecerli: 42998754,
      sonuc: [ { parti: "akp", oy: 18299576 }, { parti: "chp92", oy: 12625346 }, { parti: "mhp93", oy: 3209416 }, { parti: "iyi", oy: 3142757 }, { parti: "hdp", oy: 2409485 }, { parti: "sp", oy: 1291757 }, { parti: "bbp", oy: 818872 }, { parti: "dsp", oy: 379689 }, { parti: "dp07", oy: 378093 }, { parti: "vatan", oy: 83091 }, { ad: "Diğer", partiSayisi: 2, oy: 240575 }, { ad: "Bağımsız", oy: 120097 } ],
      belediye: { yapilan: 1355, sonuc: [ { parti: "akp", sayi: 742 }, { parti: "chp92", sayi: 240 }, { parti: "mhp93", sayi: 233 }, { parti: "hdp", sayi: 57 }, { parti: "iyi", sayi: 24 }, { parti: "sp", sayi: 21 }, { parti: "bbp", sayi: 10 }, { parti: "dp07", sayi: 8 }, { parti: "dsp", sayi: 6 }, { parti: "tkp01", sayi: 1 }, { ad: "Bağımsız", sayi: 13 } ],
        buyuksehir: [ { parti: "akp", sayi: 15 }, { parti: "chp92", sayi: 10 }, { parti: "hdp", sayi: 3 }, { parti: "mhp93", sayi: 1 } ],
        not: "YSK'nın Resmî Gazete'deki kesin sonuç ilanı; iptal edilen 4 belediye dahil değil. İstanbul büyükşehir seçimi iptal edildiği için büyükşehir sayısı 29'dur." },
      buyuksehir: { istanbul: { parti: "chp92", dipnot: "seçim tekrarlandı" }, ankara: { parti: "chp92" }, izmir: { parti: "chp92" } },
      not: "İstanbul'da 31 Mart'ta CHP adayı Ekrem İmamoğlu önde bitirdi ve 17 Nisan'da mazbatasını aldı; İstanbul Büyükşehir Belediye Başkanlığı seçimi YSK'nın 6 Mayıs 2019 tarihli kararıyla iptal edilip 23 Haziran'da yenilendi. Ülke geneli sayılar yalnızca YSK'nın resmî ilanına dayanır; bağımsız ikinci bir kaynak bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#2019-06-yerel
    { id: "2019-06-yerel", tur: "yerel", tarih: "2019-06-23", kapsam: "İstanbul",
      buyuksehir: { istanbul: { parti: "chp92" } },
      not: "YSK'nın 31 Mart seçimini iptal etmesi üzerine yalnızca İstanbul Büyükşehir Belediye Başkanlığı için yapılan yenileme seçimidir." },

    // kaynak: araclar/kaynak-defteri.md#2023-05-genel
    { id: "2023-05-genel", tur: "genel", tarih: "2023-05-14", tekParti: false,
      meclis: 600, kayitli: 64145504, kullanilan: 55835895, gecerli: 54442588, baraj: 7,
      sonuc: [ { parti: "akp", oy: 19392462, sandalye: 268 }, { parti: "chp92", oy: 13802183, sandalye: 169 }, { parti: "yesilsol", oy: 4803922, sandalye: 61 }, { parti: "mhp93", oy: 5484820, sandalye: 50 }, { parti: "iyi", oy: 5275981, sandalye: 43 }, { parti: "yrp", oy: 1527048, sandalye: 5 }, { parti: "tip17", oy: 956057, sandalye: 4 }, { parti: "zafer", oy: 1216399, sandalye: 0 }, { parti: "bbp", oy: 530770, sandalye: 0 }, { parti: "memleket", oy: 502669, sandalye: 0 }, { parti: "vatan", oy: 52720, sandalye: 0 }, { ad: "Diğer", partiSayisi: 13, oy: 670726, sandalye: 0 }, { ad: "Bağımsız", oy: 226831, sandalye: 0 } ],
      ittifak: [ { ad: "Millet İttifakı", liste: "chp92", icinden: [ { parti: "deva", sandalye: null }, { parti: "gelecek", sandalye: null }, { parti: "sp", sandalye: null }, { parti: "dp07", sandalye: null } ] }, { ad: "AK Parti listesi", liste: "akp", icinden: [ { parti: "hudapar", sandalye: null } ] } ],
      not: "Genel barajın 7393 sayılı Kanunla %10'dan %7'ye indirildiği bu seçimde AK Parti, MHP, Yeniden Refah ve BBP Cumhur İttifakı'nda; CHP, İYİ Parti, DEVA, Gelecek, Saadet ve Demokrat Parti Millet İttifakı'nda; Yeşiller ve Sol Gelecek Partisi ile TİP Emek ve Özgürlük İttifakı'nda yer aldı." },

    // kaynak: araclar/kaynak-defteri.md#2023-05-cb-halk
    { id: "2023-05-cb-halk", tur: "cb-halk", tarih: "2023-05-14",
      turlar: [ { tarih: "2023-05-14", kayitli: 64145504, kullanilan: 55833153, gecerli: 54796049,
        adaylar: [ { ad: "Recep Tayyip Erdoğan", destek: "AK Parti ve MHP gruplarının adayı", oy: 27133849 }, { ad: "Kemal Kılıçdaroğlu", destek: "CHP ve İYİ Parti gruplarının adayı", oy: 24595178 }, { ad: "Sinan Oğan", destek: "seçmenlerin yazılı teklifiyle aday", oy: 2831239 }, { ad: "Muharrem İnce", destek: "seçmenlerin yazılı teklifiyle aday", oy: 235783 } ] },
        { tarih: "2023-05-28", kayitli: 64197454, kullanilan: 54023601, gecerli: 53339313,
        adaylar: [ { ad: "Recep Tayyip Erdoğan", destek: "AK Parti ve MHP gruplarının adayı", oy: 27834589 }, { ad: "Kemal Kılıçdaroğlu", destek: "CHP ve İYİ Parti gruplarının adayı", oy: 25504724 } ] } ],
      secilen: "Recep Tayyip Erdoğan",
      not: "Hiçbir aday ilk oylamada geçerli oyların salt çoğunluğunu sağlayamadığı için 28 Mayıs 2023'te ikinci oylama yapıldı." },

    // kaynak: araclar/kaynak-defteri.md#2024-03-yerel
    { id: "2024-03-yerel", tur: "yerel", tarih: "2024-03-31",
      olcu: "belediye-meclisi",
      kayitli: 57716975, kullanilan: 45079928, gecerli: 42848693,
      sonuc: [ { parti: "chp92", oy: 15200699 }, { parti: "akp", oy: 13874511 }, { parti: "yrp", oy: 2991882 }, { parti: "mhp93", oy: 2508414 }, { parti: "dem", oy: 2409155 }, { parti: "iyi", oy: 1967898 }, { parti: "zafer", oy: 1102172 }, { parti: "sp", oy: 561064 }, { parti: "bbp", oy: 525400 }, { parti: "tip17", oy: 261656 }, { parti: "deva", oy: 186090 }, { parti: "dp07", oy: 145134 }, { parti: "memleket", oy: 115553 }, { parti: "dsp", oy: 50925 }, { parti: "gelecek", oy: 47867 }, { parti: "vatan", oy: 37350 }, { parti: "emep", oy: 36506 }, { parti: "hudapar", oy: 274486 }, { ad: "Diğer", partiSayisi: 15, oy: 429712 }, { ad: "Bağımsız", oy: 122219 } ],
      belediye: { yapilan: 1356, sonuc: [ { parti: "akp", sayi: 526 }, { parti: "chp92", sayi: 395 }, { parti: "mhp93", sayi: 218 }, { parti: "dem", sayi: 74 }, { parti: "yrp", sayi: 62 }, { parti: "iyi", sayi: 30 }, { parti: "bbp", sayi: 20 }, { parti: "dp07", sayi: 5 }, { parti: "deva", sayi: 4 }, { parti: "sp", sayi: 4 }, { parti: "solparti", sayi: 2 }, { parti: "dsp", sayi: 2 }, { parti: "memleket", sayi: 1 }, { parti: "hudapar", sayi: 1 }, { parti: "tip17", sayi: 1 }, { ad: "Bağımsız", sayi: 11 } ],
        buyuksehir: [ { parti: "chp92", sayi: 14 }, { parti: "akp", sayi: 12 }, { parti: "dem", sayi: 3 }, { parti: "yrp", sayi: 1 } ],
        not: "YSK'nın Resmî Gazete'deki kesin sonuç ilanı; iptal edilen 7 belediye dahil değil." },
      buyuksehir: { istanbul: { parti: "chp92" }, ankara: { parti: "chp92" }, izmir: { parti: "chp92" } },
      not: "Aksaray-Güzelyurt, Kayseri-Pınarbaşı, Şanlıurfa-Hilvan ve Sivas-Yıldızeli-Güneykaya belediye meclisi seçimleri iptal edildiği için bu sayılara dahil değildir. Ülke geneli sayılar yalnızca YSK'nın resmî ilanına dayanır; bağımsız ikinci bir kaynak bulunamadı." }
  ],

  hukumetler: [
    // --- dönem 0 (1923 – 1945) ---

    // kaynak: araclar/kaynak-defteri.md#hukumet-1
    { no: 1, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1923-10-30", bitis: "1924-03-06", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-2
    { no: 2, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1924-03-06", bitis: "1924-11-22", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-3
    { no: 3, basbakan: "Ali Fethi Okyar", partiler: ["chp23"],
      baslangic: "1924-11-22", bitis: "1925-03-03", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-4
    { no: 4, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1925-03-03", bitis: "1927-11-01", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-5
    { no: 5, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1927-11-01", bitis: "1930-09-27", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-6
    { no: 6, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1930-09-27", bitis: "1931-05-04", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-7
    { no: 7, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1931-05-04", bitis: "1935-03-01", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-8
    { no: 8, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1935-03-01", bitis: "1937-11-01", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-9
    { no: 9, basbakan: "Celâl Bayar", partiler: ["chp23"],
      baslangic: "1937-11-01", bitis: "1938-11-11", tip: "tek-parti", bitisNedeni: "istifa",
      not: "Atatürk'ün ölümü üzerine istifa etti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-10
    { no: 10, basbakan: "Celâl Bayar", partiler: ["chp23"],
      baslangic: "1938-11-11", bitis: "1939-01-25", tip: "tek-parti", bitisNedeni: "istifa",
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-11
    { no: 11, basbakan: "Refik Saydam", partiler: ["chp23"],
      baslangic: "1939-01-25", bitis: "1939-04-03", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-12
    { no: 12, basbakan: "Refik Saydam", partiler: ["chp23"],
      baslangic: "1939-04-03", bitis: "1942-07-09", tip: "tek-parti", bitisNedeni: "olum",
      not: "Başbakan Refik Saydam 8 Temmuz 1942'de görev başında vefat etti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-13
    { no: 13, basbakan: "Şükrü Saraçoğlu", partiler: ["chp23"],
      baslangic: "1942-07-09", bitis: "1943-03-09", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-14
    { no: 14, basbakan: "Şükrü Saraçoğlu", partiler: ["chp23"],
      baslangic: "1943-03-09", bitis: "1946-08-07", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // --- dönem 1 (1946 – 1960) ---

    // kaynak: araclar/kaynak-defteri.md#hukumet-15
    { no: 15, basbakan: "Recep Peker", partiler: ["chp23"],
      baslangic: "1946-08-07", bitis: "1947-09-10", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-16
    { no: 16, basbakan: "Hasan Saka", partiler: ["chp23"],
      baslangic: "1947-09-10", bitis: "1948-06-10", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-17
    { no: 17, basbakan: "Hasan Saka", partiler: ["chp23"],
      baslangic: "1948-06-10", bitis: "1949-01-16", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-18
    { no: 18, basbakan: "Şemsettin Günaltay", partiler: ["chp23"],
      baslangic: "1949-01-16", bitis: "1950-05-22", tip: "tek-parti", bitisNedeni: "secim",
      not: "CHP'nin 14 Mayıs 1950 seçimini kaybetmesinin ardından iktidarı DP'ye devretti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-19
    { no: 19, basbakan: "Adnan Menderes", partiler: ["dp46"],
      baslangic: "1950-05-22", bitis: "1951-03-09", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-20
    { no: 20, basbakan: "Adnan Menderes", partiler: ["dp46"],
      baslangic: "1951-03-09", bitis: "1954-05-17", tip: "tek-parti", bitisNedeni: "secim",
      not: "2 Mayıs 1954 seçiminde DP'nin yeniden kazanmasının ardından kabine yenilendi." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-21
    { no: 21, basbakan: "Adnan Menderes", partiler: ["dp46"],
      baslangic: "1954-05-17", bitis: "1955-12-09", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-22
    { no: 22, basbakan: "Adnan Menderes", partiler: ["dp46"],
      baslangic: "1955-12-09", bitis: "1957-11-25", tip: "tek-parti", bitisNedeni: "secim",
      not: "27 Ekim 1957 seçiminin ardından kabine yenilendi." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-23
    { no: 23, basbakan: "Adnan Menderes", partiler: ["dp46"],
      baslangic: "1957-11-25", bitis: "1960-05-27", tip: "tek-parti", bitisNedeni: "darbe",
      not: "27 Mayıs 1960 askerî darbesiyle görevden uzaklaştırıldı." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-24 (27 Mayıs 1960 kabı)
    { no: 24, basbakan: "Cemal Gürsel", partiler: [],
      baslangic: "1960-05-30", bitis: "1961-01-05", tip: "mbk", bitisNedeni: null,
      not: "Millî Birlik Komitesi döneminin ilk hükümeti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-25 (27 Mayıs 1960 kabı)
    { no: 25, basbakan: "Cemal Gürsel", partiler: [],
      baslangic: "1961-01-05", bitis: "1961-11-20", tip: "mbk", bitisNedeni: null,
      not: "Millî Birlik Komitesi döneminin ikinci ve son hükümeti; 15 Ekim 1961 seçiminden sonra da bir süre görevde kaldı." },

    // --- dönem 2 (1961 – 1971) ---

    // kaynak: araclar/kaynak-defteri.md#hukumet-26
    { no: 26, basbakan: "İsmet İnönü", partiler: ["chp23", "ap"],
      lakap: "İlk koalisyon", onemli: true, // kaynak: araclar/kaynak-defteri.md#hukumet-adlari
      baslangic: "1961-11-20", bitis: "1962-06-25", tip: "koalisyon", bitisNedeni: null,
      not: "Cumhuriyet tarihinin ilk koalisyon hükümeti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-27
    { no: 27, basbakan: "İsmet İnönü", partiler: ["chp23", "ckmp", "ytp"],
      baslangic: "1962-06-25", bitis: "1963-12-25", tip: "koalisyon", bitisNedeni: null,
      not: "İkinci İnönü koalisyonu; bağımsız milletvekillerinin de desteğiyle kuruldu." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-28
    { no: 28, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1963-12-25", bitis: "1965-02-20", tip: "azinlik", bitisNedeni: null,
      not: "CHP azınlık hükümeti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-29
    { no: 29, basbakan: "Suat Hayri Ürgüplü", partiler: ["ap", "ckmp", "ytp"],
      baslangic: "1965-02-20", bitis: "1965-10-27", tip: "koalisyon", bitisNedeni: "secim",
      not: "Partisiz senatör Ürgüplü başkanlığında AP, CKMP, YTP, Millet Partisi (soyağacında yok) ve bağımsızların katılımıyla kuruldu; 10 Ekim 1965 seçiminin ardından sona erdi." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-30
    { no: 30, basbakan: "Süleyman Demirel", partiler: ["ap"],
      baslangic: "1965-10-27", bitis: "1969-11-03", tip: "tek-parti", bitisNedeni: "secim",
      not: "12 Ekim 1969 seçiminin ardından kabine yenilendi." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-31
    { no: 31, basbakan: "Süleyman Demirel", partiler: ["ap"],
      baslangic: "1969-11-03", bitis: "1970-03-06", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-32
    { no: 32, basbakan: "Süleyman Demirel", partiler: ["ap"],
      baslangic: "1970-03-06", bitis: "1971-03-26", tip: "tek-parti", bitisNedeni: "muhtira",
      not: "12 Mart 1971 muhtırasının ardından görevden ayrıldı." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-33
    { no: 33, basbakan: "Nihat Erim", partiler: [],
      baslangic: "1971-03-26", bitis: "1971-12-11", tip: "partiluestu", bitisNedeni: null,
      not: "12 Mart muhtırası sonrası kurulan ilk partilerüstü (teknokrat ağırlıklı) hükümet." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-34
    { no: 34, basbakan: "Nihat Erim", partiler: [],
      baslangic: "1971-12-11", bitis: "1972-05-22", tip: "partiluestu", bitisNedeni: null,
      not: "Aynı başbakanla, daha teknokrat ağırlıklı kadroyla yeniden kuruldu." },

    // --- dönem 3 (1972 – 1980) ---

    // kaynak: araclar/kaynak-defteri.md#hukumet-35
    { no: 35, basbakan: "Ferit Melen", partiler: [],
      baslangic: "1972-05-22", bitis: "1973-04-15", tip: "partiluestu", bitisNedeni: null,
      not: "12 Mart sonrası partilerüstü çizginin devamı; AP ve CHP desteğiyle kuruldu." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-36
    { no: 36, basbakan: "Naim Talu", partiler: ["ap", "cgp"],
      baslangic: "1973-04-15", bitis: "1974-01-26", tip: "koalisyon", bitisNedeni: null,
      not: "1973 seçiminden sonra yeni hükümet kurulana kadar görevde kalan geçici koalisyon." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-37
    { no: 37, basbakan: "Bülent Ecevit", partiler: ["chp23", "msp"],
      lakap: "CHP–MSP koalisyonu", onemli: true, // kaynak: araclar/kaynak-defteri.md#hukumet-adlari
      baslangic: "1974-01-26", bitis: "1974-11-17", tip: "koalisyon", bitisNedeni: "istifa",
      not: "Kıbrıs Barış Harekâtı'nın ardından erken seçim umuduyla 18 Eylül 1974'te istifa etti; yerine yeni hükümet kurulamayınca 17 Kasım 1974'e kadar çekilme statüsünde görevde kaldı." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-38
    { no: 38, basbakan: "Sadi Irmak", partiler: [],
      baslangic: "1974-11-17", bitis: "1975-03-31", tip: "partiluestu", bitisNedeni: null,
      not: "29 Kasım 1974'te TBMM'de güvenoyu alamadığı halde, yeni hükümet kurulamadığından görevde kaldı." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-39
    { no: 39, basbakan: "Süleyman Demirel", partiler: ["ap", "msp", "cgp", "mhp69"],
      lakap: "I. Milliyetçi Cephe", onemli: true, // kaynak: araclar/kaynak-defteri.md#hukumet-adlari
      baslangic: "1975-03-31", bitis: "1977-06-21", tip: "koalisyon", bitisNedeni: "secim",
      not: "1. Milliyetçi Cephe hükümeti; 5 Haziran 1977 seçiminin ardından sona erdi." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-40
    { no: 40, basbakan: "Bülent Ecevit", partiler: ["chp23"],
      baslangic: "1977-06-21", bitis: "1977-07-21", tip: "azinlik", bitisNedeni: "guvensizlik",
      not: "CHP azınlık hükümeti; 3 Temmuz 1977'de güven oylamasını kaybetti, 21 Temmuz'da istifa etti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-41
    { no: 41, basbakan: "Süleyman Demirel", partiler: ["ap", "msp", "mhp69"],
      lakap: "II. Milliyetçi Cephe", onemli: true, // kaynak: araclar/kaynak-defteri.md#hukumet-adlari
      baslangic: "1977-07-21", bitis: "1978-01-05", tip: "koalisyon", bitisNedeni: "guvensizlik",
      not: "2. Milliyetçi Cephe hükümeti; Güneş Motel Hadisesi'nde AP'den istifa eden milletvekillerinin desteğiyle verilen bir gensoruyla düştü." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-42
    { no: 42, basbakan: "Bülent Ecevit", partiler: ["chp23", "cgp", "demp70"],
      baslangic: "1978-01-05", bitis: "1979-11-12", tip: "koalisyon", bitisNedeni: "istifa",
      not: "CHP öncülüğünde, CGP ve Demokratik Parti'den bakanlarla bağımsız bakanların da yer aldığı hükümet; 14 Ekim 1979 ara seçimlerinin ardından 16 Ekim 1979'da istifa etti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-43
    { no: 43, basbakan: "Süleyman Demirel", partiler: ["ap"],
      baslangic: "1979-11-12", bitis: "1980-09-12", tip: "azinlik", bitisNedeni: "darbe",
      not: "AP azınlık hükümeti, MSP ve MHP dışarıdan destek verdi; 12 Eylül 1980 askerî darbesiyle görevden uzaklaştırıldı." },

    // --- 12 Eylül 1980 kabı (bkz. veri/partiler.js DONEMLER[3].kesinti.yonetim) ---

    // kaynak: araclar/kaynak-defteri.md#hukumet-44
    { no: 44, basbakan: "Bülend Ulusu", partiler: [],
      baslangic: "1980-09-20", bitis: "1983-12-13", tip: "mgk", bitisNedeni: null,
      not: "Millî Güvenlik Konseyi döneminin hükümeti; Kenan Evren başkanlığındaki MGK tarafından görevlendirildi." },

    // --- dönem 4 (1983 – 1990) ---

    // kaynak: araclar/kaynak-defteri.md#hukumetler-45-47
    { no: 45, basbakan: "Turgut Özal", partiler: ["anap"],
      baslangic: "1983-12-13", bitis: "1987-12-21", tip: "tek-parti", bitisNedeni: "erken-secim",
      not: "6 Eylül 1987 referandumu akşamı Özal'ın erken seçim kararını açıklamasının ardından 29 Kasım 1987'de yapılan seçimle sona erdi." },

    // kaynak: araclar/kaynak-defteri.md#hukumetler-45-47
    { no: 46, basbakan: "Turgut Özal", partiler: ["anap"],
      baslangic: "1987-12-21", bitis: "1989-11-09", tip: "tek-parti", bitisNedeni: "cumhurbaskani-secimi",
      not: "Özal'ın 31 Ekim 1989'da TBMM'de cumhurbaşkanı seçilmesinin ardından sona erdi." },

    // kaynak: araclar/kaynak-defteri.md#hukumetler-45-47
    { no: 47, basbakan: "Yıldırım Akbulut", partiler: ["anap"],
      baslangic: "1989-11-09", bitis: "1991-06-23", tip: "tek-parti", bitisNedeni: "istifa",
      not: "Özal'ın cumhurbaşkanı seçilmesinin ardından ANAP grubu içinden kuruldu; Akbulut'un başbakanlıktan istifasının kabulüyle sona erdi." },

    // --- dönem 5 (1991 – 2000) ---

    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
    { no: 48, basbakan: "Mesut Yılmaz", partiler: ["anap"],
      baslangic: "1991-06-23", bitis: "1991-11-20", tip: "tek-parti", bitisNedeni: "erken-secim",
      not: "Akbulut'un istifası üzerine ANAP Genel Başkanı sıfatıyla görevlendirilen Yılmaz'ın kurduğu hükümet, 3757 sayılı Kanunla 20 Ekim 1991'e alınan erken genel seçimin ardından yerini koalisyona bıraktı." },

    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
    { no: 49, basbakan: "Süleyman Demirel", partiler: ["dyp", "shp"],
      baslangic: "1991-11-20", bitis: "1993-06-25", tip: "koalisyon", bitisNedeni: "cumhurbaskani-secimi",
      not: "19 Kasım 1991 tarihli DYP–SHP koalisyon protokolüyle kuruldu; Demirel'in 16 Mayıs 1993'te cumhurbaşkanı seçilmesinin ardından sona erdi." },

    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
    { no: 50, basbakan: "Tansu Çiller", partiler: ["dyp", "shp"],
      baslangic: "1993-06-25", bitis: "1995-10-05", tip: "koalisyon", bitisNedeni: "istifa",
      not: "Yeni bir DYP–SHP koalisyon protokolüyle kuruldu; SHP'nin CHP'ye katılmasından sonra aynı Bakanlar Kurulu listesinde bakanlar CHP etiketiyle sürdü ve hükümet 20 Eylül 1995'te istifa etti." },

    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
    { no: 51, basbakan: "Tansu Çiller", partiler: ["dyp"],
      baslangic: "1995-10-05", bitis: "1995-10-30", tip: "azinlik", bitisNedeni: "guvensizlik",
      not: "DYP azınlık hükümeti; TBMM'den güvenoyu alamadığı için 25 gün sonra sona erdi." },

    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
    { no: 52, basbakan: "Tansu Çiller", partiler: ["dyp", "chp92"],
      baslangic: "1995-10-30", bitis: "1996-03-06", tip: "koalisyon", bitisNedeni: "erken-secim",
      not: "Yazılı metni olmayan bir DYP–CHP koalisyonu; esas görevi 24 Aralık 1995 yenileme seçimini yaptırmak olan bir seçim hükümetiydi." },

    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
    { no: 53, basbakan: "Mesut Yılmaz", partiler: ["anap", "dyp"],
      lakap: "ANAYOL", onemli: true, // kaynak: araclar/kaynak-defteri.md#hukumet-adlari
      baslangic: "1996-03-06", bitis: "1996-06-28", tip: "koalisyon", bitisNedeni: "istifa",
      not: "ANAP–DYP (ANAYOL) koalisyonu; güvenoylamasına ilişkin yargı kararının ardından istifa etmek zorunda kaldı." },

    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
    { no: 54, basbakan: "Necmettin Erbakan", partiler: ["rp", "dyp"],
      lakap: "REFAHYOL", onemli: true, // kaynak: araclar/kaynak-defteri.md#hukumet-adlari
      baslangic: "1996-06-28", bitis: "1997-06-30", tip: "koalisyon", bitisNedeni: "istifa",
      not: "RP–DYP (REFAHYOL) koalisyonu; bir yılın sonunda olağandışı koşullarda istifa ederek görevi bıraktı." },

    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
    { no: 55, basbakan: "Mesut Yılmaz", partiler: ["anap", "dsp", "dtp97"],
      lakap: "ANASOL-D", onemli: true, // kaynak: araclar/kaynak-defteri.md#hukumet-adlari
      baslangic: "1997-06-30", bitis: "1999-01-11", tip: "koalisyon", bitisNedeni: "guvensizlik",
      not: "ANAP–DSP–DTP koalisyon protokolüyle kurulan üç partili azınlık hükümeti; güvenoylamasıyla düşürüldü." },

    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
    { no: 56, basbakan: "Bülent Ecevit", partiler: ["dsp"],
      baslangic: "1999-01-11", bitis: "1999-05-28", tip: "azinlik", bitisNedeni: "erken-secim",
      not: "ANAP ile DYP'nin dışarıdan destek verdiği DSP azınlık hükümeti; öne alınan 18 Nisan 1999 genel ve yerel seçimlerini yaptırmak üzere kuruldu." },

    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
    { no: 57, basbakan: "Bülent Ecevit", partiler: ["dsp", "mhp93", "anap"],
      lakap: "ANASOL-M", onemli: true, // kaynak: araclar/kaynak-defteri.md#hukumet-adlari
      baslangic: "1999-05-28", bitis: "2002-11-18", tip: "koalisyon", bitisNedeni: "erken-secim",
      not: "DSP–MHP–ANAP koalisyonu; 21. Dönem Meclisi'nin erken seçim kararıyla 3 Kasım 2002'de yapılan genel seçimin ardından sona erdi." },


    // --- dönem 6 (2001 – 2015) ---

    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
    { no: 58, basbakan: "Abdullah Gül", partiler: ["akp"],
      baslangic: "2002-11-18", bitis: "2003-03-14", tip: "tek-parti", bitisNedeni: "istifa",
      not: "3 Kasım 2002 seçiminden sonra AK Parti'nin kurduğu ilk hükümet; Recep Tayyip Erdoğan'ın milletvekili seçilmesiyle yeni bir hükümete imkân sağlamak için 11 Mart 2003'te istifa etti." },

    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
    { no: 59, basbakan: "Recep Tayyip Erdoğan", partiler: ["akp"],
      baslangic: "2003-03-14", bitis: "2007-08-29", tip: "tek-parti", bitisNedeni: "erken-secim",
      not: "Siirt ara seçimiyle milletvekili olan Erdoğan'ın kurduğu hükümet, 891 sayılı TBMM kararıyla 22 Temmuz 2007'ye alınan yenileme seçiminin ardından sona erdi." },

    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
    { no: 60, basbakan: "Recep Tayyip Erdoğan", partiler: ["akp"],
      baslangic: "2007-08-29", bitis: "2011-07-06", tip: "tek-parti", bitisNedeni: "secim",
      not: "22 Temmuz 2007 seçiminin ardından kurulan ikinci Erdoğan hükümeti, 12 Haziran 2011 genel seçimiyle sona erdi." },

    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
    { no: 61, basbakan: "Recep Tayyip Erdoğan", partiler: ["akp"],
      baslangic: "2011-07-06", bitis: "2014-08-29", tip: "tek-parti", bitisNedeni: "cumhurbaskani-secimi",
      not: "Erdoğan'ın 10 Ağustos 2014'te halk tarafından cumhurbaşkanı seçilmesinin ardından sona erdi." },

    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
    { no: 62, basbakan: "Ahmet Davutoğlu", partiler: ["akp"],
      baslangic: "2014-08-29", bitis: "2015-08-28", tip: "tek-parti", bitisNedeni: "erken-secim",
      not: "Erdoğan'ın cumhurbaşkanı seçilmesiyle AK Parti genel başkanlığına gelen Davutoğlu'nun kurduğu hükümet, 7 Haziran 2015 seçiminden sonra hükümet kurulamayınca alınan seçim yenileme kararının ardından yerini geçici seçim hükümetine bıraktı." },

    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
    { no: 63, basbakan: "Ahmet Davutoğlu", partiler: ["akp", "hdp"],
      lakap: "Seçim hükümeti", // kaynak: araclar/kaynak-defteri.md#hukumet-adlari
      baslangic: "2015-08-28", bitis: "2015-11-24", tip: "koalisyon", bitisNedeni: "erken-secim",
      not: "Anayasa'nın 114. maddesine göre kurulan geçici seçim hükümetinde AK Parti'nin yanında iki HDP milletvekili bakan oldu, Adalet, İçişleri ve Ulaştırma bakanlıkları ise bağımsızlara verildi." },

    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
    { no: 64, basbakan: "Ahmet Davutoğlu", partiler: ["akp"],
      baslangic: "2015-11-24", bitis: "2016-05-24", tip: "tek-parti", bitisNedeni: "istifa",
      not: "1 Kasım 2015 seçiminden sonra kurulan hükümet; görevi 24 Mayıs 2016'da kurulan 65. hükümete devretti." },

    // --- dönem 7 (2016 – 2026) ---

    // kaynak: araclar/kaynak-defteri.md#hukumet-65
    { no: 65, basbakan: "Binali Yıldırım", partiler: ["akp"],
      baslangic: "2016-05-24", bitis: "2018-07-09", tip: "tek-parti", bitisNedeni: "sistem-degisikligi",
      not: "Bakanlar Kurulu olarak kurulan son hükümet; 6771 sayılı Kanunla yapılan Anayasa değişikliklerinin Cumhurbaşkanının 9 Temmuz 2018'de göreve başlamasıyla yürürlüğe girmesiyle sona erdi." },

    // kaynak: araclar/kaynak-defteri.md#cb-kabine-2018
    { no: null, baskan: "Recep Tayyip Erdoğan", partiler: [],
      baslangic: "2018-07-09", bitis: "2023-06-03", tip: "cumhurbaskanligi", bitisNedeni: "erken-secim",
      not: "Cumhurbaşkanı yardımcısı ve bakanların Anayasanın 104 ve 106. maddeleri uyarınca Cumhurbaşkanınca atandığı ilk cumhurbaşkanlığı kabinesi." },

    // kaynak: araclar/kaynak-defteri.md#cb-kabine-2023
    { no: null, baskan: "Recep Tayyip Erdoğan", partiler: [],
      baslangic: "2023-06-03", bitis: null, tip: "cumhurbaskanligi", bitisNedeni: null,
      not: "28 Mayıs 2023 ikinci oylamasının ardından yeniden göreve başlayan Cumhurbaşkanının atadığı kabine." }
  ]
};
