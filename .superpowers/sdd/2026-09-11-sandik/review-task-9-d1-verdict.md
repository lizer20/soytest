# İnceleme hükmü — Görev 9, Dönem 1 (1946–1960 ve 27 Mayıs 1960 kabı)

İncelenen: `f035e03` + `878a609` (`7c66cec..HEAD`), rapor `task-9-d1-report.md`, defter eki
"Görev 9 — Dönem 1".

## 1. Spec uyumu: ❌

Adım 1–7 genel olarak brief'e uygun yürütülmüş (envanter kaynaktan doğrulanmış, alan adları
§5'e birebir uyuyor, kap yerleşimi doğru, commit'ler iki parçalı ama brief'in "her dönem bir
commit" kuralına küçük bir sapma — kesintiye karşı önlem olarak makul, ciddi değil).

Ancak **kesin kural ihlali** var (bkz. Bulgu 1): kaynak defterinin kendi anlattığı kaynak
seçimi ile `veri/sandik.js`'e yazılan sayı uyuşmuyor. Brief'in "Her sayı: bir resmî kaynak [B]
+ eşleşen ikinci kaynak. Eşleşmezse ve üçüncü kaynak çözmezse `null`" kuralı, 1950 genel
seçiminin DP/CHP oy sayılarında fiilen uygulanmamış — defter TÜİK'in bu satırının
kullanılmadığını söylüyor ama kod tam olarak TÜİK'in (reddedilen) satırını taşıyor.

İkinci bir sapma: 1951 ara seçiminin `sandalyeSayisi:20` değeri, kuralın gerektirdiği
"eşleşen ikinci kaynak" olmadan (kaynaklar 17/20, 19/21, 22/22 arasında bölünmüş,
defterin kendi ifadesiyle "bu bir ikinci resmî kaynakla tam örtüşmüyor") yayımlanmış;
kural gereği bu durumda `null` yazılması gerekirdi.

## 2. Görev kalitesi: Issues

### Bulgu 1 — Critical — `veri/sandik.js:~1950-05-genel` — DP/CHP 1950 oy sayıları, kaynak defterinin anlattığı kaynak seçimiyle uyuşmuyor

**Dosya:** `veri/sandik.js`, `1950-05-genel` kaydı (`sonuc[0]` ve `sonuc[1]`).
**Sorun:** Kod: `{ parti: "dp46", oy: 4391694, sandalye: 408 }`, `{ parti: "chp23", oy: 3148626,
sandalye: 69 }`. Kaynak defteri ("Not" bloğu ve "1950-05-genel" başlığı) açıkça şunu söylüyor:
"1950 için TÜİK yerine TBMM seçim sorgusu + Olgun/ATAM Dergisi (2010) akademik kaynağı [B]
kullanıldı (TÜİK'in 'ortalama' yöntemi nedeniyle)" ve "TBMM+Olgun ... esas alındı, TÜİK'in bu
satırı kullanılmadı." TBMM seçim sorgusu değeri DP 4.241.393 / CHP 3.176.561; Olgun (2010)
değeri DP 4.242.831 / CHP 3.165.096 — **ikisi de kodda yazılı 4.391.694 / 3.148.626 ile
uyuşmuyor.**

Bunu yerel TÜİK PDF'inde bağımsız olarak doğruladım (PyMuPDF ile kelime-koordinatlı çıkarım,
pdftotext'in bu sayfadaki hizalama sorunlarını atlayarak): PDF s. 43 (Tablo 23, "TÜRKİYE"),
"DP" satırı, A sütunu (Alınan oy sayısı), 1950 kolonu = **4 391 694**; "CHP" satırı, A sütunu,
1950 kolonu = **3 148 626**. Yani kodda yazılı sayılar TÜİK'in **tam da reddedildiği söylenen**
"ortalama oy sayısı" satırı — TBMM/Olgun'un "gerçek toplam" satırı değil.

Buna karşılık aynı kaydın `sandalye` alanları (DP 408, Bağımsız 9) doğru şekilde TBMM/Olgun
kaynağını yansıtıyor (TÜİK'in kendi C sütunu DP için 416 veriyor ve 69+416+1+9=495>487 olduğu
için imkânsız — bu kısmı rapor doğru tespit etmiş ve doğru çözmüş). Bu, `oy` alanlarının Adım 4
yazım aşamasında (muhtemelen ilk taslakta TÜİK kullanılıp sandalye düzeltilirken oy'un
güncellenmemesiyle) sehven eski/reddedilen değerde kaldığını gösteriyor.

**Etki:** Sitenin en görünür kayıtlarından biri (1950 — "İktidar ilk kez seçim yoluyla el
değiştirdi") için görüntülenen oy sayısı, kaynak defterinin iddia ettiği kaynak çiftinin
verdiği sayı değil. Bu, projenin en temel ilkesini ("bilgi uydurulmaz" — her sayı belirtilen
kaynağa sadık kalmalı) ihlal ediyor: kaynak ile veri birbirini doğrulamıyor.

**Öneri:** `dp46` `oy` alanını TBMM/Olgun'un anlaştığı değere çek (TBMM 4.241.393 ya da Olgun
4.242.831 — defterde hangisi [B] işaretliyse) ve `chp23` `oy` alanını aynı şekilde (TBMM
3.176.561 / Olgun 3.165.096). Alternatif olarak, TÜİK'in sayısında ısrar edilecekse, defterin
"Not" ve "Uyuşmazlık" bloklarının TÜİK'in oy sayısını neden kabul edilebilir bulduğunu (seçim
sayısı gibi) yeniden yazması ve TÜİK'in C sütunundaki 416 sandalye ile tutarsızlığın nasıl
çözüldüğünü aynı mantıkla oy için de göstermesi gerekir — şu an ikisi çelişkili.

### Bulgu 2 — Important — `araclar/kaynak-defteri.md#1954-05-genel` / `veri/sandik.js` — DP 1954 sandalye sayısı (504) TÜİK'in kendi tablosuyla (503) örtüşmüyor, uyuşmazlık not edilmemiş

**Dosya:** `araclar/kaynak-defteri.md`, "1954-05-genel" başlığı; `veri/sandik.js`,
`1954-05-genel.sonuc[0].sandalye`.
**Sorun:** Kodda `dp46 sandalye: 504`. Yerel TÜİK PDF'inde (Tablo 23, "DP" satırı, C sütunu,
1954 kolonu) koordinat bazlı doğrulamada değer **503**. 503 ile toplam 69(CHP dönem — hayır,
1954'te CHP=31)+31+503+5(CMP)+1(Bağımsız)=540≠541(meclis); 504 kullanılınca 541'e tam eşitleniyor
— yani 504'ün tercih edilmesi muhtemelen doğru (TÜİK'in kendi tablosunda muhtemelen bir baskı/
hizalama hatası var, tıpkı 1950 DP=416 durumunda olduğu gibi). Ama defterin "1954-05-genel"
bölümü bu TÜİK-akademik çelişkisini **hiç belirtmiyor** — yalnızca Yılmaz (2010)'un 504 rakamını
aktarıyor, TÜİK'in kendi satırının 503 dediğini not etmiyor. Bu, aynı defterin 1950 kaydı için
gösterdiği titizlik standardından (orada TÜİK'in 416'sı açıkça "imkânsız" diye işaretlenip
gerekçelendirilmiş) bir sapma.
**Öneri:** 1954-05-genel'e, 1950'dekine benzer bir "Uyuşmazlık" notu eklenmeli: TÜİK Tablo
23'ün DP için 503 verdiği, ama bunun 541 toplamını tutturmadığı, Yılmaz (2010)'un 504 rakamının
tercih edildiği ve gerekçesi.

### Bulgu 3 — Important — `veri/sandik.js#1951-09-ara` — `sandalyeSayisi:20` kuralın gerektirdiği ikinci kaynak eşleşmesi olmadan yayımlanmış

**Dosya:** `veri/sandik.js`, `1951-09-ara` kaydı; `araclar/kaynak-defteri.md#1951-09-ara`.
**Sorun:** Brief'in kesin kuralı: "Her sayı: bir resmî kaynak [B] + eşleşen ikinci kaynak.
Eşleşmezse ve üçüncü kaynak çözmezse `null`." Defterin kendi ifadesiyle kaynaklar arasında
"17/20, 19/21, 22/22" gibi üç farklı rivayet var ve kullanılan tek akademik makale bunu kendi
içinde tartışıp CA (Cumhuriyet Arşivi) belgesine dayanarak 17/20'yi seçiyor — defter bunun "bir
ikinci resmî kaynakla tam örtüşmüyor" olduğunu açıkça kabul ediyor. Bu, kuralın öngördüğü
"[B]+eşleşen ikinci kaynak" ya da "üçüncü kaynakla çözülme" durumunu karşılamıyor; kural
gereği `sandalyeSayisi` (ve `bolge`'nin kesin il sayısı) `null` kalmalıydı, editoryal bir tercih
yapılmamalıydı.
**Öneri:** `sandalyeSayisi: null` yap (ya da ikinci bağımsız bir kaynak — Resmî Gazete/TBMM
tutanağı ile 20 sayısını doğrula); `bolge` alanında yalnızca "17 il" gibi tam sayı iddiası
olmayan bir ifade kullanılabilir ama kesin `sandalyeSayisi` sayısal alanı için tek akademik
kaynağın kendi içindeki tartışmalı seçimi yeterli değil.

### Bulgu 4 — Important (kullanıcı onayı bekliyor, ama not edilmeli) — `mp48` düğümüne hem MP (1950) hem CMP (1954/1957) sonuçlarının yazılması

Rapor bunu zaten açıkça kullanıcı onayına sunmuş (§5 "Ek karar noktası"), bu doğru bir pratik —
ama incelemenin kendi bulgusu olarak da doğruluyorum: `veri/partiler.js`'teki `mp48` kartı
("Millet Partisi", yıl "1948 – 1958") tarihsel olarak iki ayrı tüzel kişiliği (MP 1948, 1953'te
Anayasa Mahkemesi'nce kapatıldı; CMP 1954'te aynı kadroyla yeniden kuruldu, 1958'de CKMP'ye
dönüştü) tek düğümde birleştiriyor. Bu, `mp48` düğümünün ÖNCEDEN VAR OLAN bir basitleştirmesi
(bu görevin kapsamı dışı) ama Dönem 1'in 1950/1954/1957 sonuçlarının hepsi bu tek düğüme
yazıldığı için görünürlüğü artıyor. Görev kapsamında doğru şekilde ele alınmış (veri
uydurulmamış, sadece mevcut düğüme eşlenmiş, ve konu şeffafça kullanıcıya iletilmiş); ancak
Dönem 2'ye geçmeden (ckmp verilerinin başladığı yer) bu onayın alınmış olması önerilir, aksi
halde Dönem 2'de aynı belirsizlik tekrar gündeme gelir.

### Bulgu 5 — Minor — Commit sayısı

Brief "Adım 7: Commit (her dönem)" tek bir commit öngörüyor; rapor iki commit atmış ("kesintiye
karşı" gerekçesiyle). Küçük bir sapma, veri bütünlüğünü etkilemiyor, ama brief'in tam istediği
biçim değil.

## 3. Doğrulama notları (kaynağın kendisinde örneklem kontrolü)

Yerel TÜİK PDF'i (`webfetch-1789121603458-3nc85e.pdf`) üzerinde `pdftotext` ve (hizalama
sorunları nedeniyle) PyMuPDF kelime-koordinat çıkarımıyla şunlar bağımsız olarak doğrulandı:
- Tablo 2 (PDF s. 23): kayıtlı/kullanılan/katılım 1950/1954/1957 — kod ile birebir eşleşiyor.
- Tablo 3 (PDF s. 23): `meclis` 1946:465, 1950:487, 1954:541, 1957:610 — kod ile birebir
  eşleşiyor.
- Tablo 23 (PDF s. 43, "TÜRKİYE"): CHP oy/sandalye (1950/1954/1957), CMP oy/sandalye
  (1954/1957), Hürriyet Partisi oy/sandalye (1957), MP oy/sandalye (1950) — kod ile birebir
  eşleşiyor. **DP oy (1950) eşleşmiyor** (Bulgu 1); **DP sandalye (1954) TÜİK'in kendi
  tablosuyla eşleşmiyor ama not edilmemiş** (Bulgu 2).
- `node --check veri/sandik.js`, `node --test "araclar/test/*.test.js"` (54/54 PASS) ve
  `node araclar/dogrula.js` (hata yok, aynı 11 uyarı) bu incelemede yeniden çalıştırıldı ve
  raporla birebir eşleşti. `dogrula.js` yalnızca iç tutarlılığı (sandalye toplamı = meclis, oy
  toplamı ≤ geçerli vb.) denetliyor; kaynak defteriyle veri arasındaki Bulgu 1 türü
  uyuşmazlıkları yakalayacak bir mekanizması yok — bu yüzden "hata yok" çıktısı Bulgu 1'i
  gizliyor, çürütmüyor.

## 4. ⚠️ Farktan/yerelden doğrulanamayanlar

- **1946 genel seçim, 1946/1950 yerel seçim, 1951 ara seçim, 1961 referandum** kaynakları
  (Akandere/ATAM, AA, Kayış/Nergiz dergipark makaleleri, Göktürk Çetinkaya & Vural, TÜİK 2008
  Halkoylaması kitabı) — hepsi web kaynağı; bu incelemede yeniden indirilip doğrulanmadı (WebFetch
  kullanılmadı). Raporun alıntıladığı metinler iç tutarlı ve birbirini destekler görünüyor, ama
  birincil kaynağın kendisi bu turda açılmadı. Kanıt: yalnızca kaynak defterindeki alıntılar;
  bağımsız erişim yok.
- **TBMM Cilt 2 hükümet tarihleri (no. 15–25)** — TBMM Zabıt Ceridesi/Cilt 2 PDF'i bu incelemede
  indirilmedi; rapor içeriğin doğruluğunu iddia ediyor ama bu turda yalnızca genel seçim
  tarihleriyle iç tutarlılık kontrol edildi (14.5.1950, 2.5.1954, 27.10.1957 ile örtüşüyor).
- **Tarayıcı denetimi (sandik.html, 1957 paneli, index.html#dp46 künyesi)** — rapor bunu
  yaptığını iddia ediyor (ekran görüntüsü yok, `location.hash` simülasyonu ve
  `document.getElementById` çıktısı anlatılıyor); bu incelemede tarayıcı yeniden açılıp
  doğrulanmadı. Kanıt: raporun kendi anlattığı metin çıktısı var, ekran görüntüsü/JSON dökümü
  yok.
