# Hüküm: Görev 9 — Dönem 3 (1972–1980, 12 Eylül kabı dahil)

İncelenen commit'ler: `4ce8569` (genel/CB/hükümetler), `2a7de6b` (yerel/ara/12 Eylül kabı/1982
referandumu), `06bc008` (düzeltme: hükümet tarihleri TBMM ciltleriyle). Değişen dosyalar
(üçü de): yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md`.

## Yöntem

Brief, rapor, inceleme paketi (tam fark) ve spesifikasyon (§3, §5.1–5.9, §8.1, §8.4, §8.5)
okundu. Önceki dönemlerin hükümlerinden (d0, d1, d2, d2-fix1) emsal alındı. Aşağıdaki
bağımsız kontroller diftteki sayılar üzerinde elle yapıldı (kaynak sitesine gidilmedi,
sözleşme gereği test yeniden çalıştırılmadı — kanıt rapor dosyasındaki ham çıktıda):

- 1973-10-genel ve 1977-06-genel: parti oyları toplamı elle toplandı → 10.723.658 ve
  14.827.172, ikisi de kayıttaki `gecerli` alanıyla **birebir eşleşti**; sandalye toplamları
  450/450, `meclis`e **tam eşit**.
- 1973-12-yerel ve 1977-12-yerel: parti oyları toplamı elle toplandı → 3.914.801 ve
  5.680.318, ikisi de `gecerli` alanıyla **birebir eşleşti**.
- 1982-11-referandum: `evet + hayir` = 17.215.559 + 1.626.431 = 18.841.990 = `gecerli`
  **tam eşit**; `kullanilan - gecerli` = 43.498 (kaynak defterindeki "geçersiz 43.498"
  ile tutarlı).
- `veri/partiler.js`'teki `DONEMLER[3].kesinti.yonetim` = `{bas:"1980-09-12",
  bit:"1983-11-05"}` ve `sandik-mantik.js`'teki `donemBul`/`kronoloji` mantığı (hükümet
  kaydı `h.baslangic`'e göre kaba düşer) okunarak, 44. hükümetin `baslangic:"1980-09-20"`
  kaba (kap) düştüğü ve `bitis:"1983-12-13"`nin kap dışına taşmasının kod açısından sorun
  olmadığı (yalnızca `baslangic` kap üyeliğini belirliyor) doğrulandı.
- Kimlik biçimi (`YYYY-AA-tür`) ve `tarih` ay/yıl uyumu 7 yeni kayıt için tek tek kontrol
  edildi — hepsi uyumlu.
- Parti id'leri (`chp23`, `ap`, `msp`, `demp70`, `cgp`, `mhp69`, `tip75`) `veri/partiler.js`de
  aranıp gerçekten var olduğu görüldü.

## SPEC uyumu: ❌

**Eksik:** yok (aday listedeki bütün genel/yerel/CB/12 Eylül kabı kayıtları ya eklendi ya da
gerekçeli biçimde dışlandı — ara seçimler için aşağıya bkz.).

**Fazladan eklenen (YAGNI):** yok.

**Brief'ten sapan değerler:** yok — alan adları, kimlik biçimi, tarih biçimi, `parti`/`ad`
ayrımı, commit mesajı biçimi (Türkçe + `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`)
brief ile birebir.

**Global Constraints ihlali — hükümetlerin `partiler` alanı, kaynak kuralını (§8.1 / brief
"Her değer: bir resmî [B] kaynak + uyuşan ikinci kaynak") karşılamıyor.**
`veri/sandik.js:459,464,469,474,479,484,489,494,499,506` (hükümet no. 35–44, `partiler:[...]`
alanları) ve `araclar/kaynak-defteri.md:1470-1508` ("Parti bileşimleri" bölümü). Düzeltme
turunda (06bc008) yalnızca **tarihler** TBMM Cilt 5/6/7 ile (birincil [B]) doğrulandı; rapor ve
kaynak defteri bunu açıkça itiraf ediyor: "Parti bileşimleri ... bu turda satır satır
okunmadı (zaman kısıtı) ... yalnızca tarihler birincil kaynakla doğrulandı." 10 hükümetin
tamamında `partiler` dizisi yalnızca ikincil/akademik kaynaklara dayanıyor; hiçbirinde resmî
[B] kaynak (TBMM cildinin "Koalisyon Protokolü"/Bakanlar Kurulu bölümü ya da Resmî Gazete
kararnamesi — ikisi de görev talimatımda örnek olarak veriliyor) kullanılmadı. Bazı
kayıtlarda (39, 41) tek bir akademik makale dışında ikinci bir kaynak bile anılmıyor. Bu,
projenin baştan beri uyguladığı ve d2 incelemesinde de (Bulgu C2 — büyükşehir sonuçları
yalnızca gayriresmî kaynaklarla yazılmıştı, Critical bulundu ve düzeltilene kadar SPEC ❌
tutuldu) emsal oluşturan kuralın aynısının burada karşılanmadığı anlamına geliyor: nitel
bilgi (burada koalisyon bileşimi) resmî kaynaksız yazılmamalı; kaynak defterinde "iki
kaynakla doğrulandı" izlenimi veriyor ama ikisi de gayriresmî ya da tek kaynak.

Öteki Global Constraints (yükleme sırası, dosya kapsamı, kimlik biçimi, sandalye toplamı =
meclis, dönem/kap yerleşimi) ihlal edilmiyor.

## Görev kalitesi: Issues

### Critical

- **C1 — Hükümet 35–44 `partiler` alanı resmî [B] kaynaksız.**
  `veri/sandik.js:459,464,469,474,479,484,489,494,499,506`;
  `araclar/kaynak-defteri.md:1470-1508`.
  Sorun: yukarıdaki SPEC bölümünde ayrıntılandırıldı. Etki sınırlı değil — sitede görünen
  koalisyon bileşimi bilgisinin tamamı (10 kayıt) bu kuralı karşılamıyor, ve rapor bunu
  "zaman kısıtı" ile açıkça mazur gösteriyor; kullanıcı onayı olmadan bu haliyle "tamamlandı"
  sayılmamalı.
  Öneri: TBMM Cilt 5/6/7 zaten indirilmiş durumda (`pdftotext -layout` çıktısı elde); her
  hükümetin "Koalisyon Protokolü" ya da "Bakanlar Kurulu" bölümü aranıp bakanlıkların parti
  dağılımı okunmalı (39 için zaten kaynak defterinde "30 bakanın 16'sı AP..." biçiminde bir
  sayı var — bu tarz bir dağılım TBMM cildinde de bulunabilir). Resmî Gazete'nin ilgili
  Bakanlar Kurulu kararname/atama ilanları ikinci yol olabilir. Bulunamayan hükümet için
  `partiler` yazılmadan bırakılmalı ya da (d2 C2 emsaliyle tutarlı olarak) `not` alanında
  "resmî kaynak bulunamadı" diye belirtilip alan `[]` bırakılmalı — mevcut haliyle veri
  "doğrulanmış" görünümü veriyor ama değil.

### Important

- **I1 — 44. Ulusu Hükümeti'nin `tip:"mbk"` etiketi kozmetik olarak yanlış (bilinen, kapsam
  dışı).** `veri/sandik.js:506`; spesifikasyon §5.8'in tek askerî hükümet kodu `"mbk"`, ama
  1980-83 döneminin yönetim organı Millî Güvenlik Konseyi'ydi (MGK), Millî Birlik Komitesi
  değil (o 1960-61 dönemine ait). Arayüz bu kodu "Millî Birlik Komitesi" metnine çeviriyor —
  yanlış görüntüleniyor. Rapor bunu şeffaf biçimde itiraf ediyor ve doğru biçimde bu görevin
  kapsamı dışına (kod/taksonomi düzeltmesi — `ortak.js`/`sandik-mantik.js`) bırakıyor. Bu bir
  veri toplama hatası değil, veri modelinin eksikliği; Görev 12 ya da ilgili bir kod görevinde
  ele alınmalı (`tip` alanına `"mgk"` eklenmesi ya da etiket metninin genelleştirilmesi).

- **I2 — Hükümetlerin `bitisNedeni` alanı da yalnızca ikincil kaynaklarla belirlendi.**
  `araclar/kaynak-defteri.md:1480-1503` (37, 40, 41, 42 için "WebSearch ile toplanan ikincil
  kaynaklar" ifadesi). C1 ile aynı kök nedene (partiler+bitisNedeni ikisi de spesifikasyonun
  "nitel bilgi" kuralına tabi, §8.1) sahip, ama etkisi C1'den daha sınırlı: `bitisNedeni`
  değerleri (`"istifa"`, `"guvensizlik"`, `"darbe"`, `"secim"`) dönemin genel bilinen akışıyla
  tutarlı ve `dogrula.js`'in kapalı enum listesinden seçiliyor; C1 çözülürken aynı TBMM
  ciltlerinin ilgili oturum tutanaklarıyla bu alan da gözden geçirilmeli.

### Minor

- yok.

## ⚠️ Cannot verify from diff

- Tarayıcı denetimi iddiaları (dönem 3 bandının/kap'ın doğru sırada göründüğü, `#1973-10-genel`
  ve `#1982-11-referandum` panellerinin kaynak defteriyle "birebir eşleştiği", konsol hatası
  olmadığı, `20 Eyl 1980` metninin sayfada göründüğü) — raporda (`task-9-d3-report.md` §1, §4,
  §5) `document.body.innerText`/JS ile okunan alıntılar var (kısmi kanıt) ama ham ekran
  görüntüsü ya da ayrı bir denetim log dosyası eklenmemiş; koddan (bu turda `sandik-mantik.js`/
  `sandik-sayfa.js` değişmedi) davranış dolaylı olarak makul ama doğrudan doğrulanamıyor.
- 1973-04-cb-tbmm ve 1980-03-cb-tbmm kayıtlarının kaynaklandığı AA (Anadolu Ajansı) sayfası ve
  dergipark makalesinin içeriği — bu turda WebFetch ile yeniden açılmadı, yalnızca kaynak
  defterindeki alıntılara güvenildi (d0 incelemesinde AA aynı yöntemle bağımsız doğrulanmış ve
  kabul edilmişti, bu yüzden düşük risk sayıldı).
- 1975/1979 ara seçimlerinin "iki kaynakla doğrulanamadı" iddiası (YSK JS kabuğu, TESAV 404) —
  raporda ayrıntılı anlatılıyor ama bağımsız olarak yeniden denenmedi.
