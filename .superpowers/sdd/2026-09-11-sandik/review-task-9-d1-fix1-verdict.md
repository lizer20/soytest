# İnceleme hükmü: task-9-d1-fix1 (dar kapsam, düzeltme turu 1)

Kapsam: `review-task-9-d1-fix1.md`'deki fark (`dda3703`) ile kapatılması istenen dört bulgu (F1–F4)
ve kullanıcının bu turda ayrıca sorduğu iki nokta ((a), (b)). Tüm sayılar, uygulayıcının sözüne
değil, birincil kaynağın kendisine (TBMM seçim sorgusu canlı sayfası, TÜİK Tablo 23 PDF s.43,
Yılmaz 2010 ve Göktürk Çetinkaya & Vural 2024 makalelerinin `pdftotext` çıktısı) bakılarak
doğrulandı. `node --check`, `node --test`, `node araclar/dogrula.js` bağımsız olarak yeniden
çalıştırıldı: 54/54 test PASS, `dogrula.js` "hata yok" (12 uyarı, hepsi beklenen).

## F1 — 1950 dp46/chp23 oy değerleri (Critical)

**ADDRESSED.** `veri/sandik.js:130` artık `dp46: oy 4241393`, `chp23: oy 3176561` — kaynak
defterinin "TBMM+Olgun esas alındı" kararıyla birebir uyumlu. TBMM seçim sorgusu
(`p_secim_yili=1950`) canlı olarak yeniden açıldı ve sayfa şu anda **DP 4.241.393 (%52,68), CHP
3.176.561 (%39,45), BAĞIMSIZ 383.282 (%4,76), MP 250.414 (%3,11)** veriyor — koddaki dört değerin
dördü de birebir eşleşiyor. Reddedilen TÜİK "ortalama oy" satırı (4.391.694 / 3.148.626 / 368.537)
artık hiçbir yerde kullanılmıyor.

## F2 — 1954-05-genel DP sandalyesi (Important)

**ADDRESSED.** `veri/sandik.js:154`'te `dp46: sandalye 503`. TÜİK *Milletvekili Genel Seçimleri
1923–2011* Tablo 23, PDF s. 43 (basılı s. 25) `pdftotext -f 43 -l 43 -layout` ile yeniden okundu:
DP satırının "C" (Milletvekili sayısı) sütunu 1950/1954/1957 için `416 / 503 / 424` veriyor —
1954 değeri **503**, defterin iddiasıyla birebir. İkinci kaynak Ensar Yılmaz (2010) makalesi
(`dergipark.org.tr/en/download/article-file/186769`) yeniden indirilip `pdftotext` ile okundu,
satır 434: *"541 mebusluktan 504'ünü Demokrat parti, 31 ini CHP 5'ini CMP, 1'ini de bağımsız aday
kazanmıştı."* — 504, birebir alıntı doğru. Fark %0,199 (yeni %0,5 eşiğinin altında) → "eşleşti"
sayılıp defterde "Uyuşmazlık: 503 vs 504 (%0,199)" olarak işlendi; birincil (TÜİK) sayısı yazıldı.
Kayıt artık uyuşmazlık notu taşıyor — bulgu kapatıldı.

## F3 — 1951-09-ara sandalyeSayisi (Important)

**ADDRESSED.** `veri/sandik.js:147`'de `sandalyeSayisi: null`. Kaynak makale (Göktürk Çetinkaya &
Vural, 2024, `dergipark.org.tr/tr/download/article-file/3876384`) yeniden indirilip `pdftotext`
ile okundu; dipnot 4 birebir doğrulandı: *"Arcayürek ara seçimlerin 22 şehirde ve 22
milletvekilliği için yapıldığını söylemektedir. Cumhuriyet'te ise 19 ilde 21 milletvekilliği için
ara seçim olacağına dair bir haber görülmektedir... Bkz. Arcayürek, 1983: 243; Cumhuriyet,
13.08.1951: 4."* — üç rivayet (17/20 ana metin, 19/21 Cumhuriyet, 22/22 Arcayürek) gerçekten var
ve aralarındaki fark (%5–%10) yeni %0,5 eşiğini açıkça aşıyor; makale bunlardan birini resmî
olarak damgalamıyor. `null` yapılması ve `bolge:"17 il"`in (en sık atıf, ama kesin değil)
korunması doğru; kayıt silinmedi, `not` alanı belirsizliği açıkça anlatıyor.

## F4 — MP/CMP ayrımı (Important)

**ADDRESSED.** `veri/sandik.js:154,165`'te 1954/1957 CMP satırları artık
`ad:"Cumhuriyetçi Millet Partisi"`; 1950 MP satırı (`sandik.js:130`) `parti:"mp48"` olarak kaldı.
TÜİK Tablo 23'ün aynı sayfasında (yukarıdaki `pdftotext` çıktısı) CMP ve Millet Partisi gerçekten
**iki ayrı veri satırı**: CMP satırı `A: -, 480249, 604087` / `C: -, 5, 4` (1954/1957), Millet
Partisi satırı ise `A: 368537, -, -, -, 582704, 292961, 62377` / `C: 1, -, -, -, 31, 6, -`
(1950/1965/1969/1973) — birbirinden bağımsız, üst üste binmeyen satırlar. `veri/partiler.js`
kontrol edildi: CMP ve Hürriyet Partisi için yeni bir soyağacı düğümü **eklenmemiş** (66 kart
sınırı korunmuş); `progress.md` satır 99'da "soyağacına eklenecek partiler biriktirilir, veri
bitince tek seferde önerilir" kararı kayıtlı — CMP bu listede.

## (a) 1950 MP (250.414) ve Bağımsız (383.282) oy değerleri — tek kaynak

**Hüküm: `null` olmalıydı, mevcut hali kural ihlali.** Brief'in kendi "Kesin kurallar" bölümü
("Her sayı: bir resmî kaynak [B] + eşleşen ikinci kaynak. Eşleşmezse ve üçüncü kaynak çözmezse
`null`.") ve kullanıcının bu turki %0,5 kararı birbirinden ayrı kurallar: %0,5 eşiği **iki kaynak
bulunduğunda** aralarındaki farkı nasıl yorumlayacağını söylüyor, "ikinci kaynak hiç yoksa da
sayı yazılabilir" demiyor. Olgun (2010) MP ve Bağımsız için yalnızca sandalye (1, 9) veriyor, oy
sayısı vermiyor — bu iki alan için gerçekten **sıfır ikinci kaynak** var, "eşleşmeyen iki kaynak"
değil. Üstelik `Bağımsız.oy` bu turda **gerilemiş**: fix1 öncesinde (commit 878a609) doğru şekilde
`null`'du, bu düzeltme turunda TBMM'nin tek kaynaklı sayısıyla (383.282) dolduruldu — kuralın
tam da önlemeye çalıştığı şeyi bu tur kendisi yaptı. Uygulayıcı bunu raporunda dürüstçe itiraf
edip "kullanıcı kararı gerekebilir" diye işaretlemiş (rapor §5–6); ama kendi ürettiği fark
paketinde bunu düzeltmemiş. Önerim: `mp48.oy` ve `Bağımsız.oy` (1950-05-genel) `null`'a çevrilsin,
ya da kullanıcı bilinçli olarak "TBMM tek başına yeterli resmî kaynak" istisnasını onaylasın.

## (b) 1954 Bağımsız sandalyesi — neden 541'e tamamlanmıyor

**Hüküm: gerekçeli, kaybolan bilinen bir değer değil.** TÜİK Tablo 23 sayfasında (aynı
`pdftotext` çıktısı) 1954 için ayrı bir "Bağımsız" satırı **yok** — DP(503)+CHP(31)+CMP(5)=539
kalanı (541-539=2) TÜİK'in kendi tablosunda yazılı bir rakam değil, uygulayıcının çıkardığı bir
**aritmetik ima**. Buna karşılık Yılmaz (2010) açıkça "1'ini de bağımsız aday kazanmıştı" diyor —
bu, TÜİK'in ima ettiği "2" ile aynı alan için **doğrudan çelişen, gerçek bir ikinci iddia** (fark
%100, yeni eşiğin çok üstünde). Bu tam olarak turun geri kalanında DP/CHP/CMP oy sayılarına
uygulanan "üçüncü kaynak yoksa null" mantığının aynısı; validator (`araclar/dogrula.js:69-73`)
zaten bir `sonuc` öğesinin `sandalye:null` olduğu durumlarda meclis-toplamı denetimini atlıyor
(tasarım gereği), yani bu temsil biçimi kod tabanında zaten desteklenen bir örüntü. `not` alanı
belirsizliği ("503+31+5'ten geriye kalan 2, Yılmaz'a göre 1... kesinleştirilemedi") doğru ve
dürüst anlatıyor. Daha güçlü bir alternatif yorum ("2, TÜİK'in resmî meclis toplamından
sourced olduğu için kabul edilebilir") savunulabilir olsa da, mevcut `null` seçimi kuralın tutarlı
uygulanması, bir hata değil.

## Fark dışı gözlemler (kapsam dışı, yeni bulgu değil)

- 1955 yerel seçimi ve 1947–1949 ara seçimlerinin eksikliği — bu diff'te değişmedi, zaten
  bilinen ve Görev 12'ye bırakılmış bir sınır (`progress.md:99`).
- Hükümet 19–23 tarihlerinin Cilt 2 ile yeniden doğrulanması — bu diff'te bir düzeltme değil,
  var olan (zaten doğru) tarihlerin ikinci kez teyidi; tarihler değişmedi.
- TBMM'nin 1954 ve 1957 sayfalarında ayrıca bir "BAĞIMSIZ" oy satırı var (1954: 137.318 / %1,54;
  1957: 4.994 / %0,05) — kod bu alanları zaten `oy:null` bıraktığı için bir tutarsızlık
  doğurmuyor, sadece bilgi notu.

## Özet

F1–F4 dördü de birincil kaynağın kendisinde doğrulandı ve kapatılmış durumda. Turun kendi
ürettiği tek yeni sorun, (a)'da tespit edilen **1950 Bağımsız oy alanının gerilemesi** — önceki
turda doğru şekilde `null` iken bu turda tek kaynaklı bir sayıyla dolduruldu, kuralın açık
ihlali. (b) ise kuralın doğru uygulanmış hali, yeni bir sorun değil.
