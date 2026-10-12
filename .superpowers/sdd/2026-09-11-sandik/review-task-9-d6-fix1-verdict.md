# Hüküm: Görev 9 — Dönem 6, Düzeltme turu 1

İncelenen: `df8e6ae` (6ed60d4..df8e6ae, `00573ad` dahil), paket
`.superpowers/sdd/2026-09-11-sandik/review-task-9-d6-fix1.md`, raporun "Düzeltme turu 1" bölümü,
defterin "Düzeltme turu 1 (2026-09-25)" bölümü. Önceki hüküm:
`.superpowers/sdd/2026-09-11-sandik/review-task-9-d6-verdict.md` (SPEC ❌, 5 Important).
`node --check`, `node --test` (57/57), `node araclar/dogrula.js` (`hata yok`, tek fark
`yerel bant 6: 0 → 58`, tam olarak 3 kayıt × (3 seçmen alanı + satır sayısı) ile örtüşüyor)
bu incelemede yeniden çalıştırılıp doğrulandı.

## 1. Spec uyumu: ❌ (önceki 5 bulgudan 4'ü kapandı, 1 yeni sorunla açık kalıyor)

## 2. Görev kalitesi: Issues

### Önceki bulguların durumu

1. **`2014-08-cb-halk` adayları `destek:` ile yazılmıştı → KISMEN KAPANDI.** Erdoğan `parti:"akp"`
   oldu ve [B] YSK Kararı 2014/3579 (dilekçe metni) + ikinci akademik kaynakla sağlam
   temellendirilmiş; `dogrula.js` (`00573ad`) artık `parti`+`ad`'a izin veriyor, panelde
   `href="index.html#akp"` bağlantısı doğrulanmış. **Ama Demirtaş `parti:"hdp"` için tek bir [B]
   resmî kaynak da gösterilmemiş** — yalnızca iki akademik/ikincil kaynak (Özipek; Selçuk
   İletişim) kullanılmış. Ekip zaten elinde olan **YSK Kararı 2014/3227 (kesin aday listesi)**'nı
   yalnızca "İhsanoğlu, Erdoğan, Demirtaş (üç aday)" diye özetlemiş, kararın adaylığı hangi
   partinin/topluluğun önerdiğini kaydeden asıl metnini (CB seçim mevzuatına göre böyle bir kayıt
   zorunludur) taramamış. Bu, brief'in "her değer ... resmî [B] kaynak + ikinci kaynak" kuralının
   bu tek alan için hâlâ karşılanmadığı anlamına geliyor — **Important, açık**.
2. **Yerel ulusal belediye meclisi sayıları tek kaynaklıydı → KAPANDI.** TÜİK Veri Portalı, TÜİK
   Mahalli İdareler Veri Tabanı ve TÜİK yayın No. 3584 sırayla denenmiş, üçünde de ulusal
   toplamın ya bulunmadığı ya da (3584 sayılı yayının kendi "3.1 Veri derleme tekniği" bölümünde
   itiraf ettiği gibi) YSK'nın Resmî Gazete rakamının **aynen** kopyası olduğu belgelenmiş. Sonuç
   olarak `2004/2009/2014-03-yerel` kayıtlarının `kayitli`/`kullanilan`/`gecerli` ve bütün
   `sonuc[].oy` alanları `null` yapıldı — dönem 4/5 emsaliyle (`1984-03-yerel`, `1994-03-yerel`)
   birebir aynı desen ve aynı gerekçe cümlesi kalıbı kullanılmış. `partiSayisi` ve parti listesi
   korunmuş (bunlar aynı YSK belgesinin doğrudan okunan meta verisi, ayrı doğrulama gerektiren bir
   "sayı" değil). `dogrula.js`'in `— sayısı: yerel bant 6` uyarısı 0'dan **58**'e çıkmış; elle
   sayıldığında (2004: 18 satır+3, 2009: 16 satır+3, 2014: 15 satır+3 = 58) bu rakam nullamanın
   eksiksiz ve tutarlı yapıldığını doğruluyor. **Kapandı.**
3. **`2004-03-yerel.buyuksehir` tek kaynaklıydı (yalnızca TÜİK) → yüzeysel olarak kapandı, ama yeni
   bir belirsizlik doğdu.** YSK'nın arşiv sayfasında listelenmeyen ama çalışan bir dosya deseni
   bulunmuş (`.../Mahalli/2004/Buyuksehir/Pdf/2004Mahalli-Buyuksehir-<İl>.pdf`) ve üç şehrin
   TÜİK rakamlarıyla birebir örtüştüğü gösterilmiş — brief'in "buyuksehir [B]+ikinci kaynak"
   kuralı **harfiyen** karşılanıyor (iki farklı kurumun yayını elde var). Ama **aynı düzeltme
   turunda ekibin kendisinin bulduğu** TÜİK yayın No. 3584'teki itiraf ("tablolarında yer alan
   Türkiye toplam sonuçları ... YSK tarafından Resmi Gazete'de ilan edilen sonuçlardan ...
   aynen yayımlanmıştır") TÜİK'in mahalli idareler verilerinin **bağımsız toplanmadığını**,
   YSK'nın kendi rakamının yeniden yayını olduğunu gösteriyor. Bu itiraf ulusal toplam için
   yapılmış olsa da, aynı veri tabanının şehir bazlı kırılımının da aynı kaynaktan geldiği
   makul bir ihtimal. **"Birebir örtüşme" bu ihtimali çürütmüyor** — kopya olsa da örtüşür,
   bağımsız toplansa da örtüşür; ikisini ayırt etmiyor. Sonuç: madde teknik olarak "iki kurum"
   şartını karşılıyor ama bu iki kurumun **gerçekten bağımsız** olup olmadığı kanıtlanamadı.
   Bloklayıcı saymıyorum (proje boyunca TÜİK–YSK eşleşmesi Görev 1'in kaynak haritasında zaten
   kabul edilmiş bir örüntü) ama **Important** düzeyinde deftere not düşülmeli.
4. **Hükümet 63 `partiler:["akp","hdp"]` çıkarıma dayanıyordu → KAPANDI.** Artık üç ayrı [B]
   belgeden kurulu bir zincir var: (a) RG 28.8.2015 geçici kabine listesi iki bakanı adıyla
   (Konca/Kocaeli, Doğan/İzmir-2) veriyor, (b) YSK'nın 7 Haziran 2015 kesin aday listesi aynı iki
   ismi HDP'nin o seçim çevrelerindeki 1. sıra adayı olarak gösteriyor, (c) YSK'nın milletvekili
   dağılım tablosu o iki çevrede HDP'nin tam **1**'er sandalye kazandığını gösteriyor — liste
   sistemi gereği sırasıyla yalnızca 1. sıradaki aday seçilebilir. Üç resmî belgenin mantıksal
   zinciri sağlam; çıkarım değil, doğrudan kanıt. `not` cümlesi de olguyu (iki HDP'li bakan)
   doğru yansıtıyor. **Kapandı.**
5. **Referandum `tutumlar` boştu → KAPANDI.** 2010 için dört parti (AKP-evet, CHP-hayır,
   MHP-hayır, BDP-boykot) her biri en az iki bağımsız akademik makaleyle yazılmış; brief'in
   Adım 3'ü tutum için "parti açıklaması, gazete arşivi, akademik kaynak — iki kaynak" izni
   veriyor (sayısal [B] zorunluluğu tutum için aranmıyor), bu yeterince karşılanmış. 2007 için
   dört akademik makale tarandığı, yalnızca birinin (Menek) tek bir partinin tutumunu verdiği ve
   bu yüzden hiçbir partinin yazılmadığı belgelenmiş; TBMM oylamasının referandum tutumu için
   kanıt sayılamayacağı gerekçesi (MHP kanunu TBMM'de desteklemiş olsa da referandum kampanyasında
   farklı tutum sergilemiş olabileceği) makul. Spesifikasyon §5.4 zaten doğrulanamayan partinin
   hiç yazılmamasına izin veriyor; bu artık gerçek bir arama çabasının sonucu olduğu için **kabul
   edilebilir ve kapandı** (2007'nin geri kalanı Görev 12'ye devredilmiş durumda kalıyor, bu
   kabul edilebilir).

### Yeni/açık bulgular

**Important — `veri/sandik.js`, `2014-08-cb-halk`, Demirtaş satırı.** `parti:"hdp"` değeri
yalnızca iki ikincil (akademik) kaynakla destekleniyor, hiçbir [B] resmî kaynak yok. Öneri:
zaten kaynak defterinde adı geçen **YSK Kararı 2014/3227**'nin tam metnini tara (CB adaylığı
kaydı mevzuaten önerici partiyi/toplulugu belirtir); orada bulunamazsa HDP'nin adaylık başvurusu
ya da YSK'nın 2014 CB seçimi kesin aday listesi kararının kendisi aranmalı.

**Important — `araclar/kaynak-defteri.md`, 2004/2009/2014 büyükşehir "ikinci kaynak" iddiası.**
TÜİK'in mahalli idareler ulusal rakamlarının YSK'nın **aynen kopyası** olduğu bu turda ekibin
kendi bulgusuyla kanıtlandı (TÜİK yayın 3584, "3.1 Veri derleme tekniği"); bu, TÜİK'in şehir
bazlı büyükşehir rakamlarının da bağımsız toplanmadığı ihtimalini güçlendiriyor ve "birebir
örtüşme" bunu ayırt edemez. Bloklayıcı değil (proje Görev 1'den beri TÜİK–YSK eşleşmesini kabul
ediyor) ama deftere bu belirsizliği açıkça not düşen bir satır eklenmeli; controller'a
bildirilmeli.

### Minor

Yok.

## 3. ⚠️ Farktan doğrulanamayanlar

- **Yeni alıntılanan ham belgeler** (RG 28.8.2015 kabine listesi, YSK 2015 kesin aday listesi,
  YSK milletvekili dağılım tablosu, YSK 2004 şehir bazlı büyükşehir PDF'leri, TÜİK yayın 3584,
  2010 referandum tutum makaleleri, RG 12.3.2003 GIF'lerin türü) — raporda doğrudan alıntı/hex
  çıktısı var (kanıt var, önceki turdan daha ayrıntılı), ama canlı kaynaklardan bağımsızca yeniden
  çekilmedi; özet ve alıntılara güveniliyor.
- **`node --check` / `node --test` / `node araclar/dogrula.js`** — bu inceleme sırasında HEAD'de
  (`df8e6ae`) yeniden çalıştırıldı, rapordaki sonuçlarla birebir eşleşti (57/57 test,
  `yerel bant 6: 58`, `hata yok`); kanıt var, ek doğrulama gerekmiyor.
- **Tarayıcı denetimi** (panelde `#akp`/`#hdp` bağlantıları, 2010 tutum satırları) — raporda düz
  metin özet var (ekran görüntüsü yok); kanıt sınırlı ama mevcut.
