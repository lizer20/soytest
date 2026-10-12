# Görev 6 inceleme hükmü — kart, hükümet şeridi ve panel HTML üreticileri

## 1. Spec uyumu: ✅

Uygulama, brief'in Adım 1 (test dosyası) ve Adım 3 (sandik-mantik.js eklentisi) kod
bloklarının **birebir (byte-level) kopyası**. Bunu otomatik diff ile doğruladım:

- `araclar/test/sandik-html.test.js` içeriği, brief'teki ```js``` bloğuyla karakter
  karakter eşleşiyor (Python `difflib` ile karşılaştırıldı, fark yok).
- `sandik-mantik.js`'e eklenen HTML üreticileri bloğu (`/* --- HTML üreticileri --- */`
  ile `return { BAGIMSIZ...` arası) ve genişletilmiş `return` ifadesi, brief'teki
  Adım 3 kod bloklarıyla karakter karakter eşleşiyor.
- Ekleme noktası brief'in talimatına uygun: `return { BAGIMSIZ, … };` satırının hemen
  üstüne, `partininSecimleri` fonksiyonundan hemen sonra.
- Commit mesajı brief'teki mesajla birebir aynı (başlık, gövde, boş satır, son satırdaki
  `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`).
- `git add sandik-mantik.js araclar/test/sandik-html.test.js` — yalnızca bu iki dosya
  commit'e girmiş, başka dosya yok.

**Eksik:** yok. **Fazladan (YAGNI):** yok — export edilen sabit/fonksiyon listesi
brief'teki `return` ifadesiyle birebir aynı (`TIP_ETIKET`, `EVET`, `HAYIR` gibi iç
sabitler dışa aktarılmamış, brief de bunu istemiyor). **Sapan değer:** yok — sayılar
(`KESINTI = "#7A1509"`, vb.), dizgeler, sınıf adları, imzalar hepsi brief'le aynı.
**Global Constraints ihlali:** yok:
- `file://` uyumu: `fetch`, ES modülü (`import`/`export`), harici istek yok; mevcut
  IIFE + `module.exports` kalıbı korunmuş.
- Yükleme sırası / ad alanları: `sandik-mantik.js` hâlâ `SandikMantik.olustur(P, O)`
  imzasıyla çalışıyor, başka global tanımlamıyor.
- Kod adlandırması Türkçe (`kacis`, `rozetHTML`, `cubukHTML`, `kartHTML`, `seritHTML`,
  `panelHTML`, `kartRengi`, `sonucSatiri`…) mevcut kod tabanıyla tutarlı.
- Bilgi uydurma: bu görev veri dosyalarına dokunmuyor; yalnızca kod eklendi, sayısal/
  tarihsel bir "veri" eklenmedi, dolayısıyla `araclar/kaynak-defteri.md` güncellemesi
  gerekmiyor.
- Soyağacı kart/bağ sayıları (66/73) bu diff'te değişmiyor (veri dosyaları
  değişmedi).

## 2. Görev kalitesi: Approved

### Bağımsız doğrulama (raporun ötesinde, kendim çalıştırdım)

- `node --test "araclar/test/*.test.js"` → **48/48 PASS, 0 FAIL** (raporla birebir
  eşleşiyor; önceki 36 test + bu görevin 12 yeni testi).
- `node araclar/dogrula.js` → `hata yok` (rapor doğru).
- `git log` / `git show --stat` → commit `6d4b445`, yalnızca iki dosya, 285 satır
  ekleme — rapor ve inceleme paketiyle eşleşiyor.
- Fikstür sızıntısı kontrolü: `sandik-mantik.js` hiçbir yerde `fikstur.js`'i
  `require` etmiyor; yalnızca test dosyası kullanıyor (`../../ortak`, `../yukle`,
  `./fikstur` yalnızca test kapsamında). Sitede kullanılan dosyalara sızma yok.
- Kaçış (escaping) taraması: kullanıcı/veri kaynaklı bütün serbest metinler
  (`k.konu`, `k.not`, `it.ad`, `a.ad`, `a.destek`, `kisi` = `basbakan`/`baskan`,
  `BITIS_ETIKET[...].not` eki, parti kısa adları) `kacis()` ile sarmalanmış.
  `data-id`, `--aile:<renk>`, parti `id`'si (href'te) kaçırılmamış durumda, ama
  bunlar serbest metin değil; kimlik biçimi (`YYYY-AA-tür`), renk kodları ve parti
  id'leri (`[a-z0-9-]+`) veri dosyalarında biçimsel olarak kısıtlı alanlar — brief'in
  interface tanımı da bunları kaçırmıyor. Kritik bir XSS açığı görmedim.

### Bulgular

**Minor — `araclar/sandik-mantik.js` (brief'in Adım 3 bloğu, satır ~181-183,
`cubukHTML`):** `bolutler.filter(x => x.deger != null && x.deger > 0)` koşulu,
değeri `0` (bilinmeyen değil, gerçekten sıfır) olan bir bölütü de çizilmeyen
listeden sayıyor. Teorik olarak tüm bölütler `0` ise (gerçek veri değil, `null`
değil) "veri yok" yanlış mesajı çıkabilir. Pratikte oy/sandalye oranlarının tümü
sıfır olamayacağından gerçek veride tetiklenmesi olası değil. Bu davranış brief'in
Adım 3 kod bloğunda birebir bu şekilde verilmiş (uygulayıcının kendi kararı değil);
sadece ileride not düşülsün diye kaydediyorum, düzeltme istemiyorum.

**Minor — `araclar/sandik-mantik.js` (`seritHTML`, brief'in Adım 3 bloğu):**
`h.partiler` boşsa `TIP_ETIKET[h.tip]` kullanılıyor; `h.tip` haritada olmayan bir
değerse (`undefined`) çıktıya literal `"undefined"` yazılabilir. Şu an
`TIP_ETIKET`'te tanımlı 6 tip (`tek-parti, koalisyon, azinlik, partiluestu, mbk,
cumhurbaskanligi`) gerçek veride kullanılan tüm tipleri kapsıyorsa risk yok; test
seti yalnızca `partiluestu` durumunu (kesinti rengiyle) doğruluyor. Yine brief'in
kendi kod bloğundan kaynaklanıyor, uygulayıcı sapması değil.

Kritik ya da Important seviyede bulgu yok.

## ⚠️ Farktan doğrulanamayanlar

- **Tarayıcı/DOM görünümü:** Bu görev yalnızca saf string üreten fonksiyonlar
  ekliyor; üretilen HTML'in gerçek `ortak.css`/`sandik.css` sınıflarıyla (`kart`,
  `s-kart`, `cubuk`, `s-serit`, `p-kisa`, vb.) nasıl göründüğü bu diff'te
  doğrulanamaz — CSS ve sayfa entegrasyonu (§6.4-6.9, sandik.html) sonraki
  görevlerin kapsamında. Raporda tarayıcı kanıtı (ekran görüntüsü/DOM denetimi)
  yok, zaten bu görevden beklenmiyor.
- **`Ortak.panelKur().ac(html, renk)` ile gerçek entegrasyon:** `panelHTML`'in
  döndürdüğü `{html, renk}` çiftinin `ortak.js`'teki `ac()` fonksiyonuna doğru
  şekilde bağlanacağı (görevdeki interface sözleşmesi) yalnızca imza düzeyinde
  doğrulanabilir; gerçek DOM bağlama sonraki bir görevde (sandik-sayfa.js) olacak.
- **`sandik-mantik.js`'in dışındaki üreticilerin gerçek soyağacı verisiyle
  (`veri/partiler.js`, `veri/sandik.js`) davranışı:** testler fikstür üzerinde
  çalışıyor; gerçek `veri/sandik.js` bu aşamada henüz boş/placeholder olduğundan
  (görev 5'e kadar), gerçek veriyle kart/panel üretimi bu görevde test
  edilemez — kapsam dışı, sonraki veri-doldurma görevlerinde geçerli olacak.

## Sonuç

Uygulama brief'in Adım 1 ve Adım 3 kod bloklarının birebir kopyası; tüm testler
(48/48) ve veri doğrulayıcısı bağımsız olarak yeniden çalıştırılıp doğrulandı,
commit ve dosya kapsamı brief'le tam örtüşüyor. Bulunan iki Minor not, brief'in
kendi öngördüğü koddan kaynaklanıyor ve uygulayıcının bir sapması değil; düzeltme
gerektirmiyor, yalnızca ileri görevler için bilgi notu niteliğinde.
