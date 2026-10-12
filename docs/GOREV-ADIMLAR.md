# Görev: sonraki adımlar turu (12 Ekim 2026)

> Oturum kapanır ya da bağlam biterse **yeni oturum bu dosyayı okuyup kaldığı yerden devam eder.**
> Her adımdan sonra "İlerleme"yi güncelle, commit'le, dala ve `main`'e it (yayın).

## Kullanıcının isteği

Önerilen 13 maddelik listeden (bkz. aşağıdaki numaralar) kullanıcı: **"şimdilik 2,3,4,5,6,8,10,11,12,13 yapalım"**.
Yapılmayacaklar (şimdilik): 1 (ana sitenin site haritası), 7 (genel başkan listeleri), 9 (1963–1984 yerel il oy oranları).

## Maddeler

- **2** Eski adresin (`emrebiltekin.me/turkiye_siyasi_partiler_soyagaci/…`) yeni adrese yönlendirilmesi:
  eski adla küçük bir yönlendirme deposu (`index.html`, sayfa adları ve `404.html` → `/soyagaci/` aynı sayfa ve `#`).
  GitHub Pages'in açılması kullanıcının tek tıkı gerektirebilir (Ayarlar → Pages). **Önce yerel `origin`
  `lizer20/soyagaci` yapılmalı**, yoksa itmeler yeni depoya gider.
- **3** Sandık: hükümet satırına tıklayınca pencere (süre, hangi seçimden sonra, partiler, bitiş nedeni ve not,
  önceki/sonraki hükümet). Yalnız mevcut veriden; süre tarihlerden hesaplanır.
- **4** Sandık'ta arama (parti, kişi, yıl).
- **5** Soyağacı parti penceresinde "hükümette geçen süre" (hükümet sayısı ve toplam süre, tarihlerden).
- **6** 2018/2023 ittifak listelerinden seçilen vekil sayıları (6 boş değer): resmî kaynak + bağımsız ikinci kaynak,
  kaynak defterine işlenir. Doğrulanamayan boş kalır.
- **8** Küçük açık kalemler: 2007 referandumunda MHP ve AK Parti tutumu (ikinci kaynak), 1931–1943 seçimlerinde
  bağımsız milletvekili var mı.
- **10** README güncellemesi.
- **11** Tek komutla site denetimi aracı (`araclar/denetim/site.js`: konsol hatası, iç bağlantılar, "—"/"?" taraması).
- **12** GitHub'da otomatik test (Actions; ortam izin vermezse kullanıcıya söylenir).
- **13** Sandık'ın telefonda daha hızlı açılması (ekran dışındaki bölümlerin çizimini ertelemek).

## Kurallar

- Bilgi uydurulmaz; iki kaynak kuralı (resmî + bağımsız ikinci), Vikipedi kaynak değildir.
- Tema ve düzen korunur; `file://` ile çalışma bozulmaz; kullanıcının e-postası hiçbir servise gönderilmez.
- Testler + `node araclar/dogrula.js` + tarayıcı denetimi her adımda.

## İlerleme

- [x] 10 README
- [x] 11 Site denetim aracı (`araclar/denetim/site.js`, ~1,5 dk)
- [x] 12 Otomatik test (`.github/workflows/denetim.yml`; ilk iki çalıştırma yeşil)
- [x] 13 Hızlı açılış (`content-visibility` + `kaydir()`; 4x yavaş işlemcide açılış 966→~600 ms, donma 618→~250 ms)
- [x] 3 Hükümet penceresi (`hukumetPanelHTML`, adres `#hukumet-57`, numarasızlar `#hukumet-2018-07-09`)
- [x] 4 Sandık'ta arama (`aramaMetni`/`aramaEslesir`; Türkçe harf sadeleştirme)
- [x] 5 Hükümette geçen süre (`partiHukumetleriHTML`; kaynakça "süre" maddesi)
- [x] 6 İttifak vekil sayıları — **doldurulamadı**: resmî kaynak yok (TBMM albümü Aralık 2023 üyeliği; Haziran 2023 arşivine erişim yok); değerler boş kaldı, deftere işlendi
- [x] 8 Küçük açık kalemler — 1931–1943 bağımsızlar **düzeltildi** (TBMM Türk Parlamento Tarihi + Olgun + Baltacı); 2007 MHP/AK Parti tutumu ikinci kaynak yok, yazılmadı
- [x] 2 Eski adres yönlendirmesi — kullanıcı Claude GitHub uygulamasını `lizer20.github.io`'ya kurdu; klasör `turkiye_siyasi_partiler_soyagaci/` o depoya eklendi (85ec3b3). Kaynak dosyalar: `araclar/eski-adres/`
