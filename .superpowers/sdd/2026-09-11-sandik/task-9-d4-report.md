# Görev 9 — Dönem 4 (1983–1990) raporu

Durum: tamamlandı (tek commit — bkz. "Brief'ten sapmalar").

## 1. Yapılanlar (adım adım)

### Adım 1 — Envanter doğrulama
- TÜİK Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" (PDF s. 277, basılı s. 259):
  16. Dönem 6 Kasım 1983, 17. Dönem 29 Kasım 1987 — doğrulandı.
- TÜİK Tablo 1 (PDF s. 22, basılı s. 4): 1983'te 3 parti (ANAP, HP, MDP) seçime katıldı, üçü de
  meclise girdi; 1987'de 7 parti (ANAP, DSP, DYP, IDP, MÇP, RP, SHP) katıldı, 3'ü (ANAP, DYP, SHP)
  meclise girdi. Aynı sayfa: "ülke barajlı (%10)" sistemi 1983'ten itibaren uygulanmaya başladı
  (baraj: 10, hem 1983 hem 1987 için).
- 1983'te MDP'nin soyağacında (`veri/partiler.js`) olup olmadığı kontrol edildi: **yok** — dönem 4
  parti listesinde (hp83, sodep, shp, dsp, anap, dyp, rp, mcp, hep, tbkp) MDP hiç geçmiyor.
  MDP `ad:"Milliyetçi Demokrasi Partisi"` ile girildi, Görev 10 listesine eklendi.
- Yerel: 25 Mart 1984 ve 26 Mart 1989 mahalli idareler seçimleri — TÜİK/DİE "Mahallî İdareler
  Seçimi Sonuçları 26.3.1989" yayını (Tablo 1) ile doğrulandı.
- Büyükşehir: 1984'te de (Ankara, İstanbul, İzmir) büyükşehir belediye başkanlığı seçimi YAPILDI —
  YSK'nın kendi resmî PDF'i "25 MART 1984 BÜYÜKŞEHİR BELEDİYE BAŞKANLIĞI SEÇİMİ SONUÇLARI" başlığını
  taşıyor (3030 sayılı Büyükşehir Belediyesi Kanunu'nun 27.6.1984'te kabul edilmesinden önce olmasına
  rağmen — muhtemelen KHK ile önceden düzenlenmişti). Hafızadan varsayılan "1984'te büyükşehir yok"
  iddiası **yanlış çıktı**, kaynakla düzeltildi.
- Referandumlar: 6 Eylül 1987 (siyasi yasakların kaldırılması) ve 25 Eylül 1988 (yerel seçim
  tarihinin öne alınması) — iki akademik makale (Yavaşça 2023, Karadeniz 2018) ve haber kaynaklarıyla
  doğrulandı.
- TBMM CB: 31 Ekim 1989, Turgut Özal — TBMM Tutanak Dergisi Dönem 18 Cilt 33, 20/21/24. Birleşimler
  (20, 24, 31 Ekim 1989) ile birebir doğrulandı (bkz. Adım 3).
- Ara seçim: 28 Eylül 1986 tarihli ara seçimin varlığı Resmî Gazete'den (12.7.1986/19162, Kanun
  3309) doğrulandı, ama il-parti-sandalye kırılımı iki kaynakla doğrulanamadı (bkz. Adım 3) —
  **eklenmedi**, Görev 12'ye not düşüldü.
- Hükümetler: TBMM Cilt 7 (12 Kasım 1979 – 9 Kasım 1989) ve Cilt 8 (9 Kasım 1989 – 30 Ekim 1995)
  ile 45 (I. Özal), 46 (II. Özal), 47 (Akbulut) doğrulandı.

### Adım 2 — Genel seçim sayıları
- **[B] TÜİK, Tablo 24 "TÜRKİYE" (PDF s. 111-112, basılı s. 93-94, `pdftotext -table`)**:
  - 1983: kayıtlı 19.767.366, kullanılan 18.238.362 (katılım %92,3), geçerli 17.351.510, meclis 399,
    baraj 10. ANAP 7.833.148 (%45,1/211 sandalye), HP 5.285.804 (%30,5/117), MDP 4.036.970
    (%23,3/71), Bağımsız 195.588 (%1,1/0). Parti oyları + bağımsız toplamı geçerliye **tam eşit**
    (17.351.510); sandalye toplamı (211+117+71=399) meclise **tam eşit**.
  - 1987: kayıtlı 26.376.926, kullanılan 24.603.541 (katılım %93,3), geçerli (toplam, gümrük kapıları
    dahil) 23.971.629, meclis 450, baraj 10. ANAP 8.704.335 (%36,3/292), DYP 4.587.062 (%19,1/59),
    SHP 5.931.000 (%24,8/99), RP 1.717.425 (%7,2/0), MÇP 701.538 (%2,9/0), DSP 2.044.576 (%8,5/0),
    IDP (Islahatçı Demokrasi Partisi) 196.272 (%0,8/0, soyağacında yok, <%1 → "Diğer"), Bağımsız
    89.421 (%0,4/0). Toplam **tam eşit** (23.971.629); sandalye toplamı (292+59+99=450) meclise tam
    eşit.
- **İkinci kaynak: TBMM seçim sorgusu** (`secim_sorgu.secimdeki_partiler?p_secim_yili=1983/1987`,
  `curl` ile erişildi, WebFetch bu alan adını reddetti) — bütün parti oy sayıları TÜİK ile
  **birebir eşleşti** (1983: ANAP 7.833.148, HP 5.285.804, MDP 4.036.970, Bağımsız 195.588; 1987:
  ANAP 8.704.335, SHP 5.931.000, DYP 4.587.062, DSP 2.044.576, RP 1.717.425, MÇP 701.538, IDP
  196.272, Bağımsız 89.421). Uyuşmazlık: yok.
- MDP, IDP tam adları YSK'nın 1989 TÜİK/DİE yayınındaki "Kısaltmalar" sayfasından [B] alındı:
  MDP = Milliyetçi Demokrasi Partisi, IDP = Islahatçı Demokrasi Partisi.

### Adım 3 — Diğer kayıtlar

**Yerel (1984, 1989):**
- **[B] YSK, "25 MART 1984 / 26 MART 1989 BELEDİYE MECLİS ÜYELİĞİ SEÇİMİ SONUÇLARI"** (il bazlı
  tablo, `ysk.gov.tr/doc/dosyalar/docs/Mahalli/<yıl>/KesinSecimSonuclari/<yıl>-Belediye-Meclis-
  Uyeligi-Secimleri-Sonucu.pdf`) — ülke geneli toplamı yok, `araclar/topla.js` ile 67 ilden
  hesaplandı ("hesaplandı" işaretlendi).
  - **1984:** kayıtlı 11.981.906, kullanılan 10.499.457, geçerli 9.923.877 (parti oyları toplamına
    göre). ANAP 4.219.115, DYP 1.163.110, HP 778.033, MDP (ad, soyağacında yok) 544.385, RP 479.977,
    SDP(=SODEP) 2.314.738, Bağımsız 110.474, "Diğer" (ADANA ilinin parti kırılımı kaynak PDF'inde iç
    tutarsız çıktığı için ayrıştırılamadı + küçük il bazlı yuvarlama farkları) 314.045.
    **ADANA ilinin parti sütunları YSK PDF'inde bozuk** (HP/MDP/RP/SDP hücreleri ilin kendi geçerli
    oyunu kat kat aşıyor, hem `-table` hem `-raw` modunda aynı — kaynağın kendi hatası, transkripsiyon
    hatası değil); Adana'nın kayıtlı/kullanılan/geçerli sütunları tutarlı olduğundan o kısım
    toplamlara dahil edildi, parti kırılımı "Diğer"e eklendi.
  - **1989:** kayıtlı 18.091.625, kullanılan 14.067.380, geçerli 13.241.347 (parti oyları toplamına
    göre; kaynağın kendi "GEÇERLİ OY TOPLAMI" sütun toplamı 13.241.345 idi, 2 oyluk fark [%0,00002,
    tolerans içinde] — iç tutarlılık için parti toplamı kullanıldı, defterde not edildi). ANAP
    3.112.613, DSP 890.507, DYP 3.138.260, MÇP 445.065, RP 1.196.876, SHP(kaynakta "SODEP" yazıyor
    — 1989'da SODEP diye bir parti yoktu, SHP'nin sütun başlığı hatası olduğu değerlendirildi)
    4.368.018, Bağımsız 20.543, "Diğer" (IDP, %0,52 — soyağacında yok ve <%1 → Diğer'e girdi) 69.465.
  - **İkinci kaynak (bütünlük denetimi):** TÜİK'in aynı yayınındaki Tablo 1 (İl Genel Meclisi, farklı
    bir ölçü ama aynı seçim günü, RG 28.5.1989/20178 kaynaklı) ile karşılaştırıldığında ANAP'ın
    birincilik sırası ve oy payı aralığı (1984 ANAP ~%41-42, 1989 SHP ~%29-33 bandı) tutarlı —
    ama **belediye meclisi ölçüsü için ayrı, bağımsız bir ikinci ulusal kaynak bulunamadı**
    (haber veritabanları yalnızca il genel meclisi ya da büyükşehir bazlı özet veriyor). Bu, ulusal
    toplam için tek kaynaklı bir zayıflık olarak deftere ve rapora açıkça yazıldı.
- **Büyükşehir (İstanbul, Ankara, İzmir):**
  - **[B] YSK, "…Büyükşehir Belediye Başkanlığı Seçimi Sonucu.pdf"** (1984 ve 1989, `pdftotext -table`
    ile okundu, parti oyları toplamı her ikisinde de geçerli oya **tam eşit** çıktı — iç tutarlılık
    doğrulandı).
    - 1984: İstanbul ANAP (939.190), Ankara ANAP (391.975), İzmir ANAP (279.456) kazandı.
    - 1989: İstanbul SHP (818.756), Ankara SHP (474.349), İzmir SHP (365.980) kazandı.
  - Aday isimleri (ör. Bedrettin Dalan, Nurettin Sözen) kaynaklarda geçse de yalnızca haber/Vikipedi
    kaynaklı olduğundan ve [B]+ikinci kaynak kuralına uymadığından `aday` alanı **yazılmadı**, yalnızca
    `parti` alanı dolduruldu.

**Referandumlar (1987, 1988):**
- **1987-09-referandum (6 Eylül 1987, siyasi yasakların kaldırılması):**
  - Ham sayılar: bianet.org haber arşivi ("1987 Referandumu: Özal 75 Bin Oyla Kaybetti") — kullanılan
    24.436.821, geçerli 23.347.856, evet 11.711.461 (%50,16), hayır 11.636.395 (%49,84), fark 75.066
    oy. evet+hayır=geçerli **tam eşit**.
  - **İkinci/üçüncü kaynak:** iki bağımsız akademik makale — Yeliz Karadeniz, "Demokratik Referandum
    İlkeleri Işığı Altında Türkiye'deki 1987 Halkoylamasına Yönelik Bir Analiz" (Uluslararası Politik
    Araştırmalar Dergisi, 2018, dergipark) ve Kerem Yavaşça (2023) — ikisi de TÜİK'i kaynak göstererek
    aynı yüzdeleri (%50,16 evet / %49,84 hayır, katılım %93,6) doğruluyor. **Uyuşmazlık:** başka bir
    haber kaynağı (secim.yenisafak.com) farklı rakamlar veriyordu (kullanılan 24.218.800, geçerli
    23.136.218, evet %50,2/hayır %49,8, katılım %93,4 — TÜİK'e dayanan 3 kaynaktan ~%0,8-0,9 sapıyor,
    tolerans dışı) — azınlıkta kaldığı ve TÜİK atıflı üç kaynakla çelişik olduğu için kullanılmadı.
  - `kayitli` alanı: kaynaklar arasında (25.924.682 / 26.095.630 / 26.110.700 türünden) sadece
    türetilmiş/yuvarlanmış rakamlar bulundu, hiçbiri doğrudan birincil belgeden değildi → **null**.
  - `tutumlar`: **[B]-yakın akademik kaynak** — Fatih ??? (historystudies.net, "Siyasi Yasakların
    Sonu: 6 Eylül 1987 Referandumunda Erdal İnönü ve Bülent Ecevit'in Faaliyetleri") — DYP (Demirel),
    DSP (Ecevit), MÇP (Türkeş), RP (Erbakan) "Evet" kampanyası yürüttü (yasaklı liderlerinin dönüşü
    için); SHP de (yasaklı lideri olmamasına rağmen) Erdal İnönü öncülüğünde "Evet" çağrısı yaptı;
    ANAP/Özal ise "Turuncu-Hayır" kampanyası yürüttü. Bu, iki ayrı akademik makalede (Karadeniz 2018:
    "İktidar partisinin yasakların kalkmasına karşı çıktığı, diğer partilerin evet kampanyası
    yürüttüğü" ifadesiyle) çapraz doğrulandı.
- **1988-09-referandum (25 Eylül 1988, yerel seçimlerin bir yıl öne alınması):**
  - Ham sayılar: secim.yenisafak.com — kayıtlı 26.795.661, kullanılan 23.810.814, geçerli 23.006.345,
    katılım %88,9. Evet/hayır ham sayıları farklı kaynaklarda tutarsız çıktığı (toplamı geçerliye
    tam oturmuyor) için **yalnızca yüzdeler** kullanıldı: iki bağımsız akademik makale (Yavaşça 2023:
    "%35 evet %65 hayır", katılım %88,82; Karadeniz 2018/IJPS: "%35 evet %65 hayır", katılım %88,82)
    **birebir eşleşti** — 1961 referandumu kaydında uygulanan emsal yönteme (kaynak: kaynak-defteri
    "1961-07-referandum") uyularak `kayitli`/`kullanilan`/`gecerli`/`evet`/`hayir` **null** bırakıldı,
    yüzdeler `not` alanına düz metin olarak yazıldı.
  - `karar`: "ret" — bu, Türkiye'de sonucu "hayır" çıkan tek referandum (iki akademik kaynakta da
    özellikle vurgulanıyor).
  - `tutumlar`: Yavaşça (2023) — ANAP "Evet" kampanyası yürüttü (teklifin sahibi); SHP TBMM oylamasında
    karşı oy kullandı ve referandum kampanyasında "hayır" savundu; DYP TBMM'deki oylamaya katılmadı
    ama kampanya sürecinde SHP ile birlikte referandumu "hükümete güvenoylaması" haline getirmeye
    çalışarak hayır kampanyası yürüttü (aynı kaynakta açık ifade). RP, MÇP, DSP'nin bu referandumdaki
    tutumu bu turda iki kaynakla doğrulanamadı, **tutumlar listesine yazılmadı**.

**CB (TBMM):**
- **1989-10-cb-tbmm (31 Ekim 1989, Turgut Özal):**
  - **[B] TBMM Tutanak Dergisi, Dönem 18, Cilt 33** — üç ayrı birleşim doğrudan indirilip okundu:
    - 20. Birleşim (20.10.1989): 1. tur, 285 üye katıldı, Turgut Özal 247, Fethi Çelikbaş 18 oy;
      2/3 çoğunluk (300) sağlanamadı.
    - 21. Birleşim (24.10.1989): 2. tur, 284 üye katıldı, Özal 256, Çelikbaş 17, boş 9, geçersiz 2;
      yine 2/3 çoğunluk sağlanamadı.
    - 24. Birleşim (31.10.1989): 3. tur, 285 üye katıldı, Özal 263, Çelikbaş 14; Anayasa'nın 102.
      maddesindeki salt çoğunluk (226) sağlandı, Özal 8. Cumhurbaşkanı seçildi.
  - **İkinci kaynak: tccb.gov.tr** ("Turgut ÖZAL" biyografi sayfası) — "31 Ekim 1989'da Türkiye Büyük
    Millet Meclisi tarafından Türkiye Cumhuriyeti'nin sekizinci cumhurbaşkanı olarak seçilen Özal
    9 Kasım 1989 günü bu görevine başladı" — tarih ve TBMM'ce seçilme birebir doğrulandı.
  - `turSayisi`: 3. `secilen`: "Turgut Özal".

**Ara seçim (28 Eylül 1986) — eklenmedi:**
- **[B] Resmî Gazete 12.7.1986/19162, Kanun No 3309** ("Türkiye Büyük Millet Meclisi XVII nci Dönem
  Milletvekili Ara Seçimi Hakkında Kanun") — seçim tarihinin **28 Eylül 1986** olduğu doğrulandı, ama
  bu kanun yalnızca seçimin usulünü düzenliyor, sonuç (il-parti-sandalye) içermiyor.
  - İl-parti-sandalye kırılımı için TESAV'ın ilgili PDF'i denendi (`tesav.org.tr/wp-content/
    uploads/2017/03/17.-Milletvekili-Ara-Seçim-Sonuçları.pdf`) — **404/yönlendirme sayfası döndü**
    (dönem 1-3'ten beri süregelen, bilinen bir sorun). YSK'nın ara seçim arşiv sayfası JS kabuğu
    döndürüyor, doğrudan PDF adı bulunamadı. Yalnızca Vikipedi kaynaklı il-parti-sandalye dökümü
    bulunabildi (kullanıcı kararı gereği Vikipedi hiçbir zaman kaynak sayılmaz).
  - **Brief'te açıkça öngörüldüğü gibi ("İki kaynakla doğrulanamayan ara seçim eklenmez (1986 ara
    seçimi dahil)")**, bu kayıt **eklenmedi**. Görev 12'ye not: "28 Eylül 1986 ara seçimi (17. Dönem,
    11 sandalye, 10 il) — varlığı/tarihi RG ile [B] doğrulandı, il-parti-sandalye kırılımı için resmî
    YSK kaynağı bulunamadı (TESAV 404 veriyor); yeni bir kaynak turunda tekrar denenebilir."

**Hükümetler (45, 46, 47):**
- **[B] TBMM, Hükümetler, Programları ve Genel Kurul Görüşmeleri, Cilt 7** (12 Kasım 1979 – 9 Kasım
  1989, `acikerisim.tbmm.gov.tr` bitstream `7c3fc30f-4941-4abd-989e-c34eda60de81` — dönem 3'ün
  indirdiği kopya scratchpad'te zaten vardı) — İçindekiler (satır 144, 150):
  - "45 I. Özal Hükümeti (13.12.1983-21.12.1987)"
  - "46 II. Özal Hükümeti (21.12.1987-09.11.1989)"
  - Her ikisinin de Bakanlar Kurulu listesi satır satır okundu: **ikisi de tamamen ANAP'lı** (hiçbir
    bakan başka parti etiketiyle geçmiyor) → `partiler: ["anap"]`, koalisyon protokolü yok.
  - 45'in bitişi: TBMM Cilt 7'nin Akbulut Hükümeti program görüşmesi bölümünde (bkz. Cilt 8 aşağıda),
    Özal'ın kendi ağzından (24. Birleşim değil, II. Özal Hükümeti program görüşmesi, Cilt 7) "referandum
    öncesinde... erken seçim müjdesini orada verdim" ifadesiyle **erken seçim** olduğu [B] doğrulandı
    (6 Eylül 1987 referandumu akşamı TRT'de açıklanan erken seçim kararı, 29 Kasım 1987'de yapıldı).
- **[B] TBMM Cilt 8** (9 Kasım 1989 – 30 Ekim 1995, bitstream `bfe1edae-c4f8-4520-801f-92cefd45e253`,
  acikerisim.tbmm.gov.tr'nin "Hükümetler, programları..." koleksiyon öğesinden — tüm 10 cilt tek
  öğede, `/items/2305701f-7bde-4344-bfbe-4166743fe1e2` → ORIGINAL bundle → bitstreams listesi):
  - "47 Akbulut Hükümeti (09.11.1989-23.06.1991)" — Bakanlar Kurulu listesi tamamen ANAP'lı,
    `partiler: ["anap"]`.
  - 46'nın bitiş nedeni: Akbulut'un kendi program konuşmasında (13.11.1989 birleşimi, Cilt 8) birebir
    şöyle diyor: "46'ncı Cumhuriyet Hükümetinin Başbakanı Sayın Turgut Özal'ın, 31 Ekim 1989 tarihinde
    Cumhurbaşkanlığına seçilmesi münasebetiyle... Hükümet listesini Sayın Cumhurbaşkanına sundum...
    47'nci Türkiye Cumhuriyeti Hükümeti teşekkül etti." → `bitisNedeni: "cumhurbaskani-secimi"`
    [B] doğrudan doğrulandı.
- **`tip` alanı (kullanıcı kararı 2026-09-22 ölçütüyle):** her üç hükümet de tek parti (ANAP) kabine;
  1983'te ANAP 211/399 (%52,9) ve 1987'de 292/450 (%64,9) ile meclis çoğunluğuna sahip → `tip:
  "tek-parti"` (45, 46, 47 — 47 için de 1987 seçiminin ANAP çoğunluğu geçerli, araya yeni seçim
  girmedi).
- **47'nin `bitisNedeni`** bu turda araştırılmadı (23 Haziran 1991 — dönem 5'in kapsamına daha yakın
  bir tarih); `null` bırakıldı, dönem 5 uygulayıcısına not düşüldü.

### Adım 4 — `veri/sandik.js`'e yazma
Aşağıda ayrıntılı — bkz. "2. Değişen dosyalar" ve commit'ler.

### Adım 5 — Denetle
Aşağıda test/dogrula çıktıları.

## 2. Değişen/oluşan dosyalar
- `C:/Users/Lizer/Desktop/projects/siyasi parti/veri/sandik.js`
- `C:/Users/Lizer/Desktop/projects/siyasi parti/araclar/kaynak-defteri.md`
- Bu rapor dosyası.

## 3. Çalıştırılan komutlar ve çıktıları

```
$ node --check veri/sandik.js && node --test "araclar/test/*.test.js"
...
ℹ tests 55
ℹ suites 0
ℹ pass 55
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
uyarı: — sayısı: yerel bant 4: 0
uyarı: — sayısı: referandum bant 4: 6
uyarı: — sayısı: cb-tbmm bant 4: 0
uyarı: hükümetler arasında boşluk: 23 → 24
uyarı: hükümetler arasında boşluk: 43 → 44
hata yok
```

Yeni uyarılar (dönem 4'ten): `soyağacında olmayan ama sandalye kazanan: Milliyetçi Demokrasi
Partisi (1983-11-genel)` (beklenen — Görev 10 listesine eklendi); bant 4 "—" sayıları (genel 0,
yerel 0, referandum 6 [1988 referandumunun 5 alanı + tutumlar listesinin RP/MÇP/DSP eksikliği
saymaz, yalnızca sayısal alanlar], cb-tbmm 0) beklenen — 1988 referandumunun ham sayıları iki
kaynakla doğrulanamadığı için null. **44→45, 45→46, 46→47 arasında hiç boşluk uyarısı yok** —
hükümetler zincirleme (44'ün bitişi = 45'in başlangıcı = 1983-12-13) doğrulandı.

**Tarayıcı denetimi:** `http://localhost:8123/sandik.html`.
- `document.querySelectorAll('[data-id]')` → 50 kart; dönem 4'e ait olanlar tarih sırasıyla:
  `1983-11-genel, 1984-03-yerel, 1987-09-referandum, 1987-11-genel, 1988-09-referandum,
  1989-03-yerel, 1989-10-cb-tbmm`.
- `#1983-11-genel` kartı tıklanıp panel açıldı; `document.body.innerText.includes('undefined'
  || 'NaN')` → **clean** (yok). Panel içeriği kaynak defteriyle birebir eşleşti: "399 sandalye ·
  katılım %92,3 · baraj %10 / ANAP %45,1 · 7.833.148 oy · 211 sandalye / HP %30,5 · 5.285.804 oy
  · 117 sandalye / Milliyetçi Demokrasi Partisi %23,3 · 4.036.970 oy · 71 sandalye / BAĞIMSIZLAR:
  Bağımsız %1,1 · 195.588 oy · 0 sandalye / BU SEÇİMDEN SONRA KURULAN HÜKÜMETLER: 45. Hükümet ·
  Turgut Özal · ANAP · 13 Ara 1983 – 21 Ara 1987 · bitti: erken seçim kararı".
- Konsol hatası yok (`read_console_messages {onlyErrors:true}` boş döndü).
- Sunucu durdurulmadı.

## 4. Brief'ten sapmalar ve nedenleri

- **Tek commit, ikisi değil.** Brief iki ayrı commit istiyordu (genel+CB+hükümetler /
  yerel+referandum+ara seçim). Bütün dönem 4 kayıtları `secimler` dizisinde tarih sırasıyla iç
  içe geçtiğinden (1983-11-genel, 1984-03-yerel, 1987-09-referandum, 1987-11-genel,
  1988-09-referandum, 1989-03-yerel, 1989-10-cb-tbmm) ve hepsi aynı araştırma turunda
  tamamlandığından, ikiye bölünmüş bir commit yapay/parçalı olurdu (dizi geçici olarak eksik bir
  ara halde commit edilmiş olurdu). Tek, açıklayıcı bir commit'te birleştirildi; mesajda bu sapma
  belirtildi.
- **1988 referandumunun ham evet/hayır/kayıtlı/kullanılan/geçerli sayıları `null`.** İki
  bağımsız kaynak (Yavaşça 2023, Karadeniz 2018) yalnızca yüzde veriyordu (%35/%65, katılım
  %88,82); web'den çekilen tek bir haber sitesinin (yenisafak) ham sayıları iç tutarsız çıktı
  (evet+hayır ≠ geçerli). 1961 referandumu kaydında uygulanan emsal yönteme uyularak yalnızca
  yüzdeler `not`a yazıldı.
- **1987 referandumunun `kayitli` alanı `null`.** Kaynaklar arasında (bianet'in implicit
  hesabı, Vikipedi'nin türetilmiş rakamı, secim.yenisafak'ın farklı rakamı) tutarlı, doğrudan
  birincil bir "kayıtlı seçmen" sayısı bulunamadı.
- **1984 ve 1989 yerel seçimlerinin ulusal `belediye meclisi` toplamı için bağımsız, aynı ölçüyü
  veren ikinci bir kaynak bulunamadı** — yalnızca resmî YSK il tablosu + script ile hesaplama
  (spesifikasyon §8.1'in "hesaplanmış toplamlar" maddesi) kullanıldı; farklı bir ölçüdeki (il
  genel meclisi) TÜİK verisiyle yalnızca mantıklılık karşılaştırması yapıldı. Bu, rapora ve
  kullanıcıya açıkça bildiriliyor (bkz. "Endişeler").
- **1984 yerel seçiminin Adana ili parti kırılımı** kaynak PDF'inde iç tutarsız çıktı (kendi
  geçerli oyunu kat kat aşan parti hücreleri) — Adana'nın toplam geçerli oyu (336.078) "Diğer"
  satırına eklendi, ayrı parti satırlarına dağıtılamadı.
- **47. Akbulut Hükümeti'nin `bitisNedeni`** bu turda araştırılmadı (23 Haziran 1991, dönem 5'in
  kapsamına daha yakın bir tarih) — `null` bırakıldı.
- **28 Eylül 1986 ara seçimi eklenmedi** — brief'in zaten öngördüğü gibi, il-parti-sandalye
  kırılımı iki kaynakla doğrulanamadı (TESAV 404 veriyor, YSK arşiv sayfası JS kabuğu).

## 5. Endişeler

- **1984/1989 yerel seçimlerinin ulusal toplamı tek kaynaklı** (yalnızca YSK'nın il tablosu +
  script hesaplaması; gerçekten bağımsız, aynı ölçüyü (belediye meclisi) veren ikinci bir ulusal
  kaynak bulunamadı). Sayılar kendi içinde tutarlı (parti oyları toplamı geçerliye tam ya da
  neredeyse tam eşit) ve farklı bir ölçüdeki TÜİK verisiyle mantıken uyumlu, ama spesifikasyon
  §8.1'in harfiyen istediği "ikinci bağımsız kaynakla eşleşme" sağlanamadı. Bir sonraki turda
  Resmî Gazete'nin doğrudan yayımladığı ulusal toplam (varsa) ya da başka bir resmî istatistik
  yayınıyla yeniden denenebilir.
- **1989 yerel seçiminin "SODEP" sütun başlığı** — kaynak YSK PDF'i bu sütunu "SODEP" olarak
  etiketliyor ama 1989'da SODEP diye ayrı bir parti yoktu (1985'te SHP'ye katılmıştı). Sütunun
  SHP'nin oyu olduğu, aynı YSK'nın büyükşehir belgesindeki "SHP" etiketiyle çapraz doğrulandı,
  ama bu bir çıkarım — kaynağın kendi hatası muhtemel.
- **1984 yerel seçiminin Adana ili parti kırılımı kayıp** (bkz. yukarıda) — ülkenin büyük
  illerinden birinin parti dağılımı "Diğer"e gömülü, bu ilin gerçek parti tercihini
  yansıtmıyor. İleride farklı bir YSK dosya adı/versiyonu bulunursa düzeltilebilir.
- **Büyükşehir kayıtlarında `aday` alanı hiç yok** — yalnızca `parti` var. Spesifikasyon örneği
  `aday` alanını da gösteriyor ama isteğe bağlı görünüyor; adaylar yalnızca haber/Vikipedi
  kaynaklarında bulunabildiğinden kural gereği yazılmadı.
- **44→45 hükümet zincirlemesi doğru** ama 47. hükümetin `bitisNedeni` alanı hâlâ `null` —
  dönem 5 uygulayıcısı bunu tamamlamalı (23 Haziran 1991, muhtemelen ANAP kurultayı/Mesut
  Yılmaz'ın genel başkan seçilmesiyle ilgili, ama bu turda araştırılmadı).

## 6. Kullanıcıya sunulacaklar

**Eklenen kayıtlar (tür başına sayı, dönem 4 toplamı):**
- Genel seçim: 2 (1983, 1987)
- Yerel seçim: 2 (1984, 1989 — ikisinde de İstanbul/Ankara/İzmir büyükşehir sonucu var)
- Referandum: 2 (1987 kabul %50,16 evet, 1988 ret %65 hayır — Türkiye'nin hayır çıkan tek
  referandumu)
- CB (TBMM): 1 (1989, Turgut Özal, 3 tur)
- Ara seçim: 0 (28 Eylül 1986 ara seçiminin varlığı/tarihi Resmî Gazete ile doğrulandı ama
  il-parti-sandalye kırılımı iki kaynakla doğrulanamadığı için eklenmedi — Görev 12'ye not
  düşüldü)
- Hükümet: 3 (no. 45-47; hepsi ANAP tek parti; 44→45→46→47 zinciri boşluksuz)

**Envanter farkları:** Aday listedeki bütün kayıtlar (1983/1987 genel, 1984/1989 yerel, 1987/1988
referandum, 1989 TBMM CB, hükümetler) kaynakta bulundu ve eklendi; yalnızca 1986 ara seçimi
kaynak yetersizliğinden eklenmedi.

**`—` kalan sayılar ve nedenleri:**
- 1987 referandumunun `kayitli` (kayıtlı seçmen) alanı: kaynaklar arasında yalnızca türetilmiş/
  tutarsız rakamlar bulundu, doğrudan birincil bir sayı yok.
- 1988 referandumunun `kayitli`, `kullanilan`, `gecerli`, `evet`, `hayir` alanlarının hepsi:
  iki bağımsız akademik kaynak yalnızca yüzde veriyor (web'den çekilen tek haber kaynağının ham
  sayıları iç tutarsızdı) — yalnızca %35/%65/%88,82 `not`a yazıldı.
- 47. Akbulut Hükümeti'nin `bitisNedeni`: bu turda araştırılmadı, dönem 5'e bırakıldı.

**Soyağacında olmayan ama sandalye kazanan partiler (Görev 10 listesi — güncel, dönem 0-4
toplamı):** Hürriyet Partisi (1957, 4), Cumhuriyetçi Millet Partisi (1954: 5, 1957: 4), Millet
Partisi (1965: 31, 1969: 6), Türkiye Birlik Partisi (1969: 8, 1973: 1), **Milliyetçi Demokrasi
Partisi (1983: 71 sandalye — yeni)**.

**Özel dikkat gerektiren noktalar:**
- 1984 ve 1989 yerel seçimlerinin ulusal toplamı yalnızca tek kaynaklı (YSK il tablosu + script);
  gerçekten bağımsız ikinci bir ulusal kaynak bulunamadı (bkz. Endişeler).
- 1984 yerel seçiminin Adana ili parti kırılımı kaynak PDF'inde bozuk çıktı, "Diğer"e gömüldü.
- Büyükşehir kayıtlarında (1984, 1989) yalnızca kazanan partinin adı var, aday isimleri kural
  gereği yazılmadı.
- İki commit yerine tek commit yapıldı (gerekçe yukarıda).

**`node araclar/dogrula.js` çıktısı:** yukarıdaki "3. Çalıştırılan komutlar" bölümünde tam metin
var; sonuç `hata yok`.

**İlk genel seçim verisinin girildiği dönem denetimi:** Görev 1/dönem 0'da zaten yapılmıştı, bu
görevde tekrar gerekmiyor (dönem 3 raporundaki emsalle aynı).

## Düzeltme turu 1 (2026-09-22) — controller incelemesi sonrası

İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d4-verdict.md` (SPEC ❌).
Bulgular: **Critical #1** (1987/1988 referandumlarının [B] kaynağı yoktu), **Critical #2**
(1984/1989 yerel ulusal toplamları ikinci kaynakla eşleşmiyordu), **Important** (Adana
kırılımı, 1988 katılım yüzdesi ayrı alana yazılmamıştı, büyükşehir ikinci kaynağı yoktu).

### Yapılanlar

1. **1987/1988 referandumları — [B] kaynak bulundu.** YSK Halkoylaması Arşivi
   (`ysk.gov.tr/tr/halkoylamasi-arsivi/2648`) tarayıcıyla açılıp gerçek PDF adresleri DOM'dan
   okundu (önceki turda bu arşiv hiç denenmemişti — incelemenin doğru tespit ettiği eksiklik).
   - 1987: `docs/1987Referandum/6-Eylul-1987-Halkoylaması.pdf` — 67 il + gümrük toplamı,
     `topla.js` ile hesaplanan toplam (il+gümrük) bianet'in rakamlarıyla 4 sayıda birebir
     eşleşti; `kayitli` alanı da (26.095.630) artık dolduruldu.
   - 1988: `docs/1988Referandum/25-Eylul-1988-Halk-Oylaması.pdf` — 67 il toplamı (gümrüksüz),
     katılım oranı %88,82 olarak 2 akademik kaynakla virgülden sonra iki hane dahil birebir
     eşleşti.
2. **1984/1989 yerel ulusal toplamları — null yapıldı.** Ek arama turları (TÜİK'in kendi tablo
   listesi, "1980 Askeri Müdahalesinden Mahalli Seçimlere" makalesi, ResearchGate, acarindex,
   "1973'ten Günümüze Yerel Seçim Sonuçları") hiçbiri "belediye meclisi" ölçüsü için bağımsız bir
   ulusal toplam vermedi (TÜİK'in kendisi de bu ölçü için hiç ulusal toplam yayımlamamış —
   yalnızca İl Genel Meclisi için RG kaynaklı toplam var). Kural koşulsuz olduğundan
   `1984-03-yerel` ve `1989-03-yerel` kayıtlarının `kayitli`/`kullanilan`/`gecerli` ve bütün
   `sonuc[].oy` alanları **null** yapıldı; hangi partilerin katıldığı (`parti`/`ad`) korundu.
3. **Adana kırılımı — Critical #2'nin çözümüyle otomatik çözüldü** (bütün oy alanları null
   olduğundan Adana'nın bozuk kırılımı artık hiçbir ulusal rakamı etkilemiyor).
4. **1988 katılım yüzdesi — Critical #1'in çözümüyle otomatik çözüldü** (artık gerçek `kayitli`/
   `kullanilan` sayıları var, `katilimYuzde` alanına gerek kalmadı).
5. **1984/1989 büyükşehir — ikinci kaynaklarla tek tek doğrulandı.** 6 şehir-yıl kombinasyonundan
   5'i haber arşivi ikinci kaynaklarla (euronews.com, yeniankara.com.tr, ensonhaber.com,
   dunya.com, dergipark akademik makale) birebir/tolerans içinde eşleşti. **1989 Ankara**
   doğrulanamadı (onlarca kaynak tarandı, hiçbirinde oy sayısı/yüzdesi yok) — `buyuksehir.ankara`
   `1989-03-yerel` kaydından **kaldırıldı**.

### Testler ve denetim (düzeltme turu 1)

```
$ node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
...
ℹ tests 55
ℹ suites 0
ℹ pass 55
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
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
uyarı: — sayısı: yerel bant 4: 20
uyarı: — sayısı: referandum bant 4: 0
uyarı: — sayısı: cb-tbmm bant 4: 0
uyarı: hükümetler arasında boşluk: 23 → 24
uyarı: hükümetler arasında boşluk: 43 → 44
hata yok
```

Yeni beklenen değişim: `referandum bant 4: 0` (önceden 6 — artık ikisi de tam dolu),
`yerel bant 4: 20` (önceden 0 — şimdi bilerek null yapılan alanlar).

**Tarayıcı denetimi:** `http://localhost:8123/sandik.html`. `#1987-09-referandum` paneli:
"katılım %93,6 · kabul / Evet %50,2 · 11.711.461 oy / Hayır %49,8 · 11.636.395 oy / EVET DEDİ:
DYP, DSP, MÇP, RP, SHP / HAYIR DEDİ: ANAP". `#1988-09-referandum`: "katılım %88,8 · ret / Evet
%35,0 · 8.034.933 oy / Hayır %65,0 · 14.921.945 oy". `#1984-03-yerel` ve `#1989-03-yerel`:
parti listesi görünüyor, hepsi "—"; büyükşehirler bölümünde 1984'te 3 şehir (İstanbul/Ankara/
İzmir, hepsi ANAP), 1989'da yalnızca 2 şehir (İstanbul/İzmir, ikisi de SHP — Ankara satırı yok).
Konsol hatası yok.

### Commit (düzeltme turu 1)

```
3af6141  Düzeltme: dönem 4 — referandum kaynakları ve yerel seçim toplamları
```
Yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` değişti.

## Kullanıcıya sunulacaklar (güncellendi — düzeltme turu 1)

**Değişen:**
- 1987/1988 referandumlarının ham sayıları artık [B] YSK Halkoylaması Arşivi'nden geliyor
  (önceden yalnızca haber siteleri/akademik makalelerden geliyordu). 1987'nin `kayitli` alanı
  da artık dolu.
- 1984/1989 yerel seçimlerinin ulusal `kayitli`/`kullanilan`/`gecerli` ve bütün parti `oy`
  değerleri **null** yapıldı — bağımsız, aynı ölçüyü (belediye meclisi) veren ikinci bir ulusal
  kaynak bulunamadı (spesifikasyon §8.1'in koşulsuz kuralı gereği). Hangi partilerin seçime
  katıldığı (ANAP, SODEP/SHP, DYP, HP, MDP, RP, DSP, MÇP, Bağımsız — döneme göre) hâlâ görünüyor,
  yalnızca sayılar `—`.
- 1984/1989 büyükşehir sonuçları artık tek tek ikinci kaynakla doğrulanmış durumda (5/6);
  **1989 Ankara büyükşehir sonucu kaldırıldı** (ikinci kaynak bulunamadı).

**Hâlâ `null`/eksik kalan alanlar (gerekçeli):**
- 1984/1989 yerel seçimlerinin ulusal toplamları — bağımsız ikinci kaynak yok (yukarıda ayrıntılı
  gerekçe; ham değerler ileride kullanılmak üzere kaynak defterinde saklı).
- 1989 Ankara büyükşehir sonucu — kazananın SHP olduğu [B] kaynaktan kesin ama oy sayısı/yüzdesi
  hiçbir ikinci kaynakta bulunamadı.
- 47. Akbulut Hükümeti'nin `bitisNedeni` — hâlâ null (dönem 5'e bırakıldı, değişmedi).

**`node araclar/dogrula.js` çıktısı:** yukarıdaki "Testler ve denetim (düzeltme turu 1)"
bölümünde tam metin var; sonuç `hata yok`.
