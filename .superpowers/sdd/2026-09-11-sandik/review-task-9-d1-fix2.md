# İnceleme paketi: task-9-d1-fix2 (dda3703..HEAD)

## Commitler
```
dc5e67a Düzeltme: 1950'de tek kaynaklı oy sayıları boşaltıldı
```
## Özet
```
 araclar/kaynak-defteri.md | 26 ++++++++++++++++++--------
 veri/sandik.js            |  2 +-
 2 files changed, 19 insertions(+), 9 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index da0b39c..cb30637 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -586,49 +586,59 @@ arasındaki fark %0,5'i (aslında %1-10 aralığında, çok daha büyük) aştı
   Pazar... İsmet İnönü, Demokrat Parti adına İstanbul Milletvekili Mustafa Fevzi Çakmak ve Sinop
   Milletvekili Yusuf Kemal Tengirşenk aday gösterilmiştir... 388, Fevzi Çakmak'a 59, Yusuf Kemal
   Tengirşenk'e 2 oy verilmiş ve 2 oy da (boş)".
 - İkinci kaynak: Anadolu Ajansı, "1923'ten günümüze Cumhurbaşkanı seçimleri"
   (`aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629`) — tarih ve oy
   sayılarıyla birebir eşleşiyor (451 katılımcı, 388 oy).
 - Uyuşmazlık: yok.
 - Erişim: 2026-09-12.
 
 ### 1950-05-genel
+**Düzeltme turu 2 (2026-09-12) — MP ve Bağımsız `oy` değerleri `null` yapıldı (tek kaynaklı).**
 - Sonuç: 14 Mayıs 1950; DP 4.241.393 oy (%52,68) / 408 sandalye, CHP 3.176.561 oy (%39,45) / 69
-  sandalye, MP 250.414 oy (%3,11) / 1 sandalye, Bağımsız 383.282 oy (%4,76) / 9 sandalye (toplam
-  408+69+1+9=487=meclis ✓).
+  sandalye, MP 1 sandalye (oy sayısı `null`), Bağımsız 9 sandalye (oy sayısı `null`) — toplam
+  408+69+1+9=487=meclis ✓ (sandalyeler değişmedi).
 - **[B, düzeltme turu 1'de kod TEKRAR TBMM'nin sayılarına döndürüldü — ilk turda kaynak
   defterindeki karar doğruydu ama `veri/sandik.js`'e yanlışlıkla TÜİK'in "ortalama oy" satırı
   (DP 4.391.694 / CHP 3.148.626 / MP 368.537) yazılmıştı; bu turda TBMM seçim sorgusu sayfası
   yeniden açılıp kod düzeltildi]:** `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1950`
   — DP 4.241.393 (%52,68), CHP 3.176.561 (%39,45), Bağımsız 383.282 (%4,76), MP 250.414 (%3,11).
 - **İkinci kaynak (DP/CHP için): Kenan OLGUN (2010)**, aynı makale (bkz. dönem 0, "1923-1943 genel
   seçimleri" ortak blok künyesi) — "14 Mayıs 1950 Milletvekili seçimlerine... seçimlere toplam
   8.905.576 seçmenden 7.916.091'i katılmış olup katılım oranı %88,88 olmuştur. DP 4.242.831 oyla
   408 milletvekili kazanırken CHP 3.165.096 oyla 69 milletvekili kazanmıştır. Bu seçimlerde MP 1,
   bağımsızlarda 9 milletvekilliği elde etmiştir" (kaynağı: Güneş, 1991, SBF Dergisi, s. 798) —
   TBMM'den bağımsız, TBMM Zabıt Ceridesi tabanlı ayrı bir derleme.
   - Uyuşmazlık: **DP 4.241.393 (TBMM) vs 4.242.831 (Olgun) — %0,034** → eşleşti, TBMM'nin sayısı
     yazıldı.
   - Uyuşmazlık: **CHP 3.176.561 (TBMM) vs 3.165.096 (Olgun) — %0,36** → eşleşti (0,5 eşiğinin
     altında), TBMM'nin sayısı yazıldı.
   - Sandalye sayıları (408/69/1/9) TBMM ile Olgun arasında birebir eşleşiyor (fark yok) ve
     toplamı 487'ye (meclis) tam eşitliyor — bu aritmetik eşitlik, TÜİK Tablo 23'ün aynı satır
     için verdiği "416" sandalye rakamının (69+1+9+416=495>487 olduğu için imkânsız olduğu
     anlaşılan, çok satırlı hücre hizalama hatasından kaynaklandığı değerlendirilen)
     kullanılmadığını doğruluyor.
-- **MP ve Bağımsız oy sayıları — tek kaynak (TBMM), ikinci kaynak bulunamadı:** Olgun (2010) MP ve
-  Bağımsız için yalnızca sandalye sayısını (1 ve 9) veriyor, oy sayısı vermiyor; bu görevde başka
-  bir bağımsız kaynak aranmış ama bulunamamıştır. Spesifikasyon §8.1'in "en az bir resmî kaynak +
-  ikinci bir kaynakla eşleşme" kuralına göre bu iki sayı katı biçimde tek kaynaklı kalıyor; yine de
-  kullanıcının bu turda "TBMM sayfasından yeniden yaz" talimatı gereği yazıldı — sonraki bir turda
-  ikinci kaynak aranabilir, bulunamazsa `null`'a çevrilmesi gerekir.
+- **MP ve Bağımsız oy sayıları — `oy: null` (düzeltme turu 2).** TBMM seçim sorgusu MP için
+  250.414 (%3,11), Bağımsız için 383.282 (%4,76) veriyor, ama bu turda da ikinci bir kaynak
+  bulunamadı:
+  - Kenan OLGUN (2010) MP ve Bağımsız için yalnızca sandalye sayısını (1 ve 9) veriyor, oy sayısı
+    vermiyor (yukarıda zaten not edilmişti).
+  - Bu turda ayrıca denendi: WebSearch ile "1950 seçimi Millet Partisi oy sayısı 250.414" ve
+    "1950 milletvekili seçimi bağımsızlar oy sayısı 383.282" sorguları — ilkinde alakasız bir
+    rakam (TÜİK Tablo 23'ün 1965 satırındaki 582.704, Bölükbaşı'nın MP'yle özdeşleştiği farklı
+    bir yıla ait) çıktı, gerçek bir ikinci kaynak yok; ikincisinde yalnızca Ekşi Sözlük (forum,
+    kaynak sayılmaz) ve İngilizce Vikipedi (kaynak sayılmaz, üstelik 44.537 gibi TÜİK'in
+    "BÖMZ" satırıyla örtüşen farklı bir rakam veriyor — üç kaynak üç farklı sayı, hiçbiri
+    doğrulanmış değil) çıktı.
+  - **Sonuç: spesifikasyon §8.1'in "en az bir resmî kaynak + eşleşen ikinci kaynak" kuralına göre
+    bu iki sayı tek kaynaklı (yalnızca TBMM) kaldığı için `oy: null` yapıldı.** Sandalye sayıları
+    (MP 1, Bağımsız 9) değişmedi — bunlar Olgun (2010) ile bağımsız olarak doğrulanmış durumda.
 - **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** (PDF s. 23, ham akış) — kayıtlı 8.905.743,
   kullanılan 7.953.085, katılım %89,3 (7.953.085/8.905.743=%89,30 iç tutarlı).
   - Uyuşmazlık: **kayıtlı 8.905.743 (TÜİK) vs 8.905.576 (Olgun) — %0,0019** → eşleşti.
   - Uyuşmazlık: **kullanılan 7.953.085 (TÜİK) vs 7.916.091 (Olgun) — %0,465** → eşleşti (eşiğin
     hemen altında).
   - TÜİK'in bu iki sayısı parti oyu değil seçmen sayımı olduğu için "ortalama oy" yönteminin
     kapsamı dışında; TÜİK burada birincil kaynak olarak kaldı.
 - Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1, TBMM sayfası yeniden açıldı).
 
 ### 1950-05-cb-tbmm
diff --git a/veri/sandik.js b/veri/sandik.js
index 3f8c212..e0d36e3 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -120,21 +120,21 @@ window.SANDIK = {
       not: "Açık oy, gizli tasnif usulüyle yapıldı; ülke geneli oy sayıları hiç yayımlanmadı, yalnızca milletvekili dağılımı bilinmektedir." },
 
     // kaynak: araclar/kaynak-defteri.md#1946-08-cb-tbmm
     { id: "1946-08-cb-tbmm", tur: "cb-tbmm", tarih: "1946-08-05",
       secilen: "İsmet İnönü", turSayisi: 1,
       not: "İnönü 4. ve son kez, DP'nin adayı Fevzi Çakmak'a karşı seçildi (388/59 oy, 2 oy Tengirşenk'e, 2 boş)." },
 
     // kaynak: araclar/kaynak-defteri.md#1950-05-genel
     { id: "1950-05-genel", tur: "genel", tarih: "1950-05-14", tekParti: false,
       meclis: 487, kayitli: 8905743, kullanilan: 7953085, gecerli: null, baraj: null,
-      sonuc: [ { parti: "dp46", oy: 4241393, sandalye: 408 }, { parti: "chp23", oy: 3176561, sandalye: 69 }, { parti: "mp48", oy: 250414, sandalye: 1 }, { ad: "Bağımsız", oy: 383282, sandalye: 9 } ],
+      sonuc: [ { parti: "dp46", oy: 4241393, sandalye: 408 }, { parti: "chp23", oy: 3176561, sandalye: 69 }, { parti: "mp48", oy: null, sandalye: 1 }, { ad: "Bağımsız", oy: null, sandalye: 9 } ],
       not: "İktidar ilk kez seçim yoluyla el değiştirdi: CHP'den DP'ye." },
 
     // kaynak: araclar/kaynak-defteri.md#1950-05-cb-tbmm
     { id: "1950-05-cb-tbmm", tur: "cb-tbmm", tarih: "1950-05-22",
       secilen: "Celâl Bayar", turSayisi: 1,
       not: "DP'nin genel başkanı, yeni meclisçe 1. turda seçildi (387/453 oy)." },
 
     // kaynak: araclar/kaynak-defteri.md#1950-09-yerel
     { id: "1950-09-yerel", tur: "yerel", tarih: "1950-09-03",
       olcu: "belediye-meclisi",
```
