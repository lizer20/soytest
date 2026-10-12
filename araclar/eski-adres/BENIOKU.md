# Eski adres yönlendirmesi

> **Durum (12 Ekim 2026):** klasör `lizer20/lizer20.github.io` deposuna eklendi (commit 85ec3b3); eski
> bağlantılar yeni adrese gidiyor. Sayfaları değiştirirsen o depodaki kopyayı da güncelle.

Depo adı `turkiye_siyasi_partiler_soyagaci`'dan `soyagaci`'ya değişince eski bağlantılar
(`emrebiltekin.me/turkiye_siyasi_partiler_soyagaci/…`) "sayfa bulunamadı" vermeye başladı.

Bu klasördeki `turkiye_siyasi_partiler_soyagaci/` alt klasörü, ana sitenin deposuna
(**lizer20/lizer20.github.io**) aynı adla eklenirse eski adresteki dört sayfa yeni adresteki
karşılığına yönlenir; adres çubuğundaki `#` bölümü (açık seçim, parti, hükümet) korunur.
Mevcut hiçbir dosya değişmez, yalnızca yeni bir klasör eklenir.

## Eklemenin iki yolu

1. **Claude'a yaptırmak:** Claude GitHub uygulamasını `lizer20.github.io` deposuna da kurun
   (https://github.com/apps/claude/installations/select_target → lizer20 → depo listesine
   `lizer20.github.io`'yu ekleyin). Sonra Claude'a "yükledim" demeniz yeterli; klasörü o ekler.
2. **Elle:** GitHub'da `lizer20/lizer20.github.io` → **Add file → Upload files** → bu klasördeki
   `turkiye_siyasi_partiler_soyagaci` klasörünü sürükleyip bırakın → **Commit changes**.
   Bir iki dakika sonra eski bağlantılar çalışır.

Sayfalarda `noindex` ve yeni adrese `canonical` vardır; arama motorları eski adresi dizine
eklemez, yenisini esas alır.
