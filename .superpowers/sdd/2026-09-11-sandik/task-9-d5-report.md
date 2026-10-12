# Görev 9 — Dönem 5 (1991–2000) raporu

Durum: **tamamlandı** (iki commit).

## 1. Yapılanlar (adım adım)

### Adım 1 — Envanter doğrulama

- **[B] TÜİK, *Milletvekili Genel Seçimleri 1923–2011*, Ek-1 "Milletvekili Genel Seçimlerinin
  Yapıldığı Tarihler" (PDF s. 277, basılı s. 259):** 18. Dönem **20 Ekim 1991**, 19. Dönem
  **24 Aralık 1995**, 20. Dönem **18 Nisan 1999** (ayrıca 3 Kasım 2002, 57. hükümetin bitişi için).
- **[B] TÜİK, Tablo 1 (PDF s. 22, basılı s. 4):**
  - 1991: "Çifte Barajlı d'Hondt + Kontenjan Usulü"; seçime katılan 6 parti (ANAP, RP, SP, DYP,
    DSP, SHP), meclise giren 5 (ANAP, RP, DYP, DSP, SHP).
  - 1995: "Ülke Barajlı d'Hondt Sistemi"; katılan 12 parti, meclise giren 5.
  - 1999: "Ülke Barajlı d'Hondt Sistemi"; katılan 20 parti, meclise giren 5.
- **Baraj ve meclis [B]:** TÜİK Açıklama s. 13 (2839 sayılı Kanun'la 1983'ten itibaren "ülke
  barajlı (%10)") ve s. 14 (1995 öncesi kontenjan/çevre barajı kaldırıldı, "ülke barajlı (%10)
  d'Hondt" geldi, milletvekili sayısı 450 → 550; "1999… seçimlerinde de 1995 uygulamaları aynen
  devam etmiştir") → `baraj: 10` üçünde de, `meclis` 1991: 450, 1995/1999: 550.
- **Yerel:** YSK Mahalli İdareler Genel Seçimleri Arşivi (tarayıcıyla DOM'dan okundu) —
  "27 Mart 1994" ve "18 Nisan 1999" mahalli idareler genel seçimleri.
- **CB (TBMM):** 16 Mayıs 1993 (Demirel) ve 5 Mayıs 2000 (Sezer) — ikincisi 1991–2000 aralığında
  olduğu için (andiçme 16 Mayıs 2000) dönem 5'e dahil edildi.
- **Ara seçim:** dönem 5'te milletvekili ara seçimi **yapılmamış** (aşağıda).
- **Hükümetler:** TBMM cilt 8 (48–51), cilt 9 (52–55), cilt 10 (56–57).
  **Görev 1'in "cilt 9 adresi yok" notu düzeltildi:** cilt 9 ve 10, `acikerisim.tbmm.gov.tr`
  koleksiyon öğesinin ORIGINAL paketindeki bitstream listesinden bulundu.

**Envanter farkları:** Brief'in aday listesindeki her şey kaynakta bulundu ve eklendi; tek
istisna **ara seçimler** — kaynaklar dönem 5'te hiç ara seçim yapılmadığını gösteriyor.

### Adım 2 — Genel seçim sayıları

**[B] TÜİK Tablo 24 "TÜRKİYE" (PDF s. 111–112, basılı s. 93–94, `pdftotext -table`):**

| | 1991 | 1995 | 1999 |
|---|---|---|---|
| Kayıtlı seçmen | 29.979.123 | 34.155.981 | 37.495.217 |
| Oy kullanan | 25.157.089 | 29.101.469 | 32.656.070 |
| Katılım (%) | 83,9 | 85,2 | 87,1 |
| Geçerli oy (il) | 24.371.474 | 28.040.392 | 31.119.242 |
| Gümrük kapıları | 45.192 | 86.601 | 65.254 |
| **Toplam geçerli oy** | **24.416.666** | **28.126.993** | **31.184.496** |
| Milletvekili sayısı | 450 | 550 | 550 |

`gecerli` alanına **toplam geçerli oy** yazıldı (1987 kaydındaki emsalle aynı; TBMM'nin yayımladığı
oy oranları da bu paydayı kullanıyor).

**İç tutarlılık (hesaplandı):** her üç yılda da parti oyları + bağımsız toplamı toplam geçerli oya
**tam eşit**; sandalye toplamı `meclis`'e **tam eşit** (1991: 178+115+88+62+7=450; 1995:
158+132+135+76+49=550; 1999: 136+129+111+86+85+3=550).

**İkinci kaynak — TBMM seçim sorgusu** (`secim_sorgu.secimdeki_partiler?p_secim_yili=…`, `curl -k`):
**41 parti/bağımsız satırının tamamı** (1991'de 7, 1995'te 13, 1999'da 21) TÜİK ile **birebir**
eşleşti. **Uyuşmazlık: yok.**

### Adım 3 — Diğer kayıtlar

**CB (TBMM):**
- **1993-05-cb-tbmm** — [B] TBMM Tutanak Dergisi D19 C35 B103 (16.5.1993): üçüncü tura 431 üye
  katıldı, Demirel 244 oyla 9. Cumhurbaşkanı seçildi; aynı birleşimin geçen tutanak özeti ilk iki
  turun 2/3 çoğunluğu sağlamadığını yazıyor → `turSayisi: 3`. İkinci kaynak: **tccb.gov.tr**
  (Demirel sayfası) — "elected… by the TBMM on 16 May 1993". Uyuşmazlık: yok.
- **2000-05-cb-tbmm** — [B] TBMM Tutanak Dergisi D21 C32 B90 (5.5.2000): üçüncü oylamaya 533 üye
  katıldı, Sezer 330 oyla 10. Cumhurbaşkanı seçildi; andiçme 16 Mayıs 2000. İkinci kaynak:
  **TBMM Kararı No. 695 / Resmî Gazete 6.5.2000-24041** — aynı tarih, aynı oy sayısı; karar
  metninin tutanak dipnotu üç birleşim (88, 89, 90) veriyor → `turSayisi: 3`. Uyuşmazlık: yok.

**Yerel (1994, 1999):**
- **[B] YSK belediye meclis üyeliği tabloları**, `araclar/topla.js` ile toplandı.
  - **1994:** 76 ilin tamamı var (1994'te Türkiye'de 76 il vardı). Hesaplanan toplam: kayıtlı
    23.305.825, kullanılan 21.099.154, geçerli 19.730.006; ANAP 4.512.609, RP 3.783.195,
    DYP 3.718.962, SHP 3.302.166, DSP 1.642.727, MHP 1.501.038, CHP 847.672, BBP 211.021,
    DP 65.062, YDP 34.664, Millet P. 34.217, İP 33.056, SBP 21.866, Bağımsız 21.037.
  - **1999:** YSK'nın kendi PDF'i **yalnızca 76 il** içeriyor — **HATAY, HAKKÂRİ, TRABZON,
    TUNCELİ satırları belgede hiç yok** (`-table`, `-layout`, `-raw` üçünde de; aynı seçimin
    İl Genel Meclisi PDF'inde 79 il var).
- **Ulusal sayılar her iki kayıtta da `null`.** 1994 için: aynı ölçüyü (belediye meclisi) veren
  bağımsız bir ikinci ulusal kaynak yok (TÜİK'in 1994/1999 mahalli idareler yayını erişilemiyor;
  TÜİK 2009 CD'sinin çok yıllı tablosu yalnızca İl Genel Meclisi için; Resmî Gazete arşivi
  `curl` ile yanıt vermedi). 1999 için: kaynağın kendisi eksik. Bu, dönem 4'ün 1984/1989
  kayıtlarında controller incelemesiyle onaylanan emsalle aynı karar. Hesaplanan ham toplamlar
  kaynak defterinde saklı.
- **Büyükşehir (altı şehir-yıl kombinasyonunun tamamı [B] + ikinci kaynak):**
  - 1994: **İstanbul RP** (YSK 973.704 / Medyascope + TRT Haber), **Ankara RP** (YSK 393.623 /
    Medyascope: RP'nin kazandığı 6 büyükşehir arasında Ankara), **İzmir DYP** (YSK 294.647 /
    Karar: "1994'te Doğru Yol Partisi'nden (DYP)… ikinci kez seçildi" — Burhan Özfatura).
  - 1999: **İstanbul FP** (YSK 1.202.050 = %27,52 / TRT Haber: "Fazilet Partisi'nin adayı Ali
    Müfit Gürtuna yüzde 27,52 oy ile"), **Ankara FP** (YSK 541.515 / Sputnik Türkiye: kayıtlı,
    kullanan, geçerli ve dört partinin oyu — **yedi sayının tamamı birebir**), **İzmir DSP**
    (YSK 367.553 / Hürriyet: "1999 seçimlerinde DSP'den İzmir Büyükşehir Belediye Başkanı
    seçilmiş" — Ahmet Piriştina).
  - Üç şehrin YSK satır toplamları her iki yılda da kaynağın kendi "geçerli oy toplamı" sütunuyla
    **tam eşit** çıktı; Ankara 1999'un yedi sayılık birebir haber eşleşmesi `pdftotext -table`
    sütun eşlemesinin bağımsız doğrulaması oldu.

**Ara seçimler — dönem 5'te YOK:**
- [B] TBMM Cilt 8'de 18. Dönem boyunca ara seçim yapılmadığı birden çok konuşmada açıkça
  söyleniyor ("milletvekili ara seçimi çoktan yapılmış olmalıydı; ama, yapılmamasının kusuru…",
  "ara seçim bir anayasal zorunluluk olduğu halde… ara seçimlere gitmeyen…").
- Cilt 9 ve 10'da (19., 20., 21. dönem) yapılmış bir milletvekili ara seçimine dair kayıt yok.
- İkinci kaynak (derleme): TESAV "Milletvekili Ara Seçim Sonuçları" yıl listesi — 1947, 1948,
  1949, 1951, 1966, 1968, 1975, 1979, **1986, 2003** (arada yok).
- → Hiçbir `ara` kaydı eklenmedi; **Görev 12'ye devredilecek doğrulanamamış ara seçim de yok.**

**Hükümetler (47'nin bitiş nedeni + 48–57):**
- **47 (Akbulut) `bitisNedeni: "istifa"`** — dönem 4'ten devralınan boşluk dolduruldu. [B] TBMM
  Cilt 8, D18 C61 B129 (30.06.1991) Cumhurbaşkanlığı tezkeresi: "Başbakan… Yıldırım Akbulut
  Başbakanlık görevinden istifa etmiş ve istifası kabul olunmuştur."
  (ANAP kurultayı tarihi/ayrıntısı yalnızca haber ve ansiklopedi kaynaklarında bulunabildiği için
  veriye yazılmadı.)
- 48 Mesut Yılmaz — ANAP, tek-parti, 23.06.1991–20.11.1991, `secim`
- 49 Süleyman Demirel — DYP+SHP, koalisyon, 20.11.1991–25.06.1993, `cumhurbaskani-secimi`
- 50 Tansu Çiller — DYP+SHP, koalisyon, 25.06.1993–05.10.1995, `istifa`
- 51 Tansu Çiller — DYP, azınlık, 05.10.1995–30.10.1995, `guvensizlik`
- 52 Tansu Çiller — DYP+CHP, koalisyon, 30.10.1995–06.03.1996, `erken-secim`
- 53 Mesut Yılmaz — ANAP+DYP (ANAYOL), koalisyon, 06.03.1996–28.06.1996, `istifa`
- 54 Necmettin Erbakan — RP+DYP (REFAHYOL), koalisyon, 28.06.1996–30.06.1997, `istifa`
- 55 Mesut Yılmaz — ANAP+DSP+DTP, koalisyon, 30.06.1997–11.01.1999, `guvensizlik`
- 56 Bülent Ecevit — DSP, azınlık, 11.01.1999–28.05.1999, `erken-secim`
- 57 Bülent Ecevit — DSP+MHP+ANAP, koalisyon, 28.05.1999–18.11.2002, `erken-secim`

Parti bileşimi ve `tip` her hükümet için cildin Bakanlar Kurulu listesindeki **parti
etiketlerinden** ve varsa **koalisyon protokolü başlığından** alındı; 51 ve 56'nın kabine
listelerinde parti etiketi olmadığı için partileri ve azınlık nitelikleri aynı cildin program
görüşmelerinden [B] doğrulandı (51: "Doğru Yol Partisi… bir azınlık hükümeti… güvenoyu
alamamıştır"; 56: "Demokratik Sol Parti azınlık hükümeti kurulmuştur"). Bitiş nedenlerinin
tamamının [B] alıntısı kaynak defterinde. **Zincirleme 47→57 boşluksuz.**

### Adım 4 — `veri/sandik.js`'e yazma

`secimler` dizisine 7 kayıt (tarih sırasıyla 1991-10-genel, 1993-05-cb-tbmm, 1994-03-yerel,
1995-12-genel, 1999-04-genel, 1999-04-yerel, 2000-05-cb-tbmm), `hukumetler` dizisine 10 kayıt
(48–57) eklendi; 47'nin `bitisNedeni` ve `not` alanı güncellendi. Her kaydın üstünde
`// kaynak: araclar/kaynak-defteri.md#<kimlik>` satırı var.

### Adım 5 — Denetle

Aşağıda (bölüm 3).

## 2. Değişen/oluşan dosyalar

- `C:/Users/Lizer/Desktop/projects/siyasi parti/veri/sandik.js`
- `C:/Users/Lizer/Desktop/projects/siyasi parti/araclar/kaynak-defteri.md`
- `C:/Users/Lizer/Desktop/projects/siyasi parti/.superpowers/sdd/2026-09-11-sandik/task-9-d5-report.md`
  (bu dosya)

Başka hiçbir dosyaya dokunulmadı (kod, test, `veri/partiler.js` değişmedi).

## 3. Çalıştırılan komutlar ve çıktıları

```
$ node --check veri/sandik.js && node --test "araclar/test/*.test.js"
...
ℹ tests 56
ℹ suites 0
ℹ pass 56
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 170.6652
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
uyarı: hükümetler arasında boşluk: 23 → 24
uyarı: hükümetler arasında boşluk: 43 → 44
hata yok
```

Yeni uyarılar yalnızca **bant 5** satırları: `genel bant 5: 0` ve `cb-tbmm bant 5: 0`
(dönem 5'in genel seçim ve CB kayıtlarında hiç `—` yok), `yerel bant 5: 42` (bilerek null
bırakılan yerel alanlar). Soyağacında olmayan ama **sandalye kazanan** yeni parti yok — dönem 5'te
meclise giren bütün partiler soyağacında var. **47→57 arasında hiç hükümet boşluğu uyarısı yok.**

**Tarayıcı denetimi** (`http://localhost:8123/sandik.html`, `preview_start {name:"soyagaci"}`):
- `document.querySelectorAll('[data-id]').length` → **57 kart** (önce 50 idi, 7 yeni kayıt).
- Dönem 5 kartları tarih sırasında: `1991-10-genel, 1993-05-cb-tbmm, 1994-03-yerel,
  1995-12-genel, 1999-04-genel, 1999-04-yerel, 2000-05-cb-tbmm`.
- `document.body.innerText` içinde `undefined` / `NaN` → **yok**.
- `#1991-10-genel` paneli açıldı, içerik kaynak defteriyle birebir: "450 sandalye · katılım %83,9
  · baraj %10 / DYP %27,0 · 6.600.726 oy · 178 sandalye / ANAP %24,0 · 5.862.623 · 115 / SHP
  %20,8 · 5.066.571 · 88 / RP %16,9 · 4.121.355 · 62 / DSP %10,7 · 2.624.301 · 7 / BAĞIMSIZLAR:
  Bağımsız %0,1 · 32.721 · 0 / DİĞER (1 PARTİ): %0,4 · 108.369" ve "BU SEÇİMDEN SONRA KURULAN
  HÜKÜMETLER: 49. Süleyman Demirel · DYP–SHP … bitti: başbakanın cumhurbaşkanı seçilmesi /
  50. Tansu Çiller · DYP–SHP … bitti: istifa / 51. Tansu Çiller · DYP … bitti: güvensizlik oyu /
  52. Tansu Çiller · DYP–CHP … bitti: erken seçim kararı".
- `read_console_messages {onlyErrors:true}` → boş (konsol hatası yok).
- Sunucu **durdurulmadı**.

## 4. Brief'ten sapmalar ve nedenleri

- **48. Hükümet'in `bitisNedeni` `erken-secim` yerine `secim`.** 20 Ekim 1991 seçiminin bir
  "yenileme (erken) seçimi" olduğunu söyleyen bir [B] ifade bu turda bulunamadı (TBMM ciltlerinde
  yok; Resmî Gazete arşivi `curl` ile yanıt vermedi). Hükümetin **bir genel seçimin ardından**
  sona erdiği [B] kaynaklı olduğu için `secim` yazıldı. 1995 (52) ve 1999 (56) için "yenileme /
  erkene alınmış seçim" ifadeleri [B] bulunduğundan onlar `erken-secim`.
- **1994 ve 1999 yerel seçimlerinin ulusal sayıları `null`** (gerekçeler yukarıda) — dönem 4'ün
  onaylanmış emsaliyle aynı.
- **1999 yerel `sonuc` satırlarının sırası** eksik (76/80 il) bir hesaplamadan geliyor; bu yalnızca
  ekrandaki sıralamayı etkiler, hiçbir sayı veriye yazılmadı. Defterde açıkça not edildi.
- **57. Hükümet dönem 5'e yazıldı** (başlangıcı 28.05.1999); bitiş tarihi (18.11.2002) dönem 6'ya
  taşıyor. Dönem 6 uygulayıcısı 58'den devam etmeli.
- Ara seçim kaydı eklenmedi — brief'in aday listesinde vardı ama kaynaklar dönem 5'te ara seçim
  yapılmadığını gösteriyor.

## 5. Endişeler

- **1994/1999 yerel seçimlerinin ulusal belediye meclisi toplamları hâlâ yok.** Dönem 4'teki
  aynı boşluk sürüyor: YSK bu ölçü için Türkiye toplamı yayımlamıyor, TÜİK'in çok yıllı tablosu
  yalnızca İl Genel Meclisi'ni kapsıyor. Bir sonraki turda **Resmî Gazete arşivi**
  (`resmigazete.gov.tr/arsiv/<sayı>.pdf`) tarayıcı üzerinden denenirse dönem 4 ve 5'in dört
  yerel kaydı birden doldurulabilir — TÜİK'in 2009 yayınının açıklaması Türkiye toplamlarının
  Resmî Gazete'de ilan edildiğini açıkça yazıyor.
- **YSK'nın 1999 belediye meclisi PDF'i eksik** (Hatay, Hakkâri, Trabzon, Tunceli yok). Bu
  kaynağın kendi hatası; farklı bir YSK dosya sürümü bulunursa düzeltilebilir.
- **1994 belediye meclisi tablosunda Antalya ilinin parti toplamı** ilin geçerli oyundan 714 oy
  eksik (bağımsızlar hücresi boş) — kaynağın iç tutarsızlığı, oran %0,004.
- **48'in bitiş nedeni** `secim` olarak "zayıf" kaldı (yukarıda).
- **Büyükşehir kayıtlarında `aday` alanı yok** (dönem 4'teki gibi) — yalnızca kazanan parti.
  Aday isimleri ikinci kaynaklarda var ama `buyuksehir` alanı kullanıcı kararıyla yalnızca
  kazanan partiyi tutuyor.
- **54 (REFAHYOL) ve 53 (ANAYOL) `not` cümleleri bilinçli olarak yalın** tutuldu; 28 Şubat 1997
  süreciyle nedensel bağ kurmak [B] kaynaklarda doğrudan geçmediği için yazılmadı. 28 Şubat
  kesintisi zaten `veri/partiler.js`'teki dönem bandında görünüyor.

## 6. Kullanıcıya sunulacaklar

**Eklenen kayıtlar (tür başına sayı, dönem 5 toplamı):**
- Genel seçim: **3** (1991, 1995, 1999) — hiçbir alanı `—` değil
- CB (TBMM): **2** (1993 Demirel 3 tur; 2000 Sezer 3 tur) — hiçbir alanı `—` değil
- Yerel seçim: **2** (1994, 1999; her ikisinde de İstanbul/Ankara/İzmir büyükşehir sonucu var)
- Referandum: **0** (dönem 5'te halkoylaması yapılmadı)
- Ara seçim: **0** (kaynaklar dönem 5'te ara seçim yapılmadığını gösteriyor)
- Hükümet: **10** (48–57); ayrıca **47'nin boş kalan bitiş nedeni "istifa" olarak dolduruldu**.
  47→57 zinciri boşluksuz.

**Envanter farkları:** Aday listedeki her şey bulundu ve eklendi; tek fark **ara seçimler** —
dönem 5'te hiç yapılmamış (TBMM tutanakları + TESAV yıl listesi). Görev 12'ye devredilecek
doğrulanamamış ara seçim **yok**.

**`—` kalan sayılar ve nedenleri:**
- `1994-03-yerel`: `kayitli`, `kullanilan`, `gecerli` ve 14 parti satırının `oy` değeri.
  Neden: YSK'nın il tablosundan hesaplanan ulusal toplam için **aynı ölçüyü (belediye meclisi)
  veren bağımsız ikinci bir ulusal kaynak bulunamadı** (spesifikasyon §8.1 koşulsuz kuralı;
  dönem 4'ün 1984/1989 kayıtlarındaki onaylı emsalle aynı). Hesaplanan ham toplamlar kaynak
  defterinde duruyor (ANAP 4.512.609, RP 3.783.195, DYP 3.718.962, SHP 3.302.166 …).
- `1999-04-yerel`: aynı alanlar (22 parti satırı).
  Neden: **YSK'nın kendi belediye meclisi PDF'i dört ili hiç içermiyor** (Hatay, Hakkâri,
  Trabzon, Tunceli) — eksik bir tablodan ulusal toplam hesaplanamaz.
- Başka `—` yok: genel seçimlerin ve CB seçimlerinin bütün alanları dolu.

**Soyağacında olmayan ama sandalye kazanan partiler (Görev 10 listesi — dönem 5'te YENİ EKLEME
YOK, liste dönem 4'teki gibi):** Hürriyet Partisi (1957), Cumhuriyetçi Millet Partisi
(1954, 1957), Millet Partisi (1962) (1965, 1969), Türkiye Birlik Partisi (1969, 1973),
Milliyetçi Demokrasi Partisi (1983). Dönem 5'te meclise giren bütün partiler soyağacında var.

**Soyağacında olmayıp yalnızca `ad:` ile geçen (sandalye kazanmamış) dönem 5 partileri:**
Sosyalist Parti (1991, "Diğer" içinde), Millet Partisi (1995/1999), Yeniden Doğuş Partisi,
Yeni Parti, Barış Partisi, Demokrasi ve Barış Partisi, Değişen Türkiye Partisi, Sosyalist
İktidar Partisi, SBP (1994 yerel).

**Özel dikkat gerektiren noktalar:**
- 1994/1999 yerel ulusal toplamları `—`; çözüm yolu (Resmî Gazete arşivi) "Endişeler"de yazılı ve
  dönem 4'ün aynı boşluğunu da kapatabilir.
- 48. Hükümet'in bitiş nedeni `erken-secim` yerine `secim` (1991 yenileme kararına [B] erişilemedi).
- 57. Hükümet dönem 5'te başlıyor ama 2002'de bitiyor; dönem 6 uygulayıcısı 58'den devam etmeli.

**`node araclar/dogrula.js` çıktısı:** yukarıdaki "3. Çalıştırılan komutlar" bölümünde tam metin
var; sonuç **`hata yok`**.

**İlk genel seçim verisinin girildiği dönem denetimi:** Görev 1/dönem 0'da yapılmıştı, bu
görevde tekrar gerekmiyor.

## 7. Commit'ler

```
a69e3bf  Sandık verisi: dönem 5 (1991–2000) — genel seçimler, CB (TBMM), hükümetler
701533f  Sandık verisi: dönem 5 (1991–2000) — yerel ve ara seçimler
```
Her ikisinde de yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` değişti.

---

## Düzeltme turu 1 (2026-09-23) — controller incelemesi sonrası

İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d5-verdict.md` (SPEC ❌).
Bulgular: **Important #1** (hükümet 47–57'nin `partiler`/`tip`/`bitisNedeni` alanları tek kaynak
ailesinden), **Important #2** (48'in `bitisNedeni:"secim"` doğrulanmamış kategori iddiası),
**Minor #3** (1991-10-genel `not` iki cümle), **Minor/kanıt #4** (1991 RP-MÇP-IDP ittifakı
araştırılmamış), ayrıca **kanıt eksikleri** (ham çıktılar, ara seçim taramasının kapsamı).

### 1. Important #1 — hükümet 47–57'ye ikinci kaynak (çözüldü)

Altı yeni kaynak ailesi bulundu ve **11 hükümetin `partiler`, `tip` ve `bitisNedeni` alanlarının
tamamı** ikinci kaynakla eşleştirildi. Ayrıntılı alıntılar `araclar/kaynak-defteri.md`'nin
"Düzeltme turu 1 (2026-09-23)" bölümünde; özet:

- **K1 — TBMM, *Koalisyon Hükümetleri, Koalisyon Protokolleri, Hükümet Programları ve Genel Kurul
  Görüşmeleri, Cilt 2*** (kaynak haritasında zaten listeliydi, ilk turda kullanılmamıştı;
  `cdn.tbmm.gov.tr/.../874b1bb8-….pdf`, 1048 s.). Yalnızca **koalisyon** hükümetlerini içeriyor:
  49, 50, 52, 53, 54, 55, 57 içindekilerde var ve tarihleri Cilt 8/9/10 ile birebir aynı;
  **48, 51, 56 bu ciltte yok** → koalisyon olmadıklarının bağımsız (negatif) doğrulaması.
- **K2 — Demirkol (2023), "1923'ten 2018'e Türkiye'de Hükümet ve Bakanlıklar"** (dönem 0'da da
  kullanılmıştı): 47 ANAP; 50'nin kuruluş nedeni (Demirel'in CB seçilmesi); "ANAP-DYP azınlık
  koalisyonu (53)"; "RP-DYP koalisyonu (54)"; "ANAP-DSP-DTP azınlık koalisyonu (55)"; "DSP …
  azınlık hükümeti (56)"; "DSP-MHP-ANAP koalisyonu (57)"; "1995 (51.), 1999 (56.) … tek parti
  azınlık hükümetleri"; 50 döneminde "koalisyon ortağı SHP'nin CHP'yle birleşmesi".
- **K3 — Çakır (2020), IBAD Sosyal Bilimler Dergisi (6): "1991–2002 Yılları Arasında Koalisyon
  Hükümetleri Yönetimi"**: 48 (ANAP genel başkanı Yılmaz), 49 ve 50 (DYP-SHP), 49'un bitişi
  (Demirel'in istifası + cumhurbaşkanlığı), 52 (DYP-CHP), 53'ün bitişi.
- **K4 — Solak & Karataş (2025), 21. Yüzyılda Eğitim ve Toplum 14(41): "Türkiye'nin Koalisyonlu
  Yılları (1991-2002)"**: 49 (20 Kasım 1991 güvenoyu), 1993 CB seçiminin 3. tur/244 oy dökümü
  (CB kaydının **üçüncü** doğrulaması), 50'nin bitişi (Baykal 20 Eylül'de çekildi), 51 (azınlık,
  güvenoyu alamadı), 52 (seçim hükümeti), 53 (ANAYOL, DYP'nin çekilmesi), 54 (Erbakan'ın
  istifası), 55 (Türkbank gensorusuyla düşürülme — "gensoru ile düşürülen ikinci hükümet"),
  56 (DSP azınlık, ANAP+DYP dış destek), 57 (DSP-MHP-ANAP, 9 Haziran 1999 güvenoyu).
- **K5 — Anadolu Ajansı**, Akbulut ölüm haberi: "15 Haziran 1991'de gerçekleştirilen ANAP
  Kongresi'nde Mesut Yılmaz'a yenilerek genel başkanlık ve başbakanlıktan ayrıldı" → 47'nin
  `istifa`sının ikinci kaynağı.
- **K6 — yeni [B] birincil kaynaklar (seçim/yenileme kararları), tamamı indirilip okundu:**
  Kanun 3757 (RG 26.8.1991/20972, m. 15 → 20 Ekim 1991); TBMM Kararı 384 (RG 31.10.1995/22449
  mükerrer → 24 Aralık 1995 **yenileme**); TBMM Kararı 590 (RG 2.8.1998/23421 → 18 Nisan 1999
  **yenileme**, "**mahalli idareler genel seçimleri ile birlikte**"); TBMM Kararı 745
  (RG 2.8.2002/24834 → 3 Kasım 2002 **yenileme**).
- **K7 — "Türkiye'de Seçim Kararının Mahiyeti"** (dergipark): 1982 Anayasası dönemindeki bütün
  seçim kararlarının künyeleri; "**1987 ve 1991 milletvekili erken genel seçim kararı**,
  parlamento kararı biçiminde değil, kanun ile olmuştur… 3757 sayılı Kanun … m. 15".

**Tek kısmi uyuşmazlık — 53. Hükümet'in `bitisNedeni`:** [B] Cilt 9 "yargı kararıyla, güvenoyu
almadığı için **istifa** etmek zorunda kalmıştır"; K3 "AYM'nin güvenoyunu iptal etmesi koalisyonu
sonlandırmıştır"; K4 "AYM'nin iptalinden **önce** DYP'nin koalisyondan çekilmesi sonunu getirdi".
Üçü **tetikleyicide** ayrışıyor, **mekanizmada** (güvensizlik oyuyla düşürülme değil, görevi
bırakma) birleşiyor → `istifa` korundu, ayrışma deftere yazıldı.

**Hiçbir alan null'a çekilmedi** — 11 hükümetin 33 alanının tamamı ([B] + ikinci kaynak) ile
doğrulandı.

### 2. Important #2 — 48'in `bitisNedeni` (çözüldü: `secim` → **`erken-secim`**)

İnceleme `null` öneriyordu; bu turda **[B] kanıt bulundu**, dolayısıyla null yerine doğru kategori
yazıldı:
- [B] **3757 sayılı Kanun**, Kabul 24.8.1991, **RG 26.8.1991 / 20972**, MADDE 15: "Türkiye Büyük
  Millet Meclisi XIX uncu Dönem Milletvekili Genel Seçimi için **oy verme günü 20 Ekim 1991 Pazar
  günüdür**."
- [B] TÜİK Açıklama (PDF s. 13): "Yeni Anayasa, seçimlerin … **5 yılda bir** yapılmasını hükme
  bağlamıştır" + [B] TÜİK Ek-1: 18. Dönem seçimi **29 Kasım 1987** → olağan takvimde seçim Kasım
  1992'de olmalıydı; 20 Ekim 1991 bundan ~13 ay öncedir.
- İkinci kaynak (K7): "**1987 ve 1991 milletvekili erken genel seçim kararı** … kanun ile
  olmuştur."
`veri/sandik.js`'te 48'in `not` cümlesi de güncellendi ("3757 sayılı Kanunla 20 Ekim 1991'e alınan
erken genel seçim").

### 3. Minor #3 — `1991-10-genel.not` tek cümleye indirildi

Yeni metin: *"RP listesinde MÇP ve IDP adaylarının da yer aldığı bu seçimde hiçbir parti tek başına
hükümet kuracak çoğunluğu sağlayamadı; sayılar il ve gümrük kapısı oylarının toplamıdır."*
(tek cümle, noktalı virgülle — dönem 5'in diğer `not` alanlarıyla aynı biçim.)

### 4. Minor #4 — 1991 RP-MÇP-IDP ortak listesi (araştırıldı, doğrulandı, `not`a eklendi)

- **[B] TÜİK Tablo 1:** 1991'e katılan partiler yalnızca ANAP, RP, SP, DYP, DSP, SHP — 1987'de ayrı
  ayrı yer alan **MÇP ve IDP 1991 listesinde yok**; Tablo 24'ün 1991 sütununda da bu iki partinin
  satırları boş → kendi listeleriyle girmemişler.
- **[B] TBMM Tutanak (Cilt 8, 19. Dönem):** "Sayın Muharrem Şemsek, buyurunuz. (**MÇP sıralarından
  alkışlar**)" → MÇP'nin 19. Dönem TBMM'sinde sıraları/milletvekilleri vardı.
- **İkinci kaynak — Medyascope**, "Gomaşinen (6) – Cumhur İttifakı'nın provası: 20 Ekim 1991
  seçimlerinde Erbakan-Türkeş ittifakı": "Refah Partisi çatısı altında, Milliyetçi Çalışma Partisi
  ve … Islahatçı Demokrasi Partisi birlikte seçim kararı aldılar"; "…girdiği seçimde **62
  milletvekili** kazandı — %16,87, 4 milyon 120 bin oyla" (TÜİK: 4.121.355 / %16,9 / 62 — tolerans
  içinde).
- **Yazılmayan:** 62 sandalyenin RP/MÇP/IDP arasındaki dağılımı (tek bir haber özetinde geçiyor) —
  veriye yazılmadı. `ittifak` alanı spesifikasyon §5.2 gereği yalnızca 2018+ için, yazılmadı.

### 5. Kanıt — ham çıktı kesitleri

**[B] TÜİK Tablo 24 "TÜRKİYE" — `pdftotext -f 111 -l 111 -table -enc UTF-8 <pdf> -` ham çıktısı
(yalnızca harf düzeltmesi `ú→ş, ÷→ğ, ø→İ, ù→Ş`; rakamlara dokunulmadı):**

```
24. 1983, 1987, 1991, 1995, 1999, 2002,      2007 ve 2011 milletvekili genel  seçimi sonuçları                                                      TÜRKİYE
A. Alınan oy sayısı          B. Oy oranı     C. Milletvekili sayısı
                                                1983                 1987         1991              1995         1999         2002         2007         2011
Kayıtlı seçmen sayısı                        19 767 366  26 376 926           29  979 123       34  155 981  37  495 217  41  407 027  42  799 303  52  806 322
Oy kullanan seçmen sayısı                    18 238 362  24 603 541           25  157 089       29  101 469  32  656 070  32  768 161  36  056 293  43  914 948
Katılım oranı (%)                               92,3                 93,3         83,9              85,2         87,1         79,1         84,2         83,2
Geçerli oy sayısı                            17 351 510  23 923 687           24  371 474       28  040 392  31  119 242  31  414 748  34  822 907  42  813 896
Gümrük kapıları geçerli oy   sayısı             -                    47 942       45 192            86 601       65 254       114 035      226 784      127 867
Toplam geçerli oy sayısı                     17 351 510  23 971 629           24  416 666       28  126 993  31  184 496  31  528 783  35  049 691  42  941 763
Milletvekili sayısı                             399                  450          450               550          550          550          550          550
```

(Parti satırları aynı biçimde A/B/C üçlüsü olarak devam ediyor; örn. `ANAP A 7 833 148 | 8 704 335
| 5 862 623 | 5 527 288 | 4 122 929 …`, `B 45,1 | 36,3 | 24,0 | 19,6 | 13,2 …`,
`C 211 | 292 | 115 | 132 | 86 …`; `RP A – | 1 717 425 | 4 121 355 | 6 012 450 | – …`,
`C – | – | 62 | 158 | – …`; `SHP A – | 5 931 000 | 5 066 571 | – …`, `C – | 99 | 88 | – …`;
`SP A – | – | 108 369 | – …`; `BAĞIMSIZ A 195 588 | 89 421 | 32 721 | 133 895 | 270 265 …`,
`C – | – | – | – | 3 …`.)

**İkinci kaynak — TBMM seçim sorgusu ham çıktısı**
(`curl -s -k "https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=YYYY"`,
HTML etiketleri `|` ile değiştirilip CP1254→UTF-8 dönüştürülmüş hâli):

```
1991: DYP | 6.600.726 | 27,03 | ANAP | 5.862.623 | 24,01 | SHP | 5.066.571 | 20,75 |
      RP | 4.121.355 | 16,88 | DSP | 2.624.301 | 10,75 | SP | 108.369 | 0,44 |
      BAĞIMSIZ | 32.721 | 0,13

1995: RP | 6.012.450 | 21,38 | ANAP | 5.527.288 | 19,65 | DYP | 5.396.009 | 19,18 |
      DSP | 4.118.025 | 14,64 | CHP | 3.011.076 | 10,71 | MHP | 2.301.343 | 8,18 |
      HADEP | 1.171.623 | 4,17 | BAĞIMSIZ | 133.895 | 0,48 | YDH | 133.889 | 0,48 |
      MP | 127.630 | 0,45 | YDP | 95.484 | 0,34 | İP | 61.428 | 0,22 | YP | 36.853 | 0,13

1999: DSP | 6.919.670 | 22,19 | MHP | 5.606.583 | 17,98 | FP | 4.805.381 | 15,41 |
      ANAP | 4.122.929 | 13,22 | DYP | 3.745.417 | 12,01 | CHP | 2.716.094 | 8,71 |
      HADEP | 1.482.196 | 4,75 | BBP | 456.353 | 1,46 | BAĞIMSIZ | 270.265 | 0,87 |
      ÖDP | 248.553 | 0,80 | DTP | 179.871 | 0,58 | LDP | 127.174 | 0,41 | DP | 92.093 | 0,30 |
      MP | 79.370 | 0,25 | BP | 78.922 | 0,25 | İP | 57.607 | 0,18 | EMEP | 51.756 | 0,17 |
      YDP | 44.787 | 0,14 | SİP | 37.680 | 0,12 | DEPAR | 37.175 | 0,12 | DBP | 24.620 | 0,08
```

Bu 41 satırın her biri yukarıdaki TÜİK sütunlarıyla **birebir aynı** (TBMM'nin yüzdeleri toplam
geçerli oya göre; ör. 6.600.726 / 24.416.666 = %27,03).

### 6. Kanıt — "dönem 5'te ara seçim yok" iddiasının tarama kapsamı

- **Tarama yöntemi:** üç cildin **tam metni** `pdftotext -layout` ile çıkarıldı
  (Cilt 8: 40.412 satır, Cilt 9: 37.209 satır, Cilt 10: 37.475 satır) ve
  `grep -i "ara seçim"` ile tarandı (Türkçe'de "ara seçim / ara seçimi / Ara Seçim" hepsini
  kapsar).
- **Sonuçlar:** Cilt 8 → **15 eşleşme**, hepsi 18. Dönem'de ara seçim **yapılmadığına** dair
  eleştiriler ("…1991'e çok yaklaştık; kasıma kadar milletvekili ara seçimi yapılmazsa…",
  "Bugüne kadar, milletvekili ara seçimi için Meclis kararı [alınmadı]", "…ara seçimi çoktan
  yapılmış olmalıydı; ama, yapılmamasının kusuru…", "Gelin ara seçim yapın… Anayasaya göre,
  yapmak zorundasınız.", "ara seçim bir anayasal zorunluluk olduğu halde… ara seçimlere
  gitmeyen…"). Cilt 9 → **1 eşleşme**, o da 1979 **Senato** ara seçimlerine geçmişe dönük atıf.
  Cilt 10 → **0 eşleşme**. Yani 19., 20. ve 21. dönemlerin hükümet programı görüşmelerinde
  yapılmış bir milletvekili ara seçimine tek bir atıf bile yok.
- **İkinci kaynak (derleme):** TESAV, "**Milletvekili Ara Seçim Sonuçları (1947, 1948, 1949,
  1951, 1966, 1968, 1975, 1979, 1986, 2003)**" — sayfa başlığı ve içeriği bu on yılı listeliyor;
  **1986 ile 2003 arasında hiç ara seçim yok**.
- **Sınırlılık:** bu negatif bir iddiadır; YSK'nın ara seçim arşivi (JS kabuğu) doğrudan
  listelenemedi. İki bağımsız kanıt hattı (TBMM tutanaklarının tam metin taraması + TESAV yıl
  listesi) aynı sonucu veriyor.

### Testler ve denetim (düzeltme turu 1)

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
uyarı: hükümetler arasında boşluk: 23 → 24
uyarı: hükümetler arasında boşluk: 43 → 44
hata yok
```

Uyarı listesi ilk tura göre **değişmedi** (düzeltmeler yalnızca `bitisNedeni` ve iki `not`
metnini değiştirdi, hiçbir sayı `null`'a çekilmedi).

**Tarayıcı denetimi (düzeltme turu 1):** `http://localhost:8123/sandik.html` — `#1991-10-genel`
paneli yeniden açıldı: "BU SEÇİMDEN SONRA KURULAN HÜKÜMETLER" listesi ve bütün sayılar
değişmeden duruyor; hükümet şeridinde 48. Hükümet'in bitiş etiketi artık "**erken seçim kararı**"
(önceden "seçim"). `undefined`/`NaN` yok, konsol hatası yok. Sunucu durdurulmadı.

### Commit (düzeltme turu 1)

```
1404cf8  Düzeltme: dönem 5 — hükümet kayıtlarına ikinci kaynak
```
Yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` değişti.

## Kullanıcıya sunulacaklar (güncellendi — düzeltme turu 1)

**Değişen:**
- **Dönem 5'in 11 hükümet kaydının (47–57) `partiler`, `tip` ve `bitisNedeni` alanlarının tamamı
  artık ikinci kaynakla eşleşmiş durumda.** Yeni kullanılan kaynaklar: TBMM'nin *Koalisyon
  Hükümetleri…* cildi (koalisyon olan/olmayan ayrımını bağımsız olarak doğruluyor), Demirkol
  (2023), Çakır (2020), Solak & Karataş (2025), Anadolu Ajansı ve dört yeni [B] birincil belge
  (Kanun 3757 ve TBMM Kararları 384, 590, 745 — hepsi Resmî Gazete künyeleriyle).
  **Hiçbir alan null'a çekilmedi.**
- **48. Hükümet'in bitiş nedeni `secim` → `erken-secim`.** 20 Ekim 1991 seçiminin öne alınmış bir
  seçim olduğu 3757 sayılı Kanun (RG 26.8.1991/20972) ile [B] kanıtlandı; böylece dönem 5'in tek
  "zayıf" alanı kapandı.
- **1991 genel seçim kaydının notu tek cümleye indirildi** ve RP listesinde MÇP ile IDP adaylarının
  da yer aldığı (1991 "kutsal ittifak" ortak listesi) bilgisi eklendi — [B] TÜİK Tablo 1/24
  (MÇP ve IDP 1991'de ayrı liste vermemiş) + [B] TBMM tutanağı (19. Dönem'de MÇP sıraları var) +
  Medyascope haber arşivi.
- **1999 genel + yerel seçimin aynı gün yapıldığı artık [B] bir belgeye dayanıyor:** TBMM Kararı
  590 — "seçimlerin, **mahalli idareler genel seçimleri ile birlikte** 18 Nisan 1999 Pazar günü
  yapılmasına".

**Hâlâ `—` kalan alanlar (değişmedi):** yalnızca 1994 ve 1999 **yerel** seçimlerinin ülke geneli
sayıları (gerekçeler ilk turdaki "Kullanıcıya sunulacaklar" bölümünde; 1994 için bağımsız ikinci
ulusal kaynak yok, 1999 için YSK'nın kendi tablosu dört ili içermiyor).

**Bilinen tek ayrışma:** 53. Hükümet'in bitiş nedeninde kaynaklar tetikleyicide ayrışıyor
(AYM'nin güvenoyunu iptali mi, DYP'nin koalisyondan çekilmesi mi) ama üçü de hükümetin
**istifa ederek** sona erdiğinde birleşiyor → `istifa` korundu, ayrışma deftere yazıldı.

**Raporlama tutarlılığı (inceleme Minor #4):** dönem 5 brief'in istediği gibi **iki** commit'le
tamamlandı (dönem 2 ve 3 emsaliyle aynı). Dönem 4'ün tek commit tercihi o dönemin kendi
gerekçesiydi (bütün kayıtların tek araştırma turunda bitmesi); dönem 5'te genel/CB/hükümet grubu
yerel gruptan bağımsız olarak tamamlandığı için brief'in ikili bölünmesi olduğu gibi uygulandı.
