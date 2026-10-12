# Görev 10a — Rapor (Adım 1–4)

## Yapılanlar

### Adım 1: Başarısız testi ekle
- Dosya: `araclar/test/dogrula.test.js` (satır 102'den sonra)
- Test eklendi: "soyağacında olmayan ama sandalye kazanan parti uyarılır"
- Test şu iki case'i kontrol eder:
  - Sandalyesi 0 olan "Sahte Parti" → uyarı yok
  - Sandalyesi 1 olunca → uyarı gelir
  - "Bağımsız" hiçbir durumda uyarı almaz
- Sonuç: Yeni test başarısız gelmesi beklendi (uyarı henüz kodlanmadığı için) ✓

### Adım 2: Uyarıyı ekle
- Dosya: `araclar/dogrula.js` (satır 97 hemen sonrası)
- Konum: `if (k.tur === "ara") for (const s of k.sonuc || []) partiDenetle(s.parti, k.id);` satırından sonra
- Eklenen kod:
  ```js
  if (k.tur === "genel" || k.tur === "ara")
    for (const s of k.sonuc || [])
      if (s.ad && s.ad !== "Bağımsız" && s.ad !== "Diğer" && s.sandalye > 0)
        uyarilar.push("soyağacında olmayan ama sandalye kazanan: " + s.ad + " (" + k.id + ")");
  ```
- Kontrol: `grep -c` ile satırın dosyada tam bir kez bulunduğu doğrulandı ✓

### Adım 3: Testleri geçir
- Komut: `node --test "araclar/test/*.test.js"`
- Sonuç: **52 test PASS** (önceki 51 + yeni test)
- Komut: `node araclar/dogrula.js`
- Sonuç: `hata yok` (veri dosyası boş, uyarı yok) ✓

### Adım 4: Commit
- Dosyalar eklendi: `araclar/dogrula.js`, `araclar/test/dogrula.test.js`
- Commit hash: `11b92a0`
- Mesaj: "Soyağacında olmayan ama sandalye kazanan partileri uyar"
- Co-Author: Claude Opus 5 <noreply@anthropic.com> ✓

## Değişen dosyalar

| Dosya | Değişim |
|-------|---------|
| `araclar/dogrula.js` | 4 satır eklendi (uyarı kodu) |
| `araclar/test/dogrula.test.js` | 12 satır eklendi (yeni test) |

## Çalıştırılan komutlar

### Kontrol komutu
```bash
grep -c 'if (k.tur === "ara") for (const s of k.sonuc || \[\]) partiDenetle(s.parti, k.id);' "C:/Users/Lizer/Desktop/projects/siyasi parti/araclar/dogrula.js"
```
Çıktı: `1` ✓

### Test komutu
```bash
cd "C:/Users/Lizer/Desktop/projects/siyasi parti" && node --test "araclar/test/*.test.js"
```
Çıktı (özet):
```
ℹ tests 52
ℹ suites 0
ℹ pass 52
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 137.2742
```

### Veri denetimi
```bash
cd "C:/Users/Lizer/Desktop/projects/siyasi parti" && node araclar/dogrula.js
```
Çıktı: `hata yok`

### Commit komutu
```bash
cd "C:/Users/Lizer/Desktop/projects/siyasi parti" && git add araclar/dogrula.js araclar/test/dogrula.test.js && git commit -F - <<'MSG'
Soyağacında olmayan ama sandalye kazanan partileri uyar

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
```
Çıktı:
```
[sandik-asama1 11b92a0] Soyağacında olmayan ama sandalye kazanan partileri uyar
 2 files changed, 16 insertions(+)
```

## Brief'ten sapmalar

Yok.

## Endişeler

Yok. Adım 1–4 brief'e tamamen uygun şekilde tamamlandı.

---

**Durum:** DONE — Adım 1–4 başarıyla tamamlandı. Adım 5–8 (öneri hazırlama, soyağacına ekleme) veri toplandıkça ve kullanıcı onayıyla ayrı olarak yürütülecek.
