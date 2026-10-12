# Görev 5 İnceleme Hükmü — Sandık veri denetimi ve il tablosu toplayıcısı

İncelenen commit: `182bafb` (taban `67cf81d`)

## 1. Spec uyumu: ✅

Brief'in Adım 1–6 arasındaki her maddesi ve Interfaces bloğu farkla birebir karşılaştırıldı.

- **`araclar/dogrula.js`**: brief'teki `dogrulaSandik` gövdesi (sabitler `TURLER`/`TIPLER`/
  `BITIS`/`TUTUMLAR`/`REF_SONUC`/`SAYISAL`, `gunFarki`, `satirlariDenetle`, `secmenDenetle`,
  ana döngü, hükümet denetimi, `M.kronoloji(S).yersiz` döngüsü) diffte satır satır aynı.
  `dogrula` fonksiyonu ve `module.exports` da brief'teki haliyle birebir.
- **`araclar/topla.js`**: `sayiOku`, `topla`, CLI bloğu brief'teki kodla birebir aynı
  (yorum satırları dahil).
- **`araclar/test/dogrula.test.js`** (10 test) ve **`araclar/test/topla.test.js`** (3 test):
  brief'teki test dosyalarıyla birebir aynı.
- **Interfaces** sözleşmesi tam karşılanıyor: `dogrulaSandik(P,S) → {hatalar,uyarilar}`,
  `dogrula(P,S)` iki denetimi birleştiriyor, `sayiOku`/`topla` imzaları ve CLI çıktı biçimi
  (`{"satir":n,"toplamlar":[...]}`) brief'teki gibi.
- **Commit**: mesaj metni ve `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>` satırı
  brief'teki `git commit -F -` bloğuyla birebir; dosya listesi (`araclar/dogrula.js`,
  `araclar/topla.js`, iki test dosyası) tam eşleşiyor.
- **Enum sabitleri hafızadan değil**: `TIPLER`, `BITIS`, `TUTUMLAR`, `REF_SONUC`, `TURLER`
  spesifikasyon §5.1/5.4/5.8'deki listelerle birebir eşleşiyor (uydurma değer yok).
- **Global Constraints**: Bu görev `veri/sandik.js`'i değiştirmiyor (hâlâ boş diziler) →
  "bilgi uydurulmaz" kuralı bu diffte devreye girmiyor. `araclar/` altındaki Node betikleri
  zaten `require("fs")`/`require("path")` kullanıyor (bkz. mevcut `araclar/yukle.js`); bu
  dosyalar `file://` ile açılan siteye değil derleme/denetim araçlarına ait olduğundan
  `fetch`/ES modülü/harici istek yasağı ihlal edilmiyor. Kart/bağ sayıları (66/73) ve mobil
  kırılım bu görevde dokunulmayan dosyalarda; ilgisiz.
- Eksik madde, fazladan (YAGNI) eklenen madde ya da brief'ten sapan değer bulunamadı.

## 2. Görev kalitesi: Approved

### Bağımsız doğrulama (raporun ötesinde, kendim çalıştırdım)

```
$ node --test "araclar/test/*.test.js"
ℹ tests 36
ℹ pass 36
ℹ fail 0

$ node araclar/dogrula.js
hata yok
exit: 0
```

Önceki taban 23 test + bu görevin 13 testi = 36 — rapor ve bağlamdaki beklenti ile eşleşiyor.
`dogrulaSandik`'in spesifikasyon §8.4'teki her hata/uyarı maddesini (13 hata + 4 uyarı türü)
kapsadığı tek tek satır satır karşılaştırılarak doğrulandı; hepsi kod içinde karşılığını buluyor.

### Bulgular

**Minor — `araclar/dogrula.js:14`** (`SAYISAL` sabiti)
`SAYISAL` listesi `["kayitli","kullanilan","gecerli","oy","sandalye","evet","hayir"]`;
§5.7'deki ara seçim kaydının üst düzey `sandalyeSayisi` alanı bu listede yok. Sonuç: bir ara
seçimde `sandalyeSayisi:null` olsa bile "— sayısı" uyarı toplamına dahil edilmiyor (yalnızca
`sonuc[].sandalye` sayılıyor). Kaydı tamamen düşürmüyor, yalnızca tür başına "—" istatistiğini
hafifçe eksik bırakıyor. Öneri: `say(k)` çağrılırken `k.tur === "ara"` için ayrıca
`sandalyeSayisi` de sayılabilir, ya da bilinçli bir kapsam dışı bırakma ise bir yorumla
belirtilebilir.

**Minor — `araclar/dogrula.js:116` ve `araclar/test/dogrula.test.js`** (test kapsamı boşluğu)
`if (h.baslangic > s.baslangic) hatalar.push("hukumetler tarih sırasında değil: " + ...)`
dalı hiçbir testte tetiklenmiyor (mevcut "hükümet çakışması hata, boşluk uyarı" testi yalnızca
çakışma ve boşluk senaryolarını kapsıyor, sıra-dışılığı değil). Ayrıca bu mesajda "hukumetler"
yazımı (ü'süz) dosyanın başka yerlerindeki "hükümetler" (ü'lü) yazımıyla tutarsız — kozmetik.
Fonksiyonel risk düşük (mantık `secimler` için aynı satır karşılaştırmasıyla zaten test
edilmiş bir örüntünün tekrarı) ama bu spesifik dal doğrudan sınanmamış durumda.

Bu iki bulgu da brief'te verilen kodun birebir kopyası olduğundan uygulayıcının bir sapması
değil; brief'in kendisinden gelen küçük eksikler. Görevi onay dışı bırakacak ölçekte değiller.

Critical ya da Important düzeyinde bulgu yok. Kod çöken/yanlış davranışa yol açmıyor; XSS/kaçış
riski yok (bu dosyalar DOM üretmiyor, yalnızca konsola yazıyor); sahte fikstür (`fikstur.js`)
yalnızca test dosyalarından `require` ediliyor, siteye sızmıyor.

## ⚠️ Farktan doğrulanamayanlar

Yok. Rapordaki bütün komutlar (`node --test`, `node araclar/dogrula.js`) bu inceleme sırasında
bağımsız olarak yeniden çalıştırıldı ve aynı sonuçları verdi; tarayıcı davranışı ya da bu
görevin dışındaki bir sözleşmeye bağlı doğrulanamayan bir gereksinim yok.

---

## Dönüş (kısa biçim)

```
SPEC: ✅
QUALITY: Approved
FINDINGS: Minor — SAYISAL sabiti ara seçimin sandalyeSayisi alanını "— sayısı" tallying'ine dahil etmiyor (araclar/dogrula.js:14)
FINDINGS: Minor — hükümet sıra-dışılığı hata dalı ("hukumetler tarih sırasında değil") hiçbir testte tetiklenmiyor, yazım da tutarsız (araclar/dogrula.js:116)
CANNOT-VERIFY: yok
```
