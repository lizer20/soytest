# Görev 9 — brief (kaynak: docs/superpowers/plans/2026-09-11-sandik.md)

## Global Constraints

- Site `file://` ile çift tıklanıp açıldığında çalışmalı; `fetch`, ES modülü, harici istek YOK.
- Yükleme sırası: `veri/partiler.js` → `veri/sandik.js` → `ortak.js` → `sandik-mantik.js` → sayfa kodu (`sandik.html`'de `sandik-sayfa.js`, `index.html`'de satır içi betik).
- Global ad alanları: `window.PARTILER`, `window.SANDIK`, `window.Ortak`, `window.SandikMantik`.
- Arayüz dili Türkçe; kod adlandırması mevcut koddaki gibi Türkçe (`ac`, `kapat`, `ciz`, `bul`…).
- **Bilgi uydurulmaz:** hiçbir seçim/hükümet sayısı hafızadan yazılmaz. Doğrulanamayan sayı `null` → ekranda `—`.
- Ham sayı tutulur, yüzde ekranda hesaplanır; yalnızca yüzde yayımlanmışsa `oyYuzde` / `katilimYuzde` yedeği.
- Kimlik biçimi `YYYY-AA-tür`; türler: `genel` · `yerel` · `referandum` · `cb-halk` · `cb-tbmm` · `ara`.
- Mobil kırılım `max-width:760px` (mevcut soyağacıyla aynı).
- Soyağacında kart sayısı 66, bağ sayısı 73 — kullanıcı onaylı parti eklemeleri dışında değişmez.
- Yerel ara seçimler kapsam dışı (2019 İstanbul yenilemesi hariç).
- Yerel seçimler bulunabilen en eski belediye seçiminden başlar; 1963 öncesi kayıtlarda bulunamayan her alan `null`, ülke geneli oy yoksa `sonuc: []`.
- Her görev bir commit ile biter; commit mesajı Türkçe, sonunda `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.

## Kaynak haritası (2026-09-11 itibarıyla yoklandı)

| Konu | Birincil (resmî) | İkinci kaynak | Erişim notu |
|---|---|---|---|
| Genel seçim 1923–2011 | TÜİK *Milletvekili Genel Seçimleri 1923–2011* — `https://www.ysk.gov.tr/doc/dosyalar/1923-2011-MVSecimleri-Tuik.pdf` | 1950–1999: TBMM seçim sorgusu `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=YYYY` (oy + %; sandalye yok) | PDF metin katmanlı; `pdftotext -layout -enc UTF-8`. Türkçe harfler bozuk (ş→ú, ğ→÷, İ→ø), rakamlar ASCII. Tablo 1 s.22, Tablo 2–3 s.23, il/parti sonuçları Tablo 23 (s.25–92, 1950–1977) ve Tablo 24 (s.93–258, 1983–2011). TÜİK 1961 öncesini arşiv taramasıyla derlemiş — o dönemde TBMM ikinci kaynak olarak zorunlu. WebFetch bağlantıyı zaman zaman sıfırlıyor; yeniden dene. |
| Genel seçim 2015–2023 | YSK kesin sonuç kararları (Resmî Gazete) | TÜİK/YSK istatistik yayınları | YSK seçim sayfaları JS kabuğu; doğrudan `ysk.gov.tr/doc/…` PDF'leri ve Resmî Gazete kullanılır. `acikveri.ysk.gov.tr` yoklamada bağlantıyı düşürdü — Görev 1'de yeniden denenir. |
| Referandum | YSK Halkoylaması Arşivi `https://www.ysk.gov.tr/tr/halkoylamasi-arsivi/2648`; 1982: `…/doc/dosyalar/docs/1982Referandum/7-Kas%C4%B1m-1982-Halk-Oylamas%C4%B1.pdf` | Resmî Gazete ilanı / TÜİK | 1982 PDF'i il satırları içerir, Türkiye toplamı yok → `araclar/topla.js` ile toplanır ve ikinci kaynakla eşleştirilir. |
| Yerel seçim | YSK Mahalli İdareler Arşivi `https://www.ysk.gov.tr/tr/mahalli-idareler-genel-secimleri-arsivi/2650`; TÜİK mahalli idareler yayınları (örn. `…/doc/dosyalar/1989Mahalli-Tuik.pdf`) | Resmî Gazete | Arşiv sayfası JS kabuğu; doğrudan PDF adresleri arama ile bulunur. |
| Hükümetler 1920–1995 | TBMM *Hükümetler, Programları ve Genel Kurul Görüşmeleri* cilt 1–8 (`acikerisim.tbmm.gov.tr`, `cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/…`, cilt 8: `https://www5.tbmm.gov.tr/yayinlar/hukumetler/hukumetler_cilt_8.pdf`) | TBMM *Koalisyon Hükümetleri, Koalisyon Protokolleri* `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/874b1bb8-73c2-4847-8d40-01866e87ca4a.pdf` | TBMM hükümetler HTML sayfası artık ana sayfaya yönleniyor (ölü). |
| Hükümetler 1995– | Görev 1'de bulunur (TBMM açık erişimde sonraki ciltler; atamalar için Resmî Gazete) | Akademik derleme "1923'ten 2018'e Türkiye'de Hükümet ve Bakanlıklar" | `hukumetler_cilt_9.pdf` adresi yok (ana sayfaya yönleniyor). |
| TBMM CB seçimleri | TBMM tutanakları; TBMM *Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler (1923–1980)* | Cumhurbaşkanlığı (tccb.gov.tr) | — |
| Karşılaştırma | Vikipedi (tr/en) | — | Hiçbir zaman tek ya da ikinci kaynak sayılmaz. |

---

### Görev 9: Veri toplama — dönem döngüsü (8 dönem, her biri kullanıcı onaylı)

Bu görev kod değil veri üretir ve **8 kez** yürütülür: `DONEMLER` sırasıyla, dönem 0'dan 7'ye. Her dönem kendi commit'iyle biter ve **kullanıcı onayı olmadan bir sonraki döneme geçilmez** (spesifikasyon §8.2). Aşağıdaki Adım 1–7 her dönem için aynen uygulanır.

**Files:**
- Modify: `veri/sandik.js`, `araclar/kaynak-defteri.md`
- Geçici çalışma dosyaları: `mktemp` ile; projeye yazılmaz.

**Interfaces:**
- Consumes: spesifikasyon §5 veri modeli (alan adları birebir: `kayitli`, `kullanilan`, `gecerli`, `oy`, `oyYuzde`, `katilimYuzde`, `sandalye`, `meclis`, `baraj`, `karar`, `tutumlar`, `ittifak`, `buyuksehir`, `turlar`, `secilen`, `turSayisi`, `bolge`, `sandalyeSayisi`; hükümette `no`, `basbakan`/`baskan`, `partiler`, `baslangic`, `bitis`, `tip`, `bitisNedeni`, `not`); `node araclar/dogrula.js`; `araclar/topla.js`; Görev 1'deki kaynak haritası.
- Produces: `veri/sandik.js`'te o döneme ait kayıtlar (dizi tarih sırasında kalır) ve defterde her kayıt için bir başlık.

**Kesin kurallar (her dönem):**
- Hiçbir sayı hafızadan yazılmaz. Her değer, açıp okuduğun bir kaynaktan gelir.
- Her sayı: bir resmî kaynak **[B]** + eşleşen ikinci kaynak. Eşleşmezse ve üçüncü kaynak çözmezse `null`.
- Tam tablo yayımlayan ulusal gazete seçim veritabanları **yalnızca ikinci kaynak** olabilir (kullanıcı kararı, 2026-09-11); defterde "haber veritabanı" diye işaretlenir. Birincil kaynak her zaman resmîdir.
- **Eşleşme toleransı (kullanıcı kararı, 2026-09-12):** iki kaynak arasındaki fark %0,5'e kadarsa eşleşmiş sayılır; veriye birincil resmî kaynağın sayısı yazılır ve fark deftere "Uyuşmazlık: X vs Y (%Z)" diye işlenir. Fark %0,5'i aşarsa sayı `null` olur. Sandalyelerde toplamın `meclis`'e eşitliği belirleyicidir.
- Soyağacında olmayan ama sandalye kazanan partiler her dönemde raporlanır ama **soyağacına eklenmez**; veri bittiğinde topluca kullanıcıya önerilir (kullanıcı kararı, 2026-09-12).
- Ulusal toplam yalnızca il tablosu varsa `araclar/topla.js` ile hesaplanır ve ikinci kaynağın ulusal rakamıyla eşleşmelidir (defterde "hesaplandı").
- Yüzde yalnızca kaynak **sayı vermiyorsa** yazılır (`oyYuzde`, `katilimYuzde`).
- Kaynaklar yalnızca ay ve yıl veriyorsa `tarih` `"YYYY-AA"` yazılır (ekranda "Haziran 1923"); gün asla tahmin edilmez. Hükümet tarihleri gün dahil olmak zorundadır.
- Parti id'si yalnızca `veri/partiler.js`'te varsa `parti:` ile; yoksa `ad:` ile (bu partiler Görev 10'un listesine yazılır).
- `not` alanı tek cümle; yorum değil, bilgi (örn. "açık oy, gizli tasnif ile yapıldı").

**Dönem envanteri — ADAY listeler (hafızadan; Adım 1'de kaynakla doğrulanmadan hiçbiri eklenmez):**

| Dönem | Aday kayıtlar |
|---|---|
| 0 · 1923–1945 | genel (tek parti) 1923, 1927, 1931, 1935, 1939, 1943; yerel (belediye) seçimleri — envanter tamamen kaynaktan; TBMM CB seçimleri; ara seçimler; hükümetler |
| 1 · 1946–1960 | genel 1946, 1950, 1954, 1957; yerel (belediye) seçimleri — envanter tamamen kaynaktan; TBMM CB; ara seçimler (örn. 1951); hükümetler. **Kap (27 Mayıs):** MBK dönemi hükümetleri, 1961 anayasa referandumu |
| 2 · 1961–1971 | genel 1961, 1965, 1969; yerel 1963, 1968; TBMM CB; ara seçimler; hükümetler (12 Mart sonrası partilerüstü hükümetler dahil) |
| 3 · 1972–1980 | genel 1973, 1977; yerel 1973, 1977; TBMM CB (sonuçsuz süreç dahil); ara seçimler; hükümetler. **Kap (12 Eylül):** askerî dönem hükümeti, 1982 anayasa referandumu |
| 4 · 1983–1990 | genel 1983, 1987; yerel 1984, 1989; referandum 1987, 1988; TBMM CB; ara seçimler; hükümetler |
| 5 · 1991–2000 | genel 1991, 1995, 1999; yerel 1994, 1999; TBMM CB; ara seçimler; hükümetler |
| 6 · 2001–2015 | genel 2002, 2007, 2011, Haziran 2015, Kasım 2015; yerel 2004, 2009, 2014; referandum 2007, 2010; TBMM CB 2007 (sonuçsuz süreç + seçim); CB (halk) 2014; ara seçim 2003; hükümetler |
| 7 · 2016–2026 | referandum 2017; genel 2018, 2023; CB (halk) 2018, 2023; yerel 2019, 2019 İstanbul yenileme, 2024; hükümetler (2018 öncesi son hükümet ve sonrası cumhurbaşkanlığı yapısı) |

- [ ] **Adım 1: Envanteri kaynaktan doğrula**

- Genel seçimler: TÜİK 1923–2011, Tablo 1 (s. 22) ve "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" (s. 259):

```bash
T=$(mktemp --suffix=.pdf)   # PDF'i bir kez indir: WebFetch'in kaydettiği dosya da kullanılabilir
pdftotext -f 22 -l 22 -layout -enc UTF-8 "$T" - | sed 's/ú/ş/g;s/÷/ğ/g;s/ø/İ/g'
pdftotext -f 259 -l 259 -layout -enc UTF-8 "$T" - | sed 's/ú/ş/g;s/÷/ğ/g;s/ø/İ/g'
```

  (Bu PDF'in Türkçe harf kodlaması bozuk: `ú→ş`, `÷→ğ`, `ø→İ`. Rakamlar etkilenmez; `sed` yalnızca okumayı kolaylaştırır, sayıları değiştirmez.)
- Ara ve TBMM CB seçimleri: TBMM *Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler (1923–1980)* ve TBMM tutanakları; 1980 sonrası için TBMM tutanakları.
- Referandum ve yerel: YSK Halkoylaması ve Mahalli İdareler arşivleri (doğrudan PDF adresleri, WebSearch `site:ysk.gov.tr`).
- Hükümetler: TBMM *Hükümetler, Programları ve Genel Kurul Görüşmeleri* ilgili cildi (Görev 1'deki haritada).

Aday listede olup kaynakta olmayan kayıt eklenmez; kaynakta olup listede olmayan kayıt eklenir. Farkları rapora yaz (Adım 6).

- [ ] **Adım 2: Genel seçim sayıları**

1950–2011 için birincil kaynak TÜİK Tablo 23 (s. 25–92, 1950–1977) ve Tablo 24 (s. 93–258, 1983–2011). Önce seçimin sayfasını bul:

```bash
for i in $(seq 25 258); do pdftotext -f $i -l $i -layout -enc UTF-8 "$T" - | head -3 | grep -q "YIL" && echo "$i: $(pdftotext -f $i -l $i -layout -enc UTF-8 "$T" - | head -3 | tr -s ' ' | tr '\n' ' ')"; done | grep "<YIL>"
```

(`<YIL>` yerine seçim yılını yaz; çıktı o yılın sayfalarını listeler. Başlık biçimi farklıysa `head -5` ile bak ve deseni uyarla.) Türkiye geneli satırı yoksa il satırlarını sekmeyle ayrılmış bir dosyaya çıkar ve `node araclar/topla.js dosya.tsv` ile topla.

İkinci kaynak: 1950–1999 için TBMM seçim sorgusu (`secim_sorgu.secimdeki_partiler?p_secim_yili=YYYY` — oy sayıları; sandalye yok, sandalye için Tablo 1/Tablo 3 ve Resmî Gazete kesin sonuç ilanı). 2015 ve sonrası: YSK kesin sonuç kararı (Resmî Gazete) **[B]** + TÜİK/YSK istatistik yayını.

Tek parti seçimlerinde (`tekParti:true`) sayı yoksa `null` bırak; TÜİK Tablo 5 (il başına milletvekili sayısı) `meclis` için kullanılabilir.

- [ ] **Adım 3: Diğer kayıtlar**

- **Yerel:** `olcu:"belediye-meclisi"`; belediye meclisi oyları. Büyükşehir sonucu: o yılın belediye başkanlığı sonucu (İstanbul, Ankara, İzmir). 2019 İstanbul yenilemesi ayrı kayıt (`kapsam:"İstanbul"`, yalnızca `buyuksehir.istanbul`). O yıl bir şehrin büyükşehir statüsü yoksa il merkezi belediyesinin sonucu yazılır ve bu, kaydın `not` alanında belirtilir (spesifikasyon §5.3). **1963 öncesi kayıtlar:** ülke geneli belediye meclisi oyu bulunamazsa `sonuc: []` ve seçmen sayıları `null`; belediye başkanlarının o dönemde doğrudan seçilip seçilmediği (Görev 1'de doğrulanan iddia) kesinleşmeden `buyuksehir` yazılmaz.
- **Referandum:** `karar`, `evet`, `hayir`, `gecerli`, `kullanilan`, `kayitli`; `konu` tek cümle. `tutumlar`: yalnızca soyağacındaki partiler, yalnızca kaynakla doğrulanmış tutumlar (parti açıklaması, dönemin gazete arşivi, akademik kaynak — iki kaynak).
- **CB (TBMM):** seçilen, tur sayısı (TBMM tutanağı [B]). Sonuçsuz süreçler ayrı kayıt, `secilen:null`.
- **CB (halk):** her tur ayrı `turlar` öğesi; aday başına `parti` ya da `destek`.
- **Ara:** `bolge`, `sandalyeSayisi`, kazanılan sandalyeler (`oy` yok).
- **Hükümetler:** `no` (resmî numara), başbakan, partiler, kuruluş (Bakanlar Kurulu'nun Resmî Gazete'de yayımlandığı ya da TBMM cildinin verdiği tarih — hangisi kullanıldıysa bütün hükümetlerde aynı ölçüt; ilk dönemde seç ve deftere yaz), bitiş, `tip`, `bitisNedeni`. 2018 sonrası yapının adı ve numarası kaynakla doğrulanamazsa `no:null` yazılır ve `basbakan` yerine `baskan` alanı kullanılır (spesifikasyon §5.8). Doğrulanamayan bitiş nedeni `null` kalır.

- [ ] **Adım 4: `veri/sandik.js`'e yaz**

Kayıtları `secimler` dizisine tarih sırasıyla, hükümetleri `hukumetler` dizisine `baslangic` sırasıyla ekle. Her kaydın üstüne tek satır yorum: `// kaynak: araclar/kaynak-defteri.md#<kimlik>`. Örnek biçim (değerler buraya yazılmaz; her değer kaynaktan):

```js
    // kaynak: araclar/kaynak-defteri.md#1950-05-genel
    { id: "1950-05-genel", tur: "genel", tarih: "1950-05-14", tekParti: false,
      meclis: /* TÜİK Tablo 3 */, kayitli: /* … */, kullanilan: /* … */, gecerli: /* … */, baraj: null,
      sonuc: [ { parti: "dp46", oy: /* … */, sandalye: /* … */ }, /* … */ ],
      not: "…" },
```

(Yukarıdaki `/* … */` işaretleri yalnızca bu planda biçimi göstermek içindir; `veri/sandik.js`'e sayı ya da `null` yazılır — Adım 5'teki `node --check` yorum bırakılmış bir değeri sözdizimi hatası olarak yakalar.)

- [ ] **Adım 5: Denetle**

```bash
node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
```

Expected: PASS; `hata yok`. Uyarıları (boşluklar, `—` sayısı) Adım 6 raporuna kopyala. Hata varsa kaynağa dönüp düzelt — hatayı susturmak için sayı değiştirme.

Tarayıcıda `sandik.html` (1400px): dönem bandında kayıtlar tarih sırasında; en az bir kartı açıp paneldeki sayıları kaynak defteriyle karşılaştır; konsol hatası yok. Kap içeren dönemlerde (1 ve 3) kayıtların kırmızı kesinti bandının altında durduğunu gör.

- [ ] **Adım 6: Rapor ve onay**

Kullanıcıya şunu sun ve onay bekle:
- eklenen kayıtlar (tür başına sayı) ve envanter farkları,
- `—` kalan her sayı ve nedeni (hangi kaynaklar ayrıştı),
- soyağacında olmayan ama sandalye kazanan partiler (Görev 10 listesi),
- `node araclar/dogrula.js` çıktısı,
- **ilk genel seçim verisinin girildiği dönemde:** `index.html` künyesinde "Girdiği genel seçimler" bölümünün göründüğü ve bağlantının `sandik.html#<kimlik>` panelini açtığı (Görev 8'in ertelenen denetimi).

- [ ] **Adım 7: Commit (her dönem)**

```bash
git add veri/sandik.js araclar/kaynak-defteri.md
git commit -F - <<'MSG'
Sandık verisi: dönem N (YYYY–YYYY)

Kayıtlar: … (tür başına sayı). Doğrulanamayan sayılar: … (defterde).

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
```

(Mesajdaki `N`, yıllar ve sayılar o dönemin gerçek değerleriyle yazılır.)

---

