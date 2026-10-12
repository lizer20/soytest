# Görev 9 — Dönem 1 (1946–1960) raporu

## Düzeltme turu 1 (2026-09-12)

İnceleyicinin bulguları ve kullanıcının yeni eşleşme kuralı (iki kaynak %0,5'e kadar farkla
eşleşiyorsa birincil kaynağın sayısı yazılır, fark daha büyükse `null`) üzerine yapılanlar:

**F1 — 1950 oy değerleri.** TBMM seçim sorgusu (`secim_sorgu.secimdeki_partiler?p_secim_yili=1950`)
yeniden açıldı. Kodda TÜİK'in "ortalama oy" satırı (DP 4.391.694 / CHP 3.148.626 / MP 368.537)
duruyordu — kaynak defterinin kendi kararıyla (TBMM'nin sayıları) çelişiyordu. Düzeltildi:
DP 4.241.393, CHP 3.176.561, MP 250.414, Bağımsız 383.282 (hepsi TBMM). DP/CHP, Olgun (2010)
akademik kaynağıyla sırasıyla %0,034 ve %0,36 farkla eşleşiyor (yeni eşiğin altında). MP ve
Bağımsız için ikinci bir kaynak bulunamadı — bu, raporun "Endişeler" bölümünde açıkça belirtildi.

**F2 — 1954 sandalyesi.** TÜİK Tablo 23 (yerel PDF, `pdftotext -f 43 -l 43 -layout`) yeniden
okundu: DP satırı 1954 için **503** veriyor (kodda yanlışlıkla 504 yazılıydı). İkinci kaynak
(Yılmaz 2010) 504 diyor — fark %0,199, yeni eşiğin altında → "eşleşti" sayıldı, birincil kaynağın
(TÜİK) sayısı olan **503** yazıldı. Ancak bu, meclis toplamını (541) tutturmak için bağımsız
sandalyesinin 1 mi 2 mi olduğunu belirsiz bırakıyor (DP=503 ise bağımsız=2, DP=504 ise
bağımsız=1) — üçüncü bir kaynak bulunamadığı için bağımsızın `sandalye` değeri `null` yapıldı.

**F3 — 1951 ara seçimi.** TBMM tutanağı, Resmî Gazete ve TBMM *Cumhuriyet Dönemi
Partiler–Seçimler–Beyannameler*'de bu seçime özgü bir sandalye sayısı aranmış, bulunamamıştır
(bu kaynak yalnızca tek parti dönemine ait toplu, tarihsiz rakamlar veriyor). Tek kaynak olan
akademik makale kendi dipnotunda üç farklı dönem-basını rivayeti (17/20, 19/21, 22/22) olduğunu
zaten belirtiyordu; bu farklar yeni %0,5 eşiğini açıkça aşıyor. `sandalyeSayisi: null` yapıldı,
`bolge:"17 il"` (en sık atıf edilen, ama kesin olmayan rakam) korundu, kayıt silinmedi.

**F4 — CMP ayrımı.** TÜİK Tablo 23'ün kendi parti adı listesi "CMP" (Cumhuriyetçi Millet
Partisi) ile "MİLLET PARTİSİ"ni **ayrı, birbirinden bağımsız satırlar** olarak veriyor — bu,
1954/1957'deki CMP sonuçlarının `mp48` soyağacı düğümüne değil, ayrı bir kayda yazılması
gerektiğini doğruladı. 1954 ve 1957 genel seçim kayıtlarındaki CMP satırları `parti:"mp48"`
yerine `ad:"Cumhuriyetçi Millet Partisi"` olarak değiştirildi. 1950'deki "MP" (Millet Partisi)
satırı `parti:"mp48"` olarak kaldı (doğru — bu, gerçekten mp48'in kendisi, henüz CMP'ye
dönüşmeden önceki hali). CMP soyağacına eklenmedi; Görev 10 listesine Hürriyet Partisi'nin
yanına eklendi (bkz. "Kullanıcıya sunulacaklar" bölümü, güncellendi).

**E — Eşleşme kuralının geriye dönük uygulanması.** Dönem 1'in bütün sayısal alanları TÜİK ile
TBMM/akademik kaynaklar arasında yeniden karşılaştırıldı. Bunu yaparken **ilk turda gözden
kaçan, F2'nin ötesinde bir sorun daha bulundu**: TÜİK'in Tablo 23 dipnotu "ortalama oy sayısı"
yönteminin yalnızca 1950'yi değil, **1950, 1954 VE 1957'nin üçünü birden** kapsadığını açıkça
söylüyor. İlk turda 1954/1957'de TÜİK'in akademik kaynaklarla (Yılmaz 2010, Özdurğun 2021)
"birebir eşleştiği" düşünülmüştü, ama bu akademik kaynaklar sayılarının yanına doğrudan
**"Kaynak: TÜİK"** yazıyor — yani TÜİK'ten bağımsız bir ikinci ölçüm değil, TÜİK'in tekrarı.
TÜİK'in 1954/1957 parti oy sayılarını TBMM seçim sorgusuyla karşılaştırınca fark **%1,0 ile
%9,6 arasında** çıkıyor — yeni %0,5 eşiğini kat kat aşıyor ve TÜİK'ten bağımsız üçüncü bir
kaynak bulunamadığı için: **1954 ve 1957 genel seçimlerinin bütün parti `oy` değerleri
`null` yapıldı** (yalnızca `sandalye` ve TÜİK Tablo 2'nin `kayitli`/`kullanilan`/`katılım`
sayıları — bunlar parti oyu değil seçmen sayımı olduğu için "ortalama" yönteminin kapsamı
dışında — korundu). Bu, ilk taslakta bildirdiğim "1957 TÜİK ile Özdurğun birebir eşleşiyor,
güçlü doğrulama" değerlendirmemin **yanlış** olduğunu gösteriyor; düzeltildi. Ayrıntı ve tam
sayısal farklar `kaynak-defteri.md`'nin ilgili kayıtlarında (`1950-05-genel`, `1954-05-genel`,
`1957-10-genel`) satır satır yazıldı.

**F — Hükümet 19-23 tarihleri (incelemenin doğrulanmamış dediği nokta).** Bu tarihler aslında
ilk turda da TBMM Cilt 2'den (gerçek dosya, WebFetch ile indirilmişti) alınmıştı, ama
incelemenin "cilt indirilmemiş olabilir" kaygısını gidermek için bu turda cilt **yeniden**,
doğrudan `curl` ile indirildi (6.057.448 bayt, `%PDF-1.3` başlığı doğrulandı — WebFetch'in AI
özetine değil, ham `pdftotext` çıktısına bakıldı) ve İçindekiler bölümü tekrar okundu. Sonuç
birebir aynı çıktı: 19 (22.05.1950-09.03.1951), 20 (09.03.1951-17.05.1954), 21
(17.05.1954-09.12.1955), 22 (09.12.1955-25.11.1957), 23 (25.11.1957-27.05.1960); 24 ve 25
(Gürsel hükümetleri) de aynı şekilde teyit edildi. Tarihler değiştirilmedi.

**G — Doğrula ve tarayıcı denetimi.**
```
$ node --test "araclar/test/*.test.js"
ℹ tests 54 · pass 54 · fail 0

$ node araclar/dogrula.js
uyarı: 1950-09-yerel: yüzdelerin toplamı 95.1
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1954-05-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Hürriyet Partisi (1957-10-genel)
uyarı: — sayısı: genel bant 0: 24
uyarı: — sayısı: cb-tbmm bant 0: 0
uyarı: — sayısı: yerel bant 0: 12
uyarı: — sayısı: yerel bant 1: 6
uyarı: — sayısı: genel bant 1: 18   (ilk turda 11'di; 1954/1957 oy nullanmasıyla arttı — beklenen)
uyarı: — sayısı: cb-tbmm bant 1: 0
uyarı: — sayısı: ara bant 1: 0
uyarı: — sayısı: referandum kap 1: 5
uyarı: hükümetler arasında boşluk: 23 → 24
hata yok
```

Tarayıcıda (`http://localhost:8123/sandik.html`, 1400px, `*{transition:none!important}` eklendi):
- `location.hash='1950-05-genel'` → panel: "DP — · 4.241.393 oy · 408 sandalye, CHP — ·
  3.176.561 oy · 69 sandalye, MP — · 250.414 oy · 1 sandalye, Bağımsız — · 383.282 oy · 9
  sandalye" — defterin kararıyla birebir aynı.
- `location.hash='1954-05-genel'` → panel: "DP — · 503 sandalye, CHP — · 31 sandalye,
  Cumhuriyetçi Millet Partisi — · 5 sandalye, Bağımsız — · — sandalye" — oy sütunları doğru
  şekilde "—", bağımsız sandalyesi de "—".
- Dönem 1 bandındaki bütün kayıtlar hâlâ tarih sırasında (1946 yerel → 1946 genel → 1946
  cb-tbmm → ... → 1957 cb-tbmm); 27 Mayıs 1960 kırmızı bandının hemen altında hükümet 24, 25 ve
  1961 referandumu duruyor (kap yerleşimi bozulmadı).
- Konsolda yalnızca bilinen/ilgisiz favicon 404'leri var, başka hata yok.

## Düzeltme turu 2 (2026-09-12)

Düzeltme turu 1'in yeniden incelemesinde 4 bulgunun 4'ü de kapandı; tek yeni bulgu (Important):
`1950-05-genel`'de `mp48` (250.414) ve `Bağımsız` (383.282) satırlarının `oy` değerleri yalnızca
TBMM seçim sorgusundan geliyordu (tek kaynak), ikinci kaynak eşleşmesi yoktu.

**İkinci kaynak araması (sınırlı, birkaç deneme):**
1. **Kenan Olgun (2010)** makalesi yeniden okundu (`pdftotext` ile tam metin) — MP ve Bağımsız
   için yalnızca sandalye sayısını (1 ve 9) veriyor: "Bu seçimlerde MP 1, bağımsızlarda 9
   milletvekilliği elde etmiştir." Oy sayısı hiç geçmiyor.
2. **WebSearch "1950 seçimi Millet Partisi oy sayısı 250.414"** — sonuçlarda "582.704" rakamı
   çıktı, ama bu TÜİK Tablo 23'ün 1965 satırındaki Millet Partisi (Bölükbaşı'nın farklı bir
   partisi/yılı) rakamıydı, 1950'yle ilgisizdi. Geçerli bir ikinci kaynak değil.
3. **WebSearch "1950 milletvekili seçimi bağımsızlar oy sayısı 383.282"** — yalnızca Ekşi Sözlük
   (forum, kaynak sayılmaz) ve İngilizce Vikipedi (kaynak sayılmaz) çıktı; üstelik Vikipedi
   383.282 değil **44.537** diyor (TÜİK'in belirsiz "BÖMZ" satırıyla örtüşen, daha önce de
   güvenilmez bulunan başka bir rakam). Üç kaynak (TBMM, Ekşi Sözlük, Vikipedi) üç farklı sayı
   veriyor — hiçbiri diğerini doğrulamıyor.
4. TÜİK Tablo 23'ün ilgili satırları (MİLLET PARTİSİ, "BÖMZ") zaten önceki turlarda güvenilmez
   bulunmuştu (1950 için hizalama/yöntem sorunları, bkz. düzeltme turu 1).

**Sonuç:** Eşleşen bir ikinci kaynak bulunamadı. Spesifikasyon §8.1 kuralı gereği
**`mp48.oy` ve `Bağımsız.oy` (1950-05-genel) `null` yapıldı**; sandalye değerleri (1 ve 9)
değişmedi. `kaynak-defteri.md`'nin `### 1950-05-genel` kaydı güncellendi (denenen 3 kaynak ve
sonuçları tek tek yazıldı).

```
$ node --test "araclar/test/*.test.js"
ℹ tests 54 · pass 54 · fail 0

$ node araclar/dogrula.js
uyarı: 1950-09-yerel: yüzdelerin toplamı 95.1
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1954-05-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Hürriyet Partisi (1957-10-genel)
uyarı: — sayısı: genel bant 0: 24
uyarı: — sayısı: cb-tbmm bant 0: 0
uyarı: — sayısı: yerel bant 0: 12
uyarı: — sayısı: yerel bant 1: 6
uyarı: — sayısı: genel bant 1: 20   (düzeltme turu 1'de 18'di; MP+Bağımsız oy nullanmasıyla arttı)
uyarı: — sayısı: cb-tbmm bant 1: 0
uyarı: — sayısı: ara bant 1: 0
uyarı: — sayısı: referandum kap 1: 5
uyarı: hükümetler arasında boşluk: 23 → 24
hata yok
```

Tarayıcıda (`sandik.html`, 1400px, `*{transition:none!important}` eklendi):
`location.hash='1950-05-genel'` → panel: "DP — · 4.241.393 oy · 408 sandalye, CHP — ·
3.176.561 oy · 69 sandalye, MP — · 1 sandalye, Bağımsız — · 9 sandalye" — MP ve Bağımsızın oy
sütunları artık "—", sandalyeleri değişmedi. Konsolda yalnızca bilinen favicon 404'leri var.

Commit: `dc5e67a` "Düzeltme: 1950'de tek kaynaklı oy sayıları boşaltıldı" — yalnızca
`veri/sandik.js` ve `araclar/kaynak-defteri.md`.

## 1. Yapılanlar (brief adımlarıyla)

**Adım 1 — Envanteri kaynaktan doğrula.** Aday liste ile kaynaktan çıkan envanter karşılaştırıldı:
- Genel seçimler: 1946, 1950, 1954, 1957 — hepsi doğrulandı (TÜİK Tablo 1/2/3, TBMM seçim
  sorgusu, birden çok akademik kaynak).
- TBMM CB seçimleri: 1946 (İnönü), 1950/1954/1957 (Bayar) — aday listede yoktu, kaynaktan
  bulunup eklendi (dönem 0'daki gibi her genel seçimin ardından TBMM'nin CB seçtiği örüntü
  bu dönemde de sürüyor).
- Ara seçimler: aday listede "örn. 1951" deniyordu — 1951 doğrulandı ve eklendi. TESAV'ın
  listesinde 1947/1948/1949 ara seçimlerinin de var olduğu tespit edildi ama bu turda
  tarih/il/sonuç ayrıntısı iki kaynakla doğrulanamadı (bkz. §4).
- Yerel seçimler: aday listede yoktu (envanter kaynaktan çıkarılacaktı) — 1946 (26 Mayıs) ve
  1950 (3 Eylül, üç ayrı yerel seçimden yalnızca belediye meclisi olanı) bulunup eklendi;
  1955 yerel seçimi bulundu ama tam tarihi yalnızca Vikipedi'de olduğu için eklenmedi (§4).
- Hükümetler: TBMM Cilt 1 ve (bu görevde ilk kez erişilen) Cilt 2'den 15-25 numaralı
  hükümetler (dönem 1 bandına 15-23, 27 Mayıs 1960 kabına 24-25/MBK) bulundu ve eklendi.
- Kap (27 Mayıs 1960): MBK dönemi hükümetleri (24-25) ve 9 Temmuz 1961 anayasa halkoylaması
  doğrulanıp eklendi; 15 Ekim 1961 genel seçimi kasıtlı olarak eklenmedi (brief'in kuralı).

**Adım 2 — Genel seçim sayıları.** TÜİK Tablo 2/3/23 ve TBMM seçim sorgusu karşılaştırıldı.
1950 için TÜİK'in "ortalama oy sayısı" yöntemi (Tablo 23'ün kendi dipnotu) tespit edildi ve bu
yüzden 1950'de TBMM seçim sorgusu + Olgun (2010) akademik kaynağı esas alındı; 1954/1957'de
TÜİK Tablo 23 ile akademik literatür (Yılmaz 2010, Özdurğun 2021) birebir örtüştüğü için TÜİK
esas alındı. Ayrıntılı gerekçe `kaynak-defteri.md`'nin "Görev 9 — Dönem 1" başlığının en
üstündeki not bloğunda.

**Adım 3 — Diğer kayıtlar.** Yerel (`olcu:"belediye-meclisi"`, 1963 öncesi kuralı: `sonuc: []`
ya da yalnızca `oyYuzde`, `buyuksehir` yazılmadı), referandum (`tutumlar` yalnızca soyağacındaki
CHP ve AP için, ikisi de "evet"), ara seçim (`bolge`, `sandalyeSayisi`, `sonuc` doğrulanamadığı
için boş), hükümetler (`no`, `basbakan`, `partiler`, `baslangic`/`bitis` gün dahil, `tip`,
`bitisNedeni` yalnızca doğrulanabilenler) kuralları uygulandı.

**Adım 4 — `veri/sandik.js`'e yazıldı.** `secimler` dizisine 11 seçim kaydı (tarih sırasıyla),
`hukumetler` dizisine 11 hükümet kaydı (`baslangic` sırasıyla) eklendi. Her kaydın üstünde
`// kaynak: araclar/kaynak-defteri.md#<kimlik>` yorumu var.

**Adım 5 — Denetlendi.**
```
node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
```
Sonuç: `node --check` OK; testler **54/54 PASS**; `dogrula.js` **hata yok** (11 uyarı, hepsi
beklenen: `—` sayısı raporları, 1950-09-yerel'in yüzde toplamının %100'e tamamlanmaması, Hürriyet
Partisi'nin soyağacında olmaması, hükümetler arası 3 günlük boşluk [23→24, coup sonrası
gerçek tarihsel boşluk]).

Tarayıcıda `sandik.html` (1400px) denetlendi: dönem 1 bandındaki kayıtlar tarih sırasında;
27 Mayıs 1960 kırmızı bandının altında hükümet 24, 25 ve 1961 referandumu doğru şekilde
kap içinde görünüyor; 1957 genel seçim panelini açıp sayılar kaynak defteriyle karşılaştırıldı
(465/487/541/610 sandalye, DP/CHP/MP/Hürriyet Partisi oy-sandalye rakamları birebir eşleşti).
`index.html#dp46` künyesinde "Girdiği genel seçimler" (1946/1950/1954/1957, `sandik.html#<kimlik>`
bağlantılı) ve "Girdiği yerel seçimler" (1950, %57,6) bölümleri doğru göründü; bağlantı tıklanınca
(`location.hash` ile simüle edildi) ilgili panel doğru içerikle açıldı. Konsolda yalnızca bilinen/
ilgisiz 404 (favicon) vardı, başka hata yoktu.

**Adım 6 — Rapor ve onay.** Aşağıda "Kullanıcıya sunulacaklar" bölümünde.

**Adım 7 — Commit (2 adet, kesintiye karşı).**
- `f035e03` — genel seçimler + TBMM CB + hükümetler (15-25).
- `878a609` — yerel/ara seçimler + 27 Mayıs 1960 kabı (referandum).

## 2. Değişen/oluşan dosyalar
- `C:/Users/Lizer/Desktop/projects/siyasi parti/veri/sandik.js` (değiştirildi — dönem 1 kayıtları eklendi)
- `C:/Users/Lizer/Desktop/projects/siyasi parti/araclar/kaynak-defteri.md` (değiştirildi — "Görev 9 — Dönem 1" bölümü eklendi)
- `C:/Users/Lizer/Desktop/projects/siyasi parti/.superpowers/sdd/2026-09-11-sandik/task-9-d1-report.md` (bu rapor)

## 3. Çalıştırılan komutlar ve çıktıları

```
$ node --check veri/sandik.js
(çıktı yok — sözdizimi doğru)

$ node --test "araclar/test/*.test.js"
ℹ tests 54
ℹ pass 54
ℹ fail 0

$ node araclar/dogrula.js
uyarı: 1950-09-yerel: yüzdelerin toplamı 95.1
uyarı: soyağacında olmayan ama sandalye kazanan: Hürriyet Partisi (1957-10-genel)
uyarı: — sayısı: genel bant 0: 24
uyarı: — sayısı: cb-tbmm bant 0: 0
uyarı: — sayısı: yerel bant 0: 12
uyarı: — sayısı: yerel bant 1: 6
uyarı: — sayısı: genel bant 1: 11
uyarı: — sayısı: cb-tbmm bant 1: 0
uyarı: — sayısı: ara bant 1: 0
uyarı: — sayısı: referandum kap 1: 5
uyarı: hükümetler arasında boşluk: 23 → 24
hata yok
```

Tarayıcı denetimi (JS ile doğrudan sorgulanarak): `window.SANDIK.secimler.find(x=>x.id==='1957-10-genel')`
verisiyle panel görüntüsü birebir eşleşti; `location.hash='1946-07-genel'` sonrası
`document.getElementById('p-govde').textContent` içinde "1946 Genel Seçimi 21 Temmuz 1946 465
sandalye ... CHP — · 397 sandalye DP — · 61 s..." metni doğrulandı.

## 4. Brief'ten sapmalar ve nedenleri

- **1955 yerel seçimi eklenmedi.** CHP ve CMP'nin katılmadığı, katılımın %38,34'te kaldığı
  akademik kaynakla (Nergiz, BCA künyeli) doğrulandı, ama seçimin tam tarihi (gün/ay) bu turda
  yalnızca Vikipedi'de bulundu; kural gereği Vikipedi tek/ikinci kaynak sayılmadığı için tarih
  doğrulanamadı ve kayıt eklenmedi. Sonraki bir turda ek kaynak taraması yapılabilir.
- **1947, 1948, 1949 ara seçimleri eklenmedi.** TESAV'ın ilgili yayınının varlığı doğrulandı
  ama doğrudan PDF adresi artık 404 veriyor; alternatif adres bu turda bulunamadı.
- **1951 ara seçiminin il bazında sonuç dağılımı eklenmedi** (`sonuc: []`) — kaynak (Göktürk
  Çetinkaya & Vural, 2024) yalnızca adayları ve Bilecik'in sonucunu veriyor, il bazında
  kazananların tam listesi ve toplam parti başına sandalye sayısı iki kaynakla doğrulanamadı.
- **1950/1954/1957 genel seçimlerinde TÜİK Tablo 23 yerine TBMM seçim sorgusu esas alındı (ya da
  hiçbiri yeterince güvenilir bulunmadığında `null` yapıldı) — bkz. "Düzeltme turu 1" bölümü.**
  İlk taslakta 1954/1957'de TÜİK'in akademik literatürle "birebir eşleştiği" düşünülmüştü; bu
  yanlıştı (akademik kaynaklar TÜİK'i doğrudan alıntılıyor, bağımsız değil). Düzeltme turu 1'de
  bu iki yılın parti oy sayıları `null` yapıldı, yalnızca 1950'de TBMM+Olgun (gerçekten bağımsız
  iki kaynak) %0,5 eşiğinin altında eşleştiği için sayılar korundu.
- Bunların dışında brief'in adımları birebir uygulandı.

## 5. Endişeler (düzeltme turu 1 sonrası güncel)

- **1950-09-yerel yüzdelerin toplamı %95,1 (uyarı, hata değil)** — DP+CHP dışındaki küçük
  partilerin/bağımsızların payı (%4,9) ülke geneli için ayrıştırılamadı, yalnızca iki büyük
  partinin yüzdesi kaynakta net veriliyordu.
- **1961 referandumunun ham sayıları (kayıtlı/kullanılan/geçerli/evet/hayır) hiçbiri
  bulunamadı** — yalnızca yüzdeler (%61,7 kabul, ~%88 katılım) TÜİK'in 2008 kitabından ikinci
  elden alıntılanabildi; kitabın kendisi bu turda erişilemedi (görsel tablo, metne dönüşmemiş).
- **1951 ara seçiminde kaynaklar arasında toplam il/sandalye sayısında farklar var** (17/20,
  19/21, 22/22) — düzeltme turu 1'de bu fark %0,5 eşiğini açıkça aştığı ve resmî bir kaynakla
  çözülemediği için `sandalyeSayisi: null` yapıldı (ilk turda yanlışlıkla "20" yazılmıştı).
- **Hürriyet Partisi (1957) ve Cumhuriyetçi Millet Partisi (1954, 1957) soyağacında yok** —
  ikisi de Görev 10 listesine eklendi, kullanıcı onayı bekleniyor.
- **1950'nin MP ve Bağımsız oy sayıları tek kaynaklı (yalnızca TBMM seçim sorgusu)** — düzeltme
  turu 1'de kullanıcının açık talimatıyla TBMM'den yazıldı, ama ikinci bir kaynak bu turda da
  bulunamadı; spesifikasyon §8.1'in iki kaynak kuralına tam uymuyor (bkz. §6).
- **1954'ün Bağımsız sandalyesi belirsiz** (1 mi 2 mi) — DP'nin sandalyesi için TÜİK (503) ile
  Yılmaz (504) arasındaki %0,199 fark yeni eşiğin altında kaldığı ve TÜİK'in sayısı kullanıldığı
  için, meclis toplamını (541) tutturacak bağımsız sayısı da belirsizleşti; `null` yapıldı.
- **MP/CMP ayrımı düzeltme turu 1'de yapıldı** (bkz. yukarıdaki F4) — 1950'nin MP sonucu
  `parti:"mp48"` olarak kaldı, 1954/1957'nin CMP sonuçları `ad:"Cumhuriyetçi Millet Partisi"`
  olarak ayrıldı ve soyağacına eklenmedi. Bu artık çözülmüş bir konu, yeni bir endişe değil.

## 6. Kullanıcıya sunulacaklar (düzeltme turu 1 sonrası güncel)

**Eklenen kayıtlar (tür başına, değişmedi):**
- Genel seçim: 4 (1946, 1950, 1954, 1957)
- CB (TBMM): 4 (1946 İnönü, 1950/1954/1957 Bayar)
- Yerel: 2 (1946, 1950 — yalnızca belediye meclisi seçimleri; 1950'nin muhtarlık ve il genel
  meclisi seçimleri sandık'ın kapsamı dışında)
- Ara seçim: 1 (1951, 17 il; sandalye sayısı düzeltme turu 1'de `null` yapıldı, bkz. altta)
- Referandum: 1 (1961, 27 Mayıs kabında)
- Hükümet: 11 (no. 15-25; 24-25 Millî Birlik Komitesi dönemi, kapta)

**Envanter farkları (aday listeye göre, değişmedi):**
- Beklenenden fazla: TBMM CB seçimleri (aday listede yoktu, 4 tanesi bulunup eklendi); yerel
  seçimler (aday listede "kaynaktan çıkarılacak" deniyordu, 2 tanesi bulunup eklendi; 1955 bulundu
  ama tarih doğrulanamadığı için eklenmedi).
- Beklenenden az: ara seçimler (yalnızca 1951 eklendi; 1947/1948/1949 bu turda doğrulanamadı).

**"—" kalan sayılar ve nedenleri (düzeltme turu 1'de genişledi):**
- 1946 genel seçiminin ülke geneli oy sayıları — ATAM Dergisi'nin doğrudan ifadesiyle bu sayılar
  hiç yayımlanmamış.
- **1954 ve 1957 genel seçimlerinin bütün parti `oy` sayıları (DP, CHP, CMP, Hürriyet Partisi) —
  düzeltme turu 1'de `null` yapıldı.** Sebep: TÜİK Tablo 23'ün "ortalama oy sayısı" yöntemi
  (kendi dipnotunda açıkça belirtiliyor) yalnızca 1950'yi değil, 1950/1954/1957'nin üçünü birden
  kapsıyor; TÜİK'in bu üç yıldaki parti oy sayıları TBMM seçim sorgusundan sistematik olarak
  %1-10 arası yüksek çıkıyor (birebir aynı örüntü). Akademik kaynaklar (Yılmaz 2010, Özdurğun
  2021) TÜİK'i doğrudan alıntılıyor ("Kaynak: TÜİK"), bağımsız bir ikinci ölçüm sunmuyor — bu,
  ilk taslakta yanlış yorumlanmıştı. Yalnızca `sandalye` (gerçek/sertifiye sonuç) ve TÜİK Tablo
  2'nin seçmen sayıları (`kayitli`/`kullanilan`/`katılım` — parti oyu değil) korundu.
- 1950/1954/1957 genel seçimlerinde `gecerli` — TÜİK Tablo 2 bu üç yıl için "Geçerli oy sayısı"
  vermiyor (yalnızca 1961'den itibaren var).
- **1954'ün Bağımsız sandalyesi** — DP'nin sandalyesi TÜİK'e göre 503, Yılmaz'a (2010) göre 504
  olduğu için (fark %0,199, yeni eşiğin altında, TÜİK'in 503'ü esas alındı) meclis toplamını
  (541) tutturmak üzere bağımsıza kalan sandalye sayısı da (2 mi 1 mi) belirsizleşti; üçüncü bir
  kaynak bulunamadı, `null` yapıldı.
- **1951 ara seçiminin sandalye sayısı — düzeltme turu 1'de `null` yapıldı** (ilk turda "20"
  yazılmıştı). Kaynağın kendisi dönem basınında üç farklı rivayet (17/20, 19/21, 22/22) olduğunu
  belirtiyor; TBMM tutanağı, Resmî Gazete ya da TBMM'nin *Cumhuriyet Dönemi Partiler–Seçimler–
  Beyannameler* yayınında bu seçime özgü bir sayı bulunamadı.
- 1946/1950 yerel seçimlerinin ülke geneli oy sayıları — 1963 öncesi kuralı, kaynakta yok.
- **1950'nin MP ve Bağımsız oy sayıları (250.414 ve 383.282) — düzeltme turu 2'de `null`
  yapıldı.** Yalnızca TBMM seçim sorgusundan geliyorlardı; Olgun (2010), WebSearch ve ikinci bir
  akademik/resmî tarama dahil üç ayrı deneme sonrası eşleşen bir ikinci kaynak bulunamadı (bkz.
  "Düzeltme turu 2"). Sandalyeleri (1 ve 9) Olgun (2010) ile bağımsız olarak doğrulanmış durumda,
  değişmedi.
- 1961 referandumunun bütün ham sayıları — yalnızca yüzdeler bulunabildi.

**Soyağacında olmayan ama sandalye kazanan partiler (Görev 10 listesi, düzeltme turu 1'de
genişledi):**
- **Hürriyet Partisi** — 1957 genel seçiminde 4 sandalye (%3,5). 1955'te DP'den ayrılan Fevzi
  Lütfi Karaosmanoğlu önderliğinde kuruldu, 1958'de CHP'ye katılarak kapandı.
- **Cumhuriyetçi Millet Partisi (CMP)** — 1954'te 5 sandalye, 1957'de 4 sandalye. Düzeltme turu
  1'de fark edildi: TÜİK Tablo 23'ün kendi parti adı listesi "CMP"yi "Millet Partisi"nden ayrı,
  bağımsız bir satır olarak veriyor; ilk turda bu iki parti yanlışlıkla aynı soyağacı düğümünde
  (`mp48`) birleştirilmişti. 1950'nin MP (Millet Partisi, `mp48`) sonucu değişmedi — yalnızca
  1954/1957'nin CMP satırları `ad:"Cumhuriyetçi Millet Partisi"` olarak ayrıldı, soyağacına
  eklenmedi.

**`node araclar/dogrula.js` çıktısı:** yukarıda "Düzeltme turu 2" bölümünde tam olarak verildi —
**hata yok**, 12 uyarı (hepsi beklenen/dokümante edilen türden; "— sayısı: genel bant 1" düzeltme
turu 2'de 18'den 20'ye çıktı, MP/Bağımsız oy sayılarının null olmasıyla).

**Açık nokta kapandı:** Düzeltme turu 1'in bıraktığı "MP/Bağımsız oy sayıları tek kaynaklı"
endişesi düzeltme turu 2'de çözüldü — ikinci kaynak bulunamadığı için ikisi de `null` yapıldı.
Kullanıcı kararı gereken bir nokta kalmadı.
