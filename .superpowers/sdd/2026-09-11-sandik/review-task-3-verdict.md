# Görev 3 inceleme hükmü — `ortak.js`: panel, dönem bandı, biçimleme

## 1. Spec uyumu: ✅

Brief'in tüm adımları (1–8) farkla ve gerçek repo durumuyla birebir doğrulandı.

- **Interfaces bloğu:** `tarihYaz`, `yuzde`, `yuzdeYaz`, `sayiYaz`, `hashOku`, `bantDurum`, `bantKur`,
  `panelKur` — hepsi brief'teki imzalarla, brief'teki koddan tek karakter sapmadan `ortak.js`'e
  yazılmış (diff ile brief Adım 3 kod bloğu satır satır karşılaştırıldı, birebir aynı). UMD sarmalayıcı
  `window.Ortak` / Node `module.exports` ayrımını doğru yapıyor.
- **`araclar/test/ortak.test.js`:** brief'teki test koduyla birebir aynı (diff karşılaştırması).
  `node --test "araclar/test/*.test.js"` çalıştırıldı → 9/9 PASS (Görev 2'nin 5'i + bu görevin 4'ü),
  raporla eşleşiyor.
- **CSS taşıma (Adım 5):** brief'teki 7 aralık (70–86, 92, 95–102, 119–126, 137–139, 153–209, 212–218)
  `index.html`'den çıkmış; `ortak.css`'e `@media (prefers-reduced-motion:reduce)` satırının hemen
  üstüne, brief'teki başlık yorumuyla eklenmiş; mobil `#panel`/`#panel.acik` kuralları dosya sonuna
  brief'teki `@media (max-width:760px){…}` sarmalayıcısıyla girmiş. `index.html`'in mobil sorgusunda
  artık `#panel` kuralı yok (diff ve `awk`/`grep` ile doğrulandı, dosyanın gerçek son hâli okunarak
  teyit edildi).
- **`index.html` devri (Adım 6):** script sırası `veri/partiler.js` → `ortak.js` → satır içi betik
  (brief'in global yükleme sırasıyla uyumlu); dönem bandı kurulumu `Ortak.bantKur(b, s, ciz);` ile;
  `filtreUygula` bandı `if(b) Ortak.bantDurum(b, s, false); else s.classList.remove("kapali");` ile;
  panel `Ortak.panelKur({panel, perde, govde, kapatDugmesi, odakSecici:".kart"})` ile kurulmuş; `ac(id)`
  brief'teki gövdeyle `Panel.ac(html, renk)`'e devrediyor; `govde` tıklamasında
  `Panel.odakHedefi(hedef);` — hepsi brief'teki kodla birebir.
- **Silinenler:** `kapat()`, panelin Tab-tuzağı `keydown` dinleyicisi, dosya sonundaki
  `kapat`/`perde`/`Escape` dinleyicileri ve `sonOdak` değişkeni `index.html`'den kaldırılmış;
  `grep -n "sonOdak\|function kapat" index.html` gerçek repo üzerinde tekrar çalıştırıldı → boş (0).
- **`file://` uyumu:** `grep -n "fetch(\|import \|export \|type=\"module\""` hem `ortak.js` hem
  `index.html` üzerinde tekrar çalıştırıldı → boş. Script etiketleri klasik `<script src>`.
- **Global Constraints:** 66 kart / 73 bağ sayısı denetim JSON'unda korunmuş; commit mesajı Türkçe ve
  `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>` ile bitiyor (gerçek `git log` çıktısıyla
  doğrulandı); dosya listesi brief'in "Create/Modify" listesiyle birebir (`git show --stat HEAD`).
- **Adım 7 gerileme denetimi:** `node --test … && node araclar/dogrula.js` gerçek repo üzerinde tekrar
  çalıştırıldı → 9/9 PASS, `hata yok`. Raporun JSON çıktısı (`bant:8, kart:66, kenar:73`, 4 kesinti metni,
  `panelAcik`/`panelKapali`/`vurgu`) Görev 2 raporunun Adım 8 JSON'uyla satır satır karşılaştırıldı —
  birebir aynı.

Eksik, fazladan eklenmiş (YAGNI) ya da brief'ten sapan bir değer bulunamadı.

## 2. Görev kalitesi: Approved

Bulgu yok (Critical / Important / Minor).

Notlar (kusur değil, gözlem):
- `ortak.js`'teki `panelKur().kapat()` içindeki `if (o.kapaninca) o.kapaninca();` çağrısı `index.html`'in
  kullanımında geçilmiyor (opsiyonel parametre) — brief'in kendi Adım 3 kod bloğunda zaten böyle
  tanımlı, uygulayıcının eklemesi değil; spec'e sadık.
- `ortak.css` dosyasının toplam boyutu (~387 KB, birkaç satırda >20.000 karakter) bu göreve ait değil;
  önceden var olan gömülü içerikten kaynaklanıyor, task-3 diff'i yalnızca 111 kısa satır ekliyor —
  incelemeyi etkilemiyor.

## 3. ⚠️ Farktan doğrulanamayanlar

- **Tarayıcı gerileme denetimi (`soyagaci.js` JSON çıktısı, konsol hataları, mobil panel `transform`
  davranışı):** Farkta görünmeyen, çalışma zamanı davranışı. **Kanıt var:** raporda tam JSON çıktısı
  var ve Görev 2 Adım 8'deki referans JSON'la (bu incelemede ayrıca doğrulandı) birebir eşleşiyor;
  `read_console_messages {onlyErrors:true}` boş olarak raporlanmış. Bağımsız bir tarayıcı oturumuyla
  yeniden koşulmadı (inceleyici bu görevde tarayıcı denetimini tekrarlamadı).
- **Mobil `#panel.acik{transform}` görsel davranışı (gerçek/odaktaki tarayıcıda):** Rapor, ilk ölçümde
  beklenmedik bir "kapalı" transform değeri aldığını, bunun arka plan sekmesinde CSS geçişlerinin
  ilerlememesinden kaynaklandığını ve `transition:none` ile zorlanan ölçümde hem mobilde
  (`translateY(0)`) hem masaüstünde (`translateX(0)`) doğru hedef değeri aldığını belirtiyor.
  **Kanıt var** (raporda ayrıntılı açıklanmış ve kök nedene bağlanmış) ama bu inceleyici tarafından
  gerçek bir tarayıcıda bağımsız olarak yeniden doğrulanmadı; CSS kuralının kendisi (diff'teki
  `ortak.css` `@media (max-width:760px){ #panel{transform:translateY(102%)} #panel.acik{transform:
  translateY(0)} }`) brief'teki mobil davranışla tutarlı görünüyor.

## Sonuç

SPEC: ✅
QUALITY: Approved
FINDINGS: yok
CANNOT-VERIFY: tarayıcı gerileme denetimi JSON'u ve mobil panel transform davranışı (raporda kanıt var, bağımsız tekrar koşulmadı)
