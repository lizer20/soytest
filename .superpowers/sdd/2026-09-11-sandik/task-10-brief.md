# Görev 10 — brief (kaynak: docs/superpowers/plans/2026-09-11-sandik.md)

## Global Constraints

- Site `file://` ile çift tıklanıp açıldığında çalışmalı; `fetch`, ES modülü, harici istek YOK.
- Yükleme sırası: `veri/partiler.js` → `veri/sandik.js` → `ortak.js` → `sandik-mantik.js` → sayfa kodu (`sandik.html`'de `sandik-sayfa.js`, `index.html`'de satır içi betik).
- Global ad alanları: `window.PARTILER`, `window.SANDIK`, `window.Ortak`, `window.SandikMantik`.
- Arayüz dili Türkçe; kod adlandırması mevcut koddaki gibi Türkçe (`ac`, `kapat`, `ciz`, `bul`…).
- **Bilgi uydurulmaz:** hiçbir seçim/hükümet sayısı hafızadan yazılmaz. Doğrulanamayan sayı `null` → ekranda `—`.
- Ham sayı tutulur, yüzde ekranda hesaplanır; yalnızca yüzde yayımlanmışsa `oyYuzde` / `katilimYuzde` yedeği.
- Kimlik biçimi `YYYY-AA-tür`; türler: `genel` · `yerel` · `referandum` · `cb-halk` · `cb-tbmm` · `ara`.
- Mobil kırılım `max-width:760px` (mevcut soyağacıyla aynı).
- Soyağacında kart sayısı 66, bağ sayısı 73 — kullanıcı onaylı parti eklemeleri dışında değişmez.
- Yerel ara seçimler kapsam dışı (2019 İstanbul yenilemesi hariç).
- Yerel seçimler bulunabilen en eski belediye seçiminden başlar; 1963 öncesi kayıtlarda bulunamayan her alan `null`, ülke geneli oy yoksa `sonuc: []`.
- Her görev bir commit ile biter; commit mesajı Türkçe, sonunda `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.

### Görev 10: Soyağacında eksik partiler — otomatik tespit ve onaylı ekleme

Tespit kısmı (Adım 1–4) Görev 9'un **ilk döneminden önce** yapılır, böylece her dönem raporu eksikleri otomatik listeler. Ekleme kısmı (Adım 5–8) kullanıcı bir parti listesini onayladıkça tekrarlanır.

**Files:**
- Modify: `araclar/dogrula.js`, `araclar/test/dogrula.test.js`, `veri/partiler.js`, `veri/sandik.js`, `araclar/test/partiler.test.js`, `araclar/denetim/soyagaci.js` (beklenen sayılar)

**Interfaces:**
- Consumes: `dogrulaSandik` (Görev 5).
- Produces: `dogrulaSandik` uyarısı `"soyağacında olmayan ama sandalye kazanan: <ad> (<kimlik>)"` — genel ve ara seçimlerde, `ad` satırları için ("Bağımsız" ve "Diğer" hariç).

- [ ] **Adım 1: Başarısız testi yaz**

`araclar/test/dogrula.test.js` dosyasının sonuna ekle:

```js
test("soyağacında olmayan ama sandalye kazanan parti uyarılır", () => {
  const S = kopya();
  const k = bul(S, "1999-04-genel");
  k.sonuc.push({ ad: "Sahte Parti", oy: 0, sandalye: 0 });   // sandalyesiz: uyarı yok
  assert.doesNotMatch(uyarilar(S), /Sahte Parti/);
  k.sonuc[k.sonuc.length - 1].sandalye = 1;
  k.meclis = 11;                                               // toplam tutsun, yalnızca uyarı sınansın
  assert.match(uyarilar(S), /soyağacında olmayan ama sandalye kazanan: Sahte Parti \(1999-04-genel\)/);
  assert.doesNotMatch(uyarilar(S), /sandalye kazanan: Bağımsız/);
});
```

Run: `node --test "araclar/test/*.test.js"`
Expected: FAIL — son test.

- [ ] **Adım 2: Uyarıyı ekle**

`araclar/dogrula.js`'te `dogrulaSandik` içinde, `if (k.tur === "ara") for (const s of k.sonuc || []) partiDenetle(s.parti, k.id);` satırının hemen altına:

```js
    if (k.tur === "genel" || k.tur === "ara")
      for (const s of k.sonuc || [])
        if (s.ad && s.ad !== "Bağımsız" && s.ad !== "Diğer" && s.sandalye > 0)
          uyarilar.push("soyağacında olmayan ama sandalye kazanan: " + s.ad + " (" + k.id + ")");
```

- [ ] **Adım 3: Testleri geçir**

Run: `node --test "araclar/test/*.test.js" && node araclar/dogrula.js`
Expected: PASS; `hata yok`.

- [ ] **Adım 4: Commit**

```bash
git add araclar/dogrula.js araclar/test/dogrula.test.js
git commit -F - <<'MSG'
Soyağacında olmayan ama sandalye kazanan partileri uyar

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
```

- [ ] **Adım 5: Öneri hazırla (her dönem raporundan sonra, uyarı listesi boş değilse)**

Uyarıdaki her parti için kullanıcıya şu öneriyi sun. **Her alan kaynaklıdır** — kurucu ve özet dahil (kaynaklar deftere `## Soyağacı eklemeleri` başlığı altında yazılır):

| Alan | Değer | Kaynak |
|---|---|---|
| `id` | küçük harf, soyağacı kalıbında (örn. `mdp`) | — |
| `kisa`, `ad` | | kuruluş belgesi / Resmî Gazete |
| `yil` | `"YYYY – YYYY"` ya da `"YYYY –"` | kuruluş ve kapanış kaydı |
| `durum` | `kapatildi` · `kapandi` · `katildi` · `faal` | kapatma/fesih/katılma kaydı |
| `aile` (sütun) | 0–6, sınıflandırma ilkesine göre (kaynakca.html "Sınıflandırma ilkesi") | gerekçe cümlesi |
| `donem` | kuruluş yılının bandı (yerleştirme kuralı) | — |
| `BILGI.k` / `BILGI.o` | kurucu / tek paragraf özet | iki kaynak |
| bağlar `E` | `[kaynak, hedef, "devam"|"bolunme"|"katilma"]` | örgütsel ilişkinin kaydı |

Kullanıcı onaylamadıkça hiçbir şey eklenmez; reddedilen parti `ad:` satırı olarak kalır ve uyarı defterde "kullanıcı kararıyla soyağacı dışında" notuyla kapatılır.

- [ ] **Adım 6: Onaylananları ekle**

1. `veri/partiler.js`: `N`'e (dönem ve sütun sırasına uygun yere), `BILGI`'ye ve `E`'ye ekle.
2. `veri/sandik.js`: o partinin bütün `{ad:"…"}` satırlarını `{parti:"<id>"}` yap (`oy`/`sandalye` değerleri değişmez).
3. `araclar/test/partiler.test.js`'teki `66` ve `73` beklentilerini yeni sayılarla güncelle; `araclar/denetim/soyagaci.js` için beklenen `kart`/`kenar` değerlerini bu plana (Görev 2 Adım 1) not düş.

- [ ] **Adım 7: Doğrula**

Run: `node --test "araclar/test/*.test.js" && node araclar/dogrula.js`
Expected: PASS; `hata yok`; eklenen partiler için "sandalye kazanan" uyarısı artık yok.

Tarayıcıda `index.html`: yeni kart doğru sütunda ve bantta, bağları çiziliyor, künyesinde "Girdiği genel seçimler" görünüyor; `araclar/denetim/soyagaci.js` yeni sayılarla tutarlı; konsol hatası yok.

- [ ] **Adım 8: Commit**

```bash
git add veri/partiler.js veri/sandik.js araclar/test/partiler.test.js araclar/kaynak-defteri.md
git commit -F - <<'MSG'
Soyağacına meclise girmiş eksik partiler eklendi: <kısa adlar>

Kullanıcı onayıyla; alanların kaynakları kaynak defterinde.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
```

(`<kısa adlar>` commit sırasında gerçek adlarla yazılır.)

---

