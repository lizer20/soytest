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
- [x] 12 gereksiz kod taraması (`13cbbad`) ve açılış hafifletme (`519ca05`)
- [x] 13 son denetim (101 birim testi, `dogrula`, `site.js`, GitHub Actions yeşil) ve değişiklik listesi (aşağıda)

## Sabah için değişiklik listesi

Deneme sitesi: **https://emrebiltekin.me/soytest/** (arama motorlarına kapalı). Asıl siteye hiçbir şey gönderilmedi.

**Her sayfada**
1. **Hızlı arama** — üst menünün sağındaki büyüteç, ya da klavyede `/` veya `Ctrl+K`. Parti, genel başkan,
   seçim ve hükümet aynı kutuda; "ozal" yazınca Özal da bulunur. Sonuca basınca ilgili sayfada penceresi açılır.
   Bir grupta çok sonuç varsa "… sonuç daha" ile soyağacına ya da Sandık'a süzülmüş olarak gidilir.
   Kutu boşken sayfalar, örnek aramalar ve klavye kısayolları görünür.
2. **Pencerelerde önceki / sonraki** — pencerenin üstündeki ‹ › düğmeleri ya da ← → tuşları. Sandık'ta tarih
   sırasıyla, soyağacında şemadaki ya da tablodaki sırayla gezer; arkadaki sayfa da o kayda kayar.
3. **Bağlantıyı kopyala** — pencerenin üstünde; telefonda "paylaş" menüsünü açar.
4. **Telefonda pencereyi aşağı çekerek kapatma** — alttan açılan pencerenin tutamağından.
5. **Başa dön** düğmesi (uzun sayfalarda sağ altta) ve sayfalar arası yumuşak geçiş.

**Soyağacı**
6. **Yeni bölüm: liste görünümü** — "şema / liste" düğmesi. Bütün partiler tek tabloda: gelenek, yıllar, durum,
   girdiği genel seçim sayısı, en yüksek oy oranı (yılıyla), yer aldığı hükümet sayısı. Başlığa basınca sıralanır;
   arama, gelenek ve yıl süzgeçleri burada da çalışır. Sayılar yalnız sitedeki kayıtlardan hesaplanır, kaynakçada
   nasıl hesaplandığı yazılı.
7. Arama Sandık'taki gibi çalışıyor (Türkçe harf sadeleştirme, birden çok sözcük) ve eşleşen parti sayısını yazıyor.

**Sandık**
8. **Dönem özetleri** — her dönem bandının altında o dönemdeki seçim ve hükümet sayıları, hükümetlerin ortalama süresi.

**Harita**
9. ← → ile seçimler arasında gezinme; renkler yumuşakça değişiyor; dokunduğunuz il başka seçime geçince de
   seçili kalıyor ve o ilin yeni sonucunu gösteriyor.

**Soyağacı şemasındaki çizgiler (kullanıcının sonradan istediği, 13 Ekim)**
13. Çizgiler artık kartların arkasından geçmiyor ve birbirinin üstüne binmiyor: hemen alttaki partiye giden bağ düz
    iniyor; aradan kart atlayan bağ sütunun yanındaki kendi şeridinden ilerliyor; sütun değiştiren bağ dönem
    aralarından yatay geçiyor. Her çizgi vardığı partinin kenarında bir noktayla bitiyor (lejantta açıklandı).
    Sütun araları biraz açıldı, yıllar "1983–2009" biçiminde sıkıştırıldı ki kartlar daralmasın.
    Ölçümle doğrulandı: üç ekran genişliğinde, dönem kapalıyken de hiçbir çizgi parçası başka bir bağla örtüşmüyor
    ve hiçbir çizgi bir kartın içinden geçmiyor.
14. Kullanıcının isteğiyle şeritlerin arası açıldı: şeritler arası 3,5 → 5 px, karta uzaklık 4,5 → 6 px (sütun arası
    32 px, dış kenarlar 22 px). Kartlar daraldığı için şemadaki kartların iç boşluğu ve rozet harf aralığı biraz
    azaltıldı; yıl ve rozet bütün kartlarda yine tek satırda. 1366–2560 px arası sekiz genişlikte çakışma yok.

**Düzeltmeler ve temizlik**
10. Telefonda kapalı pencere ekranın altında beklemiyor; Sandık'taki arama kutusunun örnek yazısı artık kesilmiyor;
    kaynakçadaki eski "?" ifadesi bugünkü davranışa göre düzeltildi.
11. Kullanılmayan kod çıkarıldı (hiç çizilmeyen kart dalları, kimsenin kullanmadığı dışa aktarımlar, hiçbir yere
    uymayan CSS kuralları, ikiye bölünmüş kurallar birleştirildi). Telefonda açılış hızı asıl siteyle aynı düzeyde.
12. Site denetim aracı yeni özellikleri de deniyor (hızlı arama, liste görünümü, pencere gezinmesi).

## Asıl siteye taşıma

Her madde ayrı commit'tir; `afc7ee8` (noindex) **taşınmaz**. Hepsi onaylanırsa asıl depoda:
`git fetch https://github.com/lizer20/soytest main` → `git diff afc7ee8 FETCH_HEAD -- . ':!docs/GOREV-SOYTEST.md' | git apply`
(asıl depo `c0899a5`'te olduğu sürece temiz uygulanır). Yalnız bazı maddeler onaylanırsa ilgili commit'ler
`git cherry-pick` ile tek tek alınır; sonra testler, `dogrula` ve `site.js` çalıştırılır.
