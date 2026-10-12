# Hüküm: Görev 9 — Dönem 6, Düzeltme turu 2

İncelenen: `57757f8` (df8e6ae..57757f8), paket
`.superpowers/sdd/2026-09-11-sandik/review-task-9-d6-fix2.md`, raporun "Düzeltme turu 2" bölümü,
defterin "Düzeltme turu 2 (2026-09-25)" bölümü. Önceki hüküm:
`.superpowers/sdd/2026-09-11-sandik/review-task-9-d6-fix1-verdict.md` (SPEC ❌, 2 Important).
Not: dönem 7 paralel çalıştığı için çalışma ağacına bakılmadı; `57757f8`'in tam içeriği
`git archive 57757f8` ile izole bir dizine çıkarılıp orada `node --check`, `node --test`
(57/57) ve `node araclar/dogrula.js` (`hata yok`, `yerel bant 6: 58` değişmedi) çalıştırıldı.

## 1. Spec uyumu: ❌ (2 Important'tan 1'i kapandı, 1 yeni biçimde açık kalıyor)

## 2. Görev kalitesi: Issues

### Önceki bulguların durumu

1. **Demirtaş `parti:"hdp"` [B] kaynaksızdı → KAPANDI, doğru çözümle.** Ekip bu turda YSK Kararı
   2014/3227'nin **tam metnini** taradı (parti/önerge/imza sözcükleri hiç geçmiyor), Resmî
   Gazete'deki resmî **Örnek: 400/401** kesin ve geçici aday listesi formlarını buldu (**parti
   sütunu yok** — yalnızca ad, doğum tarihi, öğrenim), 2014 YSK karar arşivinde 10 kararı daha
   taradı ve hiçbirinde adayı partiye bağlayan resmî bir kayıt bulamadı. Ayrıca Anayasa m.101'in
   CB adaylığını yalnızca "20 milletvekili teklifi" ya da "oyların %10'unu birlikte aşan
   partiler(in) ortak adayı" ile sınırladığını, HDP'nin 2014'te bu %10'u tek başına aşamadığını
   ([B] TÜİK Tablo 1/24, 2011'de 15 parti arasında HDP yok) gösterdi — yani "HDP adayı" resmî bir
   parti adaylığı değil, siyasal bir nitelemedir. Bu doğru bir sonuç ve `parti:"hdp"` yerine
   `destek:"HDP adayı"` yazılması **modele doğru uyuyor**: spesifikasyon §5.5 `destek` alanını
   tam olarak "resmî parti adaylığı değilse" durumlar için tanımlıyor. Metin de kaynağın kendi
   ifadesini (Özipek: "HDP adayı Selahattin Demirtaş") aşmıyor — anayasal/istatistiksel çıkarım
   yalnızca `parti:`'nin neden yanlış olduğunu gerekçelendirmek için kullanılmış, veriye
   yazılmamış. **Erdoğan'ın `parti:"akp"` değeri de sağlam:** [B] YSK Kararı 2014/3579, AK
   Parti'nin kendi dilekçesinde Erdoğan'ı "Cumhurbaşkanı adayı"mız diye tarif ediyor — bu, resmî
   bir kurumun (YSK) tuttuğu tutanakta partinin kendi beyanı, iyi bir birincil kaynak. **Kapandı.**
2. **2004/2009/2014 büyükşehirde TÜİK'in bağımsızlığı kanıtlanamıyordu → KISMEN KAPANDI.**
   - **Şeffaflık:** defterde artık TÜİK yayın 3584'ün itirafı (ulusal toplamlar YSK'dan, ilçe/
     belediye kırılımı da ilçe seçim kurulu tutanaklarından **aynen** alınıyor) açıkça alıntılanmış
     ve "TÜİK–YSK örtüşmesi bağımsız doğrulama sayılmaz" diye kayıtlara geçirilmiş. **Açık ve
     doğru.**
   - **AA/TRT ikinci kaynak sayılır mı:** evet — brief'in "tam tablo yayımlayan ulusal gazete/haber
     seçim veritabanları yalnızca ikinci kaynak olabilir" kuralına (kullanıcı kararı, 2026-09-11)
     uygun şekilde kullanılmış ve defterde **"haber veritabanı"** olarak işaretlenmiş.
   - **%0,02–0,04 farkları:** elle kontrol edildi (İstanbul 1.917.577/4.231.487=%45,32 vs AA
     %45,31; Ankara 901.001/1.636.633=%55,05 vs AA %55,03; İzmir 562.561/1.192.541=%47,17 vs AA
     %47,18) — hesaplar doğru ve üçü de %0,5 toleransının çok altında; birincil kaynağın (YSK/TÜİK)
     sayısı korunmuş, brief'in tolerans kuralına uygun işlenmiş. Yazılan değer sayısal değil
     kategorik (kazanan parti) olduğu ve zaten YSK+TÜİK ile sabitlendiği için ayrı bir
     "Uyuşmazlık: X vs Y (%Z)" satırı gerekmiyor — AA/TRT burada ek doğrulama, birincil/ikincil
     kaynak çifti değil.
   - **Sonuç:** İstanbul'un üç yılı (2004/2009/2014, AA+TRT) ve Ankara/İzmir'in 2004'ü (AA) artık
     **gerçekten bağımsız üçüncü bir kaynakla** doğrulanmış durumda. **Ama Ankara ve İzmir'in 2009
     ve 2014 sonuçları hâlâ yalnızca YSK+TÜİK'e dayanıyor** ve TÜİK'in bağımsız olmadığı artık
     kanıtlanmış olduğundan bu dört hücre fiilen **tek kaynak ailesinden**. Ekip bunu aramış
     (TRT'nin Ankara/İzmir dosyaları, bianet, Doğruluk Payı, dergipark) ama bulamamış ve durumu
     açıkça deftere yazmış — **iyi niyetli ve şeffaf, ama sorunun kendisi çözülmedi.**

### Yeni/açık bulgu

**Important — `veri/sandik.js`, `2009-03-yerel.buyuksehir.{ankara,izmir}` ve
`2014-03-yerel.buyuksehir.{ankara,izmir}`.** Bu dört değer artık fiilen tek kaynak ailesinden
(YSK + YSK'nın verisini aynen kopyalayan TÜİK); brief'in "buyuksehir yalnız kazanan parti, [B] +
ikinci kaynak" kuralı ve projenin kendi emsali (aynı koşulda ulusal belediye meclisi sayıları
`null` yapıldı — bu görevde iki kez, dönem 4/5'te de) bu dört hücre için de karşılanmıyor.
Öneri: ya gerçekten bağımsız bir üçüncü kaynak (haber arşivi, akademik makale, o dönemin gazete
taraması) bulunmalı, ya da tutarlılık için bu dört hücre `null`'a çekilmeli/`buyuksehir`'den
çıkarılmalı — controller'ın açık onayı olmadan mevcut haliyle "iki bağımsız kaynaklı" kabul
edilmemeli. (İstanbul ve 2004'ün tamamı artık gerçekten iki bağımsız kaynaklı; bu bulgu yalnızca
belirtilen dört hücreyle sınırlı.)

### Minor

Yok.

## 3. ⚠️ Farktan doğrulanamayanlar

- **Bu turda alıntılanan yeni belgeler** (YSK 2014/3227 tam metni, RG Örnek 400/401 formları,
  2014 YSK karar arşivi taraması, AA arşiv sayfası, TRT Haber sayfası) — raporda/defterde doğrudan
  alıntı var (kanıt var, ayrıntılı), canlı kaynaktan bağımsızca yeniden çekilmedi.
- **`node --check` / `node --test` / `node araclar/dogrula.js`** — `57757f8` `git archive` ile
  izole edilip bu incelemede çalıştırıldı (dönem 7'nin paralel çalışma ağacına dokunulmadı);
  57/57 test, `yerel bant 6: 58` (değişmedi, beklenen — yalnızca `destek`/`parti` alan adı
  değişti, `SAYISAL` sayımını etkilemez), `hata yok`. Kanıt var.
- **AA/TRT yüzdelerinin elle hesabı** — bu inceleme sırasında üç şehir için de bağımsızca yeniden
  hesaplandı (yukarıda §2), rapordaki iddialarla eşleşti.
