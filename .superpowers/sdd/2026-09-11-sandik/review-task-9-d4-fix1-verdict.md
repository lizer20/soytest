# İnceleme hükmü — Düzeltme turu 1, Görev 9 Dönem 4

Commit: `3af6141` (1fd18a1..3af6141)

## 1. Spec uyumu

**✅**

İlk turun iki Critical bulgusu da doğru ve koşulsuz biçimde giderilmiş: referandumlar artık
gerçek [B] (YSK) kaynağına dayanıyor, yerel seçimlerin doğrulanamayan ulusal toplamları
spesifikasyon §8.1'in "eşleşmezse null olur" kuralına uygun biçimde `null` yapılmış. Dosya
kapsamı yine yalnızca `veri/sandik.js` + `araclar/kaynak-defteri.md` (YAGNI yok). Ama gidermede
iki yeni disiplin sorunu doğdu (aşağıya bakın) — bunlar spec'i ❌'ye düşürecek kadar ağır değil,
ama kaliteyi Issues'ta tutuyor.

## 2. Görev kalitesi

**Issues**

### Önceki bulguların durumu

- **Critical #1 (referandum [B] kaynak yok) — KAPANDI.** YSK Halkoylaması Arşivi'nden gerçek PDF
  adresleri bulunup indirilmiş, `topla.js` ile hesaplanan toplamlar her iki referandum için de
  ikinci kaynaklarla (1987: bianet + 2 akademik; 1988: 2 akademik) 4-6 haneli tam eşleşme
  gösteriyor — tesadüfen eşleşme ihtimali pratikte yok, [B] kaynağın doğruluğu güvenilir.
- **Critical #2 (1984/1989 yerel ulusal toplam ikinci kaynaksız) — KAPANDI.** Ek arama turu
  yapılmış (TÜİK açıklama sayfası, 4 ayrı akademik/haber kaynağı denenmiş, hiçbiri "belediye
  meclisi" ölçüsünde ulusal toplam vermiyor) ve kural koşulsuz uygulanarak `kayitli`/
  `kullanilan`/`gecerli`/`sonuc[].oy` `null` yapılmış; ham (hesaplanmış ama yayımlanmayan)
  değerler ileride kullanılmak üzere deftere yazılmış. Doğru çözüm.
- **Important — Adana kırılımı — KAPANDI** (otomatik: bütün `oy` alanları null olunca "Diğer"e
  gömülü Adana verisi de anlamsızlaştığından satırıyla birlikte kaldırılmış).
- **Important — 1988 katılımYuzde — KAPANDI** (artık gerçek `kayitli`/`kullanilan` var, ayrı
  alana gerek kalmadı — doğru gerekçe).
- **Important — büyükşehir ikinci kaynak — ÇOĞUNLUKLA KAPANDI (5/6).** 1984'ün 3 şehri ve 1989
  İstanbul/İzmir artık gerçek, isim geçen haber/akademik ikinci kaynaklarla (vaka bazında 1-6
  ayrı sayı/yüzde ile) doğrulanmış. 1989 Ankara için bulunamayınca alan tamamen kaldırılmış —
  bkz. yeni bulgu aşağıda, bu çözüm tartışmalı.

### FINDINGS (yeni / açık kalan)

- **Important** — `veri/sandik.js` "1987-09-referandum" ve "1988-09-referandum" kayıtları;
  `araclar/kaynak-defteri.md` aynı iki başlık. İki kayıt farklı kapsamda hesaplanmış: 1987'nin
  `kayitli`/`kullanilan`/`gecerli`/`evet`/`hayir` değerleri **67 il + gümrük kapıları toplamı**
  (kayıtlı 26.095.630), 1988'inki ise **yalnızca 67 il toplamı, gümrük hariç** (kayıtlı
  26.739.227 — gümrük dahil edilseydi %88,84 çıkardı, akademik kaynaklarla uyuşmazdı). Bu kapsam
  farkı kaynak defterinde açıkça yazılı ve gerekçeli ("YSK'nın iki referandumun resmî basın
  bültenini farklı kapsamda hazırlamış olabileceği değerlendirildi" — kendi ifadesiyle de
  doğrulanmamış bir varsayım), **ama `veri/sandik.js`'teki `not` alanlarının hiçbirinde bu fark
  belirtilmiyor** (1987 not: yalnızca kampanya anlatısı; 1988 not: yalnızca "Katılım %88,8").
  Sitede yan yana duran iki referandum kaydının `kayitli`/katılım oranını doğrudan karşılaştıran
  bir okuyucu, farklı kapsamda üretilmiş sayıları aynı ölçekmiş gibi görecek. **Öneri:** en
  azından 1987'nin `not`una "gümrük kapıları dahil" ya da 1988'inkine "gümrük kapıları hariç"
  notu eklenmeli; mümkünse gümrük kapılarının 1988'de neden hariç tutulduğu (aslında oy
  kullanılmadı mı, yoksa YSK bülteni mi öyle mi) bir sonraki turda netleştirilmeli.

- **Important** — `veri/sandik.js` "1989-03-yerel" `buyuksehir` alanı. Ankara satırı tamamen
  kaldırıldı; gerekçe "oy sayısı/yüzdesi ikinci kaynakla doğrulanamadı". Ama spesifikasyon §5.3'e
  göre `buyuksehir` alanı yalnızca **kazanan partiyi** (`parti`) tutuyor — oy sayısı/yüzdesi bu
  alanın hiç parçası değil (ne 1984 ne 1989 İstanbul/İzmir/Ankara kayıtlarında oy sayısı zaten
  yazılmıyor, yalnızca `parti:"..."`). Kaynak defterinin kendi ifadesiyle "Murat Karayalçın'ın
  (SHP) kazandığı [B] YSK kaynağından kesin" — yani asıl yazılacak alan (`parti:"shp"`) zaten
  [B] kaynaklı ve kesin; aranıp bulunamayan şey (oy sayısı) zaten şemada yer almıyor. Tüm satırın
  kaldırılması, olmayan bir alan (oy sayısı) için ikinci kaynak bulunamadığı gerekçesiyle var
  olan bir alanın (kazanan parti, tek kaynaklı ama kesin) kaybına yol açıyor — hükümet/CB-TBMM
  kayıtlarında zaten kabul edilen "tek [B] kaynak yeterli" emsaliyle (bkz. hükümet 45-47) tutarsız.
  **Öneri:** `ankara:{parti:"shp"}` olarak geri eklensin (yalnızca kazanan parti — oy sayısı zaten
  şart değil); eğer kazanan parti bilgisi için de gerçekten ikinci bağımsız kaynak aranıp
  bulunamadıysa (yalnızca oy sayısı için değil) bu defterde açıkça ayrıştırılmalı.

- **Minor** — `veri/sandik.js` "1989-03-yerel" `sonuc` dizisi. Düzeltmeden önce IDP soyağacı dışı
  parti olarak "Diğer" (%0,52, oy 69.465) şeklinde kayıtlıydı; düzeltmeyle bütün `sonuc` dizisi
  null yapılırken IDP satırı da tamamen silinmiş (1984'teki anlamsız Adana-lump "Diğer"inden
  farklı olarak burada gerçek bir partinin katılım bilgisi kayboluyor). Diğer altı parti
  (`oy:null` ile) "katıldığı biliniyor" mantığıyla korunurken IDP'nin dışarıda bırakılması
  tutarsız. **Öneri:** `{ ad:"Diğer", partiSayisi:1, oy:null }` satırı geri eklenebilir (yalnızca
  IDP'nin varlığı bilgisi, sayı gerektirmez).

### CANNOT-VERIFY

- YSK'nın 1987/1988 referandum PDF'lerindeki il ve gümrük satırlarının raporda aktarılan
  rakamlarla birebir eşleştiği — kaynaklar bu incelemede yeniden açılmadı.
- Büyükşehir ikinci kaynaklarının (euronews, yeniankara.com.tr, ensonhaber.com, dunya.com,
  dergipark) alıntılanan cümlelerinin tam metinde gerçekten böyle geçtiği — yeniden açılmadı.
- Tarayıcı denetimi (`#1987-09-referandum`, `#1988-09-referandum`, `#1984-03-yerel`,
  `#1989-03-yerel` panelleri, konsol hatası yok) — raporda kanıt var, bu incelemede yeniden
  açılmadı.
- `node --check`/`node --test`/`dogrula.js` çıktıları — sözleşme gereği yeniden çalıştırılmadı;
  raporun aktardığı tam çıktıya güvenildi (55/55 test, `hata yok`, beklenen uyarı değişimleri
  — referandum bant 4: 6→0, yerel bant 4: 0→20 — mantıklı).
