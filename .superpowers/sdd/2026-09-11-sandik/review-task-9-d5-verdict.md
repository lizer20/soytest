# Hüküm: Görev 9 — Dönem 5 (1991–2000)

İncelenen: `a69e3bf`, `701533f` (cec5b26..701533f), brief `.superpowers/sdd/2026-09-11-sandik/task-9-brief.md`,
rapor `.superpowers/sdd/2026-09-11-sandik/task-9-d5-report.md`.

## 1. Spec uyumu: ❌

Alan adları, `Diğer` gruplama kuralı, `ittifak` alanının 2018-öncesi için hiç yazılmaması, `oyYuzde`/
`katilimYuzde`'nin yalnızca kaynak sayı vermediğinde kullanılması, parti id eşlemesi (`veri/partiler.js`
ile doğrulandı: `chp92`, `dp92`, `dtp97`, `ldp`, `ydh`, `mhp93`, `bbp`, `fp`, `hadep`, `dehap`, `odp`,
`emep`, `ip92` hepsi mevcut), sandalye toplamlarının `meclis`'e tam eşitliği (450/550/550) ve
47→57 hükümet zincirinin boşluksuzluğu doğru uygulanmış.

Ama **Global Constraints ihlali** var: görev veren talimatın bağlayıcı kuralı "her değer (sayı, tarih,
isim, parti bileşimi, bitiş nedeni, nottaki olgu) bir resmî [B] kaynak + uyuşan ikinci kaynak" gerektirdiğini
açıkça belirtiyor. `araclar/kaynak-defteri.md`'nin "Hükümetler 48-57" bölümünde **partiler, tip ve
bitisNedeni alanlarının tamamı (47'nin düzeltmesi dahil, 11 kayıt) yalnızca TBMM *Hükümetler,
Programları ve Genel Kurul Görüşmeleri* cildinden (tek kaynak ailesi — Cilt 8/9/10) türetilmiş**;
kaynak haritasında bu konu için ayrıca listelenen ikinci kaynaklar (TBMM *Koalisyon Hükümetleri,
Koalisyon Protokolleri* PDF'i, akademik derleme "1923'ten 2018'e Türkiye'de Hükümet ve Bakanlıklar" —
Demirkol 2023) hiç kullanılmamış. Bu, dönem 0'da aynı görev için kurulan emsalin (Demirkol 2023 +
`tip` çapraz doğrulaması; hükümet 9/10/12'nin `bitisNedeni`'nin iki bağımsız kaynakla — ör.
ataturkansiklopedisi.gov.tr + darussafaka.org — doğrulanması) gerisinde bir sıkılık düzeyi.

Ayrıca hükümet 48'in `bitisNedeni: "secim"` değeri spesifikasyonun kendi tanımıyla ("secim" =
"olağan takvim") çelişiyor olabilir: 1991 seçiminin normal 5 yıllık takvime göre mi yoksa erkene
alınmış bir seçim mi olduğu doğrulanamadığı raporda açıkça kabul ediliyor; brief'in "doğrulanamayan
bitiş nedeni null kalır" kuralına göre burada `null` yazılması gerekirdi, "secim" yazmak doğrulanmamış
belirli bir kategoriyi (olağan takvim) iddia ediyor.

## 2. Görev kalitesi: Issues

### Important

1. **`araclar/kaynak-defteri.md` "Hükümetler 48-57" bölümü** — `partiler`/`tip`/`bitisNedeni`
   (11 kayıt: 47'nin düzeltmesi + 48–57) yalnızca TBMM Hükümetler cildinden (Cilt 8/9/10), bağımsız
   ikinci bir kaynak (Koalisyon Protokolleri PDF'i, Demirkol 2023 vb.) hiç kullanılmadan yazılmış.
   Brief'in bağlayıcı dual-source kuralına ve dönem 0 emsaline aykırı. Öneri: en azından `tip`
   sınıflaması Demirkol (2023) Tablo 2 ile, `bitisNedeni`'nin kritik olanları (istifa/güvensizlik/
   erken-seçim) Resmî Gazete duyurusu ya da ikinci bir akademik/haber kaynağıyla çapraz doğrulanmalı;
   bulunamıyorsa deftere "tek kaynak" notu düşülmeli.
2. **`veri/sandik.js`, hükümet no. 48, `bitisNedeni: "secim"`** — spesifikasyonun "secim" = olağan
   takvim tanımına göre, 1991 seçiminin normal takvimde mi erken mi olduğu [B] kaynakla
   doğrulanamamışken "secim" yazmak doğrulanmamış bir varsayımı veriye yazmak anlamına geliyor.
   Brief kuralı ("doğrulanamayan bitiş nedeni null kalır") burada `null` gerektiriyordu. Rapor bu
   sınırlılığı kendisi de kabul ediyor ama veriye yine de belirli bir değer yazılmış.

### Minor

3. **`veri/sandik.js`, `1991-10-genel.not`** — "Hiçbir parti tek başına hükümet kuracak çoğunluğu
   sağlayamadı; seçimden sonra DYP–SHP koalisyonu kuruldu. Sayılar il ve gümrük kapısı oylarının
   toplamıdır." iki ayrı cümleden oluşuyor; brief'in "not alanı tek cümle" kuralına aykırı (dönem 5'in
   diğer tüm `not` alanları tek cümle/noktalı virgülle birleştirilmiş tek cümle biçiminde, yalnızca bu
   kayıt istisna).
4. **Commit sayısı** — dönem 5 iki commit'le tamamlanmış (dönem 2/3 emsaliyle uyumlu) ama dönem 4
   raporu aynı ikiye bölünmeyi bilinçli olarak reddedip tek commit'i gerekçelendirmişti; dönem 5
   raporunda bu tutarsızlık için bir açıklama/sapma notu yok. İşlevsel bir sorun değil, yalnızca
   raporlama tutarlılığı eksik.

## 3. ⚠️ Farktan doğrulanamayanlar

- **1991 RP-MÇP-IDP ortak liste ittifakı** (brief'te özellikle işaret edilen konu): `ittifak` alanı
  spesifikasyona göre yalnızca 2018 sonrası dolduruluyor, bu nedenle alanın boş bırakılması doğru;
  ama bu tarihsel ittifak olgusunun `not` alanında da hiç anılmaması ya da defterde araştırıldığına
  dair bir iz olup olmadığı farktan görülemiyor — raporda da değinilmemiş, kanıt yok.
- **TÜİK Tablo 24 PDF çıktısı ve TBMM `secim_sorgu` curl çıktısı** — raporda ve defterde yalnızca
  özetlenmiş sayılar var; ham `pdftotext`/`curl` çıktıları dosya olarak sunulmadığından il/parti
  satırlarının birebir eşleştiği iddiası doğrudan doğrulanamıyor, yalnızca uygulayıcının özetine
  güveniliyor.
- **"Dönem 5'te ara seçim yapılmamıştır" negatif iddiası** — TBMM Cilt 9/10'un "taranıp hiç ara seçim
  kaydına rastlanmadığı" iddiası ve TESAV listesinin tam içeriği farkta yok; iddianın kapsamlılığı
  (cildin tamamı mı tarandı, yoksa anahtar kelime araması mı yapıldı) raporda net değil — kanıt
  sınırlı, tamamen doğrulanamıyor.
- **`node araclar/dogrula.js` ve tarayıcı denetimi çıktıları** — raporda tam metin var (kanıt var),
  bunlar için ek doğrulama gerekmiyor.
