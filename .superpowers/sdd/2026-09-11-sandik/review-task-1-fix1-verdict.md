# Hüküm: task-1-fix1 (commit c846dc2)

## Bulgu 1 (Critical) — Refah Partisi kapatma tarihi resmî kaynaksız "DOĞRULANDI"

**ADDRESSED.**

Uygulayıcı, TBMM'nin kendi tutanak arşivinden (`cdn.tbmm.gov.tr`, resmî `.gov.tr` alan adı) yeni
bir kaynak bulmuş: **T.B.M.M. Tutanak Dergisi, Cilt 43, 44. Birleşim, 20 Ocak 1998 Salı**
(`https://cdn.tbmm.gov.tr/TbmmWeb/Tutanak20230120/20/3/44/6ac1c7c2-378e-4cdc-b9f2-03b26ca674ef.html`).

Bu adresi doğrudan WebFetch ile açıp kendim doğruladım:
- Sayfa gerçekten TBMM Tutanak Dergisi; Cilt 43, 44. Birleşim, 20 Ocak 1998 Salı olarak
  etiketleniyor (raporda yazılanla birebir eşleşiyor).
- Kayseri Milletvekili Abdullah Gül'ün konuşmasında geçen ifade doğrulandı: "Refah Partisinin,
  Anayasa Mahkemesi tarafından **16 Ocak 1998 Cuma** günü kapatılmasıyla ilgili söz almış
  bulunuyorum." — tam olarak iddia edilen tarihi (16 Ocak 1998) içeriyor.

Bu kaynak spesifikasyon §8.1'in kabul ettiği resmî kaynak türlerinden biri olan "TBMM kayıtları"
kapsamına giriyor (`docs/superpowers/specs/2026-09-11-sandik-design.md:431-432`). Dolayısıyla artık
en az bir resmî kaynak (TBMM tutanağı) + ikinci bir kaynakla (hukukansiklopedisi.com + 5 bağımsız
haber kaynağı) eşleşme var; brief'in "DOĞRULANAMADI yaz, kullanma" kuralı artık ihlal edilmiyor.

Defter ve spesifikasyon ayrıca hangi bilginin resmî hangisinin yalnızca ikincil kaynaklı olduğunu
doğru ayırıyor: **tarih** (16 Ocak 1998) `[B]` TBMM tutanağıyla doğrulanmış olarak işaretli;
**esas/karar numarası (1997/1, 1998/1) ve Resmî Gazete tarihi (22 Şubat 1998)** açıkça "ikincil
kaynaklara göre" ifadesiyle nitelenmiş, resmî olarak sunulmuyor
(`araclar/kaynak-defteri.md:24-26,45-52`; `2026-09-11-sandik-design.md:497-501`). Bu, §8.1'in
"her sayı" kuralını sayı/ayrıntı bazında doğru uyguluyor — yalnızca doğrulanan unsur (tarih) resmî
olarak işaretlenmiş, doğrulanamayan ayrıntılar (esas/karar no., RG tarihi) resmî değilmiş gibi
gösterilmemiş.

## Bulgu 2 (Minor) — Uydurma üçüncü durum "DOĞRULANDI (erişim sınırlı)"

**ADDRESSED.**

Diffte bu ifade her iki dosyadan da kaldırılmış: `araclar/kaynak-defteri.md:25` ve
`docs/superpowers/specs/2026-09-11-sandik-design.md:498` artık düz **"DOĞRULANDI"** kullanıyor,
brief'in öngördüğü iki durumdan (DOĞRULANDI / DOĞRULANAMADI) sapma yok. "Erişim sınırlı" ifadesi
dosyalarda artık hiçbir yerde geçmiyor (yalnızca "Düzeltme turu 1 notu" içinde geçmişe atıfla
anılıyor, mevcut durumu tanımlamak için değil).

## Yeni kırılmalar (fark kapsamında)

Yok. Diff, iki bulguyu kapatmak dışında yeni bir iddia eklemiyor; eklenen tek yeni kaynak
(TBMM tutanağı) doğrudan doğrulandı ve doğru sınıflandırılmış.

## Kapsam dışı gözlemler

- İkinci kaynak olarak kullanılan hukukansiklopedisi.com + 5 haber sitesi, §8.1'in parantezindeki
  "(resmî ya da akademik/kurumsal bir derleme)" örneğine tam uymuyor (haber siteleri kurumsal
  derleme sayılır mı belirsiz) — ancak bu, düzeltme farkından önce de mevcuttu, fix1'de
  değişmedi ve önceki incelemede bulgu olarak açılmamıştı; döngüyü uzatmaz.
- TÜİK Tablo 1'in 1961 satırındaki parti sayısı/isim uyuşmazlığı (kayıtlarda zaten not edilmiş,
  Görev 2'ye bırakılmış) — fark dışı, önceden var.

## VERDICT: all findings addressed
