# Görev 5 Raporu: Sandık veri denetimi ve il tablosu toplayıcısı

## Yapılanlar

### Adım 1: Test dosyaları yazıldı
- `araclar/test/dogrula.test.js`: 10 test
  - geçerli fikstür hatasız geçer
  - kimlik biçimi ve tekrarı
  - sıra ve bilinmeyen değerler
  - parti referansları
  - sandalye ve oy toplamları
  - seçmen sayılarının tutarlılığı ve yedek alanların karışması
  - referandum: evet + hayır = geçerli, sonuç ve tutum değerleri
  - hükümet çakışması hata, boşluk uyarı
  - hiçbir banda düşmeyen kayıt hata
  - ittifak listesinden seçilenler liste partisini aşarsa uyarı, — sayısı raporlanır

- `araclar/test/topla.test.js`: 3 test
  - sayiOku binlik noktalı sayıyı okur
  - topla il satırlarını sütun sütun toplar
  - topla sütun sayısı tutmayan satırı reddeder

### Adım 2: Başarısız test çalıştırması
Beklenen başarısızlıklar doğrulandı:
- `dogrula.test.js` testleri başarısız: `dogrulaSandik is not a function`
- `topla.test.js`: `Cannot find module '../topla'`

### Adım 3: `araclar/topla.js` yazıldı
- `sayiOku(metin)`: Binlik noktalı sayıları integer'a dönüştürür ("1.234.567" → 1234567)
- `topla(satirlar)`: İl satırlarını sütun sütun toplar; ilk sütun il adı, sonrakiler sayılar
- CLI: `node araclar/topla.js <dosya.tsv>` → JSON çıktısı

### Adım 4: `araclar/dogrula.js` patch yapıldı
- Üst kısım (satır 4-5): `const Ortak` ve `const SandikMantik` require'ları eklendi
- Sabitler eklendi: TURLER, TIPLER, BITIS, TUTUMLAR, REF_SONUC, SAYISAL, gunFarki
- `dogrulaSandik(P, S)` fonksiyonu eklendi: 128 satır (kimlik, sıra, tür, satır düzeyi denetimler, seçmen tutarlılığı, referandum, hükümetler, yerleşim)
- Alt kısım: `dogrula` fonksiyonu güncellendi; `module.exports`'a `dogrulaSandik` eklendi

### Adım 5: Testler geçti
```
ℹ tests 36
ℹ pass 36
ℹ fail 0
```

Döküm:
- 23 önceki test (mevcut)
- 10 `dogrula.test.js`
- 3 `topla.test.js`

Denetim betiği çalışması:
```
$ node araclar/dogrula.js
hata yok
```

(veri/sandik.js boş olduğu için hiçbir Sandık uyarısı yok)

### Adım 6: Commit yapıldı
```
git add araclar/dogrula.js araclar/topla.js araclar/test/dogrula.test.js araclar/test/topla.test.js
git commit -F - <<'MSG'
Sandık veri denetimi ve il tablosu toplayıcısı

dogrula.js spesifikasyon §8.4'teki hata ve uyarı kurallarını uygular;
topla.js resmî il tablolarından ulusal toplamı betikle hesaplar.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
```

Commit hash: `182bafb`

## Değişen/Oluşan Dosyalar

1. **Modified**: `araclar/dogrula.js`
   - 159 satır ekleme (Sandık denetim kodu)
   - 2 satır değişiklik (dogrula ve module.exports)

2. **Created**: `araclar/topla.js`
   - 24 satır (sayiOku, topla, CLI)

3. **Created**: `araclar/test/dogrula.test.js`
   - 137 satır (10 test)

4. **Created**: `araclar/test/topla.test.js`
   - 16 satır (3 test)

## Çalıştırılan Komutlar ve Çıktıları

### Başarısız testler (Adım 2)
```bash
$ node --test "araclar/test/*.test.js"
```
Çıktı:
- 10 ✖ (dogrula.test.js) — `dogrulaSandik is not a function`
- 3 ✖ (topla.test.js'i test bile yapamadı) — `Cannot find module '../topla'`
- 23 ✔ (mevcut testler) — hepsi başarılı

### Başarılı testler (Adım 5)
```bash
$ node --test "araclar/test/*.test.js"
```
Çıktı:
```
ℹ tests 36
ℹ suites 0
ℹ pass 36
ℹ fail 0
```

### Denetim betiği (Adım 5)
```bash
$ node araclar/dogrula.js
hata yok
```

## Brief'ten Sapmalar

Yok. Tüm kod, test ve commit mesajı brief'te verilen haliyle birebir uygulanmıştır.

## Endişeler

Yok.

---

**Sonuç**: Görev 5 başarıyla tamamlandı. 36 test pass, denetim betiği hatasız çalışıyor, commit yapıldı.
