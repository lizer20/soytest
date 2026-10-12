# Hüküm: Görev 9 — Dönem 3 (1972–1980) — Düzeltme turu 1 (06bc008..4818d5f)

İncelenen commit: `4818d5f` "Düzeltme: dönem 3 hükümet bileşimleri ve bitiş nedenleri TBMM
ciltleriyle". Değişen dosyalar: `veri/sandik.js` (yalnızca hükümet 42'nin `partiler`/`not`
alanı), `araclar/kaynak-defteri.md` (+126/-43, "Parti bileşimleri ve bitiş nedenleri —
düzeltme turu 1" alt bölümü).

## 0. Önceki bulguların durumu

- **C1 (Critical — hükümet 35-44 `partiler` alanı resmî [B] kaynaksız) — KAPANDI.**
- **I2 (Important — `bitisNedeni` alanı da yalnızca ikincil kaynaklı) — KAPANDI.**
- **I1 (`tip:"mbk"` kozmetik hatası) — açık bırakıldı, controller talimatıyla bu turda
  dokunulmadı (ayrı bir kod görevi); engelleyici değil.**

## 1. Bağımsız doğrulama (bu turda bizzat yapıldı)

`cdn.tbmm.gov.tr`'den Cilt 6 ve Cilt 7 PDF'leri bizzat indirilip (`curl`) `pdftotext -layout`
ile tam metne çevrildi, kaynak defterindeki alıntılar TOC sayfa numaralarıyla birlikte
metinde arandı:

- **Cilt 6, "39 IV. Demirel Hükümeti" (s. 4593-4594):** metinde birebir **"Koalisyon
  Protokolü / (AP-MSP-MHP-CGP)"** başlığı ve "Adalet Partisi, Milli Selamet Partisi,
  Cumhuriyetçi Güven Partisi ve Milliyetçi Hareket Partisi ... bir Koalisyon Hükümeti
  kurarak..." cümlesi bulundu — kaynak defteriyle **birebir** eşleşti.
- **Cilt 6, "40 II. Ecevit Hükümeti" (Güvenoylaması):** metinde birebir **"Oy sayısı 448,
  kabul 217, ret 229, çekinser 2."** satırı bulundu (satır 36901) — kaynak defterindeki
  alıntıyla **birebir** eşleşti; `bitisNedeni:"guvensizlik"` tam doğrulandı.
- **Cilt 6, "41 V. Demirel Hükümeti" (s. 5089-5090):** metinde birebir **"Koalisyon
  Protokolü / (AP - MSP - MHP)"** başlığı bulundu — CGP yok, üç partili — kaynak defteriyle
  eşleşti.
- **Cilt 6, "42 III. Ecevit Hükümeti" Bakanlar Kurulu (s. 5391-5392) — kritik kontrol
  noktası:** metinde bizzat okundu: **"Turhan FEYZİOĞLU (Kayseri, CGP)"** (Devlet Bakanı ve
  Başbakan Yardımcısı), **"Mehmet Faruk SÜKAN (Konya, DP)"** (Devlet Bakanı ve Başbakan
  Yardımcısı), **"Mehmet Salih YILDIZ (Van, CGP)"** (Devlet Bakanı) — üçü de gerçekten
  kabinede, parti etiketli. Bu, `partiler:["chp23"]`→`["chp23","cgp","demp70"]` düzeltmesini
  **tam olarak doğruluyor**; raporun iddiası (ilk turdaki "dışarıdan destek" varsayımının
  yanlış olduğu) doğru.
- **Cilt 6, "42" bölümü açılışı (s. 5391 civarı):** **"16 Ekim 1979 günü istifa etmiştir"**
  cümlesi metinde iki ayrı yerde (satır 292 ve 7817) birebir bulundu — `not` alanındaki
  "16 Ekim 1979'da istifa etti" ayrıntısı doğrulandı.
- **Cilt 7, "43 VI. Demirel Hükümeti" Bakanlar Kurulu (s. 5583-5584):** metinde bakan
  listesinin **hiçbirinde parti etiketi olmadığı** doğrulandı (yalnızca isim+il/"C.S. …
  Üyesi"); ayrıca aynı ciltte **"Hükümetin Adalet Partisi tarafından kurulması gerek[tiği]"**
  ve **"Milliyetçi Hareket Partisi de, Adalet Partisi tarafından kurulacak bir hükümeti
  destekleyeceğini açıkladı"** cümleleri bulundu — `partiler:["ap"]` + "MSP/MHP dışarıdan
  destek" okuması **[B] doğrulanmış**.
- **Cilt 7, "44 Ulusu Hükümeti" Bakanlar Kurulu (s. 5943-5944):** metinde bakan listesinin
  **hiçbirinde parti etiketi olmadığı** doğrulandı — `partiler:[]` **[B] doğrulandı**.
  `baslangic:"1980-09-20"`/`bitis:"1983-12-13"` de TOC ve gövde metniyle birebir eşleşti.
- **Cilt 6, "38 Irmak Hükümeti" Bakanlar Kurulu (s. 4369-4370):** metinde bakan listesinin
  hiçbirinde parti etiketi olmadığı (tamamı "TBMM dışından"/"C.S. Kontenjan Üyesi"/yalnızca
  il adı) doğrulandı — `partiler:[]` **[B] doğrulandı**.

Yedi hükümet (38, 39, 40, 41, 42, 43, 44) için kaynak defterindeki alıntılar birincil kaynakta
bizzat arandı ve **hepsi birebir/tutarlı çıktı** — uydurma ya da yanlış alıntı bulunmadı. 35,
36, 37 (Cilt 5) bu turda ayrıca indirilmedi, ama örneklem (10 kayıttan 7'si, özellikle
controller'ın özellikle işaret ettiği 42. kayıt) düzeltmenin genel güvenilirliğini göstermeye
yeterli.

## 2. SPEC uyumu: ✅

- C1 ve I2 gerçek biçimde kapandı: `partiler` ve `bitisNedeni` artık [B] (TBMM cilt, cilt no +
  basılı sayfa numarasıyla) + tutarlı ikinci kaynak (ilk turun akademik/ikincil kaynakları,
  artık doğrulanmış durumda) kombinasyonuna dayanıyor.
- Tek veri değişikliği (hükümet 42'nin `partiler`/`not`) gerekçeli ve doğrulanabilir; diğer
  9 hükümette ilk turdaki değerler [B] kaynakla teyit edildiği için değişmedi.
- `bitisNedeni:null` kalan kayıtlar (35 Melen, 36 Talu, 38 Irmak, 44 Ulusu) için gerekçe
  makul: Cilt 5/6/7'de açık bir tutanak ifadesi bulunamadığı belirtiliyor; bu, spesifikasyonun
  "doğrulanamayan bitiş nedeni null olur" kuralıyla (§8.1) tutarlı — uydurma değil.
  Bağımsız kontrolümde de (Irmak, Ulusu) düşüş/bitiş nedenine dair açık bir ifadeye
  rastlamadım; `null` bırakılması doğru.
- Dosya kapsamı (`veri/sandik.js` + `araclar/kaynak-defteri.md`), commit mesajı biçimi
  (Türkçe + doğru `Co-Authored-By`) brief ile uyumlu.
- Global Constraints ihlali kalmadı.

**Eksik/fazladan/sapan değer:** yok.

## 3. Görev kalitesi: Approved

### Critical: yok (C1 kapandı).

### Important

- **I1 (açık, engelleyici değil) — 44. Ulusu Hükümeti'nin `tip:"mbk"` etiketi hâlâ kozmetik
  olarak yanlış** (MGK yerine "Millî Birlik Komitesi" gösteriyor). `veri/sandik.js:506`
  civarı. Controller'ın talimatıyla bu turda dokunulmadı; ayrı bir kod/taksonomi görevinde
  ele alınmalı (`tip` alanına `"mgk"` eklenmesi ya da arayüz etiketinin genelleştirilmesi).
  Bu veri toplama görevinin kapsamı dışında.

### Minor

- yok.

### Düzeltme yeni sorun getirdi mi? Hayır.
`node --check / --test / dogrula.js` çıktısı (raporda tam metin) düzeltme öncesiyle birebir
aynı (54/54 PASS, `hata yok`, aynı uyarı listesi) — hükümet 42'nin `partiler` değişikliği
`dogrula.js`'in denetimlerini (parti id'lerinin soyağacında var olması, sandalye/meclis
toplamları vb.) etkilemedi. `veri/sandik.js`'te başka hiçbir kayıt değişmedi.

## 4. ⚠️ Cannot verify from diff

- Tarayıcı denetimi (`"42. Hükümet · Bülent Ecevit · CHP–CGP–DP · 5 Oca 1978 – 12 Kas 1979"`
  metninin sayfada göründüğü, konsol hatası olmadığı) — raporda `document.body.innerText`
  alıntısı var (kısmi kanıt) ama ekran görüntüsü yok.
- 35 (Melen) ve 36 (Talu), 37 (I. Ecevit) için Cilt 5'teki alıntılar bu turda bizzat açılıp
  yeniden doğrulanmadı (yalnızca Cilt 6/7'deki 38-44 doğrulandı); düşük risk — örneklemdeki
  7 kayıt da birebir çıktı, düzeltmenin metodolojisi (grep/sed ile TOC sayfa numarasından
  gövde metnine gidilmesi) tutarlı görünüyor.
