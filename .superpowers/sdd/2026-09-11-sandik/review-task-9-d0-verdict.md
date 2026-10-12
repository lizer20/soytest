# İnceleme hükmü: Görev 9 — Dönem 0 (1923–1945)

İncelenen commit: `1727a29` "Sandık verisi: dönem 0 (1923–1945)" (base `11b92a0`).
Değişen dosyalar: `araclar/kaynak-defteri.md` (+313), `veri/sandik.js` (+157/-2).

## Yöntem

Brief, uygulayıcı raporu, inceleme paketi (tam fark) ve spesifikasyon (§3, §5.1–5.8, §8.1,
§8.4, §8.5) okundu. Aşağıdaki bağımsız doğrulamalar bizzat yapıldı (uygulayıcının iddiasına
güvenilmedi):

- `node --check veri/sandik.js`, `node --test "araclar/test/*.test.js"`, `node araclar/dogrula.js`
  yeniden çalıştırıldı → raporla birebir aynı çıktı (52/52 test PASS; `hata yok`; aynı üç uyarı).
- TÜİK *Milletvekili Genel Seçimleri 1923–2011* PDF'i yerelde `pdftotext` ile açılarak:
  - Tablo 1 (PDF s. 22): 1923/1927/1931/1935/1939/1943 için "1 CHP" / "1 CHP" deseni doğrulandı.
  - Tablo 5 (PDF s. 25, "Toplam" satırı): 287, 316, 317, 399, 429, 455 — `meclis` alanlarıyla
    birebir eşleşiyor.
  - Ek-1 (PDF s. 277, basılı s. 259): tarih listesi ("Haziran-Temmuz 1923", "2 Eylül 1927",
    "25 Nisan 1931", "8 Şubat 1935", "26 Mart 1939", "28 Şubat 1943") `tarih` alanlarıyla
    birebir eşleşiyor; 1923 için tek gün verilmediği doğrulandı.
- `hukumetler_cilt_1.pdf` (TBMM, kaynak URL'den bizzat indirilip `pdftotext` ile açıldı):
  İçindekiler'deki 14 hükümetin tamamı (no. 1–14), başbakan adları ve başlangıç/bitiş
  tarihleri `veri/sandik.js`'teki 14 kayıtla **birebir** eşleşti (30.10.1923'ten
  09.03.1943-07.08.1946'ya kadar). "Ali Fethi Okyar", "Mahmut Celal Bayar", "Şükrü Saraçoğlu"
  adları da metinde doğrulandı.
- AA (Anadolu Ajansı) "1923'ten günümüze Cumhurbaşkanı seçimleri" sayfası WebFetch ile açıldı:
  7 cb-tbmm kaydının tümü (tarih, seçilen kişi, oy sayısı: 158/288/289/386/348/413/435)
  `not` alanlarıyla birebir eşleşti.
  Demirkol (2023, Fiscaoeconomia, dergipark) PDF'i indirilip `pdftotext` ile açıldı: "1923'te
  başlayan tek partili dönem 7 meclis dönemi sürmüş ve bu sürede 18 hükümet kurulmuştur" ve
  9. Hükümet'in Atatürk'ün ölümü üzerine istifası cümleleri doğrulandı.
  Ahmet Gülen'in ATAM Dergisi makalesi WebFetch ile açıldı: 1930 yerel seçiminin 5 Ekim'de
  başladığı, CHF 35.934 / SCF 12.813 oy (İstanbul'a özgü) ve seçimin ülke genelinde yapıldığı
  doğrulandı.
- Bağımsız bir üçüncü kaynak arandı (TESAV, "TBMM ve Cumhuriyet Dönemlerinde Milletvekili ve
  Senatör Sayıları" PDF): 1923-1927 dönemi için 287, sırasıyla 316/317/399/455 ve 1939-1943
  dönemi için "424+5" (=429) rakamları bağımsız olarak doğrulandı — bkz. aşağıdaki bulgu.
- Ara seçim envanteri için WebSearch tekrarlandı: dönem 0 için tarihli, ikinci kaynakla
  doğrulanabilir bir ara seçim kaydına rastlanmadı — uygulayıcının "bulunamadı" sonucu
  makul görünüyor.

Bu örneklem, veri toplama sürecinin **gerçekten kaynağa dayandığını** ve raporun iddialarının
uydurma olmadığını gösteriyor. Rakamlar, tarihler ve kişi adılarının tamamı bağımsız olarak
doğrulanabildi.

## SPEC uyumu

- **Alan adları:** `genel` (id, tur, tarih, tekParti, meclis, kayitli, kullanilan, gecerli,
  baraj, sonuc[{parti,oy,sandalye}], not), `yerel` (olcu, kayitli, kullanilan, gecerli, sonuc:[],
  not), `cb-tbmm` (secilen, turSayisi, not), `hukumet` (no, basbakan, partiler, baslangic, bitis,
  tip, bitisNedeni, not) — hepsi spesifikasyon §5.2/§5.3/§5.6/§5.8 ile birebir örtüşüyor. Ekstra
  alan yok (YAGNI ihlali yok).
- **Kimlik biçimi** `YYYY-AA-tür` korunmuş; `dogrula.js` kimlik/tarih tutarsızlığını hata
  vermeden geçti.
- **Sıra:** `secimler` tarih sırasında, `hukumetler` `baslangic` sırasında — `dogrula.js` bunu
  doğruluyor (hata yok).
- **1963 öncesi yerel kural:** `buyuksehir` yazılmamış (kullanıcı kararına uygun); `sonuc: []`
  ve seçmen alanları `null` — §5.3 ile uyumlu.
- **Parti referansı:** yalnızca `parti:"chp23"` kullanılmış, bu id `veri/partiler.js`'te
  gerçekten var (doğrulandı).
- **Global Constraints:** commit mesajı Türkçe, sayı özetleri doğru, `Co-Authored-By: Claude
  Opus 5 <noreply@anthropic.com>` ile bitiyor; yalnızca `veri/sandik.js` ve
  `araclar/kaynak-defteri.md` değişmiş (dosya kapsamı brief'e uygun).
- **Envanter:** Adım 1 farkları (ara seçim yok, 1934/1938/1942 yerel eklenmedi, 1930 yerel
  aday listede yoktu ama eklendi) raporda ve defterde açıkça belgelenmiş; brief'in "aday
  listede olmayan kaynaktan çıkan kayıt eklenir" kuralına uygun.

**Sonuç: SPEC ✅** — alan adları, kimlik biçimi, sıralama, dosya kapsamı ve commit biçimi
brief/spesifikasyona uyuyor.

## Görev kalitesi — bulgular

### Important — `1923-06-genel` alanındaki `tarih:"1923-06-01"` doğrulanmamış, inşa edilmiş bir gün taşıyor
`veri/sandik.js` satır ~366 (`{ id: "1923-06-genel", ... tarih: "1923-06-01", ... }`).
Kaynaklar (TÜİK Ek-1 ve Kenan Olgun/ATAM Dergisi) yalnızca "Haziran–Temmuz 1923" aralığını
veriyor; gün hatta ay kesin değil (bağımsız doğrulamamda da böyle). `not` alanında bu açıkça
belirtilmiş ve rapor Adım 6'da kullanıcıdan onay istiyor — süreç bu haliyle doğru işletilmiş
(§8.2). Yine de yazılan `"1923-06-01"` tek başına karta bakan bir kullanıcıya (paneli
açmadan) gerçek bir gün gibi görünür; bu, sitenin "bilgi uydurulmaz" ilkesiyle gerilim
içindedir — çünkü ay/gün kaynakta yok, inşa edilmiş bir değer. **Öneri:** onay bekleyen bir
karar noktası olduğu için commit'i geri almaya gerek yok, ama kullanıcı onayı **açıkça bu
maddeye özel** alınmalı; onay gelmeden dönem 1'e geçilmemeli (zaten planlanan davranış).
Alternatif çözüm önerisi: kimlik `1923-06-genel` kalsın ama `tarih` alanı ayın ilk günü yerine
belgelenmiş biçimde `not`'a taşınıp gerçek gün bilinmiyorsa bunu daha görünür kılacak bir
kart rozeti (örn. "~") değerlendirilebilir — ama bu bir sonraki görevin (sandik-mantik.js)
kapsamı, bu görevde veri katmanında yapılacak tek şey netlik.

### Important — `1923-06-genel` kaydındaki `meclis:287` değeri için kaynak defterinde ikinci kaynak eşleşmesi belgelenmemiş
`araclar/kaynak-defteri.md`, "Ortak blok — 1923-1943 genel seçimleri" başlığı altında,
ikincil kaynak (Taner Lüleci, *Gazi Akademik Bakış*, 2023) çapraz doğrulamasını yalnızca
1927/1931/1935/1939/1943 için veriyor ("316, 317, 399, 429, 455 — TÜİK Tablo 5 ile birebir
eşleşiyor"); **1923'ün 287 değeri bu listede yok**. Kesin kural şunu şart koşuyor: "Her sayı:
bir resmî kaynak [B] + eşleşen ikinci kaynak. Eşleşmezse ve üçüncü kaynak çözmezse null"
(brief, Kesin kurallar) — 1923 için yalnızca TÜİK (tek kaynak) belgelenmiş, defterde ikinci
kaynak yok. Kendi araştırmamda bağımsız bir ikinci kaynak buldum ve eşleştiğini doğruladım:
**TESAV, "TBMM ve Cumhuriyet Dönemlerinde Milletvekili ve Senatör Sayıları"**
(`tesav.org.tr/wp-content/uploads/2020/02/tbmmvecumhuriyetdonemlerindemv.vesenatorsayilari.pdf`)
— "2. (1923–1927): 287" satırı TÜİK Tablo 5 ile birebir eşleşiyor (aynı tabloda 316/317/399/455
ve 1939 için "424+5"=429 de bağımsız doğrulanıyor). Sayının kendisi **doğru**, ama defterdeki
belgeleme kesin kuralı eksiksiz karşılamıyor. **Öneri:** `araclar/kaynak-defteri.md`'deki
"Ortak blok" bölümüne TESAV kaynağını 1923 için ikinci kaynak olarak ekle (URL yukarıda);
tek satırlık bir düzeltme, veri değişmez.

### Minor — `1930-10-yerel` kaydında ikinci kaynak yalnızca "serinin varlığını" doğruluyor, sayısal bir eşleşme yok
Kayıtta zaten hiçbir ulusal sayı yok (`sonuc: []`, seçmen alanları `null`), bu yüzden kesin
kuralın "eşleşen ikinci kaynak" şartı sayısal olarak test edilemiyor — pratikte risk yok,
sadece defterdeki ikinci kaynağın niteliği (Burdur akademik makalesi, yalnızca "1930 ilk yerel
seçimdi" ifadesini doğruluyor) sayısal bir çapraz doğrulama değil, niteliksel bir doğrulama.
Kural ihlali değil (çünkü doğrulanacak bir sayı zaten yok), yalnızca not olarak düşülüyor.

## ⚠️ Farktan doğrulanamayanlar

- **Tarayıcı denetimi** (`sandik.html`'de dönem 0 bandının 14+14 kaydı doğru sırada/iç içe
  gösterdiği, kap denetiminin dönem 0'da uygulanamadığı, 1943 kartının panel içeriği,
  `index.html#chp23` künyesindeki "Girdiği genel seçimler" bölümü ve `sandik.html#1943-02-genel`
  doğrudan bağlantısı): rapor bunları ayrıntılı anlatıyor ve birim testleri (`kronoloji`,
  `partininSecimleri`, `donemBul` — 52/52 PASS) bu davranışı destekleyen alt yapıyı doğruluyor,
  ama ben kendim tarayıcıda açıp piksel piksel doğrulamadım. Kanıt var (test PASS + ayrıntılı
  rapor), tam bağımsız doğrulama yok.
- **1934/1938/1942 yerel seçimlerinin gerçekten tarihsiz kaldığı** (yani uygulayıcının
  bulamadığı bir tarih olmadığı): kısa bir örneklem taramasında ben de gün/ay düzeyinde bir
  tarih bulamadım, ama bu konuda kapsamlı bir arşiv taraması (TBMM ZC) yapmadım — raporun
  "bulunamadı" sonucunu inandırıcı buluyorum ama %100 doğrulamadım.

## Genel değerlendirme

Bu, örneklem denetimi son derece yüksek bir doğrulukla geçen bir veri turu: TÜİK PDF'inden,
TBMM hükümetler cildinden ve iki bağımsız haber/akademik kaynaktan çektiğim her rakam ve
tarih, `veri/sandik.js`'e yazılanla birebir örtüştü. Uydurma bir değere rastlamadım.
Bulunan iki "Important" bulgu, veri **yanlışlığı** değil, **belgeleme eksikliği** (1923'ün
ikinci kaynağı defterde yok) ve **şeffaf ama inşa edilmiş bir tarih** (1923'ün günü) —
ikisi de kolayca düzeltilebilir ve ikisi de zaten kullanıcı onayına sunulmuş ya da tek
satırlık bir defter güncellemesiyle kapatılabilir. Envanter kararları (ara seçim yok,
1934/1938/1942 dışlandı) iyi gerekçelendirilmiş ve doğrulamamla tutarlı.
