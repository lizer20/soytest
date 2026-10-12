# Görev 1 — brief (kaynak: docs/superpowers/plans/2026-09-11-sandik.md)

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

### Görev 1: Hafızadan iddiaların doğrulanması ve kaynak defteri

**Files:**
- Create: `araclar/kaynak-defteri.md`
- Modify: `docs/superpowers/specs/2026-09-11-sandik-design.md` (§8.5 sonuçları)

**Interfaces:**
- Produces: `araclar/kaynak-defteri.md` içinde `## Kaynak haritası` ve `## Doğrulanan iddialar` bölümleri; sonraki bütün veri görevleri bu dosyaya kayıt ekler. Kayıt biçimi aşağıdaki şablondur.

- [ ] **Adım 1: Kaynak defteri iskeletini oluştur**

`araclar/kaynak-defteri.md`:

```markdown
# Kaynak defteri

Sitede gösterilmez. Her sayının hangi kaynaktan geldiğini kaydeder (spesifikasyon §8.3).
Birincil kaynak **[B]** ile işaretlenir. "hesaplandı" = resmî il tablosundan `araclar/topla.js` ile.

## Kaynak haritası

(Planın "Kaynak haritası" tablosu buraya aynen kopyalanır ve yoklama sonuçlarıyla güncellenir.)

## Doğrulanan iddialar

## Kayıtlar

<!-- Şablon:
### 1999-04-genel
- [B] TÜİK 1923–2011, Tablo 24, s. N — erişim 2026-MM-GG
- TBMM seçim sorgusu p_secim_yili=1999 — erişim 2026-MM-GG
- Uyuşmazlık: (yoksa "yok")
-->
```

- [ ] **Adım 2: Spesifikasyon §8.5'teki üç iddiayı doğrula**

Her biri için en az bir resmî kaynak + ikinci kaynak bul (WebSearch → WebFetch):
1. Refah Partisi'nin Anayasa Mahkemesi kapatma kararının tarihi (AYM kararı / Resmî Gazete).
2. 27 Mayıs 1960 ve 12 Eylül 1980 askerî yönetim aralıklarının başlangıç/bitiş tarihleri. **Bitiş ölçütü (kullanıcı kararı, 2026-09-11): askerî yönetimden çıkışı sağlayan genel seçimin tarihinden bir gün önce.** Bu yüzden doğrulanacak olan, o iki geçiş genel seçiminin tarihidir: TÜİK s. 259 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" [B] + TBMM ya da Resmî Gazete. `bit` = seçim tarihi − 1 gün. Geçiş seçimi böylece sıradaki dönem bandının ilk kaydı olur.
3. MDP'nin 1983 genel seçiminde sandalye kazandığı (TÜİK Tablo 1, s. 22 — `pdftotext -f 22 -l 22 -layout -enc UTF-8`).
4. Belediye başkanlarının doğrudan halk oyuyla ilk kez hangi yerel seçimde seçildiği (ilgili belediye seçim kanunu, Resmî Gazete) — 1963 öncesi yerel kayıtlarda `buyuksehir` alanı buna bağlı.

Her sonucu `## Doğrulanan iddialar` altına kaynaklarıyla yaz. Doğrulanamayan iddia için "DOĞRULANAMADI" yaz ve Görev 2'de o değeri kullanma.

- [ ] **Adım 3: Açık kaynak boşluklarını yokla**

1. `https://acikveri.ysk.gov.tr/` — WebFetch'i en fazla 3 kez dene. Veri seti listesi ve biçimi (CSV/XLSX) varsa kaynak haritasına ekle.
2. 1995 sonrası hükümetler için: `WebSearch "Hükümetler Programları ve Genel Kurul Görüşmeleri" cilt 9` ve `acikerisim.tbmm.gov.tr` araması. Bulunan cilt adreslerini ve kapsadıkları tarih aralıklarını haritaya yaz.
3. Güncellik: `WebSearch "YSK 2026 seçim takvimi halkoylaması"` — 2026-09-11 sonrası bir seçim ya da referandum ilan edilmiş mi?

- [ ] **Adım 4: Spesifikasyon §8.5'i sonuçlarla güncelle**

§8.5'teki her maddeye "Doğrulandı (kaynak: …)" ya da "Doğrulanamadı — kullanılmıyor" ekle.

- [ ] **Adım 5: Kullanıcıya rapor ve onay**

Doğrulanan/doğrulanamayan iddiaları ve yeni bulunan kaynakları özetle. Kullanıcı onayı olmadan Görev 2'ye geçme.

- [ ] **Adım 6: Commit**

```bash
git add araclar/kaynak-defteri.md docs/superpowers/specs/2026-09-11-sandik-design.md
git commit -F - <<'MSG'
Kaynak defteri ve hafızadan gelen iddiaların doğrulanması

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
```

---

