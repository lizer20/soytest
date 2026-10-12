# Hüküm: Görev 9 — Dönem 2 (1961–1971) — Düzeltme turu 1 (e70082e..7f1229d)

## 0. Önceki bulguların durumu

- **C1 (1961 CB-TBMM seçimi eklenmedi) — KAPANDI.** `1961-10-cb-tbmm` kaydı eklendi
  (`veri/sandik.js`, 1961-10-genel ile 1963-11-yerel arasına, tarih sırasına uygun). Kaynaklar
  bağımsız olarak yeniden doğrulandı (aşağıya bkz.) — rapordaki tarih/aday/tur bilgisi
  kaynaklarla birebir uyuşuyor.
- **C2 (1963/1968 büyükşehir sonuçlarında resmî kaynak eksik) — KAPANDI.** Ankara/İzmir (1963) ve
  İstanbul/Ankara/İzmir (1968) için resmî kaynak yine bulunamadı, ama bu turda kural doğru
  uygulandı: kaynaksız nitel bilgi veriden çıkarıldı (`sonuc`/sayı gibi `null` değil, çünkü
  `buyuksehir` bir obje alanı — ilgili şehir anahtarı hiç yazılmadı), yalnızca 1963 İstanbul
  (YSK kararı + Resmî Gazete, gerçekten [B]) kaldı.
- **I1 (kaynak defterinde dışlama gerekçesi yoktu) — KAPANDI.** `araclar/kaynak-defteri.md`'ye
  "Düzeltme turu 1 (2026-09-16) — inceleme sonrası" başlığı altında hem 1961 CB-TBMM'nin
  eklenme gerekçesi hem de 1963/1968'in hangi şehirlerinin neden çıkarıldığı ayrıntılı yazıldı.

## 1. Bağımsız doğrulama (bu turda tekrar yapıldı)

- **T.C. Cumhurbaşkanlığı resmî sitesi** (`tccb.gov.tr/cumhurbaskanlarimiz/cemal_gursel/`):
  "...oluşturulan Türkiye Büyük Millet Meclisi tarafından Türkiye'nin dördüncü cumhurbaşkanı
  seçildi." — rapordaki alıntıyla birebir.
- **TDV İslam Ansiklopedisi**, "GÜRSEL, Cemal": Gürsel'in **26 Ekim 1961**'de TBMM'nin ortak
  toplantısında tek aday olarak seçildiğini, Ali Fuat Başgil'in MBK baskısıyla çekildiğini
  doğruluyor — rapordaki alıntıyla birebir.

Veriye yazılan `tarih:"1961-10-26"`, `secilen:"Cemal Gürsel"`, `turSayisi:1` bu iki kaynakla
tam uyumlu. Önceki turun "otomatik cumhurbaşkanı, TBMM'de seçim yok" iddiası artık doğru biçimde
reddedilmiş durumda.

## 2. Spec uyumu: ✅

- Adım 1 (envanter doğrulama) artık doğru: kaynakta gerçekten var olan kayıt eklendi.
- Kaynak kuralı (§8.1 — her nitel bilgi bir resmî [B] kaynak + ikinci kaynak) hem yeni CB kaydı
  hem de düzeltilen yerel kayıtlar için doğru uygulanıyor; resmî kaynak bulunamayan bilgi veriye
  yazılmadı (yalnızca şeffaflık amacıyla `not` alanında, "resmî kaynak bulunamadı" notuyla
  bırakıldı — bu §5.1'in "not" serbestliğiyle çelişmiyor, çünkü doğrulanmış bir veri alanı gibi
  sunulmuyor).
- Kimlik biçimi, tarih sırası, dosya listesi, commit kapsamı (yalnızca `veri/sandik.js` +
  `araclar/kaynak-defteri.md`) brief ile uyumlu.
- Global Constraints ihlali yok.

**Eksik / fazladan / sapan değer:** yok.

## 3. Görev kalitesi: Approved

### Minor

- **M1 — CB-TBMM kaydı için kaynak haritasının öngördüğü birincil kaynak kategorisi atlandı.**
  `araclar/kaynak-defteri.md`, "#1961-10-cb-tbmm" başlığı. Brief'in kaynak haritası tablosu
  ("TBMM CB seçimleri" satırı) birincil [B] kaynağı **TBMM tutanakları / TBMM'nin resmî kitabı
  "Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler"** olarak, `tccb.gov.tr`'yi ise yalnızca
  **ikincil** kaynak olarak tanımlıyor. Bu düzeltmede sıra ters çevrilip tccb.gov.tr birincil,
  TDV İslam Ansiklopedisi ikincil kaynak olarak kullanıldı — üstelik aynı TBMM kitabının PDF'i bu
  dönemin diğer kayıtları (1961/1965/1969 genel seçim) için zaten indirilip tam metne çevrilmişti,
  "Gürsel" ya da "cumhurbaşkanı" için aranması düşük ek maliyetli olurdu. Sonucu değiştirmesi
  beklenmiyor (iki kaynak da tarih/süreçte birebir uyuşuyor, üstelik görev talimatı da
  `cumhurbaskanligi.gov.tr`'yi doğrulama kaynağı olarak açıkça önerdi) — bu yüzden **engelleyici
  değil**, ama ileride benzer CB-TBMM kayıtları eklenirken (örn. 1973/1980 "sonuçsuz süreç"
  kayıtları) önce TBMM'nin kendi kitabı/tutanağı denenmeli.

### Yeni sorun: yok.

## 4. ⚠️ Cannot verify from diff

- Tarayıcı denetimi (panelde "17 Kas 1963 ... İstanbul · CHP", "2 Haz 1968 ... büyükşehir satırı
  yok", "26 Eki 1961 CB · TBMM ... Cemal Gürsel seçildi · 1 tur" metinlerinin göründüğü, konsol
  hatası olmadığı) — raporda `document.body.innerText` alıntısı var (önceki turdakinden daha
  ayrıntılı) ama ekran görüntüsü yok; koddan (sandik-mantik.js/sandik-sayfa.js bu turda
  değişmedi) davranışın doğruluğu dolaylı olarak makul ama doğrudan doğrulanamıyor.
- `node --check / --test / dogrula.js` çıktısı bu turda **tam** (ham) biçimde raporda var —
  önceki turdaki "yalnızca özet" eksikliği giderildi; yine de bu turda yeniden çalıştırılmadı
  (sözleşme gereği).
