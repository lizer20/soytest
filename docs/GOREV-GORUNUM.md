# Görev: görünüm ve okunabilirlik turu (12 Ekim 2026)

> Oturum kapanır ya da bağlam biterse **yeni oturum bu dosyayı okuyup kaldığı yerden devam eder.**
> Aşağıdaki "İlerleme" listesini güncel tut; her adımdan sonra commit'le ve **yalnızca çalışma dalına** it.

## Kullanıcının isteği (birebir)

> ben dışarı çıkıyorum saatlerce vaktin var siteyi temelleri bozmadan görünüş olarak optimizasyon
> olarak sıfırdan tara ve bir sürüm hazırla yayınlamadan önce ben bakacağım. site tasarımını
> seviyorum ama sandık kısmının görünüş olarak çok fazla gelişmesi gerekiyor boş dataları karşı
> tarafa göstermeyelim olabildiğince saklı dursun boş olanlar. daha okunabilir daha profesyonel
> duran bir site istiyorum genel temayı sabit tutarak bunu yap. yaptığın değişiklikleri bana
> listele en sonunda. bu promptu kaydet token biterse tekrar açılınca da devam et

## Kurallar (bu görev için)

- **YAYINLAMA YOK.** `git push origin HEAD:main` yapılmaz. Yalnızca `claude/elegant-tesla-uaepdv`
  dalına commit + push. Kullanıcı bakıp onaylayınca `main`'e alınacak.
- Genel tema sabit: renkler, yazı tipleri, koyu zemin, soyağacı düzeni korunur. Temel yapı
  (veri dosyaları, global'ler, `file://` ile çalışma, test altyapısı) bozulmaz.
- Veri uydurulmaz; görünüm turu veriye dokunmaz.
- **Boş veri gizlenir:** "—" ile dolu satırlar/sütunlar/kartlar mümkün olduğunca gösterilmez
  (değer yoksa satır hiç çizilmez; tüm sütun boşsa sütun çizilmez).
- Öncelik **Sandık** sayfası; sonra soyağacı, harita, kaynakça için okunabilirlik/profesyonellik.
- Optimizasyon: gereksiz yeniden çizim, ağır DOM, büyük dosya yükleri, mobil görünüm.
- Her adımda: `node --test "araclar/test/*.test.js"` + `node araclar/dogrula.js` + Playwright ekran görüntüsü.
- Sonunda kullanıcıya Türkçe, teknik olmayan bir **değişiklik listesi** verilir.

## İlerleme

- [x] 0. Görev kaydı (bu dosya)
- [x] 1. Mevcut durum taraması (ekran görüntüleri: masaüstü + telefon, dört sayfa)
- [x] 2. Sandık: boş veri gizleme (kartta/pencerede "—", "veri yok", "katılım —", boş satır/sütun yok)
- [x] 3. Sandık: görsel düzen (yıl çizelgesi, hizalı satırlar, yeni kartlar, dönem çubuğu)
- [x] 4. Soyağacı, harita, kaynakça: okunabilirlik düzeltmeleri
- [x] 5. Optimizasyon (yazı tipleri inceltildi, harita verisi sonradan yükleniyor)
- [x] 6. Son denetim (93/93 test, dogrula "hata yok", 181 iç bağlantı sağlam, 85 Sandık + 94 parti
      penceresi ve 40 harita tablosunda "—"/"?" yok, file:// üzerinde konsol hatası yok)
- [x] 7. Değişiklik listesi kullanıcıya (aşağıda)

**Durum (12 Ekim 2026):** kullanıcı baktı ve onayladı ("baktım güzel olmuş yayınla"); `main`'e
alındı ve yayınlandı. Görev kapandı.

## Değişiklik listesi (kullanıcıya verilen)

**Sandık**
1. Yeni düzen: her dönem bandında solda yıl çizgisi; o yılın seçimleri ve hükümetleri yılın yanında.
2. Ayrıntılı sonucu olan seçimler kart; hükümetler, TBMM'deki cumhurbaşkanlığı seçimleri, ara seçimler
   ve ülke geneli sonucu bulunamayan yerel seçimler sütunları hizalı tek satır.
3. Hükümet satırı: başlangıç tarihi · numara · (yaygın adı) · başbakan · partiler · bitiş tarihi ve nedeni.
   Öne çıkan hükümetler (İlk koalisyon, Milliyetçi Cephe, ANAYOL, ANASOL-D…) büyük yazılı.
4. Boş veri gizlendi: "—", "veri yok", "oy dağılımı kayıtlı değil", "katılım —", "dağılımı bilinmeyen"
   satırı, hiç oyu bilinmeyen seçimde "oy" sütunu ve çubuğu, boş "Bağımsızlar" satırı, ittifak
   listelerindeki "—" sandalyeler artık görünmüyor (bilinenler aynen duruyor).
5. Kartlar: genel seçimde 5 partiye kadar sandalye/oy listesi ve altta katılım · baraj · baraj altı;
   yerel seçime "… birinci parti" başlığı, renkli ilk üç, belediye başkanlıkları ve büyükşehirler;
   referandumda Evet/Hayır yüzdeleri çubuğun üstünde; cumhurbaşkanlığında turlar ve adaylar.
   Tek partili meclis kartları dar ve kısa.
6. Üstte kaydırırken sabit kalan dönem çubuğu (1923–1945 … 2016–2026), okunan dönem işaretli.
7. Tür düğmelerinde kayıt sayıları (Genel 27, Yerel 21, … Hükümet 67).
8. Pencerede: uzun başlık kapatma düğmesinin altına kaymıyor; gri başlıklar koyu; adaylar
   alt alta (aday, destekleyen parti, oy); hükümet listesi yeni satır biçiminde; katılım
   bilinmiyorsa yazılmıyor; oy oranı yoksa oy sayısı tek başına yazılıyor.

**Soyağacı**
9. Arama kutusu genişledi (yazı kesilmiyor).
10. Parti penceresinde bilinmeyen yıl "?" yerine "1955'ten", "1958'e kadar"; bilinmeyen oy/sandalye
    yazılmıyor; 2015'teki iki seçim "Haz 2015 genel", "Kas 2015 genel" diye ayrılıyor.

**Harita**
11. İl il sonuç tablosunda sonucu bilinmeyen il satırı ve hiç dolu olmayan sütun gösterilmiyor
    (362 "—" hücresi kalktı).

**Kaynakça**
12. Sağda (telefonda başta) "bu sayfada" içindekiler listesi.
13. "—" işareti açıklaması yeni kurala göre yazıldı; "İl il harita henüz yoktur" eski cümlesi düzeltildi.

**Bütün site**
14. Yazı tipi dosyası küçüldü (399 KB → 293 KB; sıkıştırılmış 297 KB → 216 KB), görünüm aynı.
15. Sandık'ta harita verisi sayfa çizildikten sonra, soyağacında parti penceresi açılınca yükleniyor.
16. Alt bilgi bağlantıları mavi değil, tema renginde; "filtreleri temizle" düğmesinde üzerine
    gelince yazının kaybolması düzeltildi.
17. Paylaşım görselleri yeni Sandık düzeninden yeniden üretildi.

## Yeni oturum için teknik not

- `sandik-mantik.js`: yeni `kartMi`, `genisKartMi`, `yilGruplari`, `olayHTML`, `hukumetSatiriHTML`,
  `yilEki`; `seritHTML` kaldırıldı (yerine `hukumetSatiriHTML`). `cubukHTML` değer yoksa "" döner.
- `sandik-sayfa.js`: yıl grupları (`.s-yil` > `.s-kartlar` + `.s-olaylar`), tıklanabilir öğe sınıfı
  `.s-ac`, dönem çubuğu `#atla`, harita verisi `Ortak.betikYukle` ile.
- `ortak.js`: `betikYukle(src)` (file:// uyumlu, <script> ile).
- `araclar/font-incelt.py`: ortak.css'teki gömülü yazı tiplerini incelten betik (fonttools gerekir).
