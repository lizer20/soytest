# Görev 4 — İnceleme hükmü

## 1. Spec uyumu: ✅

Dört dosya da (`sandik-mantik.js`, `veri/sandik.js`, `araclar/test/fikstur.js`,
`araclar/test/sandik-mantik.test.js`) brief'in Adım 1/2/4 kod bloklarıyla **byte-byte
birebir aynı** — doğrulama: brief'teki dört kod bloğu ayrı dosyalara yazılıp committed
halleriyle `diff -u` ile karşılaştırıldı, dördünde de fark çıkmadı.

- Tüm 11 `Interfaces` fonksiyonu (`partiAdi`, `oyDegeri`, `katilimDegeri`, `siralaGenel`,
  `baslikGenel`, `meclisDurumu`, `donemBul`, `kronoloji`, `sonrakiHukumetler`,
  `partininSecimleri`) ve sabitler (`BAGIMSIZ`, `DIGER`, `NOTR = "#8A8D80"`) imzasıyla
  ve dönüş şekliyle brief'e uyuyor.
- `window.SANDIK` (boş `{secimler:[], hukumetler:[]}`) ve `window.SandikMantik` (UMD,
  `typeof module` kontrolüyle Node/tarayıcı ayrımı) global ad alanları doğru.
- `file://` uyumu: `fetch`/ES modülü/harici istek yok; `ortak.js` ile aynı UMD kalıbı.
- Fazladan eklenen ya da eksik kalan bir adım, alan ya da sabit yok (YAGNI ihlali yok).
- Commit `3222139`: mesaj brief'teki Türkçe metinle ve
  `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>` satırıyla birebir eşleşiyor;
  yalnızca 4 dosya stage edilmiş, `docs/.../2026-09-11-sandik-design.md` değişmemiş
  (brief zaten "yalnızca kontrol et" diyordu — rapor grep çıktısıyla bunu doğrulamış).
- "Bilgi uydurulmaz" / kaynak defteri: `veri/sandik.js` boş, eklenen hiçbir sayı yok →
  bu görevde kaynak denetimi konusu yok.
- Sahte fikstür hiçbir üretim dosyasına (henüz var olmayan `index.html`/`sandik.html`)
  sızmıyor; yalnızca test dosyası ve (henüz oluşturulmamış) `araclar/denetim/fikstur.html`
  yorumunda referans var — brief'teki yorum metni de zaten bunu söylüyor.
- Kart/bağ sayısı (66/73) etkilenmedi; diff `veri/partiler.js`'e dokunmuyor.

## 2. Görev kalitesi: Issues

Kod, brief'in verdiği tam metnin transkripsiyonu; el ile okuma sonucunda çöken ya da
yanlış hesaplayan bir şey bulunmadı. Ancak `Interfaces`'te tanımlı iki davranış hiç test
edilmiyor, ve bunlardan biri gerçek bir görünürlük açığına işaret ediyor:

- **Important** — `sandik-mantik.js:45-46` (`meclisDurumu`): `girenler`/`giremeyenler`
  filtreleri sırasıyla `s.sandalye > 0` ve `s.sandalye === 0` kullanıyor. `sandalye: null`
  olan bir satır (oy biliniyor ama sandalye doğrulanamamış) her iki listeden de sessizce
  düşüyor — üstelik bu tam olarak design doc'un kendi örneğinde var
  (`docs/superpowers/specs/2026-09-11-sandik-design.md:149`: `{parti:"dsp", oy:null,
  sandalye:null}`). Panelde parti tamamen kaybolur, "—" ile "bilinmiyor" gösterilmez.
  Öneri: `girenler`/`giremeyenler`'e girmeyen ama `k.sonuc`'ta olan satırları ayrı bir
  `belirsiz` (ya da benzeri) alanda toplamak, ya da en azından bu davranışı bilinçli bir
  tasarım kararı olarak spec'e not düşmek.
- **Important** — `sandik-mantik.js:76` (`kronoloji`, `kaplar` dalı): askerî yönetim
  aralığına düşen kayıtları toplayan `kaplar` hiç test edilmiyor. Fikstürdeki hiçbir
  seçim/hükümet 1960-05-27–1961-10-14 ya da 1980-09-12–1983-11-05 aralığına düşmüyor,
  bu yüzden `araclar/test/sandik-mantik.test.js`'teki "kronoloji" testi bu dalı hiç
  çalıştırmıyor. Kod okumada mantık doğru görünüyor, ama `Interfaces`'te adı geçen bir
  alan (`kaplar: {[i]: oge[]}`) için hiçbir doğrulama yok.
- **Important** — `sandik-mantik.js:70-71` (`kronoloji`, sıralama): "aynı tarihte seçim
  hükümetten önce gelir" kuralı (`a.tur === "secim" ? -1 : 1`) fikstürde hiç sınanmıyor —
  fikstürdeki hiçbir hükümet `baslangic`ı bir seçim `tarih`iyle çakışmıyor
  (`1999-05-28`/`1999-04-18`, `2002-11-18`/`2002-11-03`). Bu spec'te açıkça adı geçen bir
  kural olduğu için test kapsaması yok.

Üç bulgu da brief'in verdiği kodun/fikstürün kendisinden kaynaklanıyor — uygulayıcı
brief'i harfiyen kopyaladı, bu yüzden "uygulama hatası" değil, brief + fikstür birlikte
bu üç davranışı doğrulamasız bırakmış. Yine de kalite hükmü teslim edilen koda bakar; bu
yüzden **Issues** olarak işaretliyorum — bir sonraki görevde (gerçek 1960/1980 verisi ve
gerçek sandalye:null satırları eklendiğinde) bu üç noktanın ya test edilmesi ya da bilinçli
olarak "böyle kalsın" diye işaretlenmesi gerekiyor.

Kritik (çöken kod, veri bütünlüğü, kaçırılmamış HTML) ya da Minor (biçim/adlandırma)
seviyesinde bulgu yok.

## ⚠️ Farktan doğrulanamayanlar

- `sandik-mantik.js` ve `araclar/test/fikstur.js`'in UMD dalının gerçek bir tarayıcıda
  (`window` nesnesiyle) çalıştığı bu görevde denenmedi — yalnızca Node/`vm` üzerinden
  (`araclar/yukle.js`) test edildi. Kalıp `ortak.js` ile birebir aynı olduğu için risk
  düşük, ama raporda tarayıcı kanıtı (ör. bir denetim HTML'i) yok — zaten görev bunu
  istemiyor (Node'da test edilen saf mantık).
- Global Constraints'teki yükleme sırası (`veri/partiler.js → veri/sandik.js →
  ortak.js → sandik-mantik.js → sayfa kodu`) bu görevde hiçbir HTML dosyasında
  kurulmuyor (henüz `sandik.html`/`sandik-sayfa.js` yok) — dolayısıyla bu kısıt bu
  diff'te test edilemez, ilerideki bir görevin konusu.
- `araclar/denetim/fikstur.html` (fikstür yorumunda adı geçen tarayıcı denetim aracı)
  henüz depoda yok; ne zaman/hangi görevde oluşturulacağı brief'te belirtilmemiş.
