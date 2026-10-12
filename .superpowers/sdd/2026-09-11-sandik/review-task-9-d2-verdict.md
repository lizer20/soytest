# Hüküm: Görev 9 — Dönem 2 (1961–1971)

## 1. Spec uyumu: ❌

**Brief'in Adım 1 kuralı** ("kaynakta olup listede olmayan kayıt eklenir... aday listede olup
kaynakta olmayan kayıt eklenmez") yanlış uygulandı: aday listedeki **"1961 TBMM CB seçimi"**
raporda "kaynaklarda böyle bir seçim yok, Gürsel geçici maddeyle otomatik cumhurbaşkanı sayıldı"
gerekçesiyle atlandı. Bu iddia görev talimatı gereği web'de bağımsız doğrulandı ve **yanlış
çıktı**:

- **T.C. Cumhurbaşkanlığı resmî sitesi** (`tccb.gov.tr/cumhurbaskanlarimiz/cemal_gursel/`, [B]):
  "Halkoyuna sunulan ve kabul edilen bu Anayasa gereğince 10 Ekim 1961'de yapılan seçimlerden
  sonra oluşturulan Türkiye Büyük Millet Meclisi tarafından Türkiye'nin dördüncü cumhurbaşkanı
  seçildi."
- **TDV İslam Ansiklopedisi**, "GÜRSEL, Cemal" maddesi (`islamansiklopedisi.org.tr/gursel-cemal`):
  Gürsel'in **26 Ekim 1961**'de "Türkiye Büyük Millet Meclisi'nin ortak toplantısında" seçildiğini,
  başlangıçta Ali Fuat Başgil'in de aday olup MBK baskısıyla çekildiğini anlatıyor.

İki bağımsız kaynak (biri resmî [B]) TBMM'de gerçek bir seçim/oylama yapıldığını doğruluyor —
"geçici madde ile otomatik cumhurbaşkanı" iddiası kaynaklarda yer almıyor. Bu, gerçek bir seçim
kaydının veri setinden dışlanması anlamına geliyor (bkz. Bulgu C1).

**Eksik:** 1961 CB-TBMM kaydı (kaynakla doğrulanabilir olduğu halde) `veri/sandik.js`'e
eklenmedi.

**Fazladan eklenen:** yok.

**Brief'ten sapan değerler:** yok (parti id'leri, alan adları, kimlik biçimi, tarih biçimi
brief/spec ile birebir).

**Global Constraints ihlalleri:**
- **"Bilgi uydurulmaz" / kaynak kuralı (§8.1, brief kaynak haritası — "her sayı/nitel bilgi bir
  resmî [B] kaynak + ikinci kaynak")**: 1963/1968 yerel kayıtlarının büyükşehir sonuçlarının
  büyük çoğunluğunda resmî kaynak hiç kullanılmadı (bkz. Bulgu C2).
- Diğer kurallar (kimlik biçimi, tarih biçimi, yükleme sırası, dosya listesi, commit mesajı
  biçimi, `ad:`/`parti:` ayrımı, sandalye toplamı = meclis, Senato/Millet Meclisi ayrımı) farkta
  ihlal edilmiyor.

## 2. Görev kalitesi: Issues

### Critical

- **C1 — 1961 CB-TBMM seçimi, doğrulanabilir olduğu halde eklenmedi.**
  `veri/sandik.js:186-190` civarı (1961-10-genel ile 1965-10-genel arası boşluk) ve
  `araclar/kaynak-defteri.md` Görev 9 — Dönem 2 bölümü (konu hiç işlenmemiş, bkz. Important-1).
  Sorun: Rapor (`task-9-d2-report.md` Adım 1 ve Adım 3), Cemal Gürsel'in 1961 Anayasası'nın
  geçici maddeleriyle otomatik cumhurbaşkanı sayıldığını, TBMM'de ayrı bir seçim yapılmadığını
  iddia ediyor ve bu nedenle kaydı eklemiyor. Bağımsız web doğrulaması bunun **yanlış** olduğunu
  gösterdi: tccb.gov.tr (resmî) ve TDV İslam Ansiklopedisi (ikinci kaynak), Gürsel'in **26 Ekim
  1961**'de TBMM'nin ortak/birleşik toplantısında seçildiğini açıkça yazıyor. Bu, projenin
  temel ilkesiyle (hiçbir gerçek kayıt atlanmaz, doğrulanabilen her seçim eklenir) çelişen bir
  veri eksikliği.
  Öneri: `tccb.gov.tr/cumhurbaskanlarimiz/cemal_gursel/` [B] + TDV İslam Ansiklopedisi ikinci
  kaynak olarak kullanılıp `1961-10-cb-tbmm` (ya da `1961-11-cb-tbmm`, 1961-10-genel ile aynı ay
  çakışmasını önleyecek biçimde) kaydı eklenmeli: `secilen:"Cemal Gürsel"`, `turSayisi:1`
  (iki kaynak da "1. turda/tek adayla" seçildiğini destekliyor — Başgil'in çekilmesiyle Gürsel
  tek aday kaldı), `not` alanına sürecin özeti (Başgil'in adaylıktan çekilmesi, MBK baskısı)
  yazılabilir. Oy sayısı için üçüncü/resmî bir kaynak (TBMM tutanağı) bulunamazsa alan zaten veri
  modelinde yok, sorun teşkil etmez.

- **C2 — 1963/1968 yerel kayıtlarının büyükşehir sonuçlarında resmî [B] kaynak eksik.**
  `araclar/kaynak-defteri.md:1182-1228` (1963-11-yerel, Ankara/İzmir alt başlıkları) ve
  `:1229-1283` (1968-06-yerel, üç şehir de); karşılık gelen veri `veri/sandik.js:196-201` ve
  `:219-224` (`buyuksehir` blokları).
  Sorun: Görevin kendi kaynak kuralı ("her sayı/nitel bilgi bir resmî [B] kaynak — YSK, TÜİK,
  TBMM, Resmî Gazete, AYM — + eşleşen ikinci kaynak; haber veritabanları yalnızca ikinci kaynak
  olabilir") 6 büyükşehir kaydından yalnızca 1'inde (1963 İstanbul — YSK kararı + Resmî Gazete)
  tam uygulanmış. Diğer 5'inde **hiçbir resmî kaynak yok**:
  - 1963 Ankara: Biyografya.com (biyografik sözlük) + yeniankara.com.tr (yerel haber portalı) —
    ikisi de gayriresmî.
  - 1963 İzmir: Ege Üniversitesi Açık Erişim tez özeti (akademik ama resmî değil, kural gereği
    yalnızca *ikinci* kaynak olabilir) + WebSearch haber özetleri — resmî kaynak yok.
  - 1968 İstanbul: SETA (düşünce kuruluşu yayını, resmî ya da akademik/kurumsal derleme değil) +
    haber veritabanları (secim.milliyet.com.tr vb., kural gereği yalnızca ikinci kaynak) —
    resmî kaynak yok.
  - 1968 Ankara: sonsoz.com.tr (yerel haber sitesi) + haber veritabanları — resmî kaynak yok.
  - 1968 İzmir: Ege Üniversitesi tez özeti + haber veritabanları — resmî kaynak yok.
  Öneri: YSK Mahalli İdareler Arşivi'nden ya da dönemin Resmî Gazete ilanlarından (il seçim
  kurulu mazbata kararları, 1963 İstanbul'da olduğu gibi) birincil kaynak aranmalı. Bulunamazsa
  kural gereği bu nitel bilgi (kazanan parti/aday) `null`/eksik bırakılmalıdır — mevcut haliyle
  kayıtlar "iki kaynakla doğrulandı" görünümü veriyor ama ikisi de gayriresmî, bu da projenin
  "resmî kaynak zorunlu" ilkesini (§8.1) ihlal ediyor.

### Important

- **I1 — Kaynak defterinde 1961 CB-TBMM'nin dışlanma gerekçesi hiç yok.**
  `araclar/kaynak-defteri.md`, Görev 9 — Dönem 2 bölümü. Rapor bu kararı (Adım 1/Adım 3)
  anlatıyor ama defterde (§8.3'ün "her kayıt için kimliğiyle bir başlık" kuralı, dışlanan
  kayıtlar için de emsal olarak dönem 1'de uygulanmıştı — örn. 1947-49 ara seçimleri) buna
  karşılık gelen bir not/başlık yok. Öneri: C1 çözülürken ya da çözülmese bile, kararın
  gerekçesi ve kontrol edilen kaynaklar deftere de yazılmalı (şeffaflık/iz bırakma amacı).

### Minor

yok.

## 3. ⚠️ Cannot verify from diff

- Tarayıcı denetimi iddiaları (panelin kaynak defteriyle "birebir eşleştiği", kırmızı kesinti
  bandının doğru konumda durduğu, konsol hatası olmadığı) — kod/veri farkından doğrulanamaz.
  Raporda (`task-9-d2-report.md` §3 ve §7 sonu) JavaScript ile okunan `document.body.innerText`
  alıntısı var (kısmi kanıt), ama ekran görüntüsü ya da ham konsol/network log dosyası yok.
- `node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js`
  çıktısı — raporda yalnızca özet ("PASS 54/54", "hata yok" + uyarı listesi) var, ham komut
  çıktısı (log dosyası) eklenmemiş; sözleşme gereği bu turda yeniden çalıştırılmadı.
- 1966-03-cb-tbmm kaydındaki tarih/1. tur bilgisinin AA ve TBMM kitabı dolaylı atıflarıyla
  doğrulandığı iddiası — kaynak defterinde URL'ler var (AA, TDV, tccb.gov.tr adı geçiyor ama
  "sertifika hatası nedeniyle açılamadı" deniyor), bu turda ayrıca doğrulanmadı ama rapordaki
  WebSearch sonuçlarımla (461/532, Türkeş 11 oy) tutarlı görünüyor — düşük risk.
