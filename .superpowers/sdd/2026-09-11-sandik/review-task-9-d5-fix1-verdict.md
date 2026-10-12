# Hüküm: Görev 9 — Dönem 5, Düzeltme turu 1 (701533f..1404cf8)

İncelenen: `1404cf8`, paket `.superpowers/sdd/2026-09-11-sandik/review-task-9-d5-fix1.md`,
raporun `## Düzeltme turu 1` bölümü, önceki hüküm `review-task-9-d5-verdict.md` (SPEC ❌).

## 1. Spec uyumu: ✅

Önceki turun Global Constraints ihlali (hükümet 47–57'nin `partiler`/`tip`/`bitisNedeni`
alanlarının tek kaynak ailesinden gelmesi) kapatıldı. 11 hükümetin 33 alanının tamamı artık en az
bir gerçekten bağımsız ikinci kaynakla eşleştirilmiş ve eşleşme deftere "Alan alan ikinci kaynak
eşleşmesi" tablosuyla kayıtlı. Diğer alanlarda (Interfaces bloğu, `Diğer` gruplama, `ittifak`
2018-kısıtı, parti id eşlemesi) yeni bir sapma yok.

## 2. Görev kalitesi: Approved

### Kontrol listesi

1. **İkinci kaynakların bağımsızlığı ve defter kaydı** — Kapandı. K1 (TBMM *Koalisyon
   Hükümetleri…* Cilt 2) aynı editör ailesinden olduğu için uygulayıcı bunu tek başına yeterli
   saymamış, her hükümet için ayrıca **TBMM-dışı** bir kaynak da aramış: K2 (Demirkol 2023,
   Fiscaoeconomia), K3 (Çakır 2020, IBAD), K4 (Solak & Karataş 2025, 21. Yüzyılda Eğitim ve
   Toplum), K5 (Anadolu Ajansı), K7 (dergipark) — dört farklı akademik dergi + bir haber ajansı,
   gerçekten bağımsız kaynak ailesi. **"Koalisyon protokolleri cildinde yok = koalisyon değil"
   negatif doğrulaması** (48, 51, 56 için) tek başına kullanılmamış, her üçü için de K2/K4'ün
   doğrudan "tek parti azınlık hükümeti" ifadeleriyle **pozitif** olarak da doğrulanmış — negatif
   çıkarım yalnızca destekleyici, geçerli bir yöntem. Eşleşme "Alan alan ikinci kaynak eşleşmesi"
   tablosunda hükümet × alan bazında kayıtlı. Kabul edilebilir.
2. **48'in `erken-secim`e çevrilmesi** — Kapandı. [B] Kanun 3757 (RG 26.8.1991/20972, m. 15,
   20 Ekim 1991'i özel kanunla belirliyor — normal seçim takviminin bir parçası olsaydı ayrı bir
   kanuna gerek kalmazdı) + [B] TÜİK'in "5 yılda bir" kuralı ve 18. Dönem'in 29.11.1987 başlangıcı
   (olağan tarih ~Kasım 1992 olurdu) + ikinci kaynak K7'nin doğrudan "1991 … erken genel seçim
   kararı" ifadesi. Önceki turun `null` önerisinden daha güçlü, kanıtla desteklenmiş bir sonuç;
   kabul edilebilir. (Küçük not: K7'nin yazarı uygulayıcı tarafından "(?)" ile belirsiz
   işaretlenmiş — alıntının kendisi ve dergipark kaynağı sabit olduğundan bu yalnızca bir
   atıf-hijyeni notu, veri bütünlüğünü etkilemiyor.)
3. **1991 ortak liste notu ve tek cümle kuralı** — Kapandı. Yeni `not` metni tek cümle (noktalı
   virgülle birleşik), dönem 5'in diğer kayıtlarıyla aynı biçimde. RP-MÇP-IDP ortak listesi
   [B] TÜİK Tablo 1/24 (MÇP/IDP 1991'de ayrı liste vermemiş) + [B] TBMM tutanağı (MÇP'nin 19.
   Dönem'de kendi sıraları/grubu var) + ikinci kaynak Medyascope (62 sandalye/％16,87 rakamlarıyla
   tolerans içinde eşleşen ittifak açıklaması) ile doğrulanmış. Sandalyelerin RP/MÇP/IDP arasında
   dağılımı tek kaynakta geçtiği için veriye yazılmamış — doğru, temkinli karar.
4. **53'ün bitiş nedeni ayrışması** — Kabul edilebilir ve deftere açıkça yazılmış. Üç kaynak
   tetikleyicide (AYM iptali mi, DYP'nin çekilmesi mi) ayrışıyor ama mekanizmada (istifa ederek
   görevi bırakma, güvensizlik oyuyla düşürülme değil) birleşiyor; kontrollü kelime dağarcığında
   (`secim/erken-secim/guvensizlik/istifa/…`) bu düzeydeki ayrımı taşıyacak ayrı bir kategori
   olmadığından `istifa` doğru seçim ve ayrışma not olarak korunmuş.
5. **Yeni sorun** — Bulunmadı. `veri/sandik.js` diff'i yalnızca 3 satır (1991-10-genel `not`,
   48'in `bitisNedeni` ve `not`) değiştiriyor; hiçbir sayısal alan dokunulmamış. `node --test`
   (56/56 geçti) ve `node araclar/dogrula.js` çıktısı ilk turla birebir aynı (yeni uyarı yok,
   `hata yok`). Ayrıca düzeltme turu, önceki hükmün CANNOT-VERIFY notlarından ikisini de kendiliğinden
   kapatmış: TÜİK Tablo 24/TBMM `secim_sorgu` ham çıktıları artık deftere eklenmiş, ve "ara seçim
   yok" iddiasının tarama kapsamı (üç cildin tam metni, satır sayılarıyla `grep` sonuçları)
   somutlaştırılmış.

### Önceki bulguların durumu
- Important #1 (hükümet 47–57 tek kaynak) — **kapandı**.
- Important #2 (48'in `secim` değeri doğrulanmamış varsayım) — **kapandı** (`erken-secim`, [B] kanıtla).
- Minor #3 (1991-10-genel `not` iki cümle) — **kapandı**.
- Minor/kanıt #4 (RP-MÇP-IDP araştırılmamış) — **kapandı**.
- Minor (commit sayısı tutarsızlığı) — raporda gerekçelendirildi, **kapatıldı** (gerçek bir kusur
  değildi, yalnızca açıklama eksikti).

## 3. ⚠️ Farktan doğrulanamayanlar
- Yok — bu turda eklenen ham çıktı kesitleri ve tam-metin tarama metodolojisi, önceki turun açık
  kalan kanıt notlarını kapatıyor. `node --test`/`dogrula.js` çıktıları raporda var (kanıt var).
