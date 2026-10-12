# Görev 7 — inceleme hükmü: Sandık sayfası

## 1. Spec uyumu — ✅

Brief'in 8 adımının tamamı farkla ve depodaki güncel dosyalarla karşılaştırıldı.

- **Adım 1** (`araclar/denetim/sandik.js`, `araclar/denetim/fikstur.html`): brief'teki kodla
  birebir aynı (diff karakter karakter karşılaştırıldı).
- **Adım 2** (araç çubuğu taşıma): `index.html`'in `<style>` bloğundan `.araclar`, `.yil-filtre`,
  `.yil-filtre input[type=range]`, `.yil-deger`, `.temizle-buton`, `.temizle-buton:hover`,
  `.temizle-buton.aktif` çıkarılmış, `ortak.css`'te "ortak bileşenler" başlığının hemen altına
  eklenmiş (`ortak.css:114-130`). `.ara-kutu` kuralları `index.html`'de doğru şekilde kalmış.
  Mobil sorgudaki üç satır (`gap:12px`, `width:100%`, `flex:1`) `ortak.css`'in dosya sonundaki
  mevcut `@media (max-width:760px)` bloğuna eklenmiş (`ortak.css:244-246`, `#panel.acik`
  kuralından sonra) — yeni blok açılmamış. `index.html`'de tekrar/kalıntı kural yok; doğruladım
  (`grep -n ".araclar{" index.html ortak.css` → yalnızca `ortak.css`'te iki eşleşme: temel kural +
  mobil override).
- **Adım 3** (`sandik.css`): brief'teki kodla birebir aynı.
- **Adım 4** (`sandik-sayfa.js`): brief'teki kodla birebir aynı; `Consumes`/`Produces`
  arayüzleri (`Ortak.bantKur/bantDurum/panelKur/hashOku`, `SandikMantik.olustur(P,O)` →
  `kronoloji/kartHTML/seritHTML/panelHTML/kacis`) gerçek `ortak.js` ve `sandik-mantik.js`
  imzalarıyla karşılaştırıldı, tam örtüşüyor.
- **Adım 5** (`sandik.html`): brief'teki kodla birebir aynı; script sırası Global
  Constraints'teki sırayla (`veri/partiler.js → veri/sandik.js → ortak.js → sandik-mantik.js →
  sandik-sayfa.js`) birebir eşleşiyor.
- **Adım 6/7**: aşağıda "Bağımsız doğrulama" bölümünde tekrar çalıştırıldı.
- **Adım 8**: tek commit `07ea1a6`, mesaj brief'teki metinle birebir aynı, sonunda doğru
  `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>` satırı var.

**Eksik yok, fazladan eklenen yok, brief'ten sapan değer yok.**

**Global Constraints kontrolü:**
- `file://` uyumu: `grep -n "fetch(\|import \|export \|XMLHttpRequest\|type=\"module\""` yeni
  dosyaların hepsinde (`sandik-sayfa.js`, `sandik.html`, `araclar/denetim/*`) sıfır eşleşme —
  bağımsız doğrulandı.
- Global ad alanları ve script sırası: doğru.
- Türkçe adlandırma: korunmuş (`ac`, `kapat`, `ciz` yerine mevcut kod tabanına uygun `ac`,
  `uygula`, `hashAc`, `bantBul` vb.).
- Bilgi uydurma: bu görevde veri dosyasına hiçbir sayı eklenmedi (`veri/sandik.js` boş kalıyor).
- Mobil kırılım 760px: korunmuş.
- 66 kart / 73 bağ: `araclar/denetim/soyagaci.js` çıktısı bağımsız olarak yeniden çalıştırılmadı
  ancak raporda birebir Görev 3 değerleriyle eşleşiyor; bu görev soyağacı verisine dokunmuyor.
- Menü (`index.html`/`kaynakca.html`) değişmemiş — doğrulandı, Görev 8'e bırakılmış.
- Commit tek ve mesaj kurallara uygun.

## 2. Görev kalitesi — Approved

Kritik ya da önemli bulgu yok. Bir küçük (Minor) not dışında temiz.

### Bağımsız doğrulama (raporun ötesinde, bizzat çalıştırıldı)

- `node --test "araclar/test/*.test.js"` → 48/48 PASS (rapordaki sayıyla aynı).
- `node araclar/dogrula.js` → `hata yok`.
- `http://localhost:8123/araclar/denetim/fikstur.html` (1400px) üzerinde
  `araclar/denetim/sandik.js` tarayıcıda yeniden çalıştırıldı → çıktı brief'in beklediği değerle
  ve raporla birebir aynı: `kart:5, serit:2, bant:8, kesinti:4, bos:5,
  hukumetKapali:{gizli:true,basili:"false"}, yil2003:["serit"], yilEnSag:false,
  panel:{acik:true, baslik:"1999 Genel Seçimi", hash:"#1999-04-genel"},
  kapaninca:{inert:true, odakGeri:true, hash:""}, bantKapali:0`.
- Mobil (375×812) görünüm bizzat kontrol edildi: `.s-satir` tek sütun (`gridTemplateColumns`
  tek değer, `347px`), araç çubuğu düğmeleri sarıyor, kartlar tam genişlik.
- `fikstur.js` sızıntı kontrolü: `grep -rn "fikstur"` ile yalnızca `araclar/test/*.test.js`
  (Node testleri) ve `araclar/denetim/fikstur.html`/`araclar/denetim/sandik.js` (denetim
  aracının kendisi) referans veriyor; `sandik.html` ya da başka bir üretim dosyası
  `araclar/test/fikstur.js`'e dokunmuyor.
- `sandik.html`'in menülerde henüz bağlı olmadığı doğrulandı (`grep -n "sandik.html" index.html
  kaynakca.html` → eşleşme yok).

### Bulgular

**Minor** — `sandik.css:142-143` (`.s-ilk3 li{display:inline;margin-right:9px}`), spesifikasyon
§6.8 ("Mobil ≤760px … ilk üç parti alt alta dizilir") ile tam örtüşmüyor: mobil medya
sorgusunda (`sandik.css:157-160`) `.s-ilk3` için bir override yok, öğeler her genişlikte
`inline` kalıyor. Pratikte kısa parti kısaltmalarıyla (`DSP %42,9 · 6`) tek satıra sığıyor ve
görsel olarak bozuk değil (375px'te bizzat kontrol edildi, bkz. ekran görüntüsü), ama daha uzun
parti adlarında/dört+ partili seçimlerde ham `inline` sarma "alt alta dizilir" ifadesinin
kastettiği düzenli tek-sütun listeye göre daha düzensiz sarabilir. Bu, brief'in Adım 3 kod
bloğunda birebir verilmiş; uygulayıcının sapması değil, brief'in kendisinde. Yine de ileride
mobil cila geçilecekse not edilmeli. Öneri: `@media (max-width:760px){ .s-ilk3 li{display:block;
margin-right:0} }` eklenebilir.

## 3. ⚠️ Cannot verify from diff

- **Gerçek `file://` çift tıklama testi**: rapor, tarayıcı panelinin `file://` sayfalarında
  betik çalıştırmadığı gerekçesiyle bunun yerine script sırası + `fetch`/`import`/`export`
  yokluğunun grep ile gösterilmesini kanıt olarak sunuyor. Bu, yürütücüye önceden verilen
  talimatla (bağlam notu) örtüşen, kabul edilmiş bir ikame; bağımsız olarak da aynı grep'i
  tekrarladım, sonuç aynı (sıfır eşleşme). Dosyanın gerçek bir işletim sistemi tarayıcısında
  `file:///…/sandik.html` olarak açılıp açılmadığı bu incelemede de doğrudan denenmedi.
- **66 kart / 73 bağ sayısının bu görevden etkilenmediği**: raporda verilen
  `araclar/denetim/soyagaci.js` çıktısı (kart:66, kenar:73) bu incelemede yeniden çalıştırılmadı;
  ancak bu görev soyağacı verisine ya da çizim mantığına dokunmuyor (yalnızca ortak CSS
  taşınması), dolayısıyla etkilenmesi beklenmez ve diff bunu doğruluyor.
