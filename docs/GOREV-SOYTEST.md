# Görev: soytest deneme turu (12–13 Ekim 2026)

> Oturum kapanır ya da bağlam biterse **yeni oturum bu dosyayı okuyup kaldığı yerden devam eder.**
> Çalışma deposu: `lizer20/soytest` (yerelde `/home/user/soytest`). Asıl site (`lizer20/soyagaci`)
> kullanıcı onaylamadan **değiştirilmez**. Her adımdan sonra "İlerleme"yi güncelle, commit'le, `main`'e it.

## Kullanıcının isteği (aynen)

> başka ne gibi adımlarla ilerleyebiliriz bunların listesini çıkart ve başla bana sormana gerek yok siteyi
> profesyonel gözükmesi ve her şeyin akıcı olması çok önemli eklenebilecek bir şey de olur yeni bir bölüm yada
> bir özellik ben uyumaya gidiyorum sen bunu soytest reposunda dene o repoya bir kopyasını yap sitenin ve
> gelişmeleri ilk önce orada dene istediğini ekleyebilirsin bana sorma sabah uyanınca oradan bakar onayladığım
> şeyleri asıl siteye ekleriz. her şeyi yaptıktan sonra sitedeki gereksiz kodları tarayıp ihtiyacımız
> olmayanları çıkartır mısın

## Düzen

- İlk commit asıl sitenin `c0899a5` anındaki birebir kopyasıdır. Sonraki her madde **ayrı commit**tir;
  onaylanan maddeler asıl depoya tek tek taşınabilir (`git format-patch` / `git apply`).
- Yalnız denemeye ait değişiklik (arama motorlarına kapatma, `noindex`) ayrı commit'tir ve **taşınmaz**.
- Kurallar aynen geçerli: bilgi uydurulmaz (yeni bölümler yalnız mevcut veriden türetilir), tema korunur,
  `file://` ile çalışma bozulmaz, harici istek yok, kullanıcının e-postası hiçbir servise gönderilmez.
- Kullanıcının daha önce reddettiği ya da önerilmemesini istediği maddeler (bkz. `docs/DEVIR-NOTU.md`) yapılmaz.

## Liste

### A. Akıcılık ve profesyonel görünüş
1. **Hızlı arama** — her sayfada `/` ya da Ctrl+K (üst menüde arama düğmesi): parti, genel başkan, seçim,
   hükümet; sonuç seçilince ilgili sayfada penceresi açılır.
2. **Pencerelerde önceki / sonraki** — ← → tuşları ve pencere başında oklar (Sandık'ta tarih sırası,
   soyağacında şemadaki sıra).
3. **Telefonda pencereyi aşağı çekerek kapatma.**
4. **Bağlantıyı kopyala / paylaş** düğmesi pencerelerde.
5. **Yumuşak geçişler** — sayfalar arası geçiş, pencere açılışı; hareket azaltma tercihine saygı.
6. **Harita** — ← → ile seçimler arasında gezinme, renklerin yumuşak geçişi.
7. **Soyağacı araması** Sandık'la aynı kurala (Türkçe harf sadeleştirme, her sözcük) ve sonuç sayısı.
8. **Başa dön** düğmesi uzun sayfalarda.
9. **Klavye kısayolları** yardımı (`?`).

### B. Yeni bölüm
10. **Parti dizini** — bütün partiler tek tabloda; ada, kuruluşa, ömre, geleneğe göre sıralama ve süzme;
    satıra tıklayınca parti penceresi. Yalnız mevcut veriden.
11. **Sandık dönem özetleri** — dönem bantlarında seçim ve hükümet sayısı, ortalama hükümet süresi (tarihlerden).

### C. Temizlik
12. **Gereksiz kod taraması** — kullanılmayan CSS seçicileri, JS işlevleri ve dışa aktarımları, eski dosyalar.
13. Son denetim (testler, `dogrula`, `site.js`, telefon ve masaüstü ekran görüntüleri) ve kullanıcıya
    Türkçe değişiklik listesi.

## İlerleme

- [x] Kopya (`006731d`), görev kaydı; Pages açık: https://emrebiltekin.me/soytest/
- [x] 2, 3, 4, 7 pencere gezinme / bağlantı / aşağı çekip kapatma / soyağacı araması (`8b06616`)
- [x] 1 + 9 hızlı arama ve kısayollar (`hizli-ara.js`, `3e0ddc4`)
- [x] 10 parti dizini (liste görünümü, `a913121`)
- [x] 6 harita gezinme ve renk geçişi; 5, 8, 11 geçişler, başa dön, dönem özetleri (`878373d`)
- [x] Gözden geçirme düzeltmeleri: kapalı pencere gizli, arama kutusu 400px, kaynakça, esc, denetim aracı (`9f85929`)
- [ ] 12 gereksiz kod taraması
- [ ] 13 son denetim ve değişiklik listesi
