# İnceleme hükmü: Görev 10a (Adım 1–4)

Kapsam: yalnızca `araclar/dogrula.js` ve `araclar/test/dogrula.test.js`'e "soyağacında olmayan ama sandalye kazanan parti" uyarısının eklenmesi (brief Adım 1–4). Adım 5–8 bilerek kapsam dışı bırakıldı, eksik sayılmadı.

## 1. Spec uyumu: ✅

Brief'in Adım 1 ve Adım 2'sindeki kod blokları, gerçek dosyalarla (`araclar/dogrula.js` satır 99–102, `araclar/test/dogrula.test.js` satır 103–112) karakter karakter karşılaştırıldı — birebir aynı:

- Yerleştirme: `if (k.tur === "ara") for (const s of k.sonuc || []) partiDenetle(s.parti, k.id);` satırının hemen altına, brief'in istediği gibi.
- Koşul: `k.tur === "genel" || k.tur === "ara"` — Interfaces bloğundaki "genel ve ara seçimlerde" ile uyumlu.
- Filtre: `s.ad && s.ad !== "Bağımsız" && s.ad !== "Diğer" && s.sandalye > 0` — Interfaces'teki "`ad` satırları için (Bağımsız ve Diğer hariç)" ile uyumlu.
- Uyarı metni: `"soyağacında olmayan ama sandalye kazanan: " + s.ad + " (" + k.id + ")"` — Interfaces'te verilen dizgeyle birebir aynı.
- Test dosyanın sonuna eklendi (brief'in istediği gibi), asserte edilen regex'ler brief'tekiyle birebir aynı.

Global Constraints ihlali yok:
- Commit mesajı brief'teki metinle birebir aynı, `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>` satırı `git show` ile doğrulandı.
- Yalnızca izin verilen iki dosya (`araclar/dogrula.js`, `araclar/test/dogrula.test.js`) değişti; `araclar/test/fikstur.js` dokunulmamış (diff'te yok, ayrıca dosya okunarak doğrulandı).
- `file://` uyumu bozulmadı: yeni kod `fetch`/ES modülü/harici istek içermiyor, mevcut Node CommonJS yapısına uygun.
- Kimlik biçimi, aile/dönem, kart/bağ sayısı gibi diğer Global Constraints bu görevde etkilenmiyor.

YAGNI: fazladan hiçbir şey eklenmemiş — sadece brief'in istediği tek `if` bloğu ve tek test.

## 2. Görev kalitesi: Approved

Kod ve testi kendim çalıştırdım (raporun kopyası değil):
- `node --test "araclar/test/*.test.js"` → 52/52 PASS (öncekinden +1, brief'in beklediği gibi).
- `node araclar/dogrula.js` → `hata yok`.
- Test mantığını fikstürle elle izledim: `1999-04-genel` için mevcut sandalye toplamı 10 (`meclis:10`); testin eklediği satır önce `sandalye:0` iken toplam 10 kalıyor (hata yok, uyarı da yok — doğru). Sonra `sandalye:1` yapılıp `k.meclis` 11'e çekiliyor, toplam yine tutuyor — böylece "sandalye toplamı" hatası test sonucuna karışmıyor ve yalnızca yeni uyarı sınanıyor. Bu, brief'in verdiği testin kendisi (uygulayıcı birebir kopyalamış), tasarım hatası değil.
- Commit temiz: yalnızca iki dosya, 16 satır ekleme, mesaj ve co-author doğru.

Bulgu yok — Critical/Important/Minor hiçbiri yok.

## ⚠️ Farktan doğrulanamayanlar

- Adım 3'te belirtilen "Run: `node --test ... && node araclar/dogrula.js` → PASS; hata yok" komutlarını ben de bağımsız olarak çalıştırdım (yukarıda), bu nedenle "farktan doğrulanamaz" değil — doğrulandı.
- Bu görev parçası kapsamında tarayıcı davranışı, veri dosyası değişikliği veya kaynak defteri gereksinimi yok; dolayısıyla "kanıtsız" kalan bir madde tespit edilmedi.

Sonuç: yok (doğrulanamayan madde bulunmadı).
