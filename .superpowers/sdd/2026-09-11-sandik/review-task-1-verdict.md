# Görev 1 inceleme hükmü — Kaynak defteri ve hafızadan gelen iddiaların doğrulanması

İncelenen commit: `676621c` (304c516..HEAD)

## 1. Spec uyumu: ❌

### Adım adım karşılaştırma

- **Adım 1 (iskelet):** ✅. `araclar/kaynak-defteri.md` brief'teki şablonla birebir açılış metni,
  `## Kaynak haritası`, `## Doğrulanan iddialar`, `## Kayıtlar` başlıklarıyla oluşturulmuş.
  Şablon HTML yorumu (`<!-- Şablon: ... -->`) korunmuş, doğru.
- **Adım 2 (4 iddianın doğrulanması):** ❌ kısmi — bkz. aşağıdaki Critical bulgu. 4 iddiadan 3'ü
  (`1960/1980 bit tarihleri`, `MDP 1983`, `belediye başkanı 1963`) spesifikasyon §8.1 kuralına
  ("en az bir resmî kaynakta görülmeli + ikinci bir kaynakla eşleşmeli") tam uyumlu şekilde
  doğrulanmış: her biri gerçek bir resmî kaynakla (TÜİK ve/veya TBMM/YSK) eşleşiyor. Ancak
  **1. iddia (Refah Partisi AYM kapatma tarihi) resmî kaynak şartını karşılamıyor** — raporun
  kendisi de bunu açıkça yazıyor: AYM (`anayasa.gov.tr`, `kararlaryeni.anayasa.gov.tr`,
  `kararlarbilgibankasi.anayasa.gov.tr`) ve Resmî Gazete (`resmigazete.gov.tr`) kaynaklarının
  hiçbirine erişilemedi; kullanılan tek kaynaklar bir hukuk ansiklopedisi sitesi
  (hukukansiklopedisi.com) ve haber siteleridir (yenisafak, milliyet, hicrethaber, refahmedya,
  memurlar.net) — bunların hiçbiri YSK/TÜİK/TBMM/Resmî Gazete/AYM değildir. Buna rağmen hem
  `araclar/kaynak-defteri.md` hem `docs/superpowers/specs/2026-09-11-sandik-design.md` §8.5'te bu
  iddia **"DOĞRULANDI (erişim sınırlı)"** olarak işaretlenmiş — brief'in açık talimatı ("Her sonucu
  … kaynaklarıyla yaz. Doğrulanamayan iddia için 'DOĞRULANAMADI' yaz ve Görev 2'de o değeri
  kullanma.") ve spesifikasyon §8.1'in bağlayıcı kuralı ile çelişiyor. Ayrıntı: bkz. Critical bulgu.
- **Adım 3 (açık kaynak boşlukları):** ✅. `acikveri.ysk.gov.tr` 3 kez denenmiş (kanıt: 2×
  ECONNRESET, 1× JS kabuğu), 1995 sonrası hükümetler için Cilt 9 bulunmuş ve haritaya eklenmiş,
  güncellik kontrolü yapılmış (yeni seçim/referandum ilanı yok, 7 Haziran 2026 zaten kapsam dışı).
- **Adım 4 (§8.5 güncelleme):** kısmen ❌ — aynı sebeple; format doğru (`Doğrulandı (kaynak: …)`
  notları eklenmiş) ama 1. maddenin içeriği spesifikasyonun kendi kuralına aykırı şekilde
  "doğrulandı" yazıyor; olması gereken "Doğrulanamadı — kullanılmıyor" (ya da en azından açıkça
  "resmî kaynakla doğrulanamadı, geçici/şartlı" ifadesiyle §8.1'e aykırılığı belirten bir not).
- **Adım 5 (kullanıcıya rapor):** ✅ — rapor dosyasında "Kullanıcıya sunulacaklar" bölümü var,
  doğrulanan/doğrulanamayan iddialar ve yeni kaynaklar özetlenmiş.
- **Adım 6 (commit):** ✅ — `git log` doğrulandı: mesaj brief'teki şablonla birebir aynı
  ("Kaynak defteri ve hafızadan gelen iddiaların doğrulanması" + boş satır +
  `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`), yalnızca brief'te istenen iki dosya
  commit'e dahil (`git show --stat` ile doğrulandı).

### Global Constraints
Bu görev yalnızca iki markdown dosyasını değiştiriyor (kod/veri dosyası yok), bu yüzden çoğu Global
Constraint (yükleme sırası, global ad alanları, `file://` uyumu, mobil kırılım, kart/bağ sayısı)
bu görevle ilgisiz — ihlal yok. "Bilgi uydurulmaz" kuralı ise doğrudan ilgili ve yukarıdaki
bulguyla ihlal edilmiş durumda: hafızadan gelen bir tarih, yeterli kaynak doğrulaması olmadan
spesifikasyonda "doğrulandı" damgasıyla kalıcı hale getirilmiş.

### Fazladan eklenenler (YAGNI)
Yok — kaynak haritasına eklenen notlar (Cilt 9 adresi, `acikveri.ysk.gov.tr` sonucu, MDP/1963/1960/1980
kayıtları) brief'in Adım 2–4'ünün doğal ürünü, kapsam dışı ekleme yok.

## 2. Görev kalitesi: Issues

### Critical
- **`araclar/kaynak-defteri.md` (Doğrulanan iddialar, madde 1) ve
  `docs/superpowers/specs/2026-09-11-sandik-design.md:497-501`** — Refah Partisi'nin AYM kapatma
  kararı tarihi (16 Ocak 1998) **hiçbir resmî kaynakla** (YSK, TÜİK, TBMM, Resmî Gazete, AYM kararı)
  doğrulanmadan "DOĞRULANDI (erişim sınırlı)" olarak işaretlenmiş. Raporun kendi metni
  (`task-1-report.md:19-24`, `review-task-1.md:64-77`) AYM ve Resmî Gazete'nin dört farklı adresine
  erişimin başarısız olduğunu (sertifika hatası, DNS çözümlenmedi, JS kabuğu, `curl` zaman aşımı)
  ayrıntılıca belgeliyor; kullanılan tek kaynaklar hukukansiklopedisi.com (özel hukuk sitesi) ve beş
  haber sitesidir — hiçbiri spesifikasyon §8.1'in tanımladığı resmî kaynak kategorisine girmiyor.
  Spesifikasyon §8.1: *"Her sayı en az bir resmî kaynakta görülmelidir… Eşleşmeyen ve üçüncü bir
  kaynakla da çözülemeyen sayı `null` olur."* Brief Adım 2: *"Doğrulanamayan iddia için
  'DOĞRULANAMADI' yaz ve Görev 2'de o değeri kullanma."* Bu iddia her iki kuralı da karşılamıyor;
  buna rağmen §8.5'te "Doğrulandı" damgası taşıyor.
  **Somut hata senaryosu:** Görev 2 (ya da RP kesinti kaydını yazacak ilgili veri görevi) §8.5'i
  otorite kabul edip "Doğrulandı" notuna güvenerek 16 Ocak 1998 tarihini resmî kaynak aramadan
  doğrudan veri dosyasına yazar — böylece hafızadan/ikincil kaynaktan gelen bir tarih, resmî kaynak
  zincirinden geçmeden kalıcı veri haline gelir. Bu tam olarak §8.1'in ve "Bilgi uydurulmaz"
  kısıtının önlemeye çalıştığı senaryodur.
  **Öneri:** Hem `araclar/kaynak-defteri.md` hem spesifikasyon §8.5'teki bu maddeyi
  "DOĞRULANAMADI (resmî kaynağa erişilemedi — yalnızca ikincil kaynaklarla teyit edildi: …)" olarak
  yeniden etiketleyin; ilgili veri görevinde resmî kaynağa (örn. `web.archive.org` üzerinden
  `resmigazete.gov.tr` ve `anayasa.gov.tr` arşiv kopyaları, ya da AYM'nin `anayasa.gov.tr` üzerindeki
  "Kararlar Bilgi Bankası" API'si/farklı user-agent ile yeniden deneme) erişim tekrar denenmeden bu
  tarih kesinti kaydında kullanılmamalı.

### Important
Yok (Critical bulgunun dışında).

### Minor
- **`araclar/kaynak-defteri.md`, "Doğrulanan iddialar" madde 1** ve
  **`docs/superpowers/specs/2026-09-11-sandik-design.md:498-501`** — "DOĞRULANDI (erişim sınırlı)"
  ifadesi, brief'in öngördüğü ikili durumda (DOĞRULANDI / DOĞRULANAMADI) yer almayan üçüncü bir
  durum icat ediyor. Critical bulgu giderilince bu ifade zaten kalkacak, ama genel olarak
  spesifikasyonun tanımladığı durum kümesinin dışına çıkılmaması önerilir.

## 3. ⚠️ Farktan doğrulanamayanlar

- TÜİK PDF'inin Ek-1 (s. 259) içeriği ("10.Dönem 15 Ekim 1961", "16.Dönem 6 Kasım 1983" satırları),
  Tablo 1 s. 22 içeriği ("3 ANAP, HP, MDP" satırı) ve YSK'nın 1983 sonuç PDF'indeki il il MDP oy
  sütunu — bunlar farkta görünmüyor, yalnızca raporda `pdftotext` komut çıktısı özeti olarak var.
  Rapor, komutları ve sonuçlarını (adil ayrıntıda) belgeliyor; bağımsız olarak PDF'leri yeniden
  indirip metni doğrulamadım. Kanıt: rapor + inceleme paketindeki "Kayıtlar" bölümü var, ancak
  ham PDF çıktısı bu incelemenin parçası değil.
- TBMM 307 sayılı Kanun PDF'inin tam metni ve dergipark makalesinin içeriği (belediye başkanı
  doğrudan seçimi, 1963) — rapor alıntı veriyor ama kaynak URL'lerini bizzat açıp doğrulamadım.
  Kanıt yok (yalnızca raporun kendi alıntısı var).
- `acikerisim.tbmm.gov.tr` Cilt 9 bitstream'inin gerçekten 1995–1999 aralığını kapsadığı — rapor
  böyle diyor, doğrudan doğrulanmadı.
- WebSearch/WebFetch'in raporda anlatılan hata davranışları (ECONNRESET, sertifika hatası, DNS
  çözümlenmemesi, zaman aşımı) — bunlar ortam/ağ davranışı, farkta iz bırakmıyor; raporun anlatımına
  güvenildi, bağımsız tekrar denenmedi.
