# Görev 9 — Dönem 6 (2001–2015) raporu

Durum: **tamamlandı** (iki commit).

## 1. Yapılanlar (adım adım)

### Adım 1 — Envanter doğrulama

- **[B] TÜİK, *Milletvekili Genel Seçimleri 1923–2011*, Ek-1 (PDF s. 277, basılı s. 259):**
  **3 Kasım 2002**, **22 Temmuz 2007**, **12 Haziran 2011**.
- **[B] TÜİK Tablo 1 (PDF s. 22):** üçünde de "Ülke Barajlı d'Hondt Sistemi"; 2002'de 18 parti
  katıldı / 2 girdi (AK PARTİ, CHP), 2007'de 14 / 3 (AK PARTİ, CHP, MHP), 2011'de 15 / 3.
- **[B] TÜİK Açıklama (PDF s. 14):** "1999, 2002, 2007 ve 2011 yıllarında yapılan milletvekili
  seçimlerinde de 1995 yılı seçimindeki uygulamalar aynen devam etmiştir" → `baraj: 10`,
  `meclis: 550`.
- **[B] YSK Milletvekili Genel Seçim Arşivi (tarayıcıyla DOM'dan):** 7 Haziran 2015 (25. Dönem)
  ve 1 Kasım 2015 (26. Dönem).
- **[B] YSK Halkoylaması Arşivi:** 21 Ekim 2007 ve 12 Eylül 2010 anayasa değişikliği
  halkoylamaları.
- **[B] YSK Mahalli İdareler Genel Seçimleri Arşivi:** 28 Mart 2004, 29 Mart 2009, 30 Mart 2014.
- **[B] YSK Cumhurbaşkanı Seçim Arşivi:** "Onikinci Cumhurbaşkanı Seçimi, 10 Ağustos 2014".
- **CB (TBMM):** 27 Nisan 2007 (sonuçsuz süreç) ve 28 Ağustos 2007 (Gül) — TBMM tutanakları.
- **Hükümetler:** 58–64, Resmî Gazete'deki "Bakanlar Kurulunun Atanmasına Dair İşlem"ler.

**Envanter farkları:**
1. **TBMM *Hükümetler, Programları ve Genel Kurul Görüşmeleri* dizisi Cilt 10'da bitiyor**
   (57. Hükümet, 2002). Koleksiyon öğesinin ORIGINAL paketinde
   (`/core/bundles/88774567-…/bitstreams?size=50`) **yalnızca 10 cilt** var (`201400883-c1.pdf`
   … `201400892-c10.pdf`); 11. cilt yok. Dolayısıyla 58–64 için planın ikinci ölçütü
   (Resmî Gazete'deki Bakanlar Kurulu atanma tarihi) kullanıldı — 57'ye kadarki cilt tarihleriyle
   aynı ölçü.
2. **2003 Siirt seçimi eklenemedi** (aşağıda, "Kullanıcıya sunulacaklar").
3. Referandumlarda **`tutumlar` yazılmadı** (aşağıda).

### Adım 2 — Genel seçim sayıları

**2002 / 2007 / 2011:** birincil kaynak **[B] TÜİK Tablo 24 "TÜRKİYE"** (PDF s. 111–112),
ikinci kaynak **[B] YSK**'nın kendi kesin sonuç yayınları
(`…/gumrukdahil/gumrukdahil.pdf`, `…/turkiye/milletvekilisayisi.pdf`; 2002 ve 2011
belgelerinin künyesinde YSK kararı + Resmî Gazete sayısı yazılı).

| | 2002 | 2007 | 2011 |
|---|---|---|---|
| Kayıtlı | 41.407.027 | 42.799.303 | 52.806.322 |
| Kullanılan | 32.768.161 | 36.056.293 | 43.914.948 |
| Toplam geçerli | 31.528.783 | 35.049.691 | 42.941.763 |
| Meclis | 550 | 550 | 550 |

**2015 Haziran / Kasım:** birincil kaynak **[B] YSK "Örnek: 96/D" ve "96/E"** duyuruları,
ikinci kaynak **TÜİK Veri Portalı, "Milletvekili Genel Seçimi Sonuçları (1983-2018)"** (.xls).

| | 7 Haziran 2015 | 1 Kasım 2015 |
|---|---|---|
| Kayıtlı | 56.608.817 | 56.949.009 |
| Kullanılan | 47.507.467 | 48.537.695 |
| Geçerli (yurt içi + yurt dışı + gümrük) | 46.163.243 | 47.840.231 |

**Eşleşme:** beş seçimin **bütün parti satırları birebir** eşleşti (2002'de 19, 2007'de 15,
2011'de 16, 2015-06'da 21, 2015-11'de 17 satır). **Tek uyuşmazlık 2007'nin MHP sandalyesi**:
YSK'nın 30/07/2007 tarihli belgeleri MHP 70 / toplam **549**, TÜİK ise MHP 71 / toplam **550**
veriyor. TÜİK Tablo 21'in dipnotu nedeni açıklıyor: "2007 milletvekili genel seçiminde **550
milletvekili seçilmiştir**. Ancak **İstanbul'dan seçilen MHP milletvekillerinden bir
milletvekilinin ölümü nedeniyle** Meclis'te bulunan milletvekili sayısı 549 olmuştur."
Spesifikasyon §8.1'in "sandalyelerde toplamın meclis büyüklüğüne eşitliği belirleyicidir"
kuralı gereği TÜİK'in 550'ye tamamlanan dağılımı yazıldı.

**İç tutarlılık (hesaplandı, beş seçimde de fark sıfır):** parti + "Diğer" + bağımsız oy toplamı
= toplam geçerli oy; sandalye toplamı = 550.

### Adım 3 — Diğer kayıtlar

**CB (TBMM) — 2007:**
- `2007-04-cb-tbmm` (sonuçsuz): [B] TBMM Tutanak D22 C155 B96 (27.4.2007) — birinci oylamaya
  361 milletvekili katıldı, Gül 357 oy aldı, 2/3 çoğunluk sağlanamadı; [B] AYM E.2007/45
  K.2007/54 (1.5.2007, RG 27.6.2007) o birleşimin toplantı yeter sayısı kararını **iptal etti**;
  [B] TBMM Tutanak D22 C156 B101 (6.5.2007) — iki yoklamada 356 ve 358 üye bulundu, 367 nisabı
  sağlanamadı; [B] TBMM Kararı 891 (RG 3.5.2007/26511 mükerrer) seçimleri yeniledi.
  `secilen: null`, `turSayisi: 1`.
- `2007-08-cb-tbmm`: [B] TBMM Tutanak D23 C1 B6 (28.8.2007) — üçüncü oylamaya 448 üye katıldı,
  Gül 339 oyla 11. Cumhurbaşkanı seçildi; ikinci kaynak [B] TBMM Kararı 898 (RG 28.8.2007/26627
  mükerrer), aynı birleşim ve aynı oy sayısı. `turSayisi: 3`.

**CB (halk) — 2014:** [B] YSK Örnek 416/D (.xlsx): kayıtlı 55.692.841, kullanılan 41.283.627,
geçerli 40.545.911; Erdoğan 21.000.143, İhsanoğlu 15.587.720, Demirtaş 3.958.048 (toplam tam
eşit). İkinci kaynak [B] YSK Kararı 2014/3719 (15/08/2014) — Erdoğan'ın salt çoğunlukla 12.
Cumhurbaşkanı seçildiğinin tespiti. Tek tur (ikinci oylama 24 Ağustos'a hazırdı ama gerekmedi).

**Yerel (2004, 2009, 2014):** [B] YSK'nın ülke geneli **belediye meclisi** sonuç belgeleri
(2004: YSK Kararı 2002 / RG 12.5.2004-25460 künyeli; 2009 ve 2014: YSK'nın "ResmiGazete"
klasöründeki LİSTE-4 duyuruları). Üç belgede de parti satırlarının toplamı belgenin kendi
"TOPLAM" satırına **tam eşit** (fark sıfır).

| | 2004 | 2009 | 2014 |
|---|---|---|---|
| Kayıtlı | 34.213.138 | 39.787.986 | 48.843.157 |
| Kullanılan | 25.067.950 | 33.447.257 | 43.543.717 |
| Geçerli | 23.893.656 | 32.072.363 | 41.527.387 |
| AK Parti | 9.635.145 | 12.237.325 | 17.802.976 |
| CHP | 4.912.313 | 7.966.710 | 10.938.262 |

**Büyükşehir (dokuz şehir-yıl kombinasyonu):** üçünde de İstanbul **AK Parti**, Ankara
**AK Parti**, İzmir **CHP**.
- 2009: [B] YSK "Büyükşehir Belediye Başkanlıklarının Siyasi Partilere Dağılımı" **+**
  [B] TÜİK Mahalli İdareler Veri Tabanı'nın şehir bazlı oy tablosu (iki kaynak).
- 2014: [B] YSK "Büyükşehir Belediye Başkanlığını Kazanan Adaylar" (.xlsx) **+** [B] TÜİK
  şehir bazlı oy tablosu (iki kaynak). Ankara'da fark 31.636 oy (AK Parti 1.417.212 – CHP
  1.385.576); veriye YSK'nın **kesinleşmiş** sonucu yazıldı.
- 2004: yalnızca [B] TÜİK şehir bazlı tablo; YSK 2004 sayfası büyükşehiri yalnızca ülke toplamı
  olarak yayımlıyor. TÜİK raporunun "Türkiye" satırı YSK'nın ülke toplamıyla **22 satırın
  tamamında birebir** aynı — yani iki kurum aynı resmî veriyi yayımlıyor (ayrıntı: Endişeler).

**Referandumlar (2007, 2010):** [B] YSK sonuç tutanakları; ikinci kaynak olarak **aynı seçimin
il ve gümrük tabloları betikle toplandı** ve ulusal tutanağın beş rakamını da tam verdi:

| | 21 Ekim 2007 | 12 Eylül 2010 |
|---|---|---|
| Kayıtlı | 42.690.252 | 52.051.828 |
| Kullanılan | 28.819.319 | 38.369.099 |
| Geçerli | 28.167.661 | 37.644.037 |
| Evet | 19.422.714 | 21.787.244 |
| Hayır | 8.744.947 | 15.856.793 |
| Karar | kabul | kabul |

(2007: 81 il + 9 gümrük kapısı; 2010: 81 il + 39 gümrük kapısı + yurt dışı seçmen kütüğü
2.556.335. Her iki yılda da `evet + hayır = geçerli`.)

**Ara seçim:** `2003-03-ara` **eklenmedi** (aşağıda).

**Hükümetler 58–64:** Resmî Gazete'deki atanma tezkereleriyle, 57'nin bitişinden (18.11.2002)
boşluksuz zincirlenerek:

| No | Başbakan | Partiler | Başlangıç – Bitiş | Tip | Bitiş nedeni |
|---|---|---|---|---|---|
| 58 | Abdullah Gül | AK Parti | 18.11.2002 – 14.03.2003 | tek-parti | istifa |
| 59 | R. Tayyip Erdoğan | AK Parti | 14.03.2003 – 29.08.2007 | tek-parti | erken-secim |
| 60 | R. Tayyip Erdoğan | AK Parti | 29.08.2007 – 06.07.2011 | tek-parti | secim |
| 61 | R. Tayyip Erdoğan | AK Parti | 06.07.2011 – 29.08.2014 | tek-parti | cumhurbaskani-secimi |
| 62 | Ahmet Davutoğlu | AK Parti | 29.08.2014 – 28.08.2015 | tek-parti | erken-secim |
| 63 | Ahmet Davutoğlu | AK Parti–HDP | 28.08.2015 – 24.11.2015 | koalisyon | erken-secim |
| 64 | Ahmet Davutoğlu | AK Parti | 24.11.2015 – 24.05.2016 | tek-parti | **null** |

Nitel alanların ikinci kaynağı: **Özhan Demirkol, "1923'ten 2018'e Türkiye'de Hükümet ve
Bakanlıklar", *Fiscaoeconomia* 7(1), 2023** (58→59 geçişinin nedeni, 62'nin kuruluş nedeni,
63'ün "seçim hükümeti" niteliği, CHP ve MHP'nin 63'e bakan vermeyi reddetmesi, 59'un 1.629
günlük süresi — bu süre 14.3.2003→29.8.2007 aralığıyla tam örtüşüyor, yani tarihlerin bağımsız
doğrulaması).

### Adım 4 — `veri/sandik.js`'e yazma

`secimler` dizisine tarih sırasıyla **14 kayıt**, `hukumetler` dizisine **7 kayıt** eklendi.
Her kaydın üstünde `// kaynak: araclar/kaynak-defteri.md#<kimlik>` satırı var.

### Adım 5 — Denetle

Aşağıda (bölüm 3).

## 2. Değişen/oluşan dosyalar

- `C:/Users/Lizer/Desktop/projects/siyasi parti/veri/sandik.js`
- `C:/Users/Lizer/Desktop/projects/siyasi parti/araclar/kaynak-defteri.md`
- `C:/Users/Lizer/Desktop/projects/siyasi parti/.superpowers/sdd/2026-09-11-sandik/task-9-d6-report.md`
  (bu dosya)

Başka hiçbir dosyaya dokunulmadı (kod, test, `veri/partiler.js` değişmedi).

## 3. Çalıştırılan komutlar ve çıktıları

```
$ node --check veri/sandik.js && node --test "araclar/test/*.test.js"
ℹ tests 56
ℹ suites 0
ℹ pass 56
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
```

```
$ node araclar/dogrula.js
uyarı: 1950-09-yerel: yüzdelerin toplamı 95.1
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1954-05-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Hürriyet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1965-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1969-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1969-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1973-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Milliyetçi Demokrasi Partisi (1983-11-genel)
uyarı: — sayısı: genel bant 0: 24
… (dönem 0–5 satırları değişmedi) …
uyarı: — sayısı: genel bant 6: 0
uyarı: — sayısı: yerel bant 6: 0
uyarı: — sayısı: cb-tbmm bant 6: 0
uyarı: — sayısı: referandum bant 6: 0
uyarı: — sayısı: cb-halk bant 6: 0
uyarı: hükümetler arasında boşluk: 23 → 24
uyarı: hükümetler arasında boşluk: 43 → 44
hata yok
```

**Dönem 6'da hiçbir alan `—` değil** (bant 6'nın beş satırı da 0). Soyağacında olmayan ama
**sandalye kazanan** yeni parti yok. **57→64 arasında hiç hükümet boşluğu uyarısı yok.**

**Tarayıcı denetimi** (`preview_start {name:"soyagaci"}` → `http://localhost:8123/sandik.html`):
- `document.querySelectorAll('[data-id]').length` → **70 kart** (önce 57 idi; 14 yeni kayıt −
  1 çünkü sayaç `2000-05-cb-tbmm`'yi de sayıyor: dönem 6 filtresi 14 kimlik döndürdü,
  bunların 13'ü yeni).
- Dönem 6 kartları tarih sırasında: `2002-11-genel, 2004-03-yerel, 2007-04-cb-tbmm,
  2007-07-genel, 2007-08-cb-tbmm, 2007-10-referandum, 2009-03-yerel, 2010-09-referandum,
  2011-06-genel, 2014-03-yerel, 2014-08-cb-halk, 2015-06-genel, 2015-11-genel`.
- `document.body.innerText` içinde `undefined` / `NaN` → **yok**.
- `#2015-06-genel` paneli: "550 sandalye · katılım %83,9 · baraj %10 / MECLİSE GİRENLER:
  AK Parti %40,9 · 18.867.411 · 258 / CHP %25,0 · 11.518.139 · 132 / MHP %16,3 · 7.520.006 · 80 /
  HDP %13,1 · 6.058.489 · 80 / GİREMEYENLER: SP, Vatan P., DSP, DP, Anadolu P., LDP /
  BAĞIMSIZLAR: %1,1 · 488.226 · 0 / DİĞER (10 PARTİ) %0,8 · 384.338 / BU SEÇİMDEN SONRA KURULAN
  HÜKÜMETLER: 63. Hükümet · Ahmet Davutoğlu · AK Parti–HDP · 28 Ağu 2015 – 24 Kas 2015 ·
  bitti: erken seçim kararı".
- `#2014-08-cb-halk` paneli: "1. TUR · 10 AĞUSTOS 2014 · KATILIM %74,1 / Recep Tayyip Erdoğan ·
  AK Parti · %51,8 / Ekmeleddin Mehmet İhsanoğlu · CHP ve MHP'nin ortak adayı · %38,4 /
  Selahattin Demirtaş · HDP · %9,8 / seçilen: Recep Tayyip Erdoğan".
- `#2014-03-yerel` paneli: bütün parti satırları + "BÜYÜKŞEHİRLER: İstanbul AK Parti ·
  Ankara AK Parti · İzmir CHP".
- `#2010-09-referandum` paneli: "katılım %73,7 · kabul / Evet %57,9 · 21.787.244 /
  Hayır %42,1 · 15.856.793".
- `read_console_messages {onlyErrors:true}` → boş (konsol hatası yok).
- Sunucu **durdurulmadı**.

## 4. Brief'ten sapmalar ve nedenleri

1. **Hükümet tarihlerinde ölçüt değişti (zorunlu).** Brief "TBMM *Hükümetler, Programları ve
   Genel Kurul Görüşmeleri* cilt kuruluş tarihi" diyor; **bu dizi Cilt 10'da (57. Hükümet)
   bitiyor**, 11. cilt yok. Planın kendi verdiği ikinci ölçüt (Resmî Gazete'de yayımlanan
   Bakanlar Kurulu atanma tezkeresinin tarihi) kullanıldı. 57'nin bitişi (28.05.1999 ölçütüyle
   aynı gün RG'de yayımlanmıştı) ile süreklilik korunuyor; 57→58 zinciri boşluksuz.
2. **`cb-halk` adaylarında `parti:` alanı kullanılamadı.** Spesifikasyon §5.5 aday satırını
   `{ad:"…", parti:"akp", oy:…}` diye tanımlıyor ve `sandik-mantik.js` de tam olarak bunu
   çiziyor; ama `araclar/dogrula.js` (satır 40) aday satırlarını genel seçim `sonuc`
   satırlarıyla aynı işlevde denetlediği için `parti` + `ad` ikilisini **hata** sayıyor
   ("satırda hem parti hem ad"). Bu görevde yalnızca `veri/sandik.js` ve kaynak defteri
   değiştirilebildiğinden üç aday da `destek:` ile yazıldı ("AK Parti", "CHP ve MHP'nin ortak
   adayı", "HDP"). Sonuç: `dogrula.js` "hata yok" diyor, panel doğru görünüyor, ama Erdoğan ve
   Demirtaş satırlarında soyağacı bağı ve kartın parti rengi oluşmuyor. **Çözüm `dogrula.js`'te
   tek satırlık bir düzeltmedir** (aday satırlarını bu denetimden muaf tutmak).
3. **2003 Siirt seçimi eklenmedi** — gerekçe aşağıda.
4. **Referandumlarda `tutumlar` yazılmadı** — gerekçe aşağıda.
5. **64. Hükümet'in `bitisNedeni` `null`** — Resmî Gazete'de istifa tezkeresi yayımlanmamış
   (Mayıs 2016'nın tamamı tarandı); bitiş tarihi 65. hükümetin kuruluşundan [B] alındı.

## 5. Endişeler

- **Yerel seçimlerin ülke geneli belediye meclisi sayıları tek kurum kaynaklı.** Bu ölçüyü
  ülke geneli yayımlayan YSK dışında bir kurum bulunamadı: TÜİK Veri Portalı yalnızca **İl Genel
  Meclisi** tablolarını indirilebilir yapıyor, TÜİK'in Mahalli İdareler Veri Tabanı'nda belediye
  meclisi için ülke toplamı üreten bir rapor seçeneği yok. Yapılan doğrulama, her üç YSK
  belgesinin **parti satırları toplamının belgenin kendi TOPLAM satırına tam eşit** olmasıdır
  (üçünde de fark sıfır) ve 2004 belgesinin künyesinde YSK kararı + Resmî Gazete sayısı
  bulunmasıdır. **Aynı ölçünün paralel tablosu olan büyükşehir başkanlığında TÜİK ile YSK'nın
  ülke toplamları satır satır birebir örtüşüyor** (2004'te 22, 2014'te 27 satır), yani iki
  kurumun aynı resmî veriyi yayımladığı gösterilebiliyor. Yine de, katı okumada bu kayıtların
  ulusal sayıları "tek kaynak ailesi"dir; controller isterse `null`'a çekilebilir (dönem 4 ve
  5'te bu yapılmıştı, ama orada YSK ülke toplamı **hiç yayımlamıyordu**; burada yayımlıyor).
- **2004 büyükşehir sonuçları (İstanbul/Ankara/İzmir) yalnızca TÜİK'te şehir bazında var.**
  YSK 2004 sayfasındaki sekiz dosyanın hiçbirinde il kırılımı yok. 2009 ve 2014'te iki kaynak
  var.
- **63. Hükümet'in `partiler` alanı çıkarıma dayanıyor.** [B] Resmî Gazete metni kabinenin
  "siyasi parti gruplarından oranlarına göre" kurulduğunu söylüyor; Demirkol (2023) CHP ile
  MHP'nin bakan vermeyi reddettiğini yazıyor; 25. Dönem'de grubu olan partiler [B] YSK 96/E'ye
  göre AK Parti, CHP, MHP ve HDP. Dolayısıyla AK Parti dışında bakan veren tek grup HDP'dir.
  İki bakanın (Kocaeli Mv. Ali Haydar Konca, İzmir Mv. Müslüm Doğan) HDP'li olduğunu **adıyla**
  söyleyen bir [B] belge bulunamadı; haber kaynakları kural gereği kullanılmadı.
- **Referandumlarda parti tutumları yok.** §3'teki "Referandum: partilerin tutumları dahil"
  kararı bu turda karşılanamadı; her parti için iki kaynak gerektiği ve kalan bütçe yetmediği
  için alan boş bırakıldı (spesifikasyon §5.4 doğrulanmamış tutum yazmayı yasaklıyor).
  Görev 12'ye devredildi.
- **2003 Siirt seçimi.** Erdoğan'ın Siirt milletvekili olduğu [B] doğrulandı (RG 12.3.2003
  Cumhurbaşkanlığı tezkeresi) ve ilgili YSK kararının künyesi bulundu (RG 11.3.2003 / 25045
  mükerrer, 212 sayılı YSK Kararı) ama o mükerrer sayı **yalnızca taranmış GIF görüntülerinden**
  oluşuyor; metin katmanı yok ve ortamda OCR aracı yok. YSK'nın 2003 karar arşivinde
  `Kararlar/2003Pdf/2003-212.pdf` adresi PDF döndürmüyor, "Ara Seçim Arşivi" sayfası ise yalnızca
  2009 sonrası **mahalli idareler** ara seçimlerini listeliyor. Bu yüzden tarih, sandalye sayısı
  ve sonuç doğrulanamadı.
- **2007 genel seçiminde 26 bağımsızın, 2011'de 35 bağımsızın partilere dağılımı veriye
  yazılmadı;** yalnızca `not` cümlesinde DTP/BBP (2007) ve BDP (2011) çizgisinin bağımsız aday
  yoluyla meclise girdiği, kaynaklı olarak anlatıldı. `ittifak` alanı spesifikasyon §5.2 gereği
  yalnızca 2018+ için olduğundan kullanılmadı.
- **`tkp20`, `dyp`, `shp` id'leri dönem 6'da bilerek kullanılmadı.** Soyağacındaki bu kayıtlar
  sırasıyla 1920–1988 TKP'si, 1983–2007 DYP'si ve 1985–1995 SHP'sidir; 2002–2015 pusulalarındaki
  aynı adlı partiler ayrı tüzel kişilikler olduğu için "Diğer"e ya da `ad:` satırına yazıldı.

## 6. Kullanıcıya sunulacaklar

**Eklenen kayıtlar (tür başına sayı, dönem 6 toplamı):**
- Genel seçim: **5** (2002, 2007, 2011, Haziran 2015, Kasım 2015) — hiçbir alanı `—` değil
- CB (TBMM): **2** (2007 Nisan sonuçsuz süreç; 2007 Ağustos Gül, 3 tur) — `—` yok
- CB (halk): **1** (2014, tek tur) — `—` yok
- Yerel seçim: **3** (2004, 2009, 2014; üçünde de ülke geneli sayılar **ve** İstanbul/Ankara/
  İzmir büyükşehir sonuçları var) — `—` yok
- Referandum: **2** (2007, 2010) — `—` yok
- Ara seçim: **0** (2003 Siirt doğrulanamadı, aşağıda)
- Hükümet: **7** (58–64). 57→64 zinciri boşluksuz.

**Envanter farkları:**
1. TBMM hükümet cilt dizisi 57. Hükümet'te bitiyor → 58–64 için Resmî Gazete ölçütü kullanıldı.
2. 2003 Siirt seçimi eklenmedi.

**`—` kalan alanlar:** dönem 6'da **hiçbir seçim/referandum sayısı `—` değil**. Tek boş alan
**64. Hükümet'in `bitisNedeni`**: Davutoğlu hükümetinin istifasına dair bir tezkere Resmî
Gazete'de yayımlanmamış; yalnızca 65. hükümetin 24 Mayıs 2016'da kurulduğu [B] belgeli.

**Soyağacında olmayan ama sandalye kazanan partiler (Görev 10 listesi — dönem 6'da YENİ EKLEME
YOK):** Hürriyet Partisi (1957), Cumhuriyetçi Millet Partisi (1954, 1957), Millet Partisi (1962)
(1965, 1969), Türkiye Birlik Partisi (1969, 1973), Milliyetçi Demokrasi Partisi (1983).
Dönem 6'da meclise giren bütün partiler soyağacında var.

**Soyağacında olmayıp yalnızca `ad:` ile geçen (sandalye kazanmamış) dönem 6 partileri:**
Genç Parti (2002, 2007), Sosyaldemokrat Halk Partisi (2004 yerel) ve "Diğer" satırlarında
toplanan Yurt Partisi, Bağımsız Türkiye Partisi, Millet Partisi, Türkiye Komünist Partisi
(2002); BTP, Halkın Yükselişi Partisi, Aydınlık Türkiye Partisi, TKP (2007); Hak ve Eşitlik
Partisi, TKP, Doğru Yol Partisi (2011 sonrası), Millet Partisi, Milliyetçi ve Muhafazakâr Parti
(2011); Hak ve Özgürlükler Partisi, Komünist Parti, Hak ve Adalet Partisi, Merkez Parti,
Toplumsal Uzlaşma Reform ve Kalkınma Partisi, Halkın Kurtuluş Partisi, Yurt Partisi (2015);
Hür Dava Partisi (2014 yerel).

**Karar bekleyen üç nokta:**
1. **`dogrula.js`'in `cb-halk` aday satırı denetimi** spesifikasyon §5.5 ile çelişiyor. Şimdilik
   adaylar `destek:` metniyle yazıldı; tek satırlık bir düzeltmeyle `parti:` kullanılabilir ve
   soyağacı bağı geri gelir.
2. **Yerel seçimlerin ülke geneli belediye meclisi sayıları** YSK'nın kesin sonuç ilanlarından
   yazıldı; bu ölçüyü ülke geneli yayımlayan ikinci bir kurum yok (ayrıntılı gerekçe ve yapılan
   doğrulamalar "Endişeler"de). Alternatif, dönem 4–5'teki gibi `null` bırakmaktır.
3. **Referandum `tutumlar` alanları boş**; doldurulması için ayrı bir kaynak turu gerekiyor.

**`node araclar/dogrula.js` çıktısı:** yukarıdaki "3. Çalıştırılan komutlar" bölümünde;
sonuç **`hata yok`**.

**İlk genel seçim verisinin girildiği dönem denetimi:** Görev 1/dönem 0'da yapılmıştı, bu
görevde tekrar gerekmiyor.

## 7. Commit'ler

```
8018541  Sandık verisi: dönem 6 (2001–2015) — genel seçimler, CB seçimleri, hükümetler
6ed60d4  Sandık verisi: dönem 6 (2001–2015) — yerel seçimler, referandumlar, ara seçim
```
Her ikisinde de yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` değişti.

---

## Düzeltme turu 1 (2026-09-25) — controller incelemesi sonrası

İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d6-verdict.md` (SPEC ❌).
Beş Important bulgu + ham kaynak kanıtı istendi. Hepsi ele alındı; ayrıntılı kaynak alıntıları
`araclar/kaynak-defteri.md`'nin "Düzeltme turu 1 (2026-09-25)" bölümünde.

### 1. `2014-08-cb-halk` adayları partilerine bağlandı (çözüldü)

`00573ad` ile `dogrula.js` düzeltildiği için aday satırında `ad:` + `parti:` artık geçerli.
- Erdoğan → `parti: "akp"`, Demirtaş → `parti: "hdp"`, İhsanoğlu → `destek:` olarak kaldı.
- **Demirtaş'ın çatı aday değil HDP adayı olduğu** iki bağımsız akademik kaynakla doğrulandı:
  Özipek ("…üçüncüsü de **HDP adayı Selahattin Demirtaş**'tı") ve Selçuk İletişim
  ("…**Selahattin Demirtaş for the HDP**…"; aynı makalenin Türkçe cümlesi ortak adayın
  **yalnızca İhsanoğlu** olduğunu söylüyor: "MHP ve CHP'nin ortak adayları ise, Ekmeleddin
  İhsanoğlu olmuştur").
- Tarayıcı doğrulaması: panelde artık `href="index.html#akp"` ve `href="index.html#hdp"`
  bağlantıları var.

### 2. Yerel ulusal belediye meclisi sayıları `null`'a çekildi (çözüldü)

TÜİK'te aynı ölçünün ulusal toplamı **aranıp bulunamadı**:
- **TÜİK Veri Portalı:** indirilebilir tablolar yalnızca *İl Genel Meclisi Üyeleri Seçimi
  Sonuçları* (1963-1977 / 1984-2009 / 2014).
- **TÜİK Mahalli İdareler Veri Tabanı** (`biruni.tuik.gov.tr/secimdagitimapp/yerel.zul`):
  "Belediye meclisi üyeliği" seçildiğinde **il listesi doğrudan "Adana" ile başlıyor,
  "<< Tüm iller >>" seçeneği yok** (aynı listede "Büyükşehir belediye başkanlığı" için var ve
  "Türkiye" satırlı rapor üretiyor). "Bölge sonucu" yalnızca 2024/2019/2014 ve bölge bazlı.
- **TÜİK yayını No. 3584**, *Mahalli İdareler Seçimi 29.03.2009*
  (`tuik.gov.tr/indir/secim_2009/aklama.pdf`, `pdftotext -layout`) — içindekilerde belediye
  meclisi için üç tablo var, **Türkiye toplamı tablosu yok**; ayrıca "3.1 Veri derleme tekniği"
  şunu söylüyor: *"tablolarında yer alan **Türkiye toplam sonuçları**, il seçim kurulları
  tarafından YSK'ya gönderilen ve **YSK tarafından Resmi Gazete'de ilan edilen sonuçlardan** …
  aynen yayımlanmıştır."* — yani TÜİK'in ulusal rakamı zaten YSK'nın rakamıdır.
- Sonuç: `2004-03-yerel`, `2009-03-yerel`, `2014-03-yerel` kayıtlarında `kayitli`,
  `kullanilan`, `gecerli` ve bütün `sonuc.oy` değerleri **`null`** yapıldı (dönem 4/5 emsali);
  **parti listesi ve "Diğer"in `partiSayisi` değeri korundu**, üç kaydın `not` cümlesine
  boşluğun nedeni yazıldı. Ham sayılar kaynak defterinde duruyor, kaynak bulunduğunda doğrudan
  geri yazılabilir.
- **1984/1989/1994/1999 boşluğu kapanmadı** (TÜİK'te bu yıllar için de ulusal belediye meclisi
  tablosu yok). Yan bulgu: YSK'nın
  `doc/dosyalar/docs/Mahalli/<yıl>/BelediyeMeclis/Pdf/<yıl>Mahalli-BelediyeMeclis-<İl>.pdf`
  ağacı **1994 ve 1999 için de** duruyor — dönem 5'in "1999'da dört il eksik" sorununu çözebilir
  ama yine YSK kaynağı olduğu için ikinci kaynak sorununu çözmez; dönem 4/5 kayıtlarına
  dokunulmadı, bulgu Görev 12'ye not edildi.

### 3. `2004-03-yerel.buyuksehir` — ikinci kaynak bulundu, alan korundu (çözüldü)

YSK'nın 2004 arşiv sayfasında listelenmeyen ama sunucuda duran dosya ağacı bulundu:
`ysk.gov.tr/doc/dosyalar/docs/Mahalli/2004/Buyuksehir/Pdf/2004Mahalli-Buyuksehir-<İl>.pdf`.
Ham çıktı (Ankara, `pdftotext -table`, sütun başlıkları kısaltıldı):

```
                 28 Mart 2004 Mahalli İdareler Genel Seçimi
                 Büyükşehir Belediye Başkanlığı Seçimi Sonuçları
                 (Belediyelere göre Büyükşehir Belediye Başkanlığı Seçimi sonucu)
Seçim Çevresi:  Ankara
Belediye  Sandık  Kayıtlı seçmen  Oy kullanan  Gecerli oy  … DSP   ANAP  BTP   AK PARTİ  BBP   İP    … TKP   DYP    MİLLET P.  CHP      GENÇ P. SHP      SAADET  MHP     BAĞIMSIZLAR
          8.234   2.269.442       1.703.844    1.636.633   … 14.905 5.986 3.897 901.001   8.379 4.313 … 2.775 32.376 1.257      206.630  26.477  341.231  11.205  74.815  1.386
```

| | Geçerli oy | AK PARTİ | CHP | SHP |
|---|---|---|---|---|
| İstanbul | 4.231.487 | **1.917.577** | 1.223.856 | 153.840 |
| Ankara | 1.636.633 | **901.001** | 206.630 | 341.231 |
| İzmir | 1.192.541 | 388.336 | **562.561** | 49.382 |

Bu rakamlar TÜİK Mahalli İdareler Veri Tabanı'nın aynı yıl/aynı ölçü raporuyla **birebir**
aynı → `buyuksehir` artık **[B] YSK + [B] TÜİK** ile karşılanıyor, alan kaldırılmadı.

### 4. Hükümet 63'ün `partiler` alanı — çıkarım yerine [B] kanıt (çözüldü)

Üç [B] belgeden kurulu zincir:
1. **RG 28.8.2015/29459 4. mükerrer**, Geçici Bakanlar Kurulu listesi: "**Kocaeli Milletvekili
   Ali Haydar KONCA** Avrupa Birliği Bakanı", "**İzmir Milletvekili Müslüm DOĞAN** Kalkınma
   Bakanı".
2. **YSK, 7 Haziran 2015 Kesin Aday Listesi** (Örnek: 41) ham çıktısı:
   ```
   KOCAELİ İLİ SEÇİM ÇEVRESİ …  HALKLARIN  DEMOKRATİK PARTİSİ
   S.  NO  ADI            SOYADI     ÖĞRENİM   MESLEĞİ
       1   ALİ HAYDAR     KONCA      YÜKSEK    HUKUKÇU

   İZMİR-2 NOLU SEÇİM ÇEVRESİ …  HALKLARIN  DEMOKRATİK PARTİSİ
       1   MÜSLÜM         DOĞAN      YÜKSEK    MÜHENDİS
   ```
3. **YSK, "25. Dönem … Partilerin Kazandığı Milletvekili Sayıları"**: Kocaeli'de HDP **1**,
   İzmir-2'de HDP **1** → her iki çevrede HDP listesinden yalnızca 1. sıradaki aday seçilmiştir.

`partiler: ["akp","hdp"]` korundu ve kaydın `not` cümlesi sınırlılığı değil **olguyu** yazacak
şekilde güncellendi: *"Anayasa'nın 114. maddesine göre kurulan geçici seçim hükümetinde AK
Parti'nin yanında iki HDP milletvekili bakan oldu, Adalet, İçişleri ve Ulaştırma bakanlıkları
ise bağımsızlara verildi."*

### 5. Referandum `tutumlar`

- **2010: dört parti yazıldı** — `akp: evet`, `chp92: hayir`, `mhp93: hayir`, `bdp: boykot`.
  Her biri en az iki bağımsız akademik kaynakla: Yolçu (*AJIT-e*) "**Ak Parti** seçmenlerden
  referandumda **evet** oyu, **CHP ile MHP** ise **hayır** oyları [istemiştir]" ve "**BDP** ise
  **boykot** etme kararı alarak…"; Yönetim Bilimleri 9(2) "Referandum, **CHP ve MHP'nin 'hayır'
  kampanyası**" ve "…referandumu **boykot çağrısıyla** karşılayan **BDP**…"; Yaylagül & Çiçek
  (*folklor/edebiyat*) "Söylem III- (**Boykotçu Kamp**): Siyasal yaşamda **BDP**" ve
  "Cumhuriyet **MHP**, DP, İP, TKP gibi siyasi partilerin savunduğu '**Hayır**'cı…".
  Tek kaynakta geçen DP, İP, TKP, BBP, Saadet, ÖDP, EMEP **yazılmadı**.
- **2007: yazılmadı.** Taranan makaleler (Eroğul *AÜ SBF*; "…Cumhurbaşkanlığı Makamının Önemi ve
  2007 Yılı Anayasa Değişiklikleri…"; Tunç & Çelik *Karadeniz Araştırmaları*; Menek "367
  Garabeti ve 2007 Referandumu") içinde **yalnızca Menek** bir parti tutumu veriyor: "**CHP bu
  referandumda da hayır oyu kullandı**". Tek kaynak olduğu için yazılmadı. **TBMM oylaması bu
  referandumda kanıt sayılamaz:** 5678 sayılı Kanun MHP'nin de oylarıyla kabul edilmişken MHP
  kampanyada farklı bir tutum açıkladı, yani meclis oyu referandum tutumunu göstermiyor.
  Görev 12'ye devredildi.

### 6. Kanıt — 2003 Siirt "taranmış GIF" iddiası

- **RG 12.3.2003 künye satırı:** "11/3/2003 Tarihli ve 25045 Mükerrer sayılı Resmî Gazete'de,
  **212 sayılı Yüksek Seçim Kurulu Kararı** yayımlanmıştır."
- `https://www.resmigazete.gov.tr/eskiler/2003/03/20030311M1.htm` → **3.023 bayt**, gövdesinde
  yalnızca üç görüntü:
  ```html
  <img border="0" src="T.C.-resmi-gazete.gif" width="357" height="110">
  <img border="0" src="20030311M1-1.gif" width="630" height="640">
  <img border="0" src="20030311M1-2.gif" width="630" height="766">
  ```
  İndirilip doğrulandı: `20030311M1-1.gif -> GIF image data, version 89a, 630 x 640`,
  `20030311M1-2.gif -> GIF image data, version 89a, 630 x 766`. Ortamda OCR aracı yok.
- `https://www.ysk.gov.tr/doc/dosyalar/docs/Kararlar/2003Pdf/2003-212.pdf` → HTTP 200 ama içerik
  PDF değil, YSK portalının **123.497 baytlık HTML hata sayfası**
  (`<!DOCTYPE html> <html data-ng-app="yskWeb" lang="tr-TR">…`). Aynı adres deseni 2002, 2007,
  2010, 2011, 2014, 2015 kararlarında çalışıyor.
- YSK "Ara Seçim Arşivi" yalnızca 2009+ **mahalli idareler** ara seçimlerini listeliyor.

### 7. Ham kaynak kesitleri (inceleme §3'teki "farktan doğrulanamayanlar" için)

**[B] TÜİK Tablo 24 "TÜRKİYE" — `pdftotext -f 111 -l 112 -table -enc UTF-8 <pdf> -` ham çıktısı**
(yalnızca harf düzeltmesi `ú→ş, ÷→ğ, ø→İ, ù→Ş`; rakamlara dokunulmadı; sütunlar:
1983, 1987, 1991, 1995, 1999, 2002, 2007, 2011):

```
Kayıtlı seçmen sayısı        19 767 366  26 376 926  29  979 123  34  155 981  37 495 217  41 407 027  42 799 303  52 806 322
Oy kullanan seçmen sayısı    18 238 362  24 603 541  25  157 089  29  101 469  32 656 070  32 768 161  36 056 293  43 914 948
Katılım oranı (%)               92,3        93,3        83,9         85,2         87,1        79,1        84,2        83,2
Geçerli oy sayısı            17 351 510  23 923 687  24  371 474  28  040 392  31 119 242  31 414 748  34 822 907  42 813 896
Gümrük kapıları geçerli oy      -         47 942      45 192       86 601       65 254      114 035     226 784     127 867
Toplam geçerli oy sayısı     17 351 510  23 971 629  24  416 666  28  126 993  31 184 496  31 528 783  35 049 691  42 941 763
Milletvekili sayısı             399         450         450          550          550         550         550         550
AK PARTİ                A       -           -           -            -            -       10 808 229  16 327 291  21 399 082
                        C       -           -           -            -            -          363         341         327
CHP                     A       -           -           -        3 011 076    2 716 094  6 113 352   7 317 808   11 155 972
                        C       -           -           -           49           -          178         112         135
MHP                     A       -           -           -        2 301 343    5 606 583  2 635 787   5 001 869   5 585 513
                        C       -           -           -            -          129          -           71          53
BöMZ (Bağımsız)         A    195 588      89 421      32 721      133 895      270 265     314 251    1 835 486   2 819 917
                        C       -           -           -            -           3            9          26          35
```

**[B] TÜİK Tablo 21 dipnotu (2007'nin 549/550 farkı, PDF s. 41):**
```
Not. 2007 milletvekili genel seçiminde 550 milletvekili seçilmiştir. Ancak İstanbul'dan seçilen
MHP milletvekillerinden bir miletvekilinin ölümü nedeniyle Meclis'te bulunan milletvekili
sayısı 549 olmuştur.
```

**[B] YSK 2002 — `gumrukdahil.pdf` ve `milletvekilisayisi.pdf` künyeleri:**
```
TOPLAM KAYITLI SEÇMEN SAYISI      41.407.027
TOPLAM OY KULLANAN SEÇMEN SAYISI  32.768.161
TOPLAM GEÇERLİ OY SAYISI          31.528.783
SEÇİME KATILMA ORANI (%)          79,14
…
CUMHURİYET HALK PARTİSİ  178 / ADALET VE KALKINMA PARTİSİ  363 / BAĞIMSIZLAR  9
TÜRKİYE TOPLAMI : 550
Kaynak: 09 Kasım 2002 tarih ve 883 sayılı YSK Kararı
        10 Kasım 2002 tarih ve 24932 sayılı Resmi Gazete
```

**[B] YSK 2015 Kasım — "Örnek: 96/E" ham çıktısı:**
```
E) 26.DÖNEM MİLLETVEKİLİ GENEL SEÇİMİ SONUCU ;                Örnek:96/E
SİYASİ PARTİLERİN ÇIKARDIKLARI MİLLETVEKİLİ İLE BAĞIMSIZLARIN SAYISI
CUMHURİYET HALK PARTİSİ            134
MİLLİYETÇİ HAREKET PARTİSİ          40
HALKLARIN DEMOKRATİK PARTİSİ        59
ADALET VE KALKINMA PARTİSİ         317
BAĞIMSIZLAR                          0
TÜRKİYE TOPLAMI :                  550
```

**İkinci kaynak — TÜİK Veri Portalı `.xls` (sayfa `42_t4`, `xlrd` ile okundu) 2015 sütunları:**
```
Kayıtlı seçmen sayısı            … 56608817 | 56949009
Oy kullanan seçmen sayısı        … 47507467 | 48537695
Toplam geçerli oy sayısı         … 46163243 | 47840231
Adalet ve Kalkınma Partisi   A   … 18867411 | 23681926    C … 258 | 317
Cumhuriyet Halk Partisi      A   … 11518139 | 12111812    C … 132 | 134
Halkların Demokratik Partisi A   …  6058489 |  5148085    C …  80 |  59
Milliyetçi Hareket Partisi   A   …  7520006 |  5694136    C …  80 |  40
Bağımsızlar                  A   …   488226 |    51038    C …   - |   -
Kaynak: Yüksek Seçim Kurulu
```

**[B] YSK 2010 referandum — il tablosunun TOPLAM satırı + gümrük tablosunun TOPLAM satırı
(ulusal tutanağın bağımsız yeniden hesabı):**
```
ilSonuclari.pdf  TOPLAM  151954  49.495.493  38.172.800  37.449.300  723.500  21.667.427 %57,86  15.781.873 %42,14
Gumruk.pdf       TOPLAM      39     196.299     194.737       1.562      119.817      74.920
NOT: YURTDIŞI SEÇMEN KÜTÜĞÜNE KAYITLI SEÇMEN SAYISI 2.556.335'DİR.
→ 49.495.493+2.556.335 = 52.051.828 · 38.172.800+196.299 = 38.369.099
  37.449.300+194.737 = 37.644.037 · 21.667.427+119.817 = 21.787.244
  15.781.873+74.920 = 15.856.793   (beşi de ulusal tutanakla tam eşit)
```

### Testler ve denetim (düzeltme turu 1)

```
$ node --check veri/sandik.js && node --test "araclar/test/*.test.js"
ℹ tests 57
ℹ suites 0
ℹ pass 57
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 217.0574
```

```
$ node araclar/dogrula.js
uyarı: 1950-09-yerel: yüzdelerin toplamı 95.1
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1954-05-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Hürriyet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1965-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1969-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1969-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1973-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Milliyetçi Demokrasi Partisi (1983-11-genel)
uyarı: — sayısı: genel bant 0: 24
uyarı: — sayısı: cb-tbmm bant 0: 0
uyarı: — sayısı: yerel bant 0: 12
uyarı: — sayısı: yerel bant 1: 6
uyarı: — sayısı: genel bant 1: 20
uyarı: — sayısı: cb-tbmm bant 1: 0
uyarı: — sayısı: ara bant 1: 0
uyarı: — sayısı: referandum kap 1: 5
uyarı: — sayısı: genel bant 2: 2
uyarı: — sayısı: cb-tbmm bant 2: 0
uyarı: — sayısı: yerel bant 2: 6
uyarı: — sayısı: cb-tbmm bant 3: 0
uyarı: — sayısı: genel bant 3: 0
uyarı: — sayısı: yerel bant 3: 0
uyarı: — sayısı: referandum kap 3: 0
uyarı: — sayısı: genel bant 4: 0
uyarı: — sayısı: yerel bant 4: 21
uyarı: — sayısı: referandum bant 4: 0
uyarı: — sayısı: cb-tbmm bant 4: 0
uyarı: — sayısı: genel bant 5: 0
uyarı: — sayısı: cb-tbmm bant 5: 0
uyarı: — sayısı: yerel bant 5: 42
uyarı: — sayısı: genel bant 6: 0
uyarı: — sayısı: yerel bant 6: 58
uyarı: — sayısı: cb-tbmm bant 6: 0
uyarı: — sayısı: referandum bant 6: 0
uyarı: — sayısı: cb-halk bant 6: 0
uyarı: hükümetler arasında boşluk: 23 → 24
uyarı: hükümetler arasında boşluk: 43 → 44
hata yok
```

Tek değişen uyarı: **`yerel bant 6: 0 → 58`** (üç yerel kaydın ulusal sayıları bilinçli olarak
`null` yapıldı). Başka hiçbir satır değişmedi.

**Tarayıcı denetimi (düzeltme turu 1)** — `http://localhost:8123/sandik.html`, 70 kart,
`undefined`/`NaN` yok, `read_console_messages {onlyErrors:true}` boş:
- `#2014-08-cb-halk`: "Recep Tayyip Erdoğan · **AK Parti** · %51,8 / Ekmeleddin Mehmet İhsanoğlu
  · CHP ve MHP'nin ortak adayı · %38,4 / Selahattin Demirtaş · **HDP** · %9,8"; panelin
  HTML'inde `href="index.html#akp"` ve `href="index.html#hdp"` bağlantıları var (önceden yoktu).
- `#2010-09-referandum`: "**EVET DEDİ**: AK Parti | **HAYIR DEDİ**: CHP, MHP | **BOYKOT ETTİ**:
  BDP".
- `#2004-03-yerel`: "katılım **—** · belediye meclisi oyları / SONUÇ: AK Parti — · CHP — · …"
  (parti listesi duruyor) + "BÜYÜKŞEHİRLER: İstanbul AK Parti · Ankara AK Parti · İzmir CHP".
- Sunucu **durdurulmadı**.

## Kullanıcıya sunulacaklar (güncellendi — düzeltme turu 1)

**Değişenler:**
1. **2014 cumhurbaşkanlığı seçiminde Erdoğan ve Demirtaş artık soyağacına bağlı** (`akp`, `hdp`);
   İhsanoğlu tek parti adayı olmadığı için "CHP ve MHP'nin ortak adayı" metniyle kaldı.
2. **2004, 2009 ve 2014 yerel seçimlerinin ülke geneli belediye meclisi sayıları `—` yapıldı.**
   TÜİK'te bu ölçünün ulusal toplamı yok (Veri Portalı yalnızca İl Genel Meclisi'ni indiriyor;
   Mahalli İdareler Veri Tabanı belediye meclisi için "Tüm iller" seçeneği sunmuyor; TÜİK'in
   2009 yayını kendi ulusal rakamlarının **YSK'nın Resmî Gazete'de ilan ettiği sayılar**
   olduğunu yazıyor). Parti listeleri ve büyükşehir sonuçları duruyor. **Bu, dönem 4 ve 5'teki
   kararla artık tam tutarlı.** Ham sayılar kaynak defterinde saklı.
3. **2004 büyükşehir sonuçları kaldırılmadı:** YSK'nın arşiv sayfasında listelenmeyen ama
   sunucuda duran şehir bazlı 2004 dosyaları bulundu ve TÜİK'in rakamlarıyla birebir örtüştü →
   artık iki resmî kurumun yayını var.
4. **63. Hükümet'in "AK Parti–HDP" bileşimi artık çıkarım değil:** YSK'nın 7 Haziran 2015 kesin
   aday listesi ve milletvekili dağılımı tablosu, Resmî Gazete'de adı geçen iki bakanın
   (Ali Haydar Konca, Müslüm Doğan) HDP milletvekili olduğunu gösteriyor. Kaydın `not` cümlesi
   de bunu söylüyor.
5. **2010 referandumuna parti tutumları eklendi:** AK Parti evet; CHP ve MHP hayır; BDP boykot
   (her biri en az iki akademik kaynak).

**Hâlâ eksik olanlar (kullanıcı kararı gerekebilir):**
- **2007 referandumunun parti tutumları** — dört akademik makale tarandı, yalnızca bir kaynak
  (Menek) bir tek partinin tutumunu veriyor ("CHP … hayır oyu kullandı"). İki kaynak kuralı
  gereği hiçbiri yazılmadı. 2007'de TBMM oylaması kanıt sayılamaz (MHP mecliste "evet",
  kampanyada farklı tutum açıkladı).
- **2003 Siirt seçimi** — ilgili YSK kararı Resmî Gazete'de yalnızca iki GIF görüntüsü olarak
  var (kanıtı yukarıda, madde 6); YSK'nın 2003 karar klasörü yok. OCR gerektiriyor.
- **64. Hükümet'in bitiş nedeni** — Resmî Gazete'de istifa tezkeresi yayımlanmamış.
- **Dönem 4 ve 5'in yerel ulusal sayıları** hâlâ `—`; bu turda bulunan YSK
  `Mahalli/1994|1999/BelediyeMeclis/...` il dosyaları o boşluğu ancak YSK içinde kapatır,
  ikinci kaynak sorununu çözmez.

**`node araclar/dogrula.js` çıktısı:** yukarıda tam metin; sonuç **`hata yok`**, 57/57 test geçti.

### Commit (düzeltme turu 1)

```
df8e6ae  Düzeltme: dönem 6 — aday partileri, yerel toplamlar, referandum tutumları
```
Yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` değişti.

---

## Düzeltme turu 2 (2026-09-25) — ikinci inceleme sonrası

İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d6-fix1-verdict.md`
(önceki beş Important'ın dördü kapandı; iki madde kaldı). Kaynak alıntıları
`araclar/kaynak-defteri.md`'nin "Düzeltme turu 2 (2026-09-25)" bölümünde.

### 1. Demirtaş satırı: `parti:"hdp"` → `destek:"HDP adayı"` (çözüldü)

İncelemenin önerdiği [B] kaynaklar tek tek tarandı; **hiçbiri aday gösteren partiyi
kaydetmiyor**:

- **YSK Kararı 2014/3227'nin tam metni** (68 satır) — "parti", "önerge", "imza", "gösteren"
  sözcükleri hiç geçmiyor; yalnızca üç adayın adı var.
- **Kararın Resmî Gazete'deki eki bulundu ve indirildi** (incelemenin aradığı belge):
  `resmigazete.gov.tr/eskiler/2014/07/20140711-14-1.pdf` (72.781 bayt). Ham çıktı:
  ```
                CUMHURBAŞKANI SEÇİMİ KESİN ADAY LİSTESİ                     Örnek: 401
     ADI          SOYADI    DOĞUM TARİHİ         ÜNİVERSİTE          FAKÜLTE        BÖLÜM
  EKMELEDDİN MEHMET İHSANOĞLU  26/12/1943  MISIR AİN SHAMS ÜNİV.   FEN FAKÜLTESİ   KİMYA
  RECEP TAYYİP      ERDOĞAN    26/02/1954  MARMARA ÜNİVERSİTESİ                    İŞLETME
  SELAHATTİN        DEMİRTAŞ   10/04/1973  ANKARA ÜNİVERSİTESİ  İKTİSADİ VE İDARİ BİLİMLER
                                                                 FAKÜLTESİ / HUKUK FAKÜLTESİ
  ```
  Resmî **Örnek: 401** formunda **parti sütunu yok**: ad, soyad, doğum tarihi, üniversite,
  fakülte, bölüm. Aynı durum 8.7.2014 tarihli "Geçici Aday Listesi" (**Örnek: 400**,
  `…/20140708-13-1.pdf`) için de geçerli.
- **YSK'nın 2014 CB karar arşivi** (2913, 3092, 3123, 3124, 3136, 3164–3167, 3227, 3237, 3579,
  3719) ve **Resmî Gazete'nin 1–10 Temmuz 2014 sayıları** tarandı: aday gösteren partiyi adıyla
  yazan bir kayıt yok. **YSK `docs/2014CB/` ağacında** dört olası dosya adı denendi, dördü de
  YSK'nın HTML hata sayfasını döndürüyor.

**Ek [B] bulgu (neden `parti:` zaten doğru olamazdı):** Anayasa m. 101 (5678 sayılı Kanunla
değişik, RG 16.6.2007) parti adaylığını "en son yapılan milletvekili genel seçimlerinde …
**yüzde onu geçen** siyasi partiler" ile sınırlıyor; diğer yol "**yirmi milletvekilinin yazılı
teklifi**". [B] TÜİK Tablo 1/24 ve TÜİK Veri Portalı tablosu HDP'nin 2011 seçimine **parti
olarak girmediğini** (ilk oy satırı 2015) gösteriyor → HDP 2014'te parti olarak aday
gösteremezdi. Dolayısıyla "HDP adayı" siyasal bir nitelemedir, belgelenmiş bir parti adaylığı
değil.

**Sonuç:** Demirtaş satırı `destek: "HDP adayı"` oldu (kaynakların kendi ifadesi: Özipek
"…**HDP adayı Selahattin Demirtaş**'tı", Selçuk İletişim "…**Selahattin Demirtaş for the
HDP**…"). Erdoğan'ın `parti:"akp"` değeri korundu: AK Parti 2011'de %49,8 alarak ([B] TÜİK/YSK)
tek başına aday gösterme yetkisine sahipti ve [B] YSK 2014/3579 partinin adayının Erdoğan
olduğunu tutanağa geçiriyor. Tarayıcıda panel artık "Selahattin Demirtaş · **HDP adayı** ·
%9,8" gösteriyor ve yalnızca `href="index.html#akp"` bağlantısı kalıyor.

### 2. Büyükşehir kaynak notu + iki yeni bağımsız kaynak (çözüldü)

**Deftere yazılan açık sınır:** TÜİK yayın No. 3584'ün "3.1 Veri derleme tekniği" bölümü
mahalli idareler verisinin TÜİK'çe **bağımsız toplanmadığını** söylüyor — ulusal toplamlar
"YSK tarafından Resmi Gazete'de ilan edilen sonuçlardan", alt kırılımlar ilçe seçim
kurullarının birleştirme tutanaklarından "aynen" alınıyor. Bu yüzden **TÜİK–YSK birebir
örtüşmesi bağımsız doğrulama sayılmaz**; not `2004/2009/2014-03-yerel` kayıtlarının defter
bölümüne ve düzeltme turu 2 bölümüne yazıldı. Veri değişmedi.

**Eklenen, YSK/TÜİK dışı ikinci kaynaklar (haber veritabanı — kural gereği yalnızca ikinci
kaynak, defterde böyle işaretlendi):**
- **Anadolu Ajansı arşivi, "YEREL SEÇİMLER" (28 Mart 2004 tablosu):**
  "İSTANBUL (BŞ) **AK PARTİ 45.31** Kadir Topbaş", "ANKARA (BŞ) **AK PARTİ 55.03** İ. Melih
  Gökçek", "İZMİR (BŞ) **CHP 47.18** Ahmet Piriştina".
  YSK/TÜİK'ten hesaplanan oranlar: İstanbul %45,32 · Ankara %55,05 · İzmir %47,17 → farklar
  %0,02–0,04, tolerans içinde. **2004'ün üç şehri de artık bağımsız bir kaynakla doğrulandı.**
- **TRT Haber, "Geçmişten günümüze İstanbul seçimleri":** 2004 "Topbaş oyların **yüzde
  45,32**'sini alarak … birinci çıktı"; 2009 "**Topbaş, oyların yüzde 44,7'sini** … aldı";
  2014 "**Topbaş yüzde 47,95 oy alarak** bir kez daha ipi göğüsledi". YSK/TÜİK: 2009 %44,71,
  2014 %47,95 → birebir. **İstanbul'un üç yılı da doğrulandı.**
- **Hâlâ yalnızca YSK + TÜİK ile duran dört değer:** Ankara 2009, İzmir 2009, Ankara 2014,
  İzmir 2014. Aranan yerler (TRT Haber'in Ankara/İzmir dosyaları, bianet "Yerel Seçimlerde
  İzmir", Doğruluk Payı bülteni, dergipark) alıntılanabilir bir sonuç vermedi; sınır defterde
  açıkça kayıtlı.

### Testler ve denetim (düzeltme turu 2)

```
$ node --check veri/sandik.js && node --test "araclar/test/*.test.js"
ℹ tests 57
ℹ suites 0
ℹ pass 57
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
```

```
$ node araclar/dogrula.js
… (dönem 0–5 satırları değişmedi) …
uyarı: — sayısı: genel bant 6: 0
uyarı: — sayısı: yerel bant 6: 58
uyarı: — sayısı: cb-tbmm bant 6: 0
uyarı: — sayısı: referandum bant 6: 0
uyarı: — sayısı: cb-halk bant 6: 0
uyarı: hükümetler arasında boşluk: 23 → 24
uyarı: hükümetler arasında boşluk: 43 → 44
hata yok
```

Uyarı listesi düzeltme turu 1'e göre **hiç değişmedi** (tek değişiklik bir aday satırının
`parti` → `destek` alan adı; sayı yok edilmedi, eklenmedi).

**Tarayıcı denetimi:** `http://localhost:8123/sandik.html?v=2#2014-08-cb-halk` — 70 kart,
`undefined`/`NaN` yok, konsol hatası yok; panel: "Recep Tayyip Erdoğan · **AK Parti** · %51,8 /
Ekmeleddin Mehmet İhsanoğlu · CHP ve MHP'nin ortak adayı · %38,4 / Selahattin Demirtaş ·
**HDP adayı** · %9,8"; panelin HTML'inde yalnızca `href="index.html#akp"` bağlantısı var.
Sunucu **durdurulmadı**.

## Kullanıcıya sunulacaklar (güncellendi — düzeltme turu 2)

1. **Selahattin Demirtaş artık soyağacına bağlı değil; satırda "HDP adayı" yazıyor.** Nedeni:
   YSK'nın resmî aday listesi formunda (Örnek: 400/401, Resmî Gazete ekleri indirilip okundu)
   **parti sütunu yok**; hiçbir YSK kararı ya da Resmî Gazete ilanı aday gösteren partiyi
   kaydetmiyor. Ayrıca Anayasa m.101 gereği HDP 2014'te parti olarak aday gösteremezdi (2011
   seçimine parti olarak girmemişti), yani "HDP adayı" siyasal bir niteleme. Erdoğan `AK Parti`
   bağlantısını koruyor (AK Parti 2011'de %49,8 ile aday gösterme yetkisine sahipti ve YSK
   kararı partinin adayının Erdoğan olduğunu yazıyor).
2. **Büyükşehir sonuçlarının kaynak durumu netleşti.** TÜİK'in mahalli idareler verisini
   YSK'dan aynen aldığı kendi yayınıyla belgelendi ve deftere yazıldı; buna karşılık
   **2004'ün üç şehri (Anadolu Ajansı arşivi) ve İstanbul'un 2004/2009/2014 sonuçları (TRT
   Haber)** artık YSK/TÜİK dışı kaynaklarla da doğrulanmış durumda, oranlar %0,04'ün altında
   farkla örtüşüyor. **Ankara ve İzmir'in 2009/2014 sonuçları** için böyle bir kaynak
   bulunamadı; bu sınır defterde açıkça yazılı (değer değiştirilmedi).
3. Dönem 6'da başka değişiklik yok; veri sayıları aynı, `dogrula.js` uyarı listesi aynı.

**Hâlâ açık kalanlar (önceki turdan):** 2007 referandumunun parti tutumları, 2003 Siirt
seçimi, 64. Hükümet'in bitiş nedeni, dönem 4/5'in yerel ulusal sayıları.

### Commit (düzeltme turu 2)

```
57757f8  Düzeltme: dönem 6 — aday kaynağı ve büyükşehir kaynak notu
```
Yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` değişti.
