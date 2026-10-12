# İnceleme hükmü: task-9-d1-fix2 (düzeltme turu 2, dda3703..dc5e67a)

## Bulgu — Important: 1950-05-genel'de mp48/Bağımsız `oy` tek kaynaklı (383.282, 250.414)

**ADDRESSED.**

- `veri/sandik.js:130` — `sonuc` dizisinde `{ parti: "mp48", oy: null, sandalye: 1 }` ve
  `{ ad: "Bağımsız", oy: null, sandalye: 9 }`. Her iki `oy` alanı da `null`; `sandalye` değerleri
  (1 ve 9) değişmedi. Commit `dc5e67a` ile tutarlı, çalışma ağacında doğrudan doğrulandı.
- Uygulayıcı ikinci kaynağı sınırlı bir aramayla tekrar denedi (rapor `task-9-d1-report.md`
  satır 104-122, "Düzeltme turu 2" bölümü):
  1. Kenan Olgun (2010) yeniden okundu — MP/Bağımsız için yalnızca sandalye (1, 9) veriyor, oy
     sayısı yok.
  2. WebSearch "…Millet Partisi oy sayısı 250.414" — sonuç TÜİK Tablo 23'ün 1965 satırındaki
     alakasız 582.704 rakamı, geçerli ikinci kaynak değil.
  3. WebSearch "…bağımsızlar oy sayısı 383.282" — yalnızca Ekşi Sözlük (forum) ve İngilizce
     Vikipedi (ayrıca farklı bir rakam, 44.537, veriyor) çıktı; ikisi de kaynak sayılmıyor.
- Eşleşen ikinci kaynak bulunamadığı için kural uygulanmış: **her iki `oy` da `null`** yapılmış
  (TBMM değeri bırakılıp "Uyuşmazlık: X vs Y" yazma yolu değil, doğru şekilde "ikinci kaynak yok
  → null" yolu izlenmiş — bu durumda zaten bir uyuşmazlık/karşılaştırma yok, tek kaynak var).
  Talimatla birebir uyumlu.

## Defter kaydı — açıklık kontrolü

`araclar/kaynak-defteri.md:595-642`, `### 1950-05-genel` kaydı.

**Evet, açıkça söylüyor.** Kayıt hem üstte "**Düzeltme turu 2 — MP ve Bağımsız `oy` değerleri
`null` yapıldı (tek kaynaklı)**" başlığıyla hem de satır 620-634'teki ayrı alt bölümde
(`**MP ve Bağımsız oy sayıları — `oy: null` (düzeltme turu 2).**`) şunları tek tek veriyor:
TBMM'nin verdiği rakamlar (250.414 / 383.282), denenen üç ikinci kaynak denemesi ve neden her
biri geçersiz sayıldığı, ve son karar cümlesi ("spesifikasyon §8.1'in … kuralına göre … `oy: null`
yapıldı. Sandalye sayıları … değişmedi"). Hangi alanın (`oy`, ikisi de) neden (tek kaynak, ikinci
kaynak bulunamadı) null olduğu belirsizlik bırakmıyor.

## Fark içinde başka kırılma var mı

Diff yalnızca iki dosyayı, tek kaydı (`1950-05-genel`) etkiliyor:
- `veri/sandik.js`: yalnızca `mp48.oy` ve `Bağımsız.oy` `null`'a çevrilmiş (383282→null,
  250414→null). `dp46`/`chp23` oy değerleri, `meclis`, `kayitli`, `kullanilan`, tüm `sandalye`
  değerleri (408/69/1/9) ve `not` alanı değişmemiş.
- `araclar/kaynak-defteri.md`: yalnızca `### 1950-05-genel` kaydına metin eklenmiş/genişletilmiş;
  başka hiçbir kayıt (`1954-05-genel`, `1957-10-genel`, hükümetler, vb.) dokunulmamış.

Başka bir seçim kaydı, sandalye değeri veya alan bu farkta değişmemiş. Diff dışı bir şey
incelenmedi (kapsam brief'in sınırladığı gibi yalnızca bu farkla tutuldu).

**Yeni kırılma yok.**

## Sonuç

Tek bulgu tamamen kapatılmış; defter kaydı gerekçeyi açıkça yazıyor; farkta kapsam dışına taşan
veya yeni bir sorun yaratan bir değişiklik yok.

**VERDICT: all findings addressed**
