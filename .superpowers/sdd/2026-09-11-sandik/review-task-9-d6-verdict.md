# Hüküm: Görev 9 — Dönem 6 (2001–2015)

İncelenen: `8018541`, `6ed60d4` (1404cf8..6ed60d4), brief `.superpowers/sdd/2026-09-11-sandik/task-9-brief.md`,
rapor `.superpowers/sdd/2026-09-11-sandik/task-9-d6-report.md`. Not: `00573ad` (bu dönemin
gönderiminden sonra atılmış, `araclar/dogrula.js`'i düzeltiyor) inceleme kapsamının dışında ama
aşağıdaki 1. Important bulgu için bağlam olarak kullanıldı; `node --check`, `node --test`,
`node araclar/dogrula.js` HEAD'de yeniden çalıştırılıp doğrulandı (57/57 test geçti, `hata yok`).

## 1. Spec uyumu: ❌

Alan adları, kimlik biçimi (`YYYY-AA-tür`), `baraj`/`meclis` alanları, "Diğer" gruplama eşiği (%1),
sandalye toplamlarının `meclis`'e tam eşitliği (5 genel seçimde de 550), 2007 MHP sandalye
uyuşmazlığının spesifikasyonun "toplamın meclis büyüklüğüne eşitliği belirleyici" kuralıyla
çözülmesi, CB (TBMM) sonuçsuz süreç + yeniden seçim modellemesi (`2007-04-cb-tbmm` /
`2007-08-cb-tbmm`, spesifikasyon §5.6'daki örnekle birebir örtüşüyor), hükümet 58→64 zincirinin
boşluksuzluğu ve parti id eşlemesi (`veri/partiler.js` ile doğrulandı: `akp`, `dp07`, `dtp`, `bdp`,
`hdp`, `has`, `vatan`, `anadolu`, `dyp` hepsi mevcut) doğru uygulanmış.

Ama **Global Constraints ihlali** var — brief'in bağlayıcı kuralı "her değer (sayı, tarih, isim,
parti bileşimi, tip, bitiş nedeni, nottaki olgu) resmî [B] kaynak + bağımsız ikinci kaynak" gerektiğini
söylüyor, spesifikasyon §8.1 de "eşleşmeyen ve üçüncü kaynakla çözülemeyen sayı `null` olur" diyor:

1. **`2004-03-yerel`, `2009-03-yerel`, `2014-03-yerel`'in ülke geneli belediye meclisi sayıları**
   (`kayitli`/`kullanilan`/`gecerli` ve `sonuc` dizisindeki bütün parti oyları) **yalnızca YSK'dan**
   geliyor; rapor bunu kendisi de "tek kaynak ailesi" diye adlandırıyor. Yapılan doğrulama (belgenin
   kendi TOPLAM satırıyla iç tutarlılık, büyükşehir ölçüsünde TÜİK–YSK örtüşmesi) **bağımsız bir
   ikinci kaynak değil**, aynı YSK verisinin ya kendi içindeki aritmetiği ya da farklı bir ölçünün
   (büyükşehir başkanlığı ≠ belediye meclisi) dolaylı kanıtı. Aynı durum dönem 4 ve 5'te `null`
   yazılarak çözülmüştü; burada emsale aykırı olarak gerçek sayılar yazılmış.
2. **`2004-03-yerel.buyuksehir`** (İstanbul/Ankara/İzmir) **yalnızca TÜİK'te** var; YSK'nın 2004
   sayfası şehir kırılımı vermiyor. Brief'in "buyuksehir yalnız kazanan parti, [B] + ikinci kaynak"
   kuralı burada tek kaynakla karşılanmış.
3. **Referandum `tutumlar` alanı tamamen boş** — spesifikasyon §3'ün kesin kararı "Referandum:
   Partilerin tutumları dahil" ve brief'in Adım 3'ü bunu açıkça istiyor. Rapor herhangi bir parti
   için kaynak taraması denendiğine dair kanıt sunmuyor ("kalan bütçe yetmediği için" diye
   erteleniyor) — spesifikasyonun bu maddesi bu turda hiç karşılanmamış.

## 2. Görev kalitesi: Issues

### Important

1. **`veri/sandik.js:446`, `2014-08-cb-halk` aday satırları** — `araclar/dogrula.js` artık (commit
   `00573ad`, bu gönderimden sonra) aday satırında `parti` + `ad`'ın birlikte kullanılmasına izin
   veriyor (yalnızca `parti`+`destek` birlikteliğini hata sayıyor). Ama veri hâlâ üç adayı da
   `destek:` ile yazıyor: `{ad:"Recep Tayyip Erdoğan", destek:"AK Parti", ...}`,
   `{ad:"Selahattin Demirtaş", destek:"HDP", ...}`. Soyağacında `akp` ve `hdp` id'leri mevcut ve
   spesifikasyon §5.5'in kendi örneği tam bunu gösteriyor (`{ad:"…", parti:"akp", oy:null}`).
   Sonuç: Erdoğan ve Demirtaş satırlarında soyağacı bağı ve kartın parti rengi hâlâ oluşmuyor;
   yalnızca İhsanoğlu'nun (tek başına parti kimliği olmayan ortak aday) `destek:` kalması doğru.
   Öneri: iki satırı `parti:"akp"` / `parti:"hdp"` olarak güncelle.
2. **Yerel ulusal belediye-meclisi sayıları tek kaynaklı** (`2004-03-yerel`, `2009-03-yerel`,
   `2014-03-yerel`) — yukarıda Spec uyumu §1'de detaylandırıldı. Öneri: dönem 4/5 emsaliyle tutarlı
   olacak şekilde ya gerçek bir ikinci kurumsal/akademik kaynak bulunmalı ya da `null`'a çekilmeli;
   controller'ın açık onayı olmadan mevcut haliyle "iki kaynaklı" veri olarak kabul edilmemeli.
3. **`2004-03-yerel.buyuksehir` tek kaynaklı** (yalnızca TÜİK) — yukarıda Spec uyumu §2. Üç şehir
   sonucu (İstanbul/Ankara/İzmir 2004) için ikinci resmî kaynak bulunmalı ya da alan `null`
   bırakılmalı.
4. **`veri/sandik.js`, hükümet no. 63, `partiler: ["akp","hdp"]`** — hiçbir [B] belge kabineyi
   "AK Parti–HDP" diye adlandırmıyor; değer, Resmî Gazete'nin "parti gruplarından oranlarına göre"
   ifadesi ile Demirkol (2023)'un "CHP ve MHP bakan vermeyi reddetti" cümlesinin birleştirilmesiyle
   **çıkarım yoluyla** üretilmiş (kaynak defterinde "Sınırlılık" diye açıkça kabul ediliyor). Spesifikasyon
   §8.1 nitel bilgiler için de aynı kuralı istiyor ("doğrulanamayan ... yazılmaz"). Sitede gösterilen
   veri dosyasının kendi `not` alanına bu sınırlılık hiç yansımamış — yalnızca sitede hiç
   görünmeyen kaynak defterinde var. Öneri: ya doğrudan bir [B] kanıtı bulunmalı ya da `not` alanına
   kısa bir çekince eklenmeli.
5. **Referandum `tutumlar` boş** — yukarıda Spec uyumu §3. Görev 12'ye ertelenmesi kabul edilebilir
   bir karar olabilir ama bu, spesifikasyonun açık bir kararının bu turda karşılanmadığı anlamına
   geliyor; kullanıcı onayından önce açıkça vurgulanmalı (rapor bunu zaten "Endişeler" ve "Karar
   bekleyen" bölümlerinde yapıyor — kullanıcı onayı bekleniyor).

### Minor

Yok.

## 3. ⚠️ Farktan doğrulanamayanlar

- **`pdftotext`/YSK PDF/xlsx ham çıktıları** — raporda ve defterde yalnızca özetlenmiş sayılar var;
  ham komut çıktıları dosya olarak sunulmadığından TÜİK/YSK satırlarının "birebir eşleşti" iddiası
  doğrudan doğrulanamıyor, yalnızca uygulayıcının özetine güveniliyor.
- **2003 Siirt seçiminin gerçekten yalnızca taranmış GIF olarak var olduğu** iddiası (RG
  11.3.2003 mükerrer, metin katmanı yok; YSK PDF adresi 404) — farktan görülemiyor, rapor bunu
  ayrıntılı anlatıyor ama bağımsız doğrulama yapılmadı.
- **Tarayıcı denetimi** (`sandik.html`, 70 kart, panel içerikleri, konsol hatasızlığı) — raporda
  DOM sorgu sonuçları düz metin olarak var (ekran görüntüsü/JSON dosyası yok); kanıt sınırlı ama
  mevcut, ek doğrulama gerekmiyor.
- **`node --check` / `node --test` / `node araclar/dogrula.js`** — bu inceleme sırasında HEAD'de
  yeniden çalıştırıldı ve rapordaki sonuçlarla (artı `00573ad`'ın eklediği 1 test) tutarlı bulundu;
  kanıt var.
