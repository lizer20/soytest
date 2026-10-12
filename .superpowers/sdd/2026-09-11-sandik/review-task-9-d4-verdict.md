# İnceleme hükmü — Görev 9, Dönem 4 (1983–1990)

Commit: `1fd18a1` (be2881a..1fd18a1)

## 1. Spec uyumu

**❌**

Alan adları, kimlik biçimi, sıralama kuralları, "Diğer" eşiği, hükümet zincirleme kuralı
büyük ölçüde doğru uygulanmış; ancak spesifikasyon §8.1'in bağlayıcı kaynak kuralı iki
ayrı yerde açıkça ihlal edilmiş (aşağıya bakın, Kritik #1 ve #2). Global Constraints'in
"Bilgi uydurulmaz" maddesi, sayıların hafızadan yazılmamasını değil, *doğru tür* kaynağa
dayanmasını da şart koşuyor; bu şart iki referandum kaydında sağlanmamış.

**Eksik/fazla/sapma taraması:**
- Dosya kapsamı brief'e uygun: yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md`
  değişmiş (`git diff --stat`). Fazladan dosya yok (YAGNI temiz).
- Alan adları (`kayitli`, `kullanilan`, `gecerli`, `baraj`, `meclis`, `sonuc[].parti|ad|oy|sandalye`,
  `buyuksehir`, `tutumlar`, `karar`, `secilen`, `turSayisi`, hükümette `no/basbakan/partiler/
  baslangic/bitis/tip/bitisNedeni/not`) spesifikasyon §5.2/5.3/5.4/5.6/5.8 ile birebir.
- Kimlik biçimi (`YYYY-AA-tür`) ve dizi sırası (tarihe göre) doğru; `secimler` içinde dönem 4
  kayıtları önceki dönem 3 son kaydından (1982-11-referandum) sonra doğru sırada ekleniyor.
- "Diğer" eşiği (%1) doğru uygulanmış: MDP (%5,5 / %23,3, soyağacı dışı) ayrı satır aldı, IDP
  (%0,8 / %0,52, soyağacı dışı) her iki kayıtta da "Diğer"e gömüldü — spesifikasyona uygun ayrım.
- Hükümet zincirleme (44 bitiş = 45 başlangıç = 1983-12-13, 45→46→47 boşluksuz) doğrulandı.
- `tip` ölçütü (be2881a'daki kabine-bileşimi kararı) 45/46/47 için doğru uygulanmış (üçü de
  tek parti ANAP kabine + meclis çoğunluğu → `tek-parti`).
- **Sapma — spesifikasyon §8.1, "hesaplanmış toplamlar" kuralı:** `veri/sandik.js` içindeki
  `1984-03-yerel` ve `1989-03-yerel` kayıtlarının `kayitli`/`kullanilan`/`gecerli` ve bütün
  `sonuc[].oy` değerleri yalnızca `araclar/topla.js` ile hesaplanmış, ikinci bir kaynağın
  ulusal rakamıyla **eşleşmemiş** (rapor bunu açıkça itiraf ediyor: "gerçekten bağımsız,
  aynı ölçüyü veren ikinci bir ulusal kaynak bulunamadı"). Spesifikasyon §8.1: "...ikinci
  bir kaynağın ulusal rakamıyla eşleşmelidir; **eşleşmezse null olur**." Kural açık ve
  koşulsuz; rapor sorunu doğru tespit edip kullanıcıya bildirmiş ama veriyi yine de `null`
  yapmadan yazmış — bu bir kural ihlalidir, yalnızca dürüst bir itiraf değil.
- **Sapma — kaynak haritası/proje kuralı, [B] kaynak tanımı:** `1987-09-referandum` ve
  `1988-09-referandum` kayıtlarının ham sayıları hiçbir resmî [B] kaynağa (YSK Halkoylaması
  Arşivi, TÜİK, Resmî Gazete) dayanmıyor; yalnızca haber siteleri (bianet, yenisafak — kural
  gereği yalnızca *ikinci* kaynak olabilir) ve akademik makaleler (kural gereği [B] sayılmaz)
  kullanılmış. Kaynak haritası (brief §"Kaynak haritası") referandumlar için birincil kaynağı
  açıkça "YSK Halkoylaması Arşivi" olarak tanımlıyor; kaynak defterinde bu arşive hiç
  başvurulduğuna dair bir kayıt yok.
- Brief'in istediği iki ayrı commit yerine tek commit yapılmış — rapor ve commit mesajında
  gerekçelendirilmiş (Minor, kullanıcı talimatıyla).

## 2. Görev kalitesi

**Issues**

### FINDINGS

- **Critical** — `araclar/kaynak-defteri.md` "1987-09-referandum" ve "1988-09-referandum"
  başlıkları; `veri/sandik.js` aynı iki kayıt (~satır 349-370). Her iki referandum kaydının
  ham sayıları/yüzdeleri **hiçbir resmî [B] kaynağa dayanmıyor**: 1987 için tek "ham sayı"
  kaynağı bianet.org (haber sitesi), doğrulama için iki akademik makale (Karadeniz 2018,
  Yavaşça 2023); 1988 için ham sayı kaynağı secim.yenisafak.com (haber sitesi, kullanılmadı),
  yüzdeler yine aynı iki akademik makaleden. Kullanıcı kararı gereği "gazete arşivi yalnızca
  ikinci kaynak" ve "akademik makale/tez [B] değildir" — burada [B] rolünü hiçbir kaynak
  doldurmuyor. Kaynak haritasının önerdiği `ysk.gov.tr/tr/halkoylamasi-arsivi/2648` hiç
  denenmiş görünmüyor (raporda ne başarı ne başarısızlık kaydı var). **Öneri:** YSK
  Halkoylaması Arşivi'nde 1987/1988 için doğrudan PDF aranmalı; bulunamazsa bu iki kaydın
  ham sayı alanları (`kullanilan`, `gecerli`, `evet`, `hayir`, 1988 için ayrıca yüzdeler)
  `null` yapılmalı ve kaynak defterine "resmî [B] kaynak bulunamadı" notu düşülmeli.

- **Critical** — `veri/sandik.js` "1984-03-yerel" ve "1989-03-yerel" kayıtları; spesifikasyon
  §8.1 "hesaplanmış toplamlar" kuralı. Ulusal `kayitli`/`kullanilan`/`gecerli` ve bütün parti
  `oy` değerleri yalnızca YSK il tablosu + `topla.js` ile hesaplanmış; ikinci, bağımsız,
  aynı ölçüyü (belediye meclisi) veren bir ulusal kaynakla eşleşme **yok** — rapor bunu
  "Endişeler" bölümünde itiraf ediyor ama sayılar `null` yapılmamış. Kural metni koşulsuz:
  "eşleşmezse null olur." **Öneri:** ya bu iki kaydın toplam alanları (`kayitli`,
  `kullanilan`, `gecerli`, `sonuc[].oy`) `null` yapılmalı, ya da kullanıcıdan bu spesifik
  durum için (kaynak gerçekten yoksa) kurala açık bir istisna onayı alınmalı — sessizce
  yazıp Endişeler'e gömmek yeterli değil.

- **Important** — `veri/sandik.js` "1984-03-yerel" `sonuc` dizisi; `araclar/kaynak-defteri.md`
  "1984-03-yerel" başlığı. Adana ilinin bozuk parti kırılımı (geçerli oyu 336.078) tamamen
  "Diğer" satırına (314.045) gömülmüş. Bu, adı geçen partilerin (ANAP, DYP, HP, RP, SODEP)
  yazılan ulusal `oy` değerlerini Adana'nın gerçek payı kadar **eksik** bırakıyor (Adana ülke
  geçerli oyunun ~%3,4'ü — %0,5 toleransının çok üzerinde bir pay) ve "Diğer" satırını
  spesifikasyonun tanımından (%1 altı/soyağacı dışı küçük partiler) farklı bir anlamla
  (bilinmeyen bir ilin tüm oyu) dolduruyor. Rapor bunu dürüstçe açıklıyor ve `not` alanına
  yazmış, bu iyi; ama sonuç yine de adı geçen partiler için doğrulanmamış/eksik rakamlar
  üretiyor. **Öneri:** adı geçen partilerin (`anap`, `dyp`, `hp83`, `rp`, `sodep`) `oy`
  değerlerini `null` yapıp yalnızca `kayitli`/`kullanilan`/`gecerli` (il düzeyinde tutarlı
  olduğu belirtilen alanlar) ile "Diğer"i (Adana + gerçek küçük partiler, `partiSayisi:null`)
  bırakmak, ya da kaydı "il kırılımı kısmen eksik" notuyla ayrı işaretlemek daha doğru olur.

- **Important** — `veri/sandik.js` "1988-09-referandum" kaydı. Katılım oranı (%88,82) iki
  bağımsız akademik kaynaktan birebir doğrulanmış olmasına rağmen yalnızca `not` alanına
  düz metin olarak yazılmış; spesifikasyon §5.1'in tam bu durum için tanımladığı
  `katilimYuzde` alanı kullanılmamış. `sandik-mantik.js:24` (`k.katilimYuzde != null ? ... : null`)
  bu alanı doğrudan okuyor — sonuç: kart, kaynağı olan bir bilgiyi (katılım) yine de `—`
  gösterecek. **Öneri:** kayda `katilimYuzde: 88.82` eklenmeli (evet/hayır için spesifikasyonda
  karşılık gelen bir yüzde-yedek alanı tanımlı olmadığından o kısım `not`ta kalabilir —
  rapor bunu doğru tespit etmiş).

- **Important** — `araclar/kaynak-defteri.md` "1984-03-yerel — büyükşehir" ve "1989-03-yerel —
  büyükşehir" başlıkları; `veri/sandik.js` `buyuksehir` alanları. İstanbul/Ankara/İzmir oy
  sayıları yalnızca tek kaynağa (YSK büyükşehir PDF'i) dayanıyor; "doğrulama" olarak
  gösterilen şey bağımsız bir ikinci kaynak değil, kaydın kendi iç toplamı (parti oyları =
  geçerli oy) — bu bir biçim tutarlılığı denetimidir, spesifikasyon §8.1'in istediği
  *bağımsız ikinci kaynak* değildir. Rapor bu boşluğu "Endişeler" bölümünde hiç belirtmemiş
  (1984/1989 yerel toplamı için belirtmiş ama büyükşehir için sessiz kalmış) — kullanıcıya
  bildirilmeyen bir kaynak açığı. **Öneri:** en azından rapora/deftere "büyükşehir sonuçları
  için ikinci bağımsız kaynak aranmadı/bulunamadı" notu eklenmeli; mümkünse Resmî Gazete
  ilanı ya da dönemin TÜİK yayınındaki il merkezi sonuçlarıyla çapraz kontrol denenmeli.

- **Minor** — Commit `1fd18a1`. Brief dönem 4 için iki ayrı commit öngörmüştü
  (genel+CB+hükümetler / yerel+referandum+ara seçim); tek commit yapılmış. Gerekçe
  (dizi içindeki kronolojik iç içe geçme nedeniyle ayrımın yapay olacağı) makul ve hem
  raporda hem commit mesajında açıkça belirtilmiş.

### CANNOT-VERIFY

- Kaynak PDF/HTML'lerindeki (TÜİK Tablo 24, TBMM Tutanak Dergisi Cilt 33, TBMM Hükümetler
  Cilt 7/8, YSK il/büyükşehir tabloları) rakamların raporda aktarılan değerlerle birebir
  eşleştiği — kaynaklar bu incelemede yeniden açılmadı, yalnızca raporun ve defterin
  aktarımına güvenildi.
- Tarayıcı denetimi (`sandik.html`, 50 kart, `#1983-11-genel` panel içeriği, konsol hatası
  yok) — farkta görünmüyor; raporda somut kanıt var (`querySelectorAll` sayısı, panel metni,
  `read_console_messages` sonucu), ama bu incelemede tarayıcı yeniden açılıp doğrulanmadı.
- `node --check` / `node --test` / `node araclar/dogrula.js` çıktıları — sözleşme gereği
  yeniden çalıştırılmadı; raporda tam çıktı var (55/55 test geçti, "hata yok", dönem 4'e
  özgü yeni uyarılar beklenen türden).
- 1986 ara seçiminin YSK/TESAV kaynaklarının gerçekten erişilemez olduğu (404/JS kabuğu) —
  bu incelemede yeniden denenmedi, raporun aktarımına güvenildi.
