# Görev 8 — inceleme hükmü

## 1. Spec uyumu: ✅

Brief'in Adım 1–6'sı farkla birebir karşılaştırıldı.

- **Adım 1 (başarısız test):** `araclar/test/sandik-html.test.js`'e eklenen üç test brief metniyle
  birebir aynı (diff satır 33–57 = brief satır 35–59). Bağımsız çalıştırma: `node --test
  "araclar/test/*.test.js"` → **51 pass / 0 fail** (rapordaki 48→51 artışıyla uyumlu).
- **Adım 2 (`kunyeSecimleriHTML`):** `sandik-mantik.js`'teki fonksiyon gövdesi ve genişletilmiş
  `return` nesnesi brief'teki kod bloğuyla karakter karakter aynı (bkz. `sandik-mantik.js:286-304`).
  Kullandığı `partininSecimleri`, `oyDegeri`, `partiAdi`, `kacis`, `liste` — hepsi brief'in
  "Consumes" listesindeki mevcut fonksiyonlar; yeni bağımlılık yok.
- **Adım 3 (`index.html` bağlama):** beş alt adımın hepsi doğrulandı —
  1. betik sırası `veri/partiler.js → veri/sandik.js → ortak.js → sandik-mantik.js → satır içi betik`
     (`index.html:171-175`, brief'teki Global Constraints sırasıyla birebir).
  2. `const SANDIK = window.SANDIK; const SM = SandikMantik.olustur(...)` eklendi (`index.html:178-179`).
  3. `Ortak.panelKur({…, kapaninca: …})` eklendi (`index.html:365`); `ortak.js:79`da `panelKur`
     zaten `o.kapaninca` çağrısını destekliyor (Görev 7'den beri) — geriye dönük uyumlu.
  4. `ac(id)` içinde `kunyeSecimleriHTML` çağrısı + `Panel.ac(html+secimler, renk)` +
     `history.replaceState(null,"","#"+id)` eklendi, eski `Panel.ac(html, renk)` silindi.
  5. `hashAc()` + `hashchange` dinleyicisi `ciz();` çağrısından hemen önce eklendi, brief'teki
     kodla birebir aynı.
- **Adım 4 (menü):** `index.html` ve `kaynakca.html`'de `"Ana sayfa"` bağlantısının altına
  `<a href="sandik.html" class="ustmenu-link">Sandık</a>` eklendi; `sandik.html`'e dokunulmadı
  (context notuyla uyumlu, Görev 7'den beri kendi menüsü zaten var — bağımsız doğrulandı).
- **Adım 5 (doğrulama):** `node --test "araclar/test/*.test.js" && node araclar/dogrula.js`
  bağımsız olarak yeniden çalıştırıldı → **51/51 PASS, "hata yok"**. Tarayıcı denetimleri (yerel
  `http.server` + Claude Browser ile bağımsız olarak tekrarlandı — ayrıntı için §3):
  `index.html#akp` panel açıyor, `#p-kisa` = "AK Parti", Escape sonrası `location.hash===""`,
  üç sayfada `.ustmenu-link` sayısı = 3, konsol hatası yok.
- **Adım 6 (commit):** `git show -s --format=%B 43794b8` brief'teki commit mesajıyla (başlık,
  gövde, `Co-Authored-By` satırı dahil) birebir eşleşiyor.

**Sapma yok. Eksik adım yok. Fazladan eklenen (YAGNI) yok. Global Constraints ihlali yok.**
(Kart 66 / bağ 73 sayıları bu görevde değişmedi — diff'te veri dosyalarına dokunulmamış.)

## 2. Görev kalitesi: Approved

Bulgu yok. Ayrıntılar:

- **Kaçış:** `kunyeSecimleriHTML`'de kullanıcıya gösterilen tek serbest metin
  (`partiAdi(...).kisa` — ittifak listesi adı) `kacis()` ile sarılı (`sandik-mantik.js:295`).
  `k.id` ve `etiket(k)` `href`/metin içine kaçışsız yazılıyor, ama bunlar veri dosyasından gelen
  sabit biçimli kimlikler ve tarih/yıl string'leri (kullanıcı girdisi değil) — dosyanın geri
  kalanındaki yerleşik desenle (`kartHTML`, `sonucSatiri` vb. de `data-id`'yi kaçışsız yazıyor)
  tutarlı; yeni bir risk eklemiyor.
- **`file://` uyumu:** `fetch`, ES modülü, harici istek yok; betik sırası grep ile doğrulandı ve
  yukarıda bağımsız olarak teyit edildi.
- **Sahte fikstür sızıntısı:** `araclar/test/fikstur.js` yalnızca test dosyasında kullanılıyor;
  `index.html`, `sandik.html`, `kaynakca.html`, `ortak.js`, `sandik-mantik.js` içinde hiç
  referansı yok (grep ile doğrulandı).
- **`hashAc` mantığı:** `chart.querySelector('[data-id="'+id+'"]')` çağrısından önce `bul(id)`
  ile var olduğu doğrulanıyor; `id` zaten `Ortak.hashOku` ile `/^[a-z0-9-]+$/` biçimine
  sınırlandırılmış, injection riski yok. Kart elemanları `ciz()`'den önce, `DONEMLER.forEach`
  içinde DOM'a ekleniyor (`index.html:200-221`) — bu yüzden `hashAc()`'in `ciz();`'den önce
  çağrılması (brief'in öngördüğü sıra) çalışma zamanında `null` elemana erişim riski taşımıyor;
  bağımsız tarayıcı testinde de sorunsuz çalıştı.
- **Bilgi uydurma:** Bu görevde veri dosyasına yeni sayı/tarih eklenmedi (yalnızca kod);
  kaynak defteri güncellemesi gerekmiyor.
- **Regresyon:** `veri/sandik.js` boş olduğu için `kunyeSecimleriHTML` şu an her partide `""`
  döndürüyor — panelde "Girdiği seçimler" bölümü görünmüyor; bağımsız olarak doğrulandı
  (`p-govde` içinde "Girdiği genel seçimler" yok). Bu, brief'in ve Görev 9'un öngördüğü beklenen
  ara durum, hata değil.

## 3. Bağımsız doğrulama (bu inceleme sırasında yapılan)

- `node --test "araclar/test/*.test.js"` → 51/51 PASS (implementerın raporuyla aynı).
- `node araclar/dogrula.js` → "hata yok", exit 0.
- Yerel `python -m http.server 8321` + Claude Browser ile:
  - `index.html#akp` → `location.hash==="#akp"`, panel açık, `#p-kisa`="AK Parti", konsol hatası yok.
  - Escape → panel kapandı, `location.hash===""`.
  - `kaynakca.html` → `.ustmenu-link` sayısı 3.
  - `sandik.html`'de "Ana sayfa · Sandık(aktif) · Kaynakça & metodoloji" sırası doğrulandı (dosya okuma ile).

## 4. ⚠️ Farktan doğrulanamayanlar

- **`index.html` → `araclar/denetim/soyagaci.js` çıktısının Görev 7'dekiyle birebir aynı olması**
  (kart 66, kenar 73, bant 8, kesinti 4, vurgu 4 vb.) — raporda tam JSON çıktısı var ve bu
  incelemede menü/hash/panel alt kümesi bağımsız olarak yeniden test edildi, ama
  `soyagaci.js` denetim betiğinin tamamı bu incelemede yeniden çalıştırılmadı. Kanıt: raporda var
  (JSON çıktısı, adım 5.1).
- **Mobil düzen (≤760px) regresyonu** — brief'in Adım 5 tarayıcı kontrol listesinde açıkça yok
  (bu görev mobilde değişiklik yapmıyor), bu incelemede de ayrıca test edilmedi. Kanıt yok, ama
  brief bu görevde mobil denetimi talep etmiyor.
- **`file://` ile çift tıklanarak açılan gerçek dosya senaryosu** — hem rapor hem bu inceleme
  `http://localhost` üzerinden test etti (Claude Browser `file://` sayfalarında betik
  çalıştırmıyor); betik sırası grep ile doğrulandı ama gerçek `file://` çift tıklama senaryosu
  hiçbir yerde çalıştırılmadı. Kanıt yok (brief'in kendisi de bu sınırlamayı öngörüp betik sırası
  grep'ini kabul ediyor).
