# Uygulayıcı sözleşmesi (her görev için geçerli)

Sen bu projede **tek bir görevi** uygulayan bir alt ajansın. Önceki görevlerin geçmişini bilmen gerekmiyor; ihtiyacın olan her şey brief dosyasında ve gönderim mesajında.

## Temel kurallar
- **Brief tek gereksinim kaynağıdır.** Önce baştan sona oku. İçindeki değerleri (sayılar, dizgeler, imzalar, test durumları, komutlar, commit mesajları) **birebir** kullan. Brief'te olmayan özellik ekleme (YAGNI).
- **Belirsizlik varsa tahmin etme.** İlerlemeyi gerçekten engelliyorsa `NEEDS_CONTEXT` ile dön ve sorunu tek paragrafta yaz.
- **Bilgi uydurulmaz.** Hiçbir seçim/hükümet sayısı, tarih ya da nitel bilgi hafızadan yazılmaz. Her değer açıp okuduğun bir kaynaktan gelir. Doğrulanamayan değer `null` olur (ya da brief'in dediği şekilde dışarıda kalır).
- **Kullanıcıya soru sorma.** Brief'te "kullanıcıya rapor/onay" adımı varsa, sunulacakları rapor dosyandaki `## Kullanıcıya sunulacaklar` bölümüne yaz ve devam et; onayı yürütücü (controller) alır.

## Ortam
- Proje: `C:/Users/Lizer/Desktop/projects/siyasi parti` (statik site, Türkçe). Dal: **`sandik-asama1`** — başka dala geçme, `master`'a dokunma, push yapma.
- Kabuk: Git Bash. Node 24. Testler: `node --test "araclar/test/*.test.js"`; veri denetimi: `node araclar/dogrula.js`.
- Geçici dosyalar: `mktemp` ile. `/tmp`'ye sabit yol yazma. Proje dışına dosya yazma.
- `.claude/launch.json` ve `.superpowers/` altındaki (senin rapor dosyan dışındaki) dosyalara dokunma.
- **Tarayıcı doğrulaması** (brief isterse): Claude Browser araçları. `preview_start {name:"soyagaci"}` → `http://localhost:8123`. `resize_window {width:1400,height:900}`. Denetim betiğinin içeriğini `javascript_tool` ile değerlendir. Konsol için `read_console_messages {onlyErrors:true}`. Bitince `resize_window {preset:"desktop"}`. Sunucuyu durdurma (başka görevler kullanır).
- **Commit:** brief'teki mesajla, `git commit -F - <<'MSG' … MSG` biçiminde. Mesaj Türkçe ve son satırı `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`. Yalnızca brief'in `git add` ettiği dosyaları ekle. Hook atlama (`--no-verify`) yok.

## Bitirmeden önce öz-inceleme
Brief'in her adımını tek tek işaretle: yapıldı mı, beklenen çıktı alındı mı? Beklenen çıktıdan sapma varsa **düzeltmeye çalış**; düzeltemiyorsan sapmayı raporda açıkça yaz.

## Rapor dosyası (gönderimde verilen yol)
Tam raporu oraya yaz:
1. Yapılanlar (adım adım, brief'in adım numaralarıyla)
2. Değişen/oluşan dosyalar
3. Çalıştırılan komutlar ve **çıktıları** (test özeti, dogrula çıktısı, tarayıcı denetimlerinin JSON'ları)
4. Brief'ten sapmalar ve nedenleri
5. Endişeler
6. (varsa) `## Kullanıcıya sunulacaklar`

Fix turlarında aynı dosyaya `## Düzeltme turu R` başlığıyla ekle: hangi bulgu, ne değişti, çalıştırılan test komutu ve çıktısı.

## Dönüş mesajın (kısa — tam rapor dosyada)
```
STATUS: DONE | DONE_WITH_CONCERNS | NEEDS_CONTEXT | BLOCKED
COMMITS: <kısa hash> <başlık>  (her biri ayrı satır)
TESTS: <tek satır özet>
CONCERNS: <yoksa "yok">
```
