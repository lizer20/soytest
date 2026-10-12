# Görev 12 — son kontrol raporu (kısmi, 2026-09-25)

## Adım 1 — Güncellik
- [B] YSK seçim takvimi (`ysk.gov.tr/doc/secim/secimTarihleri.txt`, 2026-09-25): Kasım 2026'ya kadar
  yalnızca köy halkoylamaları ve muhtarlık/ihtiyar heyeti ara seçimleri. YSK ara seçim arşivindeki
  7 Haziran 2026 kaydı mahalli idareler ara seçimi (kapsam dışı). Ulusal seçim, referandum ya da
  milletvekili ara seçimi yok. Son hükümet kaydı (2023 kabinesi) görevde.

## Adım 2 — Kabul ölçütleri (spesifikasyon §10), kanıtlar
| Ölçüt | Sonuç |
|---|---|
| `node araclar/dogrula.js` hatasız | ✅ "hata yok" |
| Testler | ✅ 57/57 |
| Yer tutucu yok (`grep -c "<Görev\|/\* … \*/"`) | ✅ 0 / 0 |
| Soyağacı değişmemiş (kart/bağ, bant, panel, klavye, vurgu) | ✅ `araclar/denetim/soyagaci.js`: kart 66, kenar 73, bant 8, 4 kesinti, panel açık/inert/odak iadesi, vurgu 4 |
| 28 Şubat kesinti metni | ✅ "28 Şubat 1997 — MGK kararları; Refah Partisi 16 Ocak 1998'de kapatıldı" |
| Bütün kayıtlar sayfada; 1960/1980 kapları dolu | ✅ 78/78 kart, 67/67 şerit; 1960 kabı: 1961 referandumu + 2 hükümet; 1980 kabı: 1982 referandumu + 1 hükümet |
| Her türün kartı ve paneli | ✅ genel, yerel, referandum, cb-halk, cb-tbmm, ara — hepsi açılıyor, hash güncelleniyor |
| Tür düğmeleri, yıl kaydırıcısı, en sağ uç | ✅ yerel kapanıyor; 2018 filtreli; max (2026) filtreyi kaldırıyor |
| `sandik.html#<kimlik>`, `index.html#<parti>` | ✅ `#2018-06-genel` paneli açıyor; `index.html#chp92` künyesi 16 seçim bağlantısıyla açılıyor |
| Künyeden seçime | ✅ `sandik.html#2024-03-yerel` paneli açıyor |
| Klavye (odak tuzağı, Escape, odak iadesi) | ✅ 25 Tab'ın hepsi panelde; Escape sonrası odak `2023-05-genel` kartında |
| 760px altı | ✅ 390 ve 760 px'te üç sayfada yatay taşma yok |
| Üç sayfada menü aynı; `file://` | ✅ Playwright `file://` ile (Chromium headless) |
| Kaynak defterinde her kayıt | ✅ "defter tam" (ortak başlıklı 5 kimliğe yönlendirme başlığı eklendi) |
| Kaynakça bölümü | ✅ `kaynakca.html#sandik` |
| Konsol | ✅ hiçbir sayfada hata yok |

Not: "gerçek çift tıklama" masaüstünde değil, başsız Chromium'la `file://` adresiyle denendi.

## Adım 3 — Başlık tarihleri
- `index.html`: "son güncelleme Ağustos 2026" → "Eylül 2026".
- `sandik.html`: "1923 — 2026" — son kayıt 2024 yerel, son hükümet 2026'da görevde → doğru, değişmedi.

## Kalanlar
- §9.4 eksik kayıt aramaları (dönem 0 ara seçimleri, 1955 yerel, 1947–49 / 1966 / 1968 / 1975 / 1979 /
  1986 ara seçimleri, 2003 Siirt, 2007 referandum tutumları, 1984–1999 yerel ülke geneli, 64. Hükümet
  bitiş nedeni, 1973/1977 büyükşehir).
- §9.5 ertelenmiş görünüm işleri + bu turdaki 2019-06-yerel panel başlığı.
- Görev 10 (kullanıcı onayı) ve bütün dalın bağımsız incelemesi.
