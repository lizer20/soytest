# Sandık — seçimler, referandumlar ve hükümetler (Aşama 1)

**Tarih:** 2026-09-11 · **Durum:** tasarım onaylandı, uygulama planı bekliyor
**Kapsadığı sayfalar:** yeni `sandik.html`; `index.html`, `kaynakca.html` ve `ortak.css` değişir.

---

## 1. Amaç

Soyağacı sitesine ikinci bir bölüm eklemek: Türkiye'deki bütün seçimleri, referandumları
ve hükümetleri 1923'ten bugüne tek bir kronolojide göstermek. Bölüm soyağacıyla aynı görsel
dili konuşur ve onunla iki yönlü bağlıdır: seçim sonucundaki bir parti künyesine, künye de
partinin girdiği seçimlere götürür.

Sitenin temel ilkesi burada da geçerlidir: **bilgi uydurulmaz.** Doğrulanamayan her sayı
boş (`—`) gösterilir.

## 2. Kapsam

### Aşama 1 (bu belge)

| Tür | Kapsam |
|---|---|
| Genel seçimler | 1923'ten bugüne hepsi; tek parti dönemi seçimleri de ayrı kayıt olarak |
| Yerel seçimler | Ülke geneli oy oranları (belediye meclisi) ile İstanbul, Ankara ve İzmir büyükşehir sonuçları; 2019 İstanbul yenileme seçimi ayrı kayıt; 1963 öncesi belediye seçimleri de bulunabildiği kadarıyla (§5.3) |
| Referandumlar | Hepsi; sonuç, katılım ve partilerin tutumlarıyla |
| Cumhurbaşkanlığı — halk | Halk oylamasıyla yapılanların hepsi, turlarıyla birlikte |
| Cumhurbaşkanlığı — TBMM | 1923'ten halk oylamasına geçişe kadar TBMM'nin yaptığı bütün seçimler |
| Ara seçimler | Hepsi |
| Hükümetler | 1923'ten bugüne hepsi; darbe dönemi ve partilerüstü hükümetler dahil |

### Aşama 2 (ayrı tasarım, bu belgenin dışında)

Yerel seçimler için 81 il haritası: il il kazanan parti, dönemlere göre değişen il sınırları,
yerel olarak gömülü SVG. Aşama 1'in veri modeli bu genişlemeyi engellemeyecek biçimde kurulur
(bkz. §5.3), ama harita için aşama 1'de hiçbir veri ya da kod yazılmaz.

### Kapsam dışı

- Seçim başına kaynak/dipnot gösterimi. Kaynaklar yalnızca kaynakça sayfasında ve
  sitede görünmeyen kaynak defterinde durur.
- Hükümetlerin güven oylaması sayıları.
- Parti arama kutusu. Partiden seçimlere erişimi soyağacı künyesi sağlar.
- Hükümet şeridine tıklanınca açılan bir ayrıntı paneli.
- Yerel ara seçimler (yeni kurulan beldelerde ya da boşalan belediye başkanlıkları için
  yapılanlar). Tek istisna, ayrı kayıt olarak yer alan 2019 İstanbul yenileme seçimidir (§5.3).

## 3. Alınan kararlar

| Konu | Karar |
|---|---|
| Akış | Tek kronoloji; bütün türler tarih sırasıyla iç içe |
| Başlangıç | 1923; tek parti dönemi seçimleri ayrı kayıt |
| Ara seçimler | Hepsi |
| Veri kaynağı | Web'den çekilir, en az iki kaynakla çapraz kontrol edilir; hafızadan sayı yazılmaz |
| Uyuşmazlık | Yalnızca o sayı `—` olur; açıklama notu düşülmez |
| Aşamalar | 2 aşama: harita dışında her şey → harita |
| Hükümet ayrıntısı | Kim, kimlerle, ne zamandan ne zamana, nasıl bitti |
| İttifaklar | YSK'nın resmî liste sonucu esas alınır; listeden seçilen başka parti vekilleri notla belirtilir |
| Giremeyenler | Oyu %1 ve üstü olanlar ile soyağacındakiler tek tek; kalanlar "Diğer" satırında |
| Menü adı | **Sandık** — dosya `sandik.html` |
| Yerleşim | Soyağacındaki dönem bantları + yan panel |
| Hükümetlerin yeri | Seçim kartlarının arasında ince şerit |
| Genel seçim çubuğu | Oy ve sandalye üst üste |
| Yerel seçim ölçüsü | Bütün yıllarda belediye meclisi oyları |
| Araç çubuğu | Tür düğmeleri + yıl kaydırıcısı |
| Kaynak gösterimi | Seçim bazında yok; yalnızca kaynakça sayfasında |
| Mimari | Ortak veri dosyaları, derleme adımı yok (§4) |
| Referandum | Partilerin tutumları dahil |
| 28 Şubat metni | Düzeltilir (§5.9) |
| Künye | Girdiği genel **ve** yerel seçimler listelenir |
| Kaynak defteri | Projede tutulur, sitede gösterilmez |
| Soyağacı eksikleri | Toplanır, kullanıcı onayıyla soyağacına eklenir |
| Yerel ara seçimler | Kapsam dışı (2019 İstanbul yenilemesi hariç); metodoloji sayfasında belirtilir |
| Saklama biçimi | Ham sayılar tutulur, yüzdeler ekranda hesaplanır; yalnızca yüzde yayımlanmışsa yüzde yedeği |
| Ulusal toplamlar | Resmî il tablosundan betikle hesaplanabilir; ikinci kaynağın ulusal rakamıyla eşleşmeli |
| Yerel seçim başlangıcı | Bulunabilen en eski belediye seçimi; 1963 öncesi kayıtlarda bulunamayan her alan `—` |
| Yürütme | Görev başına alt ajan (kullanıcı kararı, 2026-09-11) |
| Askerî yönetim kabının bitişi | Geçiş genel seçiminden bir gün önce; 1961 ve 1983 seçimleri sıradaki bandı açar |
| Haber veritabanları | Tam tablo yayımlayan ulusal gazete seçim veritabanları yalnızca ikinci kaynak olabilir |
| Sandalyesi bilinmeyen parti | Panelde girenler/giremeyenler dışında ayrı "Sandalye bilgisi yok" listesinde; hiçbir satır kaybolmaz |
| Günü bilinmeyen tarih | `YYYY-AA` yazılır, ekranda "Haziran 1923"; gün tahmin edilmez. Hükümet tarihleri gün dahil |
| Kaynaklar arası fark | ≤ %0,5 ise resmî kaynağın sayısı yazılır, fark deftere işlenir; üzerindeyse `—` |
| Soyağacında olmayan partiler | Veri boyunca biriktirilir, veri bitince topluca kullanıcıya önerilir |

## 4. Mimari

```
siyasi parti/
├─ index.html          soyağacı; verisi dışarı taşınır, davranışı değişmez
├─ sandik.html         YENİ
├─ kaynakca.html       + "Sandık: ölçüler ve kurallar" bölümü
├─ ortak.css           + panel, dönem bandı, rozet ve kart temel stilleri
├─ ortak.js            YENİ · panel, odak yönetimi, dönem bandı, tarih biçimleme
├─ sandik-mantik.js    YENİ · Sandık'ın saf mantığı ve HTML üreticileri (Node'da test edilir)
├─ sandik-sayfa.js     YENİ · Sandık sayfasının DOM bağlaması (araç çubuğu, bantlar, panel, hash)
├─ sandik.css          YENİ · Sandık'a özgü stiller (sandik.html ve fikstür test sayfası paylaşır)
├─ veri/
│  ├─ partiler.js      AILE, N, E, BILGI, DONEMLER  (index.html'den taşınır)
│  └─ sandik.js        secimler, hukumetler
├─ araclar/
│  ├─ dogrula.js       node araclar/dogrula.js
│  ├─ topla.js         resmî il tablosundan ulusal toplam (§8.1)
│  ├─ yukle.js         veri dosyalarını Node'da yükler
│  ├─ test/            node --test "araclar/test/*.test.js" (+ sahte fikstür)
│  ├─ denetim/         tarayıcı denetim betikleri + fikstür test sayfası
│  └─ kaynak-defteri.md
└─ docs/superpowers/specs/   tasarım belgeleri (site bunları kullanmaz)
```

- Klasik `<script src>` kullanılır. Site çift tıklanıp `file://` ile açılmaya devam eder;
  harici istek yapılmaz.
- Yükleme sırası her sayfada aynıdır: `veri/partiler.js` → `veri/sandik.js` → `ortak.js`
  → `sandik-mantik.js` → sayfanın kendi satır içi betiği.
- Her dosya tek bir global ad alanı tanımlar: `window.PARTILER`, `window.SANDIK`,
  `window.Ortak`, `window.SandikMantik`. Sayfa betikleri bugünkü gibi IIFE içinde çalışır.
- `ortak.js` ve `sandik-mantik.js` hem tarayıcıda hem Node'da yüklenebilir; saf fonksiyonlar
  `node --test "araclar/test/*.test.js"` ile sınanır.
- `index.html` de `veri/sandik.js`'i yükler (künyedeki "girdiği seçimler" için).
  `kaynakca.html` yalnızca `ortak.css`'i yükler, betik gerektirmez.

## 5. Veri modeli

### 5.1 Ortak kurallar

- **Tarih:** ISO biçiminde, `"1950-05-14"`. Ekranda Türkçe biçimlenir ("14 Mayıs 1950").
- **Günü bilinmeyen tarih:** kaynaklar yalnızca ay ve yıl veriyorsa `tarih` `"1923-06"` biçiminde
  yazılır; ekranda "Haziran 1923" (kısa biçimde "Haz 1923") görünür. Gün asla tahmin edilmez
  (kullanıcı kararı, 2026-09-11). Hükümetlerin `baslangic` ve `bitis` tarihleri gün dahil olmak
  zorundadır; bilinmiyorsa hükümet kaydı eklenmez.
- **Kimlik:** `YYYY-AA-tür`, örn. `"1950-05-genel"`, `"2015-06-genel"`, `"2015-11-genel"`,
  `"2019-06-yerel"`. Doğrudan bağlantılarda kullanılır; bu yüzden benzersiz ve kalıcı olmalıdır.
- **Tür:** `genel` · `yerel` · `referandum` · `cb-halk` · `cb-tbmm` · `ara`.
- **Sıra:** `secimler` dizisi tarihe göre sıralı tutulur; `dogrula.js` bunu denetler.
- **Bilinmeyen sayı:** `null`, ekranda `—`. Tahmin, yuvarlama ya da aralık yazılmaz.
- **Sayılar, yüzdeler değil:** oy ve seçmen verisi ham sayı olarak tutulur (`kayitli`,
  `kullanilan`, `gecerli` ve satır başına `oy`). Yüzdeler ekranda hesaplanır: oy oranı
  `oy / gecerli`, katılım `kullanilan / kayitli`. Türkçe ondalık virgülüyle, tek basamakla
  gösterilir ("%52,7").
- **Yüzde yedeği:** kaynaklar bir kayıt için yalnızca yüzde yayımlamışsa (sayı yoksa) satırda
  `oyYuzde`, kayıtta `katilimYuzde` kullanılır. Aynı satırda `oy` ile `oyYuzde`, aynı kayıtta
  seçmen sayıları ile `katilimYuzde` birlikte bulunmaz.
- **Parti referansı:** soyağacındaki bir parti için `parti:"dp46"`. Soyağacında olmayan
  katılımcılar (bağımsızlar, "Diğer", küçük partiler) için `ad:"…"`. İkisi aynı satırda
  birlikte bulunmaz.
- **Not:** her kayıtta isteğe bağlı `not` alanı; tek cümle, düz metin.

### 5.2 Genel seçim

```js
{ id:"1999-04-genel", tur:"genel", tarih:"1999-04-18",
  tekParti:false,              // 1923–1943 için true
  meclis:550,                  // toplam sandalye
  kayitli:null, kullanilan:null, gecerli:null,   // seçmen ve oy sayıları
  baraj:10,                    // ulusal baraj %, yoksa null
  sonuc:[
    {parti:"dsp",  oy:null, sandalye:null},      // oy: sayı
    {ad:"Bağımsız", oy:null, sandalye:null},
    {ad:"Diğer", partiSayisi:null, oy:null, sandalye:0}
  ],
  ittifak:[                    // 2018 ve sonrası; yoksa alan hiç yazılmaz
    {ad:"Millet İttifakı", liste:"chp92",
     icinden:[{parti:"deva", sandalye:null}]}
  ],
  not:"…" }
```

(Buradaki `meclis` ve `baraj` değerleri yalnızca yapıyı gösteren örneklerdir; gerçek
değerler §8'deki kuralla doldurulur.)

- **Sıralama:** sandalyeye göre, eşitlikte oya göre. "İlk üç" bu sıralamadan alınır.
- **Başlık kuralı:** birinci partinin sandalyesi `meclis`'in yarısından fazlaysa
  "X kazandı · tek başına iktidar", değilse "X birinci parti".
- **Meclise giren:** `sandalye > 0`. Bağımsızlar ayrı satırda gösterilir, sıralamaya girmez.
- **"Diğer":** oyu %1'in altında kalan ve soyağacında olmayan partilerin toplamı.
  `partiSayisi` kaç partinin toplandığını söyler.
- **Tek parti seçimleri** (`tekParti:true`): `sonuc` genellikle tek parti satırından ya da
  tek parti ile bağımsızlardan oluşur. Kartta "kazandı" yerine "tek parti seçimi · iki
  dereceli" yazar. Bu dönemde oy oranı genellikle yoktur ve `null` kalır.

### 5.3 Yerel seçim

```js
{ id:"2024-03-yerel", tur:"yerel", tarih:"2024-03-31",
  olcu:"belediye-meclisi",
  kayitli:null, kullanilan:null, gecerli:null,
  sonuc:[ {parti:"chp92", oy:null}, {ad:"Diğer", partiSayisi:null, oy:null} ],
  buyuksehir:{
    istanbul:{parti:"chp92", aday:"…"},
    ankara:  {parti:"chp92", aday:"…"},
    izmir:   {parti:"chp92", aday:"…"}
  },
  not:"…" }
```

- `sonuc` oya göre sıralanır; "Diğer" kuralı genel seçimdekiyle aynıdır.
- `buyuksehir` alanı o şehrin belediye başkanlığı sonucudur. O yıl büyükşehir statüsü yoksa
  il merkezi belediyesi yazılır ve bu `not` alanında belirtilir.
- 2019 İstanbul yenileme seçimi `id:"2019-06-yerel"` ile ayrı kayıttır, `kapsam:"İstanbul"`
  alanı taşır ve yalnızca `buyuksehir.istanbul` içerir; `sonuc` yazılmaz.
- **Aşama 2 uyumu:** harita verisi ileride aynı kayda `iller:{…}` alanı olarak eklenecek.
  Aşama 1'de bu alan yazılmaz; `dogrula.js` bilinmeyen alanlara hata vermez.
- **1963 öncesi belediye seçimleri:** envanter ve sayılar tamamen kaynaktan çıkarılır. Ülke geneli
  belediye meclisi oyu bulunamazsa `sonuc: []` yazılır ve seçmen sayıları `null` kalır (kart "veri
  yok" gösterir). Belediye başkanlarının o dönemde doğrudan halk oyuyla seçilip seçilmediği
  doğrulanmadan `buyuksehir` alanı yazılmaz (§8.5).

### 5.4 Referandum

```js
{ id:"2017-04-referandum", tur:"referandum", tarih:"2017-04-16",
  konu:"…",                    // tek cümle: neyin oylandığı
  kayitli:null, kullanilan:null, gecerli:null,
  evet:null, hayir:null,       // sayı; evet + hayir = gecerli
  karar:"kabul",               // "kabul" | "ret"
  tutumlar:[ {parti:"akp", tutum:"evet"}, {parti:"chp92", tutum:"hayir"} ],
  not:"…" }
```

- `tutum`: `"evet"` · `"hayir"` · `"boykot"` · `"serbest"` (partinin resmî tavır almadığı
  ya da üyelerini serbest bıraktığı durum).
- Tutumlar yalnızca soyağacındaki partiler için tutulur. Tutumu kaynaklarla
  doğrulanamayan parti listeye hiç yazılmaz; `null` tutum olmaz.
- `karar`, `evet`/`hayir` bilinmese de yazılabilir, ama kaynakla doğrulanmış olmalıdır.
- Alanın adı bilerek `sonuc` değil `karar`: diğer bütün türlerde `sonuc` bir dizidir ve aynı
  ad iki farklı tipe karşılık gelmemelidir (bütün kayıtları gezen kod — örn. künyedeki
  "girdiği seçimler" — aksi halde referandumda çöker).

### 5.5 Cumhurbaşkanlığı — halk oylaması

```js
{ id:"2023-05-cb-halk", tur:"cb-halk", tarih:"2023-05-14",
  turlar:[
    {tarih:"2023-05-14", kayitli:null, kullanilan:null, gecerli:null,
     adaylar:[ {ad:"…", parti:"akp", oy:null}, {ad:"…", destek:"Millet İttifakı", oy:null} ]},
    {tarih:"2023-05-28", kayitli:null, kullanilan:null, gecerli:null, adaylar:[ ] }
  ],
  secilen:"…", not:"…" }
```

- Her aday için ya `parti` (adayı gösteren partinin soyağacı id'si) ya da `destek`
  (ittifak adı ya da "bağımsız", düz metin) yazılır.
- Kaydın `tarih`'i ilk turun tarihidir; kronolojide bu tarihte yer alır.

### 5.6 Cumhurbaşkanlığı — TBMM

```js
{ id:"2007-08-cb-tbmm", tur:"cb-tbmm", tarih:"2007-08-28",
  secilen:"…", turSayisi:null, not:"…" }
```

- Sonuçsuz kalan ya da iptal edilen seçim süreçleri de ayrı kayıttır: `secilen:null` ve
  açıklayıcı bir `not`. Aynı yılda sonuçsuz bir süreç ile ardından gelen başarılı bir
  seçim varsa, kimlikleri farklı aylarla ayrışır.

### 5.7 Ara seçim

```js
{ id:"2003-03-ara", tur:"ara", tarih:"2003-03-09",
  bolge:"Siirt",               // tek il ya da "N il" gibi bir özet
  sandalyeSayisi:null,
  sonuc:[ {parti:"akp", sandalye:null} ],
  not:"…" }
```

- Ara seçimlerde oy oranı tutulmaz; yalnızca kazanılan sandalyeler tutulur.

### 5.8 Hükümet

```js
{ no:57, basbakan:"Bülent Ecevit",
  partiler:["dsp","mhp93","anap"],   // partilerüstü/MBK hükümetlerinde boş dizi
  baslangic:"1999-05-28", bitis:"2002-11-18",   // görevdeki hükümette bitis:null
  tip:"koalisyon",
  bitisNedeni:"erken-secim",
  not:"…" }
```

(Örnekteki numara, tarih ve bitiş nedeni yalnızca yapıyı gösterir; gerçek değerler §8'deki
kuralla doldurulur.)

- `tip`: `"tek-parti"` · `"koalisyon"` · `"azinlik"` · `"partiluestu"` · `"mbk"` (27 Mayıs, Millî Birlik Komitesi) · `"mgk"` (12 Eylül, Millî Güvenlik Konseyi) ·
  `"cumhurbaskanligi"`. Ölçüt kabinenin parti bileşimidir: kabinede birden fazla parti
  varsa `koalisyon`, tek parti varsa meclis çoğunluğuna göre `tek-parti` ya da `azinlik`
  (kullanıcı kararı, 2026-09-22).
- `bitisNedeni`: `"secim"` (olağan takvim) · `"erken-secim"` · `"guvensizlik"` ·
  `"istifa"` · `"darbe"` · `"muhtira"` · `"cumhurbaskani-secimi"` · `"olum"` ·
  `"sistem-degisikligi"` · `"diger"` (+ `not`). Doğrulanamayan neden `null` olur ve
  ekranda gösterilmez.
- `no`, TBMM'nin resmî hükümet numarasıdır. 2018 sonrası yapının adı ve numaralandırması
  kaynaktan doğrulanmadan yazılmaz. Doğrulanamazsa `no:null` olur ve `basbakan` yerine
  `baskan` alanı kullanılır.
- `hukumetler` dizisi `baslangic`'e göre sıralıdır.

### 5.9 `DONEMLER` değişikliği (`veri/partiler.js`)

Kesinti bugün düz bir metin. Kronolojik yerleşim için bir tarih alanı gerekiyor:

```js
{yil:"1991 – 2000", ad:"…",
 kesinti:{tarih:"1997-02-28",
          metin:"28 Şubat 1997 — MGK kararları; Refah Partisi 16 Ocak 1998'de kapatıldı"}}
```

- Askerî yönetim dönemleri isteğe bağlı bir `yonetim:{bas, bit}` aralığı taşır
  (27 Mayıs 1960 ve 12 Eylül 1980 kesintileri). Sandık sayfası bu aralıktaki kayıtları
  kesinti bandının içinde gösterir (§6.3).
- `bit`, askerî yönetimden çıkışı sağlayan genel seçimin tarihinden **bir gün öncedir**. Geçiş
  seçimi böylece kabın içinde değil, sıradaki dönem bandının ilk kaydı olarak görünür
  (kullanıcı kararı, 2026-09-11).
- `index.html` yalnızca `kesinti.metin` alanını kullanır. Soyağacının görünümü değişmez,
  sadece 28 Şubat metni düzelir.
- **28 Şubat düzeltmesindeki tarih ve `yonetim` aralıkları hafızadan yazıldı.**
  Uygulamadan önce diğer bütün verilerle aynı kaynak kuralıyla doğrulanırlar (§8.5).

## 6. Sayfa: `sandik.html`

### 6.1 Menü

Üç sayfada da aynı: **Ana sayfa · Sandık · Kaynakça & metodoloji**. Etkin sayfa bugünkü
`ustmenu-link aktif` sınıfıyla işaretlenir.

### 6.2 Başlık ve araç çubuğu

- Başlık bloğu soyağacıyla aynı yapıdadır (eyebrow, h1, lede, disclaimer). Disclaimer
  `—` işaretinin anlamını ve ittifak kuralını tek cümleyle açıklar.
- **Tür düğmeleri:** Genel · Yerel · Referandum · CB (halk) · CB (TBMM) · Ara seçim ·
  Hükümet. Başlangıçta hepsi açıktır; her düğme kendi türünü açıp kapatır (`aria-pressed`).
  Soyağacındaki lejanttan farklı olarak tekli değil çoklu seçim yapılır.
- **Yıl kaydırıcısı:** 1923'ten son kaydın yılına kadar. En sağ uç "filtre yok" anlamına
  gelir (soyağacındaki düzeltmeyle aynı davranış). Seçilen yılda yapılan seçimler ve o yıl
  görevde olan hükümetler vurgulanır.
- **"filtreleri temizle"** düğmesi soyağacındakiyle aynı biçimdedir.

### 6.3 Dönem bantları ve kesintiler

- Soyağacındaki 8 dönem bandı `PARTILER.DONEMLER`'den okunur. Her seçim kaydı `tarih`'ine,
  her hükümet `baslangic`'ine göre bir banda yerleşir.
- Kesinti bantları, soyağacındaki gibi dönemin sonunda değil, `kesinti.tarih`'e göre
  kronolojik yerlerinde durur.
- `yonetim` aralığı olan kesintiler (1960 ve 1980) bir **kap** gibi davranır: kırmızı bandın
  altında o aralıkta başlayan kayıtlar sıralanır (MBK ve partilerüstü hükümetler, askerî
  dönemdeki referandumlar). Bu kayıtlar komşu dönem bantlarında tekrar gösterilmez.
- Hiçbir dönem bandının yıl aralığına ve hiçbir `yonetim` kabına girmeyen bir kayıt
  varsa, `dogrula.js` bunu hata olarak bildirir.
- Bantlar soyağacındaki gibi açılıp kapanır; kod `ortak.js`'ten gelir.

### 6.4 Kartlar

Bütün kartlar `ortak.css`'teki temel kart stilini (kâğıt zemin, ince çerçeve, sol renk
kenarı) kullanır. Sol kenarın rengi kazanan ya da birinci partinin gelenek rengidir;
referandumda nötr koyu ton.

| Tür | Kart içeriği |
|---|---|
| Genel | Tarih · tür rozeti · başlık (§5.2 kuralı) · oy çubuğu · sandalye çubuğu · ilk üç parti (kısa ad, oy %, sandalye) · barajın altında kalan en yüksek oylu parti varsa "baraj altı" işareti |
| Genel (tek parti) | Tarih · rozet · "tek parti seçimi · iki dereceli" · varsa sandalye dağılımı |
| Yerel | Tarih · rozet · oy çubuğu · ilk üç parti (oy %) · İstanbul, Ankara ve İzmir'i kazanan partiler |
| Referandum | Tarih · rozet · konu · evet/hayır çubuğu · sonuç (kabul/ret) · katılım |
| CB (halk) | Tarih · rozet · seçilen · her turda ilk iki aday ve oy % · tur sayısı |
| CB (TBMM) | Tek satır: tarih · rozet · seçilen · tur sayısı |
| Ara | Tek satır: tarih · rozet · bölge · sandalye sayısı · kazananlar |

- Çubuklarda her parti kendi gelenek rengindedir (`AILE[parti.aile].ham`). Soyağacında
  olmayan satırlar ("Diğer", bağımsızlar) nötr gri alır.
- Çubuk bölütlerinin erişilebilir adı vardır (`aria-label` ile parti ve oranı). Değeri
  bilinmeyen bölüt çizilmez; yerine "veri yok" metni gösterilir.
- Kartlar soyağacındaki gibi `role="button"` ve `tabindex="0"` taşır; Enter/Space paneli açar.

### 6.5 Hükümet şeridi

- Kartların arasında tek satır: numara · başbakan · partiler · başlangıç–bitiş tarihi;
  ikinci satırda "bitti: …" (bitiş nedeni).
- Sol kenarında kalın bir çizgi vardır. Rengi hükümetin ilk partisinin gelenek rengidir;
  partilerüstü ve MBK hükümetlerinde kesinti bantlarındaki koyu kırmızı kullanılır.
- Parti kısaltmaları soyağacına bağlanır (`index.html#<parti>`). Şeridin kendisi
  tıklanabilir değildir.

### 6.6 Yan panel

Panel kabuğu, odak tuzağı, `inert`/`aria-hidden`, odak iadesi ve Escape davranışı
`ortak.js`'ten gelir; soyağacındakiyle aynı koddur.

| Tür | Panel içeriği |
|---|---|
| Genel | Başlık · tarih · meclis büyüklüğü · katılım · baraj · **meclise girenler** (parti, oy %, sandalye) · **giremeyenler** · **sandalye bilgisi yok** (sandalyesi doğrulanamayanlar) · bağımsızlar · Diğer · ittifak notları · **bu seçimden sonra kurulan hükümetler** · not |
| Yerel | Başlık · tarih · katılım · ölçü ("belediye meclisi oyları") · tüm sıralama · üç büyükşehir (parti + aday) · not |
| Referandum | Konu · tarih · katılım · evet/hayır · sonuç · **partilerin tutumları** (evet / hayır / boykot / serbest grupları) · not |
| CB (halk) | Her tur için tarih, katılım, bütün adaylar ve oyları · seçilen · not |
| CB (TBMM) · Ara | Kart bilgisinin tamamı + not |

- "Bu seçimden sonra kurulan hükümetler": `baslangic` tarihi bu seçimle bir sonraki genel
  seçim arasına düşen hükümetler.
- Parti adları soyağacına bağlanır.

### 6.7 Doğrudan bağlantılar

- `sandik.html#<kimlik>` sayfayı açar, kaydı görünür alana kaydırır ve panelini açar.
- Panel açıldığında adres çubuğu `history.replaceState` ile güncellenir; panel kapanınca
  hash temizlenir. Bilinmeyen bir hash sessizce yok sayılır.

### 6.8 Mobil (≤760px)

Soyağacındaki mobil düzenin aynısı: tek sütun, alttan açılan panel, bantlara dokununca
açılıp kapanma. Çubuklar tam genişlik olur, ilk üç parti alt alta dizilir.

### 6.9 Erişilebilirlik

- `<html lang="tr">`, meta description, OG etiketleri.
- Tür düğmeleri `aria-pressed`, bantlar `aria-expanded` ve `aria-controls` kullanır.
- Renk tek başına bilgi taşımaz: her çubuk bölütünün yanında ya da panelde metin
  karşılığı bulunur.
- `prefers-reduced-motion` desteği `ortak.css`'ten gelir.

## 7. Soyağacı entegrasyonu

1. **Veriyi taşımak:** `index.html` içindeki `AILE`, `N`, `E`, `BILGI` ve `DONEMLER`
   değişmeden `veri/partiler.js`'e taşınır (`window.PARTILER`). `DONEMLER` yalnızca §5.9'da
   anlatılan biçimde değişir.
2. **Ortak kodu çıkarmak:** panel aç/kapa, odak tuzağı, odak iadesi, `inert` yönetimi ve
   dönem bandı aç/kapa `ortak.js`'e taşınır; ilgili stiller `ortak.css`'e geçer. İki sayfa
   da aynı kodu kullanır.
3. **Künyeye yeni bölümler:**
   - **Girdiği genel seçimler:** yıl · oy % · sandalye; `sandik.html#<kimlik>` bağlantısıyla.
     İttifak listesinden seçilen vekiller "CHP listesinden N vekil" biçiminde yazılır.
   - **Girdiği yerel seçimler:** yıl · oy %.
   - Hiç kaydı olmayan partide bu bölümler görünmez.
4. **Doğrudan bağlantı:** `index.html#<parti>` sayfayı açar, kartı görünür alana kaydırır
   ve künyeyi açar. Davranış §6.7 ile aynıdır.
5. **Eksik partiler:** veri toplanırken meclise girmiş ama soyağacında olmayan partiler
   listelenir (ilk aday MDP, 1983 — hafızadan, doğrulanacak). Her biri için sütun, bağ ve
   rozet önerisi kullanıcıya sunulur. **Onay olmadan hiçbir parti eklenmez.** Onaylanana
   kadar bu partiler seçim sonuçlarında `ad:"…"` ile, bağlantısız olarak görünür.
6. **Gerileme denetimi:** her adımdan sonra soyağacında kart sayısı (66, onaylanan eklemeler
   kadar artar), bağ sayısı (73, aynı şekilde), filtreler, panel, klavye vurgusu ve mobil
   düzen tarayıcıda denetlenir.

## 8. Veri toplama ve doğrulama

### 8.1 Kaynak kuralı

- Her sayı **en az bir resmî kaynakta** görülmelidir: YSK kararları ve ilanları, TÜİK
  seçim yayınları, TBMM kayıtları, Resmî Gazete.
- Ve **ikinci bir kaynakla eşleşmelidir** (resmî ya da akademik/kurumsal bir derleme).
  Tam tablo yayımlayan ulusal gazete seçim veritabanları da **yalnızca ikinci kaynak** olarak
  kabul edilir (kullanıcı kararı, 2026-09-11). Tek ya da birincil kaynak olarak asla
  kullanılmazlar ve kaynak defterinde "haber veritabanı" diye işaretlenirler.
- Vikipedi yalnızca karşılaştırma ve kaynak bulma aracıdır. Tek başına kaynak sayılmaz,
  ikinci kaynak da sayılmaz.
- Eşleşmeyen ve üçüncü bir kaynakla da çözülemeyen sayı `null` olur (§5.1).
- **Eşleşme toleransı (kullanıcı kararı, 2026-09-12):** eski seçimlerde derlemeler aynı olayı
  küçük farklarla verir. İki kaynak arasındaki fark **%0,5'e kadarsa** "eşleşti" sayılır;
  veriye **birincil resmî kaynağın** sayısı yazılır ve fark kaynak defterine
  "Uyuşmazlık: X vs Y (%Z)" satırıyla işlenir. Fark %0,5'i aşıyorsa sayı `null` olur.
  Sandalye gibi tam sayıların birbirini tutmadığı durumlarda toplamın meclis büyüklüğüne
  eşitliği belirleyicidir.
- **Hesaplanmış toplamlar:** resmî bir kaynak yalnızca il il sayı verip ulusal toplamı
  vermiyorsa, toplam il satırlarından **elle değil betikle** hesaplanır ve ikinci bir
  kaynağın ulusal rakamıyla eşleşmelidir; eşleşmezse `null` olur. Kaynak defterinde
  "resmî il tablosundan hesaplandı" diye işaretlenir.
- Nitel bilgiler (hükümetin bitiş nedeni, referandumdaki parti tutumu) için de aynı kural
  geçerlidir: doğrulanamayan tutum yazılmaz, doğrulanamayan bitiş nedeni `null` olur.

### 8.2 Toplama sırası

Veri `DONEMLER`'deki 8 dönemin sırasıyla toplanır. Her dönemin sonunda kullanıcıya şu
rapor sunulur:

- eklenen kayıtlar (tür başına sayı),
- `—` kalan sayılar ve nedenleri (hangi kaynakların ayrıştığı),
- soyağacında eksik çıkan partiler,
- `dogrula.js` çıktısı.

Kullanıcı onay vermeden bir sonraki döneme geçilmez.

### 8.3 Kaynak defteri (`araclar/kaynak-defteri.md`)

- Her kayıt için kimliğiyle bir başlık; altında kullanılan kaynaklar (URL ya da yayın
  künyesi, erişim tarihi), birincil kaynak işareti ve varsa uyuşmazlık notu.
- Sitenin hiçbir yerinden yüklenmez ve bağlanmaz.
- Bir hata bildirildiğinde nereye bakılacağını gösterir.

### 8.4 `araclar/dogrula.js`

`node araclar/dogrula.js` ile çalışır; `veri/partiler.js` ve `veri/sandik.js`'i yükler.
Hata bulursa sıfırdan farklı bir kodla çıkar.

**Hatalar:**
- yinelenen kimlik; kimlik `YYYY-AA-tür` biçiminde değil ya da `tarih` ile uyuşmuyor
- `secimler` ya da `hukumetler` tarih sırasında değil
- bilinmeyen `tur`, `tip`, `bitisNedeni`, `tutum` ya da `karar` değeri
- `tarih` biçimi `YYYY-AA-GG` ya da `YYYY-AA` değil
- hükümetin `baslangic` ya da `bitis` tarihi gün içermiyor
- soyağacında olmayan bir `parti` id'si
- aynı satırda hem `parti` hem `ad`
- genel seçimde bilinen sandalyelerin toplamı `meclis`'i aşıyor; hepsi biliniyorsa eşit değil
- referandumda `evet + hayir` ≠ `gecerli` (üçü de biliniyorsa)
- oy toplamı `gecerli`'yi aşıyor; bütün satırlar biliniyorsa `gecerli`'ye eşit değil
- `gecerli` > `kullanilan` ya da `kullanilan` > `kayitli`
- aynı satırda hem `oy` hem `oyYuzde`; aynı kayıtta hem seçmen sayıları hem `katilimYuzde`
- hükümetlerde çakışan tarih aralıkları
- hiçbir dönem bandına ya da `yonetim` kabına düşmeyen kayıt

**Uyarılar:**
- `oyYuzde` kullanan bir kayıtta yüzdelerin toplamı %98–102 aralığının dışında
  (yayımlanmış yüzdelerin yuvarlama payı)
- iki hükümet arasında 1 günden uzun boşluk
- `—` sayısı: tür ve dönem başına rapor
- `ittifak.icinden` toplamı `liste` partisinin sandalyesini aşıyor

Mevcut soyağacı bütünlük denetimleri de bu betiğe taşınır: yinelenen id, geçersiz bağ,
`BILGI` eşleşmesi, "faal ama bitiş yılı var".

### 8.5 Hafızadan gelen iddialar

Tasarım sırasında hafızadan kullanılan şu bilgiler, uygulamanın ilk işi olarak §8.1
kuralıyla doğrulanır. Doğrulanamazlarsa kullanılmazlar:

- ~~Refah Partisi'nin kapatılma kararının tarihi (§5.9'daki metin).~~
  **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 1 — 2026-09-11, düzeltme
  turu 1):** 16 Ocak 1998 (Cuma). [B] TBMM Tutanak Dergisi, Cilt 43, 44. Birleşim, 20.1.1998
  (Abdullah Gül'ün genel kuruldaki konuşması bu tarihi doğruluyor) + ikincil kaynaklara göre
  Esas 1997/1, Karar 1998/1, RG yayım tarihi 22 Şubat 1998.
- ~~1960 ve 1980 `yonetim` aralıklarının başlangıç ve bitiş tarihleri (§5.9).~~
  **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 2 — 2026-09-11):** geçiş genel
  seçimleri TÜİK Ek-1 (s. 259) ile doğrulandı — 27 Mayıs 1960 kabı `bit: "1961-10-14"` (geçiş
  seçimi 15 Ekim 1961), 12 Eylül 1980 kabı `bit: "1983-11-05"` (geçiş seçimi 6 Kasım 1983).
- ~~MDP'nin 1983'te meclise girmiş olması (§7, madde 5).~~
  **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 3 — 2026-09-11):** TÜİK
  Tablo 1 (s. 22) ve YSK'nın resmi 1983 seçim sonuçları PDF'i ile doğrulandı; MDP 71 sandalyeyle
  üçüncü parti olarak meclise girdi.
- ~~Belediye başkanlarının doğrudan halk oyuyla ilk kez hangi yerel seçimde seçildiği (§5.3;
  1963 öncesi kayıtlarda `buyuksehir` alanının yazılıp yazılmayacağı buna bağlı).~~
  **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 4 — 2026-09-11):** 17 Kasım
  1963 yerel seçimi (307 sayılı Kanun, 19.7.1963 kabul, RG 27.7.1963/11465). `buyuksehir` alanı
  bu seçimden itibaren yazılabilir; öncesinde yazılmaz.
- ~~2024 yerel seçimlerinden sonra yapılmış bir seçim ya da referandum olup olmadığı.~~
  **Web aramasıyla kontrol edildi (2026-09-11):** 7 Haziran 2026'da 6 beldede ara yerel
  seçim yapıldı; bu seçim kapsam dışıdır (§2). Erken genel seçim ya da referandum yapılmadı;
  olağan takvim 14 Mayıs 2028. Bir anayasa referandumu kamuoyunda tartışıldığı için, iş
  tamamlanmadan önce son bir güncellik kontrolü yapılır.
  **Görev 1, Adım 3.3'te yeniden kontrol edildi (2026-09-11):** yeni bir referandum ya da erken
  seçim ilanına rastlanmadı; bulunan tek yakın tarihli olay yukarıda zaten kapsam dışı olarak
  işaretlenmiş 7 Haziran 2026 yerel ara seçimiydi.

## 9. Kaynakça sayfası güncellemesi

`kaynakca.html`'e **"Sandık: ölçüler ve kurallar"** bölümü eklenir:

- Kapsam ve aşamalar (haritanın henüz olmadığı).
- `—` işaretinin anlamı ve kaynak kuralı (§8.1).
- Genel seçimde "kazandı" ile "birinci parti" ayrımı ve sıralamanın sandalyeye göre yapılması.
- İttifak listelerinin gösterimi.
- %1 eşiği ve "Diğer" satırı.
- Yerel seçimlerde belediye meclisi oylarının esas alınması ve nedeni.
- 1946 seçiminin "açık oy, gizli tasnif" ile yapılmış olması.
- Tek parti dönemi seçimlerinin iki dereceli olması.
- Referandum tutumlarının neyi ifade ettiği (`serbest` dahil).
- Yerel ara seçimlerin kapsam dışında olduğu (2019 İstanbul yenilemesi hariç).
- 1963 öncesi yerel seçimlerin bulunabildiği kadarıyla alındığı ve bu kayıtlarda boş alanların
  beklendiği.

"Bu tür bilgiler nereden doğrulanabilir" listesine TÜİK seçim yayınları eklenir.

## 10. Kabul ölçütleri

- [ ] `node araclar/dogrula.js` hatasız çıkar.
- [ ] Soyağacı değişmemiş davranır: kart ve bağ sayısı, filtreler, panel, klavye vurgusu,
      mobil düzen; konsolda hata yok.
- [ ] 28 Şubat kesinti metni, doğrulanmış tarihle güncellendi.
- [ ] `sandik.html` bütün kayıtları doğru dönemde gösterir; 1960 ve 1980 kapları dolu.
- [ ] Her türün kartı ve paneli en az bir gerçek kayıtla tarayıcıda denetlendi.
- [ ] Tür düğmeleri ve yıl kaydırıcısı çalışır; en sağ uç filtreyi kaldırır.
- [ ] `sandik.html#<kimlik>` ve `index.html#<parti>` bağlantıları paneli açar.
- [ ] Künyedeki "girdiği genel/yerel seçimler" doğru sayfaya ve kayda götürür.
- [ ] Panel klavyeyle tam kullanılabilir (odak tuzağı, Escape, odak iadesi).
- [ ] 760px altında düzen soyağacıyla tutarlı.
- [ ] Üç sayfada menü aynı; site `file://` ile açıldığında her şey çalışır.
- [ ] Kaynak defterinde her kaydın kaynakları var.
- [ ] Kaynakça sayfasındaki yeni bölüm yayında.

## 11. Riskler

- **Tek parti dönemi ve 1950'ler için kaynak kıtlığı.** Bu dönemde çok sayıda `—` çıkması
  bekleniyor. Bu bir hata değil, kuralın doğal sonucu.
- **Kaynak bağımsızlığı.** Derlemelerin çoğu aynı YSK/TÜİK tablosundan beslenir; "iki
  kaynak" gerçekte tek kaynağın iki kopyası olabilir. Kaynak defterinde birincil kaynak
  bu yüzden ayrıca işaretlenir.
- **Web erişimi.** Resmî sitelerdeki eski yayınlar PDF ya da taranmış görüntü olabilir;
  okunamayan bir kaynak kullanılmış sayılmaz.
- **Veri hacmi.** Aşama 1 onlarca kayıt ve yüzlerce sayı içeriyor. Dönem dönem ilerlemek ve
  her dönemin sonunda onay almak bu yüzden zorunlu.
- **`index.html`'in yeniden düzenlenmesi** çalışan bir sayfaya dokunuyor. Taşıma işi seçim
  verisinden önce, ayrı bir adım olarak yapılır ve §7 madde 6'daki denetimle kapanır.
