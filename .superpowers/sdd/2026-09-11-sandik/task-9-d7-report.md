# Görev 9 — Dönem 7 (2016–2026) raporu

Durum: **DONE** (2026-09-25, bulut oturumu; controller doğrudan uyguladı)

## 1. Yapılanlar
- Adım 1 (envanter): YSK seçim arşivi sayfa parçaları + `secimTarihleri.txt`. 2016–2026: 2017
  referandum, 2018 genel + CB, 2019 yerel (+ 23 Haziran İstanbul yenilemesi), 2023 genel + CB (2 oylama),
  2024 yerel. Ara seçimlerin hepsi mahalli → kapsam dışı. 2026'da ulusal seçim yok.
- Adım 2–3: sayılar YSK kesin sonuç tablolarından [B]; ikinci kaynaklar ve bütün alıntılar
  `araclar/kaynak-defteri.md` → "Görev 9 — Dönem 7".
- Adım 4: `veri/sandik.js` — 8 seçim kaydı (5'i önceki yarım turdan, yeniden doğrulandı), 3 hükümet.
- Adım 5: denetim ve tarayıcı (aşağıda).

## 2. Değişen dosyalar
`veri/sandik.js`, `araclar/kaynak-defteri.md`, bu rapor, `progress.md`; ayrıca `README.md`,
`kaynakca.html` (dönem 7 uyarısı kaldırıldı), `docs/DEVIR-NOTU.md` (güncelleme notu).

## 3. Komutlar
- `node --test "araclar/test/*.test.js"` → 57 pass, 0 fail
- `node araclar/dogrula.js` → `hata yok`; yeni uyarı yok (yalnızca önceki dönemlerin uyarıları)
- Playwright (`file://`, 1400px): 8 kart, 4 hükümet şeridi (64 → 65 → 2 kabine, boşluksuz),
  `#2023-05-genel`, `#2019-06-yerel`, `#2017-04-referandum` panelleri, `index.html#deva` künyesi
  ("2023 CHP listesinden — vekil"); konsol hatası yok.

## 4. Brief'ten sapmalar
- Alt ajan kullanılmadı (bu oturumda kullanıcı istemedi); inceleme ajanı da çalıştırılmadı →
  **bağımsız inceleme Görev 12'deki son incelemeye bırakıldı.**
- Taranmış RG sayfaları (YSK 663, CB kararları) OCR ve görüntüyle okundu; her OCR sayısı alt
  toplamlarla sağlandı.

## 5. Endişeler
- Yerel seçimlerde ülke geneli belediye meclisi sayıları `null` (dönem 6 kuralı: yalnız YSK yayımlıyor).
- `ittifak.icinden` sandalyeleri `null` (resmî kaynak yok; tek ajans haberi ve çelişen sayı).
- 64. Hükümet `bitisNedeni` hâlâ `null`.
- 2019-06-yerel panel başlığı "belediye meclisi oyları" diyor (görünüm, Görev 12).

## 6. Kullanıcıya sunulacaklar
- Görev 10 listesine: **Hür Dava Partisi** (2023'te AK Parti listesinden meclise girdi; sayı resmî
  kaynakla doğrulanamadı) ve **Milliyetçi Demokrasi Partisi** (1983: 71 sandalye; önceki listede yoktu).
- Dönem 7'de sandalye kazanıp soyağacında olmayan başka parti yok.

## 7. Commit
Bu rapordaki değişiklikler tek commit: "Sandık verisi: dönem 7 (2016–2026) kaynaklarıyla".
