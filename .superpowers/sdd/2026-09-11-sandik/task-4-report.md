# Görev 4 — Rapor

## Yapılanlar

### Adım 1: Test fikstürü
- `araclar/test/fikstur.js` oluşturuldu
- Brief'teki kod birebir yazıldı
- 5 seçim (1927, 1999, 2002 genel; 2004 yerel; 2007 referandum) ve 2 hükümet sahte verisi içeriyor
- Ittifak ve buyuksehir alanları test edilmesi için dahil edildi

### Adım 2: Başarısız testler
- `araclar/test/sandik-mantik.test.js` oluşturuldu
- Brief'teki 11 test birebir yazıldı
- Testler: partiAdi, oyDegeri, katilimDegeri, siralaGenel, baslikGenel, meclisDurumu, donemBul (3 test), kronoloji, sonrakiHukumetler, partininSecimleri

### Adım 3: Başarısız olduğunu gör
- Testler çalıştırıldı: `node --test "araclar/test/*.test.js"`
- **Beklenen hata alındı:** `Cannot find module '../../sandik-mantik'`
- 9 önceki test PASS (ortak.test.js + partiler.test.js)

### Adım 4: Ana dosyaları yaz
- `sandik-mantik.js` oluşturuldu (UMD pattern, tarayıcı/Node uyumlu)
- `veri/sandik.js` oluşturuldu (boş veri nesnesi)
- Brief'teki kod birebir yazıldı

### Adım 5: Testleri geçir
- Komut: `node --test "araclar/test/*.test.js"`
- **Sonuç: 20 test PASS** (9 eski + 11 yeni)
  ```
  ℹ tests 20
  ℹ suites 0
  ℹ pass 20
  ℹ fail 0
  ```
- Veri denetimi: `node araclar/dogrula.js` → `hata yok`

### Adım 6: Commit
- Dosyalar staged: `sandik-mantik.js`, `veri/sandik.js`, `araclar/test/fikstur.js`, `araclar/test/sandik-mantik.test.js`
- Commit mesajı: Brief'teki Türkçe mesaj + Co-Authored-By
- Hash: `3222139`

## Değişen/Oluşan Dosyalar

1. `sandik-mantik.js` — Yeni, 99 satır
2. `veri/sandik.js` — Yeni, 6 satır
3. `araclar/test/fikstur.js` — Yeni, 53 satır
4. `araclar/test/sandik-mantik.test.js` — Yeni, 76 satır

## Çalıştırılan Komutlar ve Çıktılar

### Spesifikasyon Kontrolü
```bash
grep -n "sandik-mantik.js" docs/superpowers/specs/2026-09-11-sandik-design.md
```
Çıktı: 3 satır (§4'te dosya adı geçiyor)

### Testler (Adım 3 — Başarısız)
```
✔ (9 önceki test PASS)
Error: Cannot find module '../../sandik-mantik'
```

### Testler (Adım 5 — Başarılı)
```
✔ tarihYaz... (ortak.test.js — önceki)
✔ PARTILER yüklenir... (partiler.test.js — önceki)
✔ partiAdi soyağacındaki partiyi...
✔ oyDegeri ve katilimDegeri sayılardan...
✔ siralaGenel sandalyeye, eşitlikte oya...
✔ baslikGenel çoğunluk, birincilik...
✔ meclisDurumu girenleri, giremeyenleri...
✔ donemBul tarihi doğru banda...
✔ donemBul askerî yönetim aralığını...
✔ donemBul hiçbir yere düşmeyen...
✔ kronoloji seçimleri ve hükümetleri...
✔ sonrakiHukumetler bir sonraki genel...
✔ partininSecimleri ittifak listesinden...

ℹ tests 20
ℹ suites 0
ℹ pass 20
ℹ fail 0
```

### Veri Denetimi
```bash
node araclar/dogrula.js
```
Çıktı: `hata yok`

## Brief'ten Sapmalar

Yok. Tüm adımlar brief'teki haliyle uygulandı:
- Kod karakteri karakterine aktarıldı
- Dosya adları, yükler ve komutlar özdeş
- Commit mesajı brief'teki metin + Co-Authored-By

## Endişeler

Yok. Tüm test ve denetim geçişleri başarılı.

## Özet

Sandık modülünün saf mantığı (`sandik-mantik.js`) başarıyla yazıldı. 11 yeni test, boş veri dosyası ve sahte fikstür oluşturuldu. Tüm 20 test PASS, veri denetimi hatasız. Commit atıldı.

## Düzeltme turu 1

### Bulgular

1. **Important — meclisDurumu (satır 42-49):** Sandalyesi `null` olan satırlar (doğrulanmayan sandal sayıları) `girenler` ve `giremeyenler` filtrelerinden sessizce düşüyordu. Bunlar artık ayrı `bilinmeyen` listesinde döndürülmeli.

2. **Important — kronoloji (kaplar dalı):** Askerî yönetim aralıklarındaki kayıtlar (seçim/hükümet) `kr.kaplar[i]` içinde barındırılmalı, normal `bantlar` içinde değil. Fikstürde bu durumu tetikleyecek veri yoktu; test eklendi.

3. **Important — kronoloji (tarih sırası):** Aynı tarihte hem seçim hem hükümet olduğunda seçim hükümetten önce gelmelidir. Fikstürde bu durumu tetikleyecek çakışma yoktu; test eklendi.

### Değişiklikler

**sandik-mantik.js (satır 42-50):**
- `meclisDurumu` fonksiyonuna `bilinmeyen: sirali.filter(s => s.sandalye == null)` satırı eklendi
- Sandalyesi null olan satırlar artık bu ayrı listede dönüyor

**araclar/test/sandik-mantik.test.js (satır 88-114):**
- 3 yeni test eklendi:
  1. `meclisDurumu sandalyesi bilinmeyen partileri ayrı listeler`
  2. `kronoloji askerî yönetim aralığındaki kayıtları kaba koyar, bantlara koymaz`
  3. `kronoloji aynı tarihte seçimi hükümetten önce koyar`

### Çalıştırılan Komutlar ve Çıktılar

**Testler (önce A yapmadan, B ile):**
```
22/23 PASS, 1 FAIL
✖ meclisDurumu sandalyesi bilinmeyen partileri ayrı listeler
  TypeError: Cannot read properties of undefined (reading 'map')
```

**Testler (A sonrası):**
```
ℹ tests 23
ℹ suites 0
ℹ pass 23
ℹ fail 0
```

**Veri denetimi:**
```bash
node araclar/dogrula.js
```
Çıktı: `hata yok`

### Brief'ten Sapmalar

Yok. Koordinatörün verdiği kod birebir uygulandı; test yalnızca sandik-mantik.js'in değiştirilmesinden sonra PASS oldu.
