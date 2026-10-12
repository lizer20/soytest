# Görev 2 — inceleme hükmü

## 1. Spec uyumu: ✅

Brief'in Interfaces bloğu ve 9 adımının tamamı diff'te ve raporda karşılanıyor:

- `window.PARTILER = {AILE, BILGI, DONEMLER, N, E, ROZET}` — alan adları birebir brief'teki gibi
  (`veri/partiler.js:1-290`, kapanışta `return {AILE, BILGI, DONEMLER, N, E, ROZET};`).
- `kesinti` biçimi: `null` ya da `{tarih, metin, yonetim?:{bas,bit}}` — brief'teki şemayla birebir
  aynı (`veri/partiler.js:8-17`).
- `araclar/yukle.js` → `yukle(dosyalar) → window`, brief'teki kodla birebir aynı (satır satır
  karşılaştırıldı, fark yok).
- `araclar/dogrula.js` → `dogrulaPartiler(P) → {hatalar, uyarilar}`, brief'teki kodla birebir aynı.
- `araclar/denetim/soyagaci.js` → tek ifade, tarayıcıda JSON döndürüyor, brief'teki kodla birebir
  aynı.
- `araclar/test/partiler.test.js` — brief'teki 5 testle birebir aynı.
- `index.html:294` script sırası: `veri/partiler.js` → satır içi IIFE, brief'in istediği gibi.
- `index.html:297`: `const {AILE, BILGI, DONEMLER, N, E, ROZET} = window.PARTILER;` IIFE açılışının
  hemen altında.
- Kesinti çizim kodu `d.kesinti` → `d.kesinti.metin` olarak güncellendi (`index.html:504`).
- Commit `dc0764b`, Türkçe mesaj, brief'teki mesajla birebir aynı, `Co-Authored-By: Claude Opus 5
  <noreply@anthropic.com>` ile bitiyor. Yalnızca brief'in listelediği 6 dosya commit edilmiş.

**Doğrulanmış değerler** (yürütücünün bağlamında verilen ve Görev 1 defterinde kayıtlı):
- `araclar/kaynak-defteri.md` "## Doğrulanan iddialar" bölümü kontrol edildi:
  - RP kapatma: **16 Ocak 1998** — `veri/partiler.js:16`'daki "16 Ocak 1998'de kapatıldı" ile
    birebir eşleşiyor.
  - 1960 kabı `yonetim.bit`: **1961-10-14** — `veri/partiler.js:8-9` ile birebir eşleşiyor.
  - 1980 kabı `yonetim.bit`: **1983-11-05** — `veri/partiler.js:12-13` ile birebir eşleşiyor.
- Üç değer de kaynak defterinde "DOĞRULANDI" olarak işaretli; hiçbiri hafızadan yazılmamış.
- `grep -n "<Görev" veri/partiler.js` → `temiz` (placeholder kalmamış) — bağımsız olarak tekrar
  çalıştırıldı, aynı sonuç.

**Global Constraints ihlali yok:**
- `file://` uyumu: `grep` ile `fetch(`, `type="module"`, `import` aranmadı/bulunmadı; `veri/partiler.js`
  klasik `<script src>` ile satır içi betikten önce yükleniyor — bağımsız olarak tekrar doğrulandı.
- Kart/bağ sayısı (66/73) korunmuş — hem node testiyle hem tarayıcı denetimiyle bağımsız olarak
  doğrulandı.
- Kimlik/tür biçimleri bu görevde değişmedi (bu görevin kapsamında değil).

Eksik ya da fazladan eklenmiş (YAGNI) bir şey yok. `dogrula.js`'teki "yinelenen bağ" kontrolü brief'in
kendi verdiği kodun parçası, ekstra değil.

## 2. Görev kalitesi: Approved

Bağımsız doğrulamalar (yalnızca rapora güvenilmedi):

- `node --test "araclar/test/*.test.js"` yeniden çalıştırıldı → 5/5 PASS.
- `node araclar/dogrula.js` yeniden çalıştırıldı → `hata yok`, exit 0.
- Tarayıcıda (`preview_start soyagaci`, 1400×900) `araclar/denetim/soyagaci.js` bağımsız olarak
  değerlendirildi: `kart:66, kenar:73, bant:8, bantKapaninca:{kenar:63,yukseklik:0},
  panelAcik:{acik:true,inert:false,odak:"kapat"}, panelKapali:{inert:true,odakGeri:true}, vurgu:4` —
  Adım 1 baseline'ıyla birebir aynı; `kesinti[3]` beklenen yeni 28 Şubat metnini taşıyor.
  `read_console_messages{onlyErrors:true}` → boş.
- `git show e7e0ada:index.html` üzerinden eski 296–574 veri bloğu çıkarılıp `veri/partiler.js`'in
  gövdesiyle satır satır `diff` alındı: **tek farklar 4 kesinti alanının nesneye çevrilmesi** —
  `AILE`, `BILGI` (66 partinin tamamı), `N`, `E`, `ROZET` birebir aynı, hiçbir kayıt kaybolmamış,
  bozulmamış ya da elle yeniden yazılırken hata yapılmamış.
- Fikstür sızıntısı yok: `araclar/test/` içinde yalnızca `partiler.test.js` var; `fikstur` dizgisi
  hiçbir üretim/veri dosyasında geçmiyor (bu görev zaten fikstür oluşturmuyor).

Bulgu yok. Kod, brief'in verdiği tam kaynakla birebir örtüşüyor; veri taşıma betikle yapılmış (elle
kopyalama yok), veri bütünlüğü bağımsız diff'le doğrulandı.

## 3. ⚠️ Farktan doğrulanamayanlar

- Hiçbiri kaldı — brief'in gerektirdiği tüm davranışsal kontroller (tarayıcı gerileme denetimi,
  `file://` ikamesi, node testleri, `dogrula.js` çıktısı) bu incelemede bağımsız olarak yeniden
  çalıştırılıp doğrulandı; raporun iddialarıyla birebir eşleşti.
- Gerçek `file:///…/index.html` çift tıklama senaryosu (Claude Browser panelinin `file://`
  betiklerini çalıştırmaması nedeniyle) hem yürütücü hem bu inceleme tarafından çalıştırılamadı;
  brief'in kendi belirttiği ikame (script sırası + `fetch`/modül/`import` yokluğu grep'i) hem raporda
  hem bu incelemede bağımsız olarak doğrulandı ve kanıt mevcut.

## Dönüş

```
SPEC: ✅
QUALITY: Approved
FINDINGS: yok
CANNOT-VERIFY: gerçek file:// çift tıklama senaryosu — brief'in belirlediği ikame kontrolüyle (script sırası + fetch/modül/import grep) hem raporda hem bu incelemede bağımsız kanıtla karşılandı
```
