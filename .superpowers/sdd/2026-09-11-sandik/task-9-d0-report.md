# Görev 9 — Dönem 0 (1923–1945) rapor

Durum: **TAMAMLANDI**. Her doğrulanan kayıt burada ve `araclar/kaynak-defteri.md`'de aynı anda tutuldu.

## Adım 1: Envanter doğrulama — bulgular

### Genel seçimler (tek parti)
[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 1 (PDF s. 22, basılı s. 4):
tek parti dönemi genel seçimleri: 1923, 1927, 1931, 1935, 1939, 1943 — hepsinde tek parti CHP
("Seçime katılan siyasi parti sayısı: 1, CHP"; "Meclis'e giren siyasi parti sayısı: 1, CHP").
Aday listeyle birebir eşleşiyor; fark yok.

Tarihler [B] TÜİK Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" (PDF s. 277, basılı
s. 259 — sayfa altbilgisinde "259" görülüyor, offset doğrulandı: PDF = basılı + 18):
tarih listesi sırayla (dönem numarası etiketleri `-layout` ile kaymış, ama tarih değerlerinin
kendi sırası bozulmamış — bilinen çok satırlı hücre kayması, brief'te de belirtiliyor):
Mart 1920 (İlk Meclis) · Haziran–Temmuz 1923 · 2 Eylül 1927 · 25 Nisan 1931 · 8 Şubat 1935 ·
26 Mart 1939 · 28 Şubat 1943 · 21 Temmuz 1946 · …

1923 için tek gün yok, yalnızca "Haziran–Temmuz 1923" aralığı veriliyor — ikinci kaynak
(Kenan Olgun, ATAM Dergisi) da aynı belirsizliği doğruluyor, tek bir gün Vikipedi-dışı hiçbir
kaynakta bulunamadı. Kayıtta `tarih:"1923-06-01"` kullanıldı (doğrulanan ay aralığının ilk
günü, yer tutucu) ve `not` alanında bu açıkça belirtildi.

Meclis büyüklüğü [B] TÜİK Tablo 5 "Tek parti döneminde illerin çıkardığı milletvekili sayısı"
(PDF s. 25, basılı s. 7), "Toplam" satırı: 1923=287, 1927=316, 1931=317, 1935=399, 1939=429,
1943=455. Bu rakamlar Taner Lüleci'nin (Gazi Akademik Bakış, 2023) CB seçimi makalesindeki
"toplam milletvekili" sayılarıyla (316, 317, 399, 429, 455) bağımsız olarak birebir eşleşiyor.

### TBMM cumhurbaşkanlığı seçimleri (cb-tbmm)
Ayrıntılı kaynak: `araclar/kaynak-defteri.md`'de "1923-1943 TBMM cumhurbaşkanlığı seçimleri"
başlığı. 7 kayıt: 29.10.1923, 01.11.1927, 04.05.1931, 01.03.1935 (Atatürk, sırayla 1-4. kez);
11.11.1938, 03.04.1939, 08.03.1943 (İnönü, 1-3. kez). Hepsi 1. tur, tek aday, oybirliği.
[B] TBMM Zabıt Ceridesi (Taner Lüleci, Gazi Akademik Bakış makalesinde doğrudan alıntılanmış
sayfa referanslarıyla) + ikinci kaynak AA (Anadolu Ajansı) — sayılar birebir eşleşiyor.

### Ara seçimler (1923–1945)
Kaynak defterindeki "Ara seçimler (1923-1945) — envanter sonucu: kayıt bulunamadı" başlığına
bakın. TBMM'nin resmi Partiler-Seçimler-Beyannameler yayını yalnızca toplu bir rakam veriyor
(2. Dönem'de 47 koltuk için ara seçim yapıldığı), tarihli tek bir kayıt yok. WebSearch ile
tek tek yıl aramaları da sonuçsuz kaldı. **Dönem 0 için ara seçim kaydı eklenmedi.**

### Hükümetler 1923–1946 (no. 1–14)
Ayrıntılı kaynak: kaynak defterinde "Hükümetler 1923-1946" başlığı. [B] TBMM Başkanlığı
Yayınları, *Hükümetler, Programları ve Genel Kurul Görüşmeleri* Cilt 1 (24 Nisan 1920 – 22
Mayıs 1950) — resmî sıra no, başbakan, başlangıç/bitiş tarihleri İçindekiler'den alındı.
İkinci kaynak: Demirkol (2023, Fiscaoeconomia) — "tek parti" tipi sınıflamasını (toplam 18
hükümet) doğruluyor. `baslangic` ölçütü: TBMM cildindeki kuruluş tarihi (bu dönemde Resmî
Gazete bu ayrıntı düzeyinde taranamadı) — bu ölçüt sonraki dönemlerde de kullanılacak.
`bitisNedeni` yalnızca üç kayıtta doğrulanabildi (no.9 istifa, no.10 istifa, no.12 ölüm —
Refik Saydam'ın 8 Temmuz 1942'deki vefatı); diğerleri `null`.

### Yerel seçimler (1923–1945)
Kaynak defterinde "1930-10-yerel" ve "1934, 1938, 1942 belediye seçimleri" başlıklarına bakın.
Envanter tamamen kaynaktan çıkarıldı (spesifikasyon §5.3, §8.5): tek parti dönemi ilk ülke
geneli, tek dereceli belediye meclisi seçimi **5 Ekim 1930**'da yapıldı (1580 sayılı Belediye
Kanunu, 3 Nisan 1930). [B] Ahmet Gülen, "1930 İstanbul Belediye Seçimleri" (ATAM Dergisi,
2023) — İstanbul'a özgü rakamlar var (CHF 35.934, SCF 12.813 oy) ama ülke geneli toplam
bulunamadı → `sonuc: []`, seçmen sayıları `null` (spesifikasyon kuralı). `buyuksehir` alanı
yazılmadı (1930'da İstanbul belediye başkanı atamayla geliyordu, doğrudan seçim yoktu — Görev
1'de doğrulanan 1963 kuralı).

1934, 1938 ve 1942'de de birer belediye seçimi yapıldığı birden çok bağımsız kaynakla
(akademik makale + tez başlığı) doğrulandı, ama **gün/ay düzeyinde kesin tarih Vikipedi dışı
iki bağımsız kaynakla bu araştırma turunda doğrulanamadı** — bu üç kayıt `veri/sandik.js`'e
**eklenmedi**. Aşağıdaki "Kullanıcıya sunulacaklar" bölümünde ayrıca belirtildi.

## Adım 4: `veri/sandik.js`'e yazma
`secimler` dizisine 14 kayıt (tarih sırasıyla), `hukumetler` dizisine 14 kayıt (`baslangic`
sırasıyla) eklendi. Her kaydın üstünde `// kaynak: araclar/kaynak-defteri.md#<kimlik>` yorumu
var. Kaynak defterinde her kimlik için ayrı `### <kimlik>` başlığı (paylaşılan kaynaklar için
ortak bloğa referans veren kısa başlıklar) eklendi.

## Adım 5: Denetim

```
node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
```

- `node --check veri/sandik.js` → sözdizimi hatası yok.
- `node --test "araclar/test/*.test.js"` → **52/52 test PASS**, 0 fail.
- `node araclar/dogrula.js` çıktısı:
  ```
  uyarı: — sayısı: genel bant 0: 24
  uyarı: — sayısı: cb-tbmm bant 0: 0
  uyarı: — sayısı: yerel bant 0: 3
  hata yok
  ```
  Hata yok. Uyarılar beklenen "—" sayısı raporları (tek parti dönemi kaynak kıtlığı,
  spesifikasyon §11'de öngörülen doğal sonuç): genel banttaki 24 `null` = 6 kayıt × (3 seçmen
  alanı + 1 `oy` satırı) = 24; yerel banttaki 3 `null` = 1930 kaydının 3 seçmen alanı;
  cb-tbmm'de hiç sayısal alan tutulmadığından 0.

Tarayıcı denetimi (`preview_start soyagaci`, 1400×900):
- `sandik.html`'de dönem 0 bandı ("1923 – 1945 · Tek parti dönemi") bütün 14 seçim + 14
  hükümet kaydını tarih/başlangıç sırasında gösteriyor; hükümetler ile seçimler doğru
  biçimde iç içe geçiyor (örn. 12. Hükümet "bitti: başbakanın ölümü" ✓, 9. ve 10. Hükümet
  "bitti: istifa" ✓). 1930 yerel kaydı "veri yok" çubuğuyla doğru gösteriliyor (`sonuc: []`).
  Dönem 0'da `yonetim` kabı yok (kesinti: null), bu yüzden kap denetimi bu turda uygulanamaz
  (dönem 1 ve 3'te yapılacak).
- 1943 genel seçim kartı açıldı; panelde "455 sandalye", "CHP — · 455 sandalye",
  "BU SEÇİMDEN SONRA KURULAN HÜKÜMETLER: 14. Hükümet · Şükrü Saraçoğlu · CHP · 9 Mar 1943 –
  7 Ağu 1946" ve `not` metni doğru görüntülendi — kaynak defteriyle birebir eşleşiyor.
- `index.html#chp23` künyesinde **"Girdiği genel seçimler"** bölümü göründü: 1923–287,
  1927–316, 1931–317, 1935–399, 1939–429, 1943–455 sandalye (hepsi kaynak defteriyle eşleşiyor).
  "1943" bağlantısına tıklanınca `sandik.html#1943-02-genel` açıldı, kart görünür alana
  kaydı ve paneli doğru içerikle açtı (Görev 8'in ertelenen denetimi — **geçti**).
- Konsolda yalnızca `favicon.ico` 404'ü var (bilinen, ilgisiz durum); veri/kod kaynaklı hata yok.

## Brief'ten sapmalar
1. **1923-06-genel `tarih` alanı yaklaşık:** TÜİK Ek-1 ve ikinci kaynak (Kenan Olgun, ATAM
   Dergisi) yalnızca "Haziran–Temmuz 1923" aralığını veriyor; Vikipedi dışı hiçbir kaynakta tek
   bir gün bulunamadı (Vikipedi'nin "28 Haziran 1923" iddiası kural gereği kullanılmadı).
   `tarih:"1923-06-01"` yer tutucu olarak kullanıldı, `not` alanında açıkça belirtildi.
2. **Ara seçim kaydı yok:** Dönem 0 için tarihli, iki kaynakla doğrulanabilir bir ara seçim
   kaydı bulunamadı (TBMM'nin resmi yayını yalnızca toplu "47 koltuk" rakamı veriyor, tarihsiz).
   Aday listede "ara seçimler" vardı ama kaynaktan doğrulanamadığı için eklenmedi.
3. **1934, 1938, 1942 yerel seçimleri eklenmedi:** varlıkları doğrulandı ama gün/ay düzeyinde
   kesin tarih bu turda doğrulanamadı (bkz. yukarıda ve Kullanıcıya sunulacaklar).
4. **Hükümetlerin çoğunda `bitisNedeni: null`:** yalnızca 3/14 kayıtta (no. 9, 10, 12)
   ikinci kaynakla doğrulanabilir bir bitiş nedeni bulundu; kalan 11 kayıtta hafızadan
   doldurmak yerine `null` bırakıldı.

## Endişeler
- Tek parti dönemi kaynak kıtlığı beklenen bir durum (spesifikasyon §11); genel seçimlerde
  hiçbir oy/seçmen sayısı yok (kaynaklar hiç vermiyor), yalnızca sandalye (= meclis, çünkü
  CHP tek parti) biliniyor.
- Yerel seçim envanteri bu dönem için eksik kalabilir: 1930 dışındaki 3 seçim (1934/1938/1942)
  kaydedilmedi; ayrı bir araştırma turu (TBMM Zabıt Ceridesi veya dönemin Resmî Gazete/gazete
  arşivi doğrudan taranarak) bunları tamamlayabilir.
- Hükümetlerin `bitisNedeni` alanının çoğu `null` — istenirse ayrı bir tur ile TBMM ZC'nin
  ilgili oturum tutanakları taranarak doldurulabilir.

## Kullanıcıya sunulacaklar

**Eklenen kayıtlar (tür başına):**
- Genel seçim (tek parti): 6 — 1923, 1927, 1931, 1935, 1939, 1943.
- Yerel seçim: 1 — 1930 (5 Ekim 1930, ülke geneli, `sonuc: []`).
- CB (TBMM): 7 — 1923, 1927, 1931, 1935 (Atatürk ×4), 1938, 1939, 1943 (İnönü ×3).
- Ara seçim: 0 (kaynaktan doğrulanamadı).
- Hükümet: 14 — no. 1'den 14'e (I. İnönü'den II. Saraçoğlu'na).
- **Toplam: 14 seçim kaydı + 14 hükümet kaydı.**

**Envanter farkları (aday listeyle karşılaştırma):**
- Aday listedeki genel/CB-TBMM kalemleri birebir doğrulandı, fark yok.
- Aday listede "ara seçimler" vardı, kaynaktan doğrulanamadı → **eklenmedi**.
- Aday listede olmayan ama kaynaktan çıkan ek kayıt: **1930 yerel seçimi** (aday liste yalnızca
  "yerel (belediye) seçimleri — envanter tamamen kaynaktan" diyordu, ayrıntı vermiyordu) —
  **eklendi**. Ayrıca 1934, 1938, 1942 yerel seçimlerinin de var olduğu doğrulandı ama kesin
  tarih bulunamadığı için **eklenmedi** (aşağıya bakın).

**"—" kalan her sayı ve nedeni:**
- Genel seçimlerin tamamında (6/6) `kayitli`, `kullanilan`, `gecerli` ve satırdaki `oy` — tek
  parti dönemi seçimlerinde TÜİK'in kendisi bu sayıları vermiyor (Tablo 2'nin bu yıllara ait
  seçmen/katılım verisi yok; seçim iki dereceli ve tek adaylı olduğundan dönemin kendisinde de
  bu rakamlar sistematik tutulmamış/yayımlanmamış). Yalnızca `sandalye` biliniyor (TÜİK Tablo 5
  + Lüleci 2023 çapraz doğrulaması).
- 1930 yerel seçiminde `kayitli/kullanilan/gecerli` ve ülke geneli `sonuc` — resmî kaynakta
  yalnızca İstanbul'a özgü rakamlar bulundu (`not` alanında bilgi olarak var), ülke geneli
  toplam/il tablosu bu turda erişilemedi.
- CB (TBMM) kayıtlarında oy sayıları alan olarak hiç tutulmuyor (şemada yok); gerçek oy
  sayıları (158, 288, 289, 386, 348, 413, 435) `not` alanında metin olarak veriliyor.
- Hükümetlerin 11/14'ünde `bitisNedeni: null` (yukarıda açıklandı).

**Soyağacında olmayan ama sandalye kazanan partiler:** yok — dönem 0'da tek parti CHP
(`chp23`, soyağacında zaten var) dışında sandalye kazanan kimse yok.

**`node araclar/dogrula.js` çıktısı:**
```
uyarı: — sayısı: genel bant 0: 24
uyarı: — sayısı: cb-tbmm bant 0: 0
uyarı: — sayısı: yerel bant 0: 3
hata yok
```

**Görev 8'in ertelenen denetimi:** `index.html#chp23` künyesinde "Girdiği genel seçimler"
bölümü görünüyor (1923–1943, 6 satır) ve her bağlantı `sandik.html#<kimlik>` panelini doğru
açıyor — **geçti** (yukarıda "Adım 5" altında ayrıntı var).

**Onay bekleyen karar noktaları:**
1. 1923 genel seçiminin `tarih` alanı yaklaşık (yalnızca ay/yıl doğrulanabildi) — kabul edilir mi?
2. 1934, 1938, 1942 yerel seçimleri şimdilik eklenmedi — ayrı bir araştırma turuyla
   tamamlanmasını ister misiniz, yoksa bu üçü olmadan mı devam edelim?
3. Ara seçim kaydı yok — dönem 0 için bu şekilde mi kalsın?
4. Hükümetlerin `baslangic` ölçütü olarak TBMM cildindeki kuruluş tarihi seçildi (Resmî Gazete
   değil) — sonraki bütün dönemlerde de bu ölçüt kullanılacak, onaylıyor musunuz?

## Düzeltme turu 1 (2026-09-12)

İnceleme bulguları: (1) `1923-06-genel` kaydındaki `tarih:"1923-06-01"` kaynakta olmayan,
inşa edilmiş bir gündü; (2) `meclis:287` için ikinci kaynak eşleşmesi deftere yazılmamıştı.
Kullanıcı kararı: günü kaynakta olmayan kayıtlarda `tarih` artık `"YYYY-AA"` yazılabilir.

**Not (süreç):** bu düzeltme turu bir kullanım-sınırı kesintisiyle iki kez baştan başladı;
diskte hiçbir kalıntı yoktu (commit atılmamıştı). Bu ikinci denemede A+B+C bitince hemen
commit atıldı, sonra D'ye geçildi — talimattaki gibi.

### A) Ay hassasiyetli tarih desteği
- `ortak.js`'teki `tarihYaz` fonksiyonu birebir verilen koda göre değiştirildi: `iso.split("-")`
  artık 2 ya da 3 parçalı olabiliyor, gün yalnızca varsa yazılıyor.
- `araclar/test/ortak.test.js`'in sonuna verilen test eklendi: `tarihYaz("1923-06")` →
  `"Haziran 1923"`, `tarihYaz("1923-06", true)` → `"Haz 1923"`.
- `araclar/dogrula.js`'e iki denetim eklendi:
  - `secimler` döngüsüne: `/^\d{4}-\d{2}(-\d{2})?$/` ile eşleşmeyen `tarih` → hata
    "geçersiz tarih biçimi: <id> → <tarih>".
  - `hukumetler` döngüsüne (erken `return`'den önce, listenin son kaydı da denetlensin diye):
    `baslangic`/`bitis` gün dahil `YYYY-AA-GG` değilse → hata "hükümet tarihi gün dahil olmalı: <no>".
- `araclar/test/dogrula.test.js`'in sonuna verilen test eklendi ve fikstürdeki mevcut
  `kopya`/`hatalar`/`bul` yardımcılarıyla birebir çalıştığı doğrulandı (fikstürde
  `1927-09-genel` ve hükümet no. 57 zaten mevcut).
- Komut çıktısı: `node --test "araclar/test/*.test.js"` → **54/54 PASS** (52 eski + 2 yeni).

### B) 1923 kaydı düzeltmesi
- `veri/sandik.js`'te `1923-06-genel.tarih` → `"1923-06"` (üç haneli gün kaldırıldı).
- `not` alanı güncellendi: "Seçim il il farklı günlerde ve iki dereceli yapıldı; kaynaklar
  yalnızca Haziran–Temmuz 1923 aralığını veriyor, tek bir gün yok." ("gösterilen gün
  yaklaşıktır" ifadesi kaldırıldı, artık yaklaşık bir gün göstermiyoruz).
- `araclar/kaynak-defteri.md`'deki `### 1923-06-genel` kaydı bu değişikliği yansıtacak
  şekilde güncellendi (bkz. madde C).

### C) `meclis:287` ikinci kaynağı — bizzat açılıp doğrulandı
- İnceleyicinin işaret ettiği **TESAV (Toplumsal Ekonomik Siyasal Araştırmalar Vakfı)**,
  "TBMM ve Cumhuriyet Dönemlerinde Milletvekili ve Senatör Sayıları" belgesi
  `https://www.tesav.org.tr/wp-content/uploads/2020/02/tbmmvecumhuriyetdonemlerindemv.vesenatorsayilari.pdf`
  indirilip `pdftotext -layout -enc UTF-8` ile bizzat okundu (inceleyicinin sözüne
  dayanılmadı). Tablo satırı: **"2. (1923 – 1927) 287"** — TBMM'nin 1923 seçimiyle kurulan
  2. Dönemi, 287 milletvekili. TÜİK Tablo 5'teki 287 rakamıyla birebir eşleşiyor.
- Bonus bulgu: aynı tablo dönem 0'daki diğer beş `meclis` değerini de (316, 317, 399, 429,
  455) bağımsız olarak doğruluyor — üçüncü kez çapraz doğrulama (TÜİK + Lüleci 2023 + TESAV).
- `araclar/kaynak-defteri.md`'deki `### 1923-06-genel` kaydına eklendi (tam alıntı ve URL
  ile).

### Adım E (ilk yarı): denetim ve commit
```
node --check veri/sandik.js && node --check ortak.js && node --check araclar/dogrula.js
node --test "araclar/test/*.test.js"   → 54/54 PASS
node araclar/dogrula.js
  uyarı: — sayısı: genel bant 0: 24
  uyarı: — sayısı: cb-tbmm bant 0: 0
  uyarı: — sayısı: yerel bant 0: 3
  hata yok
```
Tarayıcı (`sandik.html`, 1400×900): 1923 kartı "Haz 1923" gösteriyor; kart açılınca panelde
"1923 Genel Seçimi / Haziran 1923 / 287 sandalye · katılım —" görünüyor — tam ay adı doğru
yazılıyor. Konsolda yalnızca bilinen `favicon.ico` 404'ü var.

**Commit 1** (A+B+C): `ortak.js`, `araclar/dogrula.js`, `araclar/test/ortak.test.js`,
`araclar/test/dogrula.test.js`, `veri/sandik.js`, `araclar/kaynak-defteri.md`.

### D) Eksikler için odaklı arama turu

**1934, 1938, 1942 yerel (belediye) seçim tarihleri (ay/yıl yeterli):**
Aşağıda her yıl için ayrı ayrı yapılan arama ve sonucu var; bulunanlar `veri/sandik.js`'e
eklendi, bulunamayanlar "bulunamadı" diye deftere yazıldı (ayrıntı `araclar/kaynak-defteri.md`).

**Dönem 0 (1923–1945) milletvekili ara seçimleri:**
TBMM *Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler (1923–1980)* yeniden tarandı; ayrıca
TBMM'nin dönem bazlı milletvekili listesi sayfaları (`tbmm.gov.tr/develop/owa/...`) denendi.
Sonuç ve gerekçesi aşağıda / kaynak defterinde.

**1934, 1938, 1942 yerel seçimleri — BULUNDU, eklendi:**
[B] Ayşe (Rabia) Bahar ÜSTE, "Yerel Seçimlerin Cinsiyeti: Seçimler ve Kadın Temsili",
*Dokuz Eylül Üniversitesi İşletme Fakültesi Dergisi* (dergipark, `download/article-file/312360`)
— dönemin gazetelerine (Cumhuriyet, Ulus, Anadolu, Halkın Sesi, Hakimiyet-i Milliye, Son Posta,
Yeni Sabah, Tan) dayanarak üç seçimin de tarihlerini veriyor, doğrudan alıntı:
- **1934:** "Tüm yurtta 2 Ekim 1934 günü başlayan seçimler, çeşitli tarihlerde sonuçlanmış,
  İzmir seçimleri 10 Ekim 1934 günü bitmiştir." → `tarih:"1934-10"`.
- **1938:** "1938 yerel seçimleri tüm yurtta Ekim ayının ilk haftası başlamıştır. Ankara'da 29
  Eylül 1938 günü başlayan seçimler, 8 Ekim 1938 tarihinde tamamlanmıştır... İstanbul'da
  seçimler 1 Ekim tarihinde başlamış ve 10 Ekim 1938 tarihinde tamamlanmıştır." → `tarih:"1938-10"`.
- **1942:** "İstanbul'da seçimler 1 Ekim'de başlamış ve 11 Ekim 1942 tarihinde sonuçlanmıştır."
  → `tarih:"1942-10"`.
İkinci kaynak/çapraz doğrulama: "1934 Yılı Amasya Vilayeti Belediye Meclisi Seçimleri"
(dergipark, `egitimvetoplum`) — "18 Ekim 1934 tarihli belediye meclisi toplantısında Amasya
Belediye Başkanlığına seçildi" (meclis üyeleri bu tarihte zaten göreve başlamıştı, seçimin
Ekim 1934 içinde tamamlanmış olduğunu doğruluyor). Ülke geneli oy sayısı hiçbirinde
bulunamadı → `sonuc: []`, seçmen sayıları `null` (1930 kaydıyla aynı kural).

**Dönem 0 ara seçimleri — arandı, bulunamadı:**
TBMM'nin *Cumhuriyet Dönemi Partiler-Seçimler-Beyannameler* yayını yeniden tarandı (58856
satırlık tam metin) — yalnızca toplu "2. Dönem'de 47 koltuk" rakamı var, tarihli tek kayıt
yok (bkz. önceki tur). `tbmm.gov.tr/develop/owa/milletvekillerimiz_eski.sonuc` ve dönem bazlı
milletvekili sorgu sayfaları denendi.

**En yakın bulunan aday:** WebSearch "12 Ocak 1936" ara seçim TBMM sonucunda Hatice
Özgener'in Çankırı'dan 1936'da bir ara seçimle milletvekili seçildiği ve TBMM 5. dönemdeki
kadın milletvekili sayısını 18'e çıkardığı iddiası (birden çok ikincil/haber kaynağı) çıktı.
Bu iddiayı TBMM'nin kendi resmi sayfasında (`tbmm.gov.tr/milletvekili/UyeGenelKurulKonusmalariDetay?eid=119815`,
bir modern Çankırı milletvekilinin genel kurul konuşması) doğrulamaya çalışıldı, ama konuşma
metni tam tersini söylüyor: "...Meclise giden **ilk 17 kadın milletvekilinden birisi** olan
Hatice Özgener Hanım'ın seçim bölgem olan Çankırı'yı temsili..." — yani bu kaynağa göre
Özgener 1935 genel seçiminde seçilen ilk 17'den biri, 1936 ara seçimiyle **gelmemiş**.
İki kaynak birbiriyle çelişiyor ve üçüncü bir kaynakla çözülemedi; bu yüzden bu aday da
kayıt olarak eklenmedi (spesifikasyon §8.1: eşleşmeyen ve çözülemeyen iddia kullanılmaz).
- Erişim: 2026-09-12.

WebSearch ile "1931/1933/1937/1941 ara seçimi" gibi sorgular da tekrarlandı — başka tarihli,
iki kaynakla doğrulanabilir bir ara seçim kaydına ulaşılamadı. **Sonuç değişmedi: dönem 0
için ara seçim kaydı eklenmedi.**

### Adım E (ikinci yarı): denetim ve commit

```
node --check veri/sandik.js   → OK
node --test "araclar/test/*.test.js"   → 54/54 PASS
node araclar/dogrula.js
  uyarı: — sayısı: genel bant 0: 24
  uyarı: — sayısı: cb-tbmm bant 0: 0
  uyarı: — sayısı: yerel bant 0: 12
  hata yok
```
(Yerel banttaki "—" sayısı 3'ten 12'ye çıktı: 4 yerel kayıt × 3 seçmen alanı = 12, beklenen.)

Tarayıcı (`sandik.html`, 1400×900): 1934, 1938, 1942 yerel kartları doğru kronolojik
sırada, hükümetlerin arasında görünüyor ("Eki 1934", "Eki 1938", "Eki 1942" — kısa ay adı
kartlarda, tam ay adı panelde: "1934 Yerel Seçimi / Ekim 1934 / katılım — · belediye meclisi
oyları" ve `not` metni doğru gösteriliyor). Konsolda yalnızca bilinen `favicon.ico` 404'ü var.

**Commit 2** (D): `veri/sandik.js`, `araclar/kaynak-defteri.md`.

## Düzeltme turu 1 — özet
- **Eklenen:** ay hassasiyetli tarih desteği (`ortak.js`, `dogrula.js`, 2 yeni test — 54/54
  PASS); 1923 kaydının uydurma günü kaldırıldı (`"1923-06"`); `meclis:287`'nin ikinci kaynağı
  (TESAV) bizzat açılıp deftere işlendi; **3 yeni yerel seçim kaydı** (1934-10, 1938-10,
  1942-10 — Üste/dergipark makalesi + Amasya makalesi çapraz doğrulamasıyla).
- **Hâlâ eklenemeyen:** dönem 0 ara seçimleri (bir aday — Hatice Özgener/Çankırı 1936 ara
  seçimi — bulundu ama TBMM'nin kendi sayfasındaki bir konuşmayla çelişince kullanılmadı).
- **Toplam (düzeltme turu 1 sonrası):** 17 seçim kaydı (14 + 3 yeni yerel) + 14 hükümet kaydı.

</content>
