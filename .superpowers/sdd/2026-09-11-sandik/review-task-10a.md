# İnceleme paketi: task-10a (43794b8..HEAD)

## Commitler
```
11b92a0 Soyağacında olmayan ama sandalye kazanan partileri uyar
```
## Özet
```
 araclar/dogrula.js           |  5 +++++
 araclar/test/dogrula.test.js | 11 +++++++++++
 2 files changed, 16 insertions(+)
```
## Fark
```diff
diff --git a/araclar/dogrula.js b/araclar/dogrula.js
index 6731e98..c7d8ee8 100644
--- a/araclar/dogrula.js
+++ b/araclar/dogrula.js
@@ -89,20 +89,25 @@ function dogrulaSandik(P, S) {
         partiDenetle(t.parti, k.id + " tutum");
         if (!TUTUMLAR.includes(t.tutum)) hatalar.push(k.id + ": bilinmeyen tutum " + t.tutum);
       }
     }
     if (k.tur === "cb-halk") (k.turlar || []).forEach((t, i) => {
       secmenDenetle(k, t, (i + 1) + ". tur");
       satirlariDenetle(k, t.adaylar || [], t.gecerli, (i + 1) + ". tur");
     });
     if (k.tur === "ara") for (const s of k.sonuc || []) partiDenetle(s.parti, k.id);
 
+    if (k.tur === "genel" || k.tur === "ara")
+      for (const s of k.sonuc || [])
+        if (s.ad && s.ad !== "Bağımsız" && s.ad !== "Diğer" && s.sandalye > 0)
+          uyarilar.push("soyağacında olmayan ama sandalye kazanan: " + s.ad + " (" + k.id + ")");
+
     // — sayısı (bilinmeyen sayısal alanlar)
     const y = M.donemBul(k.tarih);
     const anahtar = k.tur + " " + (y ? (y.tur === "yonetim" ? "kap " : "bant ") + y.i : "yersiz");
     let n = 0;
     const say = o => SAYISAL.forEach(a => { if (a in o && o[a] == null) n++; });
     say(k); (k.sonuc || []).forEach(say); (k.turlar || []).forEach(t => { say(t); (t.adaylar || []).forEach(say); });
     nullSayisi[anahtar] = (nullSayisi[anahtar] || 0) + n;
   }
   for (const a of Object.keys(nullSayisi)) uyarilar.push("— sayısı: " + a + ": " + nullSayisi[a]);
 
diff --git a/araclar/test/dogrula.test.js b/araclar/test/dogrula.test.js
index f81dd45..02d02d1 100644
--- a/araclar/test/dogrula.test.js
+++ b/araclar/test/dogrula.test.js
@@ -92,10 +92,21 @@ test("hiçbir banda düşmeyen kayıt hata", () => {
   assert.match(hatalar(S), /yersiz kayıt: 1900-01-ara/);
 });
 
 test("ittifak listesinden seçilenler liste partisini aşarsa uyarı, — sayısı raporlanır", () => {
   const S = kopya();
   bul(S, "2002-11-genel").ittifak[0].icinden[0].sandalye = 6;
   const u = uyarilar(S);
   assert.match(u, /2002-11-genel: ittifak Sahte İttifak içinden 6 > liste partisi 5/);
   assert.match(uyarilar(kopya()), /— sayısı: genel/);
 });
+
+test("soyağacında olmayan ama sandalye kazanan parti uyarılır", () => {
+  const S = kopya();
+  const k = bul(S, "1999-04-genel");
+  k.sonuc.push({ ad: "Sahte Parti", oy: 0, sandalye: 0 });   // sandalyesiz: uyarı yok
+  assert.doesNotMatch(uyarilar(S), /Sahte Parti/);
+  k.sonuc[k.sonuc.length - 1].sandalye = 1;
+  k.meclis = 11;                                               // toplam tutsun, yalnızca uyarı sınansın
+  assert.match(uyarilar(S), /soyağacında olmayan ama sandalye kazanan: Sahte Parti \(1999-04-genel\)/);
+  assert.doesNotMatch(uyarilar(S), /sandalye kazanan: Bağımsız/);
+});
```
