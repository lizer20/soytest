# Devir notu — "Sandık" bölümü (Aşama 2)

Bu dosya, projenin bir sohbetten başka bir sohbete aktarılması için yazıldı. Yeni oturum
**yalnızca bu dosyayı ve işaret ettiği dosyaları** okuyarak işe kaldığı yerden devam edebilir.

- Yazıldığı tarih: **25 Eylül 2026**
- Depo: `C:/Users/Lizer/Desktop/projects/siyasi parti`
- Dal: **`sandik-asama1`** (ana dal `main`/`master`'a henüz birleştirilmedi)
- HEAD: **`57757f8`** — "Düzeltme: dönem 6 — aday kaynağı ve büyükşehir kaynak notu"
- Çalışma ağacı: **temiz değil** → `veri/sandik.js`'te commit'lenmemiş 38 satır (bkz. §9, kritik)
- Testler: `node --test "araclar/test/*.test.js"` → **57/57 geçiyor**
- Veri denetimi: `node araclar/dogrula.js` → **hata yok** (yalnızca beklenen uyarılar)

> **Güncelleme (25 Eylül 2026, bulut oturumu):** Proje GitHub'a taşındı; çalışma dalı artık
> `claude/elegant-tesla-uaepdv` (`main` ile birleştirilmiş durumdan devam). **§9.1 kapandı:** dönem 7
> kaynaklarıyla yeniden üretildi (ayrıntı: `araclar/kaynak-defteri.md` → "Görev 9 — Dönem 7",
> `.superpowers/sdd/2026-09-11-sandik/task-9-d7-report.md`). **Görev 11 yapıldı** (`kaynakca.html#sandik`).
> Açık kalanlar: §9.2, §9.3 (+ HÜDA PAR, MDP), §9.4, §9.5 ve Görev 12.
>
> **Güncelleme (26 Eylül 2026):** §9.2 ve §9.3 (Görev 10) kapandı. Sandık sayfası yeniden
> tasarlandı: genel seçim kartlarında ve panelde **temsilî meclis yarım dairesi** (her nokta bir
> sandalye; partiler bitişik dilimler; salt çoğunluk çizgisi; bilinmeyen sandalye boş halka),
> panelde parti/oy/sandalye tablosu, daha derli toplu kartlar. §9.5'in çoğu yapıldı (aşağıda ✅).
> §9.4'ten: 1966, 1968, 1975, 1979, 1986 ve 2003 Siirt ara seçimleri eklendi (RG YSK bildirisi +
> TESAV'ın Internet Archive kopyası); 1951'in sandalye sayısı 20 olarak kesinleşti; 2007
> referandumuna CHP "hayır" eklendi; 64. Hükümet bitiş nedeni "istifa". Testler 64/64.
>
> **Güncelleme (27 Eylül 2026) — Harita:** yeni sayfa `harita.html` (menüde "Harita") ve Sandık penceresinde küçük
> harita. Dosyalar: `harita-mantik.js` (saf mantık, `araclar/test/harita.test.js`), `harita-sayfa.js`, `harita.css`,
> `veri/iller.js` (81 il sınırı, Natural Earth, kamu malı), `veri/il-sonuclari.js` (20 genel seçim 1950–2023: il il
> parti oyları, TÜİK/YSK; 8 yerel seçim 1989–2024: il merkezi / büyükşehir belediye başkanlığı kazananı, TÜİK veri
> tabanı). Kaynak ve denetimler: `araclar/kaynak-defteri.md` → "Harita". Açık: 1963–1984 yerel il sonuçları (DİE
> kitaplarının OCR metni bozuk; sayfa görüntüsünden yeniden okunmalı). Aynı gün: 1961/1969 geçerli oy, 1950 sandalye
> çelişkisi, 1963/1968 yerel ülke geneli, 1963–1977 büyükşehirler, 1984–2024 yerel ülke geneli (kullanıcı kararı:
> resmî YSK ilanı yeterli), 1961 referandumu ham sayıları. Testler 77/77.

> **Güncelleme (12 Ekim 2026) — görünüm ve okunabilirlik turu:** kullanıcı isteği ve yapılanların
> tamamı `docs/GOREV-GORUNUM.md`'de. Sandık yeni düzende (yıl çizelgesi, hizalı satırlar, boş veri
> gizli); yazı tipleri inceltildi; harita verisi sonradan yükleniyor. Kullanıcı onayladı, `main`'e
> alındı ve yayınlandı. Testler 93/93.
>
> **Güncelleme (12 Ekim 2026, akşam) — sonraki adımlar turu:** ayrıntı `docs/GOREV-ADIMLAR.md`. Yayında:
> README; tek komutla site denetimi (`araclar/denetim/site.js`) ve GitHub Actions (`.github/workflows/denetim.yml`);
> Sandık'ın telefonda hızlı açılması (`content-visibility` + `kaydir()`); hükümet penceresi (`#hukumet-57`), Sandık'ta
> arama, parti penceresinde "yer aldığı hükümetler"; **veri düzeltmesi:** 1931–1943 tek parti seçimlerinde bağımsız
> (müstakil) milletvekilleri ve yeni `sonradan` alanı. İttifak vekil sayıları ve 2007 MHP/AK Parti tutumu kaynaksız
> kaldı. Eski adres yönlendirmesi `lizer20.github.io` deposuna `turkiye_siyasi_partiler_soyagaci/` klasörü olarak eklendi (kaynak: `araclar/eski-adres/`).
> Depo artık `lizer20/soyagaci` (yerel `origin` bu adla). Testler 99/99.

---

## 1. Projenin ne olduğu

Tek kişilik, derlemesiz (build step yok) statik bir site: **Türkiye siyasi partileri soyağacı**.
Çift tıklamayla `file://` üzerinden de açılabilmesi şart: `fetch` yok, ES modülü yok, harici
istek yok. Betikler klasik `<script src>` ile yüklenir ve şu global'leri kurar:
`window.PARTILER`, `window.SANDIK`, `window.Ortak`, `window.SandikMantik`.
`ortak.js` ve `sandik-mantik.js` UMD sarmalayıcı kullanır, böylece Node testlerinde de yüklenir.

Sayfalar:
- `index.html` — soyağacı (aşama 1'de vardı, bu aşamada menü + künyede seçim listesi eklendi)
- `sandik.html` — **bu aşamada eklenen yeni bölüm**: seçimler, referandumlar, hükümetler
- `kaynakca.html` — kaynakça & metodoloji (Sandık bölümü henüz eklenmedi → Görev 11)

Menü üç sayfada da: **"Ana sayfa · Sandık · Kaynakça & metodoloji"**.

### Kullanıcının bu aşama için isteği (birebir)
> "bu siteye ikinci bir bölüm eklemek istiyorum. türkiye genel ve yerel seçimleri ve
> referandumlar . kaynakça &metodolojinin soluna bir menü daha oradan ulaşılsın. tek tek
> seçimler kazanan parti ilk üç parti meclise girenler giremeyenler sonraki seçim ile arasında
> kurulan hükümetler. bana bol bol soru sor birlikte yapalım"

### En önemli ilke
**"Bilgi uydurulmaz."** Hiçbir sayı, tarih, isim ya da nitel bilgi hafızadan yazılmaz.
Doğrulanamayan değer `null` olur ve ekranda **"—"** görünür. Bu ilke bütün kararların
üstündedir; ihlali görevi reddetmek için yeterlidir.

---

## 2. Kaynak kuralları (kullanıcı kararlarıyla sabitlendi)

1. Her değer için **bir resmî [B] kaynak** (YSK, TÜİK, TBMM, Resmî Gazete, AYM, tccb.gov.tr)
   **ve ondan bağımsız bir ikinci kaynak** gerekir.
2. **Vikipedi hiçbir zaman kaynak sayılmaz.**
3. Ulusal gazete/ajans arşivleri **yalnızca ikinci kaynak** olabilir (kullanıcı kararı).
4. Akademik makale/tez/biyografi **[B] değildir**, ikinci kaynak olabilir.
5. **Aynı kurumun kendi verisini tekrarlayan yayın bağımsız ikinci kaynak sayılmaz.**
   (TÜİK, mahalli idareler verisini YSK'dan "aynen" aldığını kendi yayın 3584'te yazıyor —
   dönem 6'da bu sorun çıktı ve deftere işlendi.)
6. **Eşleşme toleransı:** resmî kaynağın sayısı yazılır; ikinci kaynakla fark **≤ %0,5** ise
   eşleşmiş sayılır ve deftere `Uyuşmazlık: X vs Y (%Z)` notu düşülür; **> %0,5** ise sayı `null`.
7. **Sandalye toplamı** meclis sayısına eşit olmalı (dogrula.js denetler).
8. İl tablolarından hesaplanan **ulusal toplam** `araclar/topla.js` ile hesaplanır ve ikinci bir
   kaynakla eşleşmelidir; eşleşmiyorsa `null`. **Bir ilin kırılımı okunamıyorsa "Diğer"e gömülmez** —
   etkilenen değerler `null` olur (dönem 4'te 1984 Adana böyle çözüldü).
9. Nitel alanlar da (hükümetin `partiler`, `tip`, `bitisNedeni`) iki kaynak ister — dönem 3 ve 5
   bu yüzden düzeltme turuna girdi.
10. Hükümet **başlangıç tarihi ölçütü**: TBMM "Hükümetler, Programları ve Genel Kurul
    Görüşmeleri" cildindeki kuruluş tarihi. Dizi Cilt 10'da (57. Hükümet) bitiyor; 58'den
    itibaren Resmî Gazete'deki Bakanlar Kurulu atama tezkeresi kullanıldı.
11. Hükümet **`tip` ölçütü**: kabinede birden fazla parti varsa `koalisyon`; tek parti varsa
    meclis çoğunluğuna göre `tek-parti` / `azinlik` (kullanıcı kararı, 22 Eylül 2026).
12. Doğrulanamayan **tek alan** kaydı iptal etmez; yalnızca o alan `null` olur.
13. Soyağacında olmayan parti `ad:` metniyle yazılır; **`parti:` id'si uydurulmaz**.
    Bu partiler biriktirilir ve veri bitince **tek seferde kullanıcıya önerilir** (Görev 10).

---

## 3. Veri modeli (özet — tamamı `docs/superpowers/specs/2026-09-11-sandik-design.md` §5)

`veri/sandik.js` → `window.SANDIK = { secimler: [...], hukumetler: [...] }`

**Seçim türleri:** `genel · yerel · referandum · cb-halk · cb-tbmm · ara`
**Kimlik:** `YYYY-AA-tür` (ör. `2015-11-genel`); `id`'nin yıl-ay'ı `tarih` ile uyuşmalı.
**Tarih:** `YYYY-AA-GG`; günü bilinmiyorsa **ay hassasiyeti** `YYYY-AA` (kullanıcı kararı).
Hükümet tarihleri **her zaman gün dahil** olmalı.

Ortak alanlar: `kayitli`, `kullanilan`, `gecerli`; satırlarda `oy`, `sandalye`.
Yalnızca yüzde varsa yedek alanlar: satırda `oyYuzde`, kayıtta `katilimYuzde`
(ham sayılarla birlikte kullanılamaz).

- `genel`: `meclis`, `baraj`, `tekParti`, `sonuc[]`, `ittifak[]` (2018+ resmî ittifaklar için)
- `yerel`: `olcu:"belediye-meclisi"`, `sonuc[]`, `buyuksehir:{istanbul|ankara|izmir:{parti}}`
  (**büyükşehir alanı yalnızca kazanan partiyi tutar, oy sayısı tutmaz**)
- `referandum`: `konu` (tek cümle), `evet`, `hayir`, **`karar: "kabul"|"ret"`** (alan adı `sonuc`
  DEĞİL — dizi türüyle çakıştığı için `karar` olarak adlandırıldı), `tutumlar[]`
- `cb-tbmm`: `secilen`, `turSayisi`
- `cb-halk`: `turlar[]`, her turda `adaylar[]`; adayda **`ad:` kişinin adı** + `parti:` (aday
  gösteren partinin id'si) **ya da** `destek:` (ittifak/çatı, kaynağın kendi ifadesiyle)
- `ara`: `bolge`, `sandalyeSayisi`, `sonuc[]`
- Hükümet: `no`, `basbakan` (2018 sonrası yapı için `baskan` + `no:null`), `partiler[]`,
  `baslangic`, `bitis`, `tip`, `bitisNedeni`, `not`

**Hükümet tipleri:** `tek-parti · koalisyon · azinlik · partiluestu · mbk · mgk · cumhurbaskanligi`
(`mgk` bu oturumda eklendi: 12 Eylül dönemi Millî Güvenlik Konseyi'ydi, arayüz yanlışlıkla
"Millî Birlik Komitesi" yazıyordu.)

**Bitiş nedenleri:** `secim · erken-secim · guvensizlik · istifa · darbe · muhtira ·
cumhurbaskani-secimi · olum · sistem-degisikligi · diger`

**Dönem bantları ve askerî yönetim "kapları"** `veri/partiler.js` → `DONEMLER` içinde.
Kap aralıkları: **1960-05-27 … 1961-10-14** ve **1980-09-12 … 1983-11-05**
(kullanıcı kararı: kap, geçiş genel seçiminden bir gün önce biter).
12 Mart 1971 muhtırasının kabı **yok**, yalnızca kesinti işareti var.

---

## 4. Dosya haritası

| Dosya | İş |
|---|---|
| `index.html` | Soyağacı sayfası; künyede "Girdiği genel/yerel seçimler" listesi; `#parti` hash |
| `sandik.html`, `sandik-sayfa.js`, `sandik.css` | Sandık sayfası (bantlar, kartlar, şeritler, panel) |
| `sandik-mantik.js` | Saf mantık + HTML üreticileri (UMD). `olustur(P, O)` döndürür |
| `ortak.js` | `tarihYaz`, `yuzde`, `yuzdeYaz`, `sayiYaz`, `hashOku`, `bantKur`, `panelKur` (UMD) |
| `ortak.css` | İki sayfanın ortak bileşen CSS'i |
| `veri/partiler.js` | `window.PARTILER` (soyağacı: AILE, BILGI, DONEMLER, N, E, ROZET) |
| `veri/sandik.js` | `window.SANDIK` (seçimler + hükümetler) — **veri girişinin hedefi** |
| `araclar/dogrula.js` | Veri denetleyici (`node araclar/dogrula.js`) |
| `araclar/topla.js` | İl tablosundan ulusal toplam (`sayiOku`, `topla`, CLI: tsv) |
| `araclar/yukle.js` | Node'da `window.*` veri dosyalarını yükleyen vm yükleyici |
| `araclar/test/*.test.js` | 57 test (`partiler`, `ortak`, `sandik-mantik`, `dogrula`, `topla`, `sandik-html`) |
| `araclar/test/fikstur.js` | **SAHTE** veri — siteye asla sızmamalı |
| `araclar/denetim/` | Tarayıcı denetim betikleri + `fikstur.html` |
| `araclar/kaynak-defteri.md` | **Kaynak defteri (3573 satır)** — her sayının kaynağı, uyuşmazlıklar, gerekçeler |
| `docs/superpowers/specs/2026-09-11-sandik-design.md` | Spesifikasyon (§3 kararlar, §5 veri modeli, §8.1 kaynak kuralları) |
| `docs/superpowers/plans/2026-09-11-sandik.md` | 12 görevlik uygulama planı (kod blokları dahil) |

### Komutlar
```bash
node --test "araclar/test/*.test.js"
```
```bash
node araclar/dogrula.js
```
Tırnaklar Node 24'te **zorunlu** (`node --test araclar/test` çalışmıyor).

Tarayıcı: `.claude/launch.json` içindeki **`soyagaci`** yapılandırması
(`npx -y http-server . -p 8123 -c-1`), adres `http://localhost:8123/sandik.html`.
Tarayıcı paneli arka planda çalıştığı için **CSS geçişleri ilerlemez** (ölçmek için
`*{transition:none!important}`) ve **odak olayları tetiklenmez** (`focusin` elle gönderilir).
`file://` sayfalarında panel betik çalıştırmıyor → betik sırası `grep` ile doğrulanıyor;
**gerçek `file://` çift tıklama testi Görev 12'ye bırakıldı.**

---

## 5. Çalışma yöntemi (SDD + alt ajanlar)

Kullanıcı kararı: **"Her görev için ayrı alt ajan."** Ben (ana oturum) *controller* rolündeyim.

**Çalışma alanı:** `.superpowers/sdd/2026-09-11-sandik/` — **`.gitignore`'da**, yani git'e
girmiyor, yalnızca diskte. İçindekiler:

- `progress.md` — **153 satırlık ana defter**: her görev, her inceleme, her kullanıcı kararı
- `implementer-contract.md` — uygulayıcı sözleşmesi
- `reviewer-contract.md` — inceleyici sözleşmesi (iki hüküm: SPEC ✅/❌, QUALITY Approved/Issues)
- `brief.sh N [harita]` — plandan görev brief'i üretir → `task-N-brief.md`
- `review.sh ETİKET BASE HEAD` — inceleme paketi üretir (commit listesi + `diff --stat` + `diff -U10`)
- `task-N-brief.md`, `task-N-report.md`, `task-9-dX-report.md`
- `review-*.md` (paket) ve `review-*-verdict.md` (hüküm)
- `donem7-yarim-is.patch` — **bu devirde kaydedilen yarım dönem 7 işi** (bkz. §9)

**Döngü:** uygulayıcı alt ajan → `review.sh` ile paket → inceleyici alt ajan → hüküm →
gerekirse **düzeltme turu aynı uygulayıcıya** (`SendMessage`) → **kapsamlı yeniden inceleme
yalnızca düzeltme aralığına** → controller ⚠️ maddelerini kendi doğrular (tarayıcı, PDF) →
plan/spec güncellemeleri **düzeltme turları bittikten sonra** commit'lenir (inceleme aralığı
temiz kalsın diye).

**Uygulayıcının dönüş biçimi:** `STATUS / COMMITS / TESTS / CONCERNS`
**İnceleyicinin dönüş biçimi:** `SPEC / QUALITY / FINDINGS / CANNOT-VERIFY`

---

## 6. Görev listesi ve durumu

| Görev | Konu | Durum |
|---|---|---|
| 1 | Hafızadan iddiaların doğrulanması + kaynak defteri | ✅ tamam (düzeltme turu 1) |
| 2 | Soyağacı verisini `veri/partiler.js`'e taşımak | ✅ tamam |
| 3 | `ortak.js` — panel, dönem bandı, biçimleme | ✅ tamam |
| 4 | `sandik-mantik.js` saf mantık + boş veri dosyası | ✅ tamam (düzeltme turu 1) |
| 5 | Veri denetimi + il toplayıcı | ✅ tamam |
| 6 | Kart, hükümet şeridi, panel HTML üreticileri | ✅ tamam |
| 7 | Sandık sayfası | ✅ tamam |
| 8 | Soyağacı entegrasyonu (künye, `#parti`, menü) | ✅ tamam |
| 10 Adım 1–4 | Eksik parti tespiti (dogrula uyarısı) | ✅ tamam |
| **9** | **Veri toplama — 8 dönem** | 6 dönem tamam, **dönem 7 yarım** |
| 10 Adım 5–8 | Eksik partilerin onaylı eklenmesi | ⏳ veri bitince, kullanıcı onaylı |
| 11 | `kaynakca.html` → "Sandık: ölçüler ve kurallar" | ⏳ yapılmadı |
| 12 | Son kontrol, güncellik, kabul ölçütleri, gerçek `file://` testi | ⏳ yapılmadı |

### Dönem dönem durum

| Dönem | Aralık | Durum | Commit'ler |
|---|---|---|---|
| 0 | 1923–1945 | ✅ onaylı | `1727a29`, `550ff0c`, `4b75726` |
| 1 | 1946–1960 | ✅ onaylı (2 düzeltme turu) | `f035e03`, `878a609`, `dda3703`, `dc5e67a` |
| 2 | 1961–1971 | ✅ onaylı (1 düzeltme turu) | `48513c4`, `e70082e`, `7f1229d` |
| 3 | 1972–1980 | ✅ onaylı (2 düzeltme turu) | `4ce8569`, `2a7de6b`, `06bc008`, `4818d5f` |
| 4 | 1983–1990 | ✅ tamam (2 düzeltme turu) | `1fd18a1`, `3af6141`, `6d8d75d` |
| 5 | 1991–2000 | ✅ tamam, inceleme **bulgusuz** | `a69e3bf`, `701533f`, `1404cf8` |
| 6 | 2001–2015 | ⚠️ 1 açık kalem (§9.2) | `8018541`, `6ed60d4`, `df8e6ae`, `57757f8` |
| **7** | **2016–2026** | ❌ **yarım, commit'lenmemiş** | — |

**Kullanıcı 22 Eylül 2026'da dönem durakları kaldırıldı:** "bütün dönemleri hiç ara vermeden
tamamla artık". O tarihten sonra dönem onayı sorulmadı; küçük kararlar controller'da.

---

## 7. Commit geçmişi (bu dalda, yeniden eskiye)

```
57757f8 Düzeltme: dönem 6 — aday kaynağı ve büyükşehir kaynak notu
df8e6ae Düzeltme: dönem 6 — aday partileri, yerel toplamlar, referandum tutumları
00573ad Doğrulayıcı: cb-halk adaylarında ad kişi adıdır
6ed60d4 Sandık verisi: dönem 6 (2001–2015) — yerel seçimler, referandumlar, ara seçim
8018541 Sandık verisi: dönem 6 (2001–2015) — genel seçimler, CB seçimleri, hükümetler
1404cf8 Düzeltme: dönem 5 — hükümet kayıtlarına ikinci kaynak
701533f Sandık verisi: dönem 5 (1991–2000) — yerel ve ara seçimler
a69e3bf Sandık verisi: dönem 5 (1991–2000) — genel seçimler, CB (TBMM), hükümetler
cec5b26 Kart: sıralama bilinmiyorsa ilk üç gösterilmez
6d8d75d Düzeltme: dönem 4 — Ankara 1989 kazananı, IDP satırı, referandum kapsam notları
3af6141 Düzeltme: dönem 4 — referandum kaynakları ve yerel seçim toplamları
1fd18a1 Sandık verisi: dönem 4 (1983–1990) — genel seçimler, CB (TBMM), hükümetler
be2881a Spesifikasyon: hükümet türü ölçütü kabine bileşimi
5f049d6 Düzeltme: 42. hükümet koalisyon olarak sınıflandırıldı
e3ed5b5 Hükümet türü: 12 Eylül için mgk (Millî Güvenlik Konseyi)
4818d5f Düzeltme: dönem 3 hükümet bileşimleri ve bitiş nedenleri TBMM ciltleriyle
06bc008 Düzeltme: dönem 3 hükümet tarihleri TBMM ciltleriyle
2a7de6b Sandık verisi: dönem 3 (1972–1980) — yerel/ara seçimler, 12 Eylül kabı ve 1982 referandumu
4ce8569 Sandık verisi: dönem 3 (1972–1980) — genel seçimler, CB (TBMM), hükümetler
7f1229d Düzeltme: dönem 2 — 1961 CB seçimi ve yerel sonuç kaynakları
e70082e Sandık verisi: dönem 2 (1961–1971) — yerel seçimler
48513c4 Sandık verisi: dönem 2 (1961–1971) — genel seçimler, CB (TBMM), hükümetler
a1fdc80 Plan ve spesifikasyon: eşleşme toleransı ve eksik parti biriktirme kuralı
dc5e67a Düzeltme: 1950'de tek kaynaklı oy sayıları boşaltıldı
dda3703 Düzeltme: dönem 1 kaynak uyumu ve CMP ayrımı
878a609 Sandık verisi: dönem 1 (1946–1960) — yerel/ara seçimler ve 27 Mayıs 1960 kabı
f035e03 Sandık verisi: dönem 1 (1946–1960) — genel seçimler, CB (TBMM), hükümetler
7c66cec Plan ve spesifikasyon: ay hassasiyetli tarih desteği
4b75726 Dönem 0: eksik kayıtlar için arama turu
550ff0c Düzeltme: ay hassasiyetli tarih desteği ve dönem 0 kaynak eksikleri
```
(Daha eskiler: Görev 1–8 ve 10a commit'leri — `676621c`, `c846dc2`, `dc0764b`, `9525c43`,
`3222139`, `def57da`, `67cf81d`, `182bafb`, `6d4b445`, `07ea1a6`, `43794b8`, `11b92a0`, `1727a29`.)

Commit mesajlarının sonunda: `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`

---

## 8. Kullanıcının verdiği bütün kararlar (kronolojik özet)

**Tasarım aşaması (AskUserQuestion turları):**
- Kronolojik ilerleme; dört seçim türü de dahil (genel, yerel, referandum, cumhurbaşkanlığı)
- 1923'ten başla; her seçim ayrı kayıt; ara seçimlerin hepsi
- Veriyi webden çek ve çapraz kontrol et; 81 il haritası (sonradan kapsam dışı kaldı)
- İki aşama; orta düzey hükümet detayı; resmî liste + not; iki yönlü bağlantı
- Dönem bantları + yan panel; anlamlı olaylar ayrı gösterilir; TBMM cumhurbaşkanı seçimlerinin
  hepsi; soyağacına parti eklemek **onaylı**
- Kartlar arası hükümet şeridi; oy + sandalye çubukları üst üste; ülke geneli + 3 büyükşehir;
  kartta kaynak satırı yok
- Menü adı **"Sandık"**; tür filtresi + yıl kaydırıcısı; yerel ölçü **belediye meclisi**;
  yalnızca bilinmeyen sayı boş görünür
- Mimari A; referandumlarda parti tutumları dahil; 28 Şubat metni düzeltildi; künye + yerel
  seçimler; kaynak defteri depoda
- Spesifikasyon onaylandı; `git init` evet; yerel ara seçimler kapsam dışı; il toplamları
  betikle ve ikinci kaynakla eşleşmeli
- **Her görev için ayrı alt ajan**; 1963 öncesi yerel seçimler "bulunabildiği kadarıyla";
  askerî kap geçiş seçiminden bir gün önce biter

**Görev/dönem duraklarında:**
- Görev 1 onaylandı → Görev 2–8 aralıksız
- Ulusal gazete seçim veritabanları **yalnızca ikinci kaynak**
- Sandalyesi bilinmeyen partiler panelde **ayrı "Sandalye bilgisi yok" listesinde**
- Dönem 0: **ay hassasiyetli tarih** desteği; bir arama turu daha; hükümet başlangıç ölçütü
  **TBMM cildi**; dönem onaylandı
- Dönem 1: **eşleşme toleransı %0,5**; CMP ayrı parti; eksik partiler biriktirilir ve toplu
  önerilir; eksik kayıtlar Görev 12'ye
- Dönem 2: "güzel devam edebilirsin" (onay). Yanıtsız kalan iki soru için controller
  varsayılanları: ara seçimler Görev 12'ye, TİP metni Görev 10 önerisine
- Dönem 3: onaylandı; **hükümet tip ölçütü kabine bileşimi** → 42. hükümet `koalisyon`
- **22 Eylül 2026: "bütün dönemleri hiç ara vermeden tamamla artık"** → dönem durakları kaldırıldı
- **25 Eylül 2026: "yaptığın her şeyi şimdilik durdur ve proje taşıma notu oluştur…"** → bu dosya

**Harita sonrası iş listesi (29 Eylül 2026, kullanıcı kararı):**
- **Yapılacak (öncelik sırasıyla):** telefon ekranı kontrolü (öncelikli) → yerel seçimlerde partilerin
  kazandığı belediye sayıları → referandum haritaları (il il evet/hayır) → parti sayfasından haritaya bağlantı.
- **Kalıcı olarak kaldırıldı:** haritadaki "sonuç bilinmiyor" illerini gazete arşiviyle doldurmak — bir daha önerme.
- **Yapılmayacak:** halkın seçtiği cumhurbaşkanlığı seçimleri (2014/2018/2023) için harita.
- **Sonraya bırakıldı:** tek partinin il il oy oranı haritası, iki seçim arası değişim haritası,
  veriyi indirilebilir dosya olarak sunma.
- **Süresiz ertelendi:** bütün verinin baştan sona ikinci denetimi — diğer işler bitince yeniden konuşulacak.
- **Durum (29 Eylül 2026):** telefon kontrolü, belediye sayıları, parti→harita bağlantısı bitti; referandum
  haritaları 1961, 1982, 1987, 1988, 2007, 2010 için bitti. **2017 referandumu 30 Eylül'de eklendi** (YSK
  sonuc.ysk.gov.tr servisinden; bkz. kaynak defteri). Eski not: YSK il tablosuna
  (ysk.gov.tr sayfaları, sonuc.ysk.gov.tr, acikveri.ysk.gov.tr, web.archive.org) çalışma ortamından erişilemedi;
  kullanıcı dosyayı sağlarsa `$SP/ref/ref-yaz.js` düzeninde eklenir (bkz. kaynak defteri "referandum haritaları").
- **29 Eylül 2026 (sonra):** yerel seçim haritası lejantına Türkiye geneli belediye meclisi oy oranı + "Diğer";
  hükümetlere kaynaklı yaygın adlar (`lakap`) ve öne çıkan beşine büyük şerit (`onemli: true`) — bkz. kaynak
  defteri "Hükümet adları". 30 Eylül: kullanıcı isteğiyle 26. hükümet "İlk koalisyon", ANAYOL ve ANASOL-D de
  büyük şeritte (toplam sekiz). 42. hükümet "Motel Hükûmeti" tek kaynaklı olduğu için eklenmedi.

**30 Eylül 2026 kullanıcı kararları:**
- **Yapılacak:** 2017 referandum haritası (YSK dışı kaynaklar da olur; YSK'ya erişim için "bütün izinleri veriyorum");
  parti pencerelerine genel başkanlar (kaynaklı, görev tarihleriyle).
- **İstenmiyor (bir daha önerme):** tek partinin il il oy oranı haritası, iki seçim arası değişim haritası, veri
  indirme; kapatılan partiler zaman çizelgesi, seçim kuralları (baraj, sistem, sandalye) zaman çizelgesi, ara seçim haritası.
- **Genel denetim:** her şey bittikten sonra yapılacak; bitince bu kalem kapatılacak.
- **Durum (30 Eylül):** 2017 referandum haritası eklendi; genel başkanlar eklendi (`veri/genel-baskanlar.js`,
  91 parti, doğrulayıcıda `dogrulaBaskanlar`). **Genel denetim 30 Eylül'de yapıldı ve kapatıldı** (bkz. kaynak
  defteri "Genel denetim"); açık iş kalmadı.
- **4 Ekim 2026 — son iş ve kapanış:** paylaşım görünümü eklendi (her sayfada `og:*`, `twitter:*`, `canonical`,
  site simgesi `paylasim/simge.svg` + `simge-180.png`, `theme-color`; görseller `paylasim/kapak-*.png`, 1200×630).
  Görsellerdeki sayılar (parti, seçim, hükümet, harita) veriden okunur; veri değişirse
  `PW_CHROMIUM=/opt/pw-browsers/chromium NODE_PATH=$(npm root -g) node araclar/kapak-uret.js` ile yeniden üretilir.
  Kullanıcı: "3'ü yapalım ve bu projeyi bitirelim" → **proje kullanıcı kararıyla tamamlandı.** 30 Eylül'de
  önerilen diğer işler (siyasetçinin izi, güncellik taraması, erişilebilirlik, basılabilir poster, meclis
  sandalye değişimi, İngilizce sürüm) yapılmadı; kullanıcı yeniden açmadıkça önerilmez.

---

## 9. AÇIK İŞLER — yeni oturumun ilk bakacağı yer

### 9.1 KRİTİK: commit'lenmemiş, **kaynaksız** dönem 7 verisi

`veri/sandik.js`'te commit'lenmemiş 38 satır var: **2017-04-referandum, 2018-06-genel,
2018-06-cb-halk, 2023-05-genel, 2023-05-cb-halk** kayıtları. Aynı kopya
`.superpowers/sdd/2026-09-11-sandik/donem7-yarim-is.patch` dosyasına da alındı.

**Sorun:** bu kayıtlar `araclar/kaynak-defteri.md`'ye **hiç işlenmemiş** (`grep` → 0 eşleşme);
kod içindeki `// kaynak: …#2017-04-referandum` yorumları **var olmayan** defter çapalarına
işaret ediyor. Uygulayıcı alt ajan (kullanım sınırı yüzünden) raporunu da doldurmadı
(`task-9-d7-report.md` iskelet hâlinde). Yani bu sayıların kaynakla doğrulandığına dair
**hiçbir kanıt yok** ve projenin temel ilkesi gereği **oldukları gibi kabul edilemez**.

**Önerilen yol:** yeni oturum dönem 7'yi baştan bir uygulayıcıya verir; uygulayıcı bu yarım
işi **kaynaklarını bulup doğrulayarak** yeniden üretir (yama referans olarak kullanılabilir,
ama hiçbir sayı doğrulanmadan kalmamalı). Alternatif: `git checkout -- veri/sandik.js` ile
yarım işi atıp sıfırdan başlamak (yama dosyası yedek olarak kalır).

**Dönem 7'de girilecekler:** 2017 referandumu; 2018 ve 2023 genel seçimleri; 2018 ve 2023
cumhurbaşkanlığı (halk) seçimleri — 2023 iki turlu; 2019 yerel; **2019 İstanbul yenileme**
(YSK iptal kararı `not`ta, kaynaklı); 2024 yerel; 65. Hükümet (Yıldırım) ve 2018'de sistemin
değişmesi (`bitisNedeni:"sistem-degisikligi"`, sonrası `tip:"cumhurbaskanligi"`, `no:null`,
`baskan` alanı). 2018+ **ittifaklar resmîdir** → `ittifak` alanı kullanılır.
Bugün **25 Eylül 2026**: 2026'da seçim olup olmadığı kaynakla kontrol edilmeli.

### 9.2 Dönem 6'nın tek açık kalemi

İnceleyicinin son hükmü **SPEC ❌** ve tek gerekçesi:
**2009-03-yerel ve 2014-03-yerel `buyuksehir.ankara` ve `buyuksehir.izmir`** değerleri yalnızca
YSK + TÜİK'e dayanıyor; TÜİK bağımsız sayılmıyor (§2.5).
Controller kararı: dönem 7 bittikten sonra kazanan parti için **bağımsız ikinci kaynak** aranacak
(gazete/ajans arşivinin **statik metni**; Hürriyet ve AA'nın seçim arşiv sayfaları sonuçları
dinamik yüklediği için `WebFetch` ile okunamadı), bulunamazsa **1989 Ankara emsaliyle** bu iki
şehir satırı 2009 ve 2014'ten kaldırılacak.
İstanbul için ikinci kaynak var (AA 2004 tablosu, TRT Haber), 2004 büyükşehir korundu.

### 9.3 Görev 10: soyağacına eklenmesi önerilecek partiler (kullanıcı onayı şart)

Veri bitince **tek seferde** sunulacak:
- **Hürriyet Partisi** (1957, 4 sandalye)
- **Cumhuriyetçi Millet Partisi** (1954: 5, 1957: 4 sandalye)
- **Millet Partisi (1962)** — Bölükbaşı'nın CKMP'den ayrılıp kurduğu, 1948 tarihli `mp48`'den
  farklı parti (1965: 31, 1969: 6 sandalye)
- **Türkiye Birlik Partisi** (1969: 8 sandalye)
- Dönem 7'de ittifak listelerinden meclise giren, soyağacında olmayan partiler (dönem 7
  yapılınca listeye eklenecek — ör. HÜDA PAR 2018'de `ad:` ile yazıldı)

Ayrıca aynı turda sorulacak: **`veri/partiler.js`'teki TİP notu** "1965'te 15 milletvekili"
diyor; bu 15, Millet Meclisi (14) + Cumhuriyet Senatosu (1) toplamı. Sandık verisinde 14 yazılı.

### 9.4 Görev 12'ye bırakılan aramalar (eksik kayıtlar)

- Dönem 0 milletvekili ara seçimleri (doğrulanamadı)
- ✅ 1955 yerel seçimi eklendi (6555 sayılı Kanun + TESAV kronolojisi); 1947–1949 ara seçimleri (26.09.2026: il/sandalye TBMM tutanağıyla doğrulandı ama seçim günü ve partiler resmî belgede yok → yine eklenmedi)
- ✅ Dönem 2 ara seçimleri: 1966 Hatay, 1968 beş il (26.09.2026 eklendi)
- ✅ 1975 ve 1979 ara seçimleri (26.09.2026 eklendi)
- ✅ 1986 ara seçimi (26.09.2026 eklendi)
- ✅ **2003 Siirt ara seçimi** (26.09.2026 eklendi, OCR ile) — YSK kararı Resmî Gazete'de yalnızca **taranmış GIF**; bu ortamda
  OCR yok. (Denendi: RG mükerrer sayısının `<img>` etiketleri, `GIF image data` doğrulaması,
  YSK karar arama sayfası HTML hata döndürüyor.)
- ◐ **2007 referandumunun `tutumlar` alanı**: CHP hayır eklendi; MHP (hayır) ve AK Parti (evet) tek kaynaklı kaldı
  (12.10.2026'da yeniden arandı, ikinci kaynak yine yok)
- ✅ (26.09.2026: resmî YSK ülke toplamları RG'den siteye yazıldı — kullanıcı kararı: resmî ilan yeterli; 27.09.2026'da 2004–2024 de yazıldı) 1984/1989/1994/1999 **yerel seçimlerin ülke geneli belediye meclisi sayıları** `null` —
  TÜİK bu ölçüyü ulusal düzeyde yayımlamıyor, YSK'nın Resmî Gazete ilanı ise `curl` ile
  açılamadı, tarayıcı dosyayı indirmeye çalışıyor. **Bu yol bir daha denenebilir.**
- ◐ 27.09.2026: 1961 ve 1969 geçerli oy eklendi; 1950 sandalye çelişkisi (DP 408/416, bağımsız 9/1) bulundu → bağımsız `null`; 1950–57 geçerli oy resmî kaynakta yok.
- ✅ 1931–1943 tek parti seçimlerinde bağımsız milletvekili (12.10.2026: vardı — TBMM *Türk Parlamento Tarihi*
  IV–VII. dönem ciltleri + Olgun + Baltacı; 1931 CHP 287/bağımsız 20/sonradan 10, 1935 386/13, 1939 420/4/sonradan 5,
  1943 451/4; bkz. kaynak defteri "Sonraki adımlar turu")
- ✅ 64. Hükümet `bitisNedeni: istifa`
- ✅ 1973/1977 yerel `buyuksehir` (27.09.2026: DİE kitaplarından, üçü de CHP); 1963 ve 1968 ülke geneli belediye meclisi eklendi

### 9.5 Ertelenmiş küçük işler (son incelemede toplu ele alınacak)

- ✅ `cubukHTML`: bütün bölütler gerçek 0 ise "veri yok" yazıyor
- ✅ `seritHTML`: `TIP_ETIKET`'te olmayan tip "undefined" yazdırabilir (dogrula bunu hata sayar)
- ✅ `sandik.css` mobil: `.s-ilk3 li` `display:inline` kalıyor; spec "alt alta dizilir" diyor
- ✅ `SAYISAL` sabiti ara seçimin `sandalyeSayisi` alanını "— sayısı" raporuna katmıyor
- ✅ "hukumetler tarih sırasında değil" hata dalı hiçbir testte tetiklenmiyor
- ✅ 1950-09-yerel yüzde toplamı %95,1 (kalan %4,9 notta açıklandı)
- Hükümet **23 → 24** arası 3 günlük boşluk (27–30 Mayıs 1960) ve **43 → 44** boşluğu
  (dogrula bunları uyarı olarak basıyor; beklenen)
- ✅ Panel satırı geçerli oy bilinmezken "— · N oy" diye başlıyor
- ✅ 1930 yerel ikinci kaynağı yalnızca seçimin varlığını doğruluyor (İstanbul sayılarına iki akademik kaynak eklendi)

---

## 10. Kaynak erişim notları (tekrar keşfetmeye gerek yok)

**TÜİK "Milletvekili Genel Seçimleri 1923–2011" PDF** — yerel kopya:
`C:/Users/Lizer/.claude/projects/C--Users-Lizer-Desktop-projects-siyasi-parti/c2b2a5af-348d-45d1-aacb-260f42e6e083/tool-results/webfetch-1789121603458-3nc85e.pdf`
- Okuma: `pdftotext -f N -l N -layout -enc UTF-8 <dosya> -`
- **Basılı sayfa = PDF sayfası − 18**
- Tablo 1 → PDF 22; Tablo 2–3 → 23; Tablo 5 → 25; Tablo 23 (1950–1977) → 43+; seçim tarihleri → 277
- Türkçe harfler bozuk: `ú→ş`, `÷→ğ`, `ø→İ`; rakamlar sağlam
- **TÜİK'in "ortalama oy" yöntemi 1950/54/57 oy sayılarını güvenilmez kılıyor** (dönem 1'de bu
  yüzden bazı değerler `null`, bazıları TBMM'den alındı)

**TBMM seçim sorgusu:**
`https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=YYYY`
(oy ve yüzde verir, sandalye vermez)

**TBMM "Hükümetler, Programları ve Genel Kurul Görüşmeleri"** — Cilt 1–10; adresler
`cdn.tbmm.gov.tr` ve `acikerisim.tbmm.gov.tr` (bitstream listesi) üzerinden bulundu, defterde
kayıtlı. Dizi **Cilt 10'da (57. Hükümet) bitiyor**. Ayrıca **"Koalisyon Hükümetleri, Koalisyon
Protokolleri" Cilt 2** dönem 5'te kullanıldı.

**TBMM "Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler (1923–1980)":**
`https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/ed1d2982-f225-4467-a4ab-707f4cc471dc.pdf`

**Erişim sorunları:** `anayasa.gov.tr` ve `resmigazete.gov.tr` çoğu zaman açılmıyor
(tarayıcı paneli RG PDF'lerinde indirme diyaloğu açıyor — kullanıcıya sorulur, bu yüzden
kaçınıldı); `ysk.gov.tr` sık sık `ECONNRESET` veriyor, **yeniden denemek** işe yarıyor ve
**arşivde listelenmeyen `docs/...` yolları** bulunabiliyor (2004 büyükşehir dosyaları böyle
bulundu).

---

## 11. Alt ajanlara verilen görev metinleri (şablon + özel notlar)

Her uygulayıcıya verilen metnin iskeleti şöyleydi (dönem 7 metni birebir örnektir):

1. **Kimlik ve temel:** "Sen Görev 9'un dönem N (YIL–YIL) uygulayıcısısın. Depo: …, dal
   `sandik-asama1`, BASE `<commit>`."
2. **Okunacaklar:** `implementer-contract.md`, `task-9-brief.md` (Global Constraints bağlayıcı),
   önceki dönemin raporu (biçim örneği), `araclar/kaynak-defteri.md`, `veri/sandik.js`,
   spec §3/§5/§8.1.
3. **Bağlayıcı kurallar:** §2'deki kaynak kuralları + dönemin özel kuralları (meclis sayısı,
   baraj, kap aralıkları, hükümet numarası zinciri, ittifak kuralları, büyükşehir kuralı).
4. **Kaynak ipuçları:** §10'daki erişim bilgileri.
5. **Çalışma disiplini:** raporu erkenden oluştur ve ilerledikçe güncelle; veriyi **artımlı**
   diske yaz (kullanım sınırı kesintileri yaşandı); **iki commit** (ilk grup bitince hemen
   commit); her commit öncesi testler + `dogrula.js` ve ham çıktıların rapora konması;
   tarayıcı denetimi; **yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` değişir**
   (kod, test, `veri/partiler.js` dokunulmaz); commit mesajı biçimi ve `Co-Authored-By`.
6. **Dönüş biçimi:** `STATUS / COMMITS / TESTS / CONCERNS`.

İnceleyicilere verilen metnin iskeleti: sözleşme yolu, brief/rapor/paket/defter/spec yolları,
hüküm dosyasının yolu, bağlayıcı kurallar özeti, **"özellikle bak"** maddeleri (uygulayıcının
kendi itiraf ettiği endişeler buraya taşındı), dönüşte yalnızca kısa biçim.

Düzeltme turları **aynı uygulayıcıya `SendMessage`** ile gönderildi; metin şu kalıptaydı:
"İnceleme düzeltme istiyor (SPEC ❌). Tam hüküm: `<verdict yolu>` — önce oku. Düzelt: 1) …
2) … Kurallar aynı. Rapora '## Düzeltme turu N' ekle, `## Kullanıcıya sunulacaklar`ı güncelle;
testler + dogrula ham çıktısı; tek commit: '<mesaj>'. Dön: STATUS / COMMITS / TESTS / CONCERNS."

Yeniden incelemeler: "Yalnızca bu aralığı yeniden incele (`BASE..HEAD`). Paket: … Kontrol et:
(1) … (2) … Önceki bulguları kapat ya da açık tut. Hüküm: `<...-verdict.md>`."

**Tam metinler ve bütün alt ajan konuşmaları** şu dosyalarda duruyor (çok büyük, seçerek okunmalı):
- Bu oturumun öncesi: `C:\Users\Lizer\.claude\projects\C--Users-Lizer-Desktop-projects-siyasi-parti\c2b2a5af-348d-45d1-aacb-260f42e6e083.jsonl`
- Alt ajan çıktıları (tam transkript, 0,7–4,5 MB): aynı dizinin altındaki
  `…\c2b2a5af-…\tasks\<agentId>.output`
  - `a4e4bfd9171fd9ebc` — dönem 7 uygulayıcısı (yarım)
  - `a82dc0ff8b997d2ec` — dönem 6 uygulayıcısı (+2 düzeltme turu)
  - `aa5fc178c50ffc3b6` — dönem 6 inceleyicisi
  - `a598d6197af9ba99c` — dönem 5 uygulayıcısı, `a09b62ab314fe35aa` — dönem 5 inceleyicisi
  - `a881984b35269c7ce` — dönem 4 uygulayıcısı, `ae76f2bc75b73c616` — dönem 4 inceleyicisi
  - `a9a10b552461a0063` — dönem 3 inceleyicisi
  - (dönem 0–3 uygulayıcıları ve Görev 1–8 ajanları daha eski oturum kayıtlarında)

---

## 12. Yeni oturum için önerilen ilk adımlar

1. Bu dosyayı ve `.superpowers/sdd/2026-09-11-sandik/progress.md`'yi oku.
2. `git status` ve `git log --oneline -5` ile durumu doğrula; **§9.1'deki commit'lenmemiş
   dönem 7 verisine karar ver** (kullanıcıya sor: kaynaklarıyla yeniden üretilsin mi, atılsın mı).
3. Testleri ve `dogrula.js`'i çalıştır (57/57 ve "hata yok" beklenir).
4. Dönem 7'yi bir uygulayıcı alt ajana ver (§11 şablonu + §9.1 kapsamı).
5. İnceleme → düzeltme turları → §9.2'deki dönem 6 kalemini kapat.
6. Görev 10 Adım 5–8: §9.3 listesini **kullanıcıya toplu öner** (onay şart).
7. Görev 11: `kaynakca.html`'e "Sandık: ölçüler ve kurallar" bölümü.
8. Görev 12: güncellik kontrolü, §9.4 aramaları, kabul ölçütleri, **gerçek `file://` çift
   tıklama testi**, index'te "son güncelleme".
9. Bütün dalın son incelemesi → §9.5'teki ertelenmiş küçük işlerin triyajı → tek düzeltme
   dalgası → **birleştirme kararı kullanıcının** (`finishing-a-development-branch`).

### Yeni oturumun bilmesi gereken iki huy
- **Kullanım sınırına sık takılıyoruz.** Alt ajanlara işi artımlı diske yazdırmak ve grup
  bitince hemen commit'letmek bu yüzden zorunlu. Sınır sıfırlanınca aynı ajana `SendMessage`
  ile devam ettirilebiliyor (adı/id'si korunuyorsa).
- **Kullanıcı Türkçe konuşuyor ve teknik olmayan bir dil istiyor**; gerçekten kendisinin
  vereceği kararlar dışında soru sorulmasını istemiyor ("bütün dönemleri hiç ara vermeden
  tamamla artık").

- **4 Ekim 2026 — adres değişikliği (kullanıcı kararı):** adres çok uzun olduğu için GitHub deposunun adı
  `turkiye_siyasi_partiler_soyagaci` → `soyagaci` yapıldı; yeni adres **https://emrebiltekin.me/soyagaci/**.
  Kullanıcı eski adresin çalışmaz hâle geleceğini kabul ederek bu seçeneği seçti (alt alan adı ve yeni alan adı
  seçenekleri de sunulmuştu). Sayfalardaki `og:url`, `og:image`, `canonical` ve kapak görsellerindeki adres güncellendi.
