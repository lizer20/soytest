# İnceleme paketi: task-4-fix1 (3222139..HEAD)

## Commitler
```
def57da Düzeltme: meclisDurumu sandalyesi bilinmeyen partileri ayrı listeler
```
## Özet
```
 araclar/test/sandik-mantik.test.js | 31 +++++++++++++++++++++++++++++++
 sandik-mantik.js                   |  1 +
 2 files changed, 32 insertions(+)
```
## Fark
```diff
diff --git a/araclar/test/sandik-mantik.test.js b/araclar/test/sandik-mantik.test.js
index 6dfdb54..4c9ba7c 100644
--- a/araclar/test/sandik-mantik.test.js
+++ b/araclar/test/sandik-mantik.test.js
@@ -77,10 +77,41 @@ test("sonrakiHukumetler bir sonraki genel seçime kadar kurulanları verir", ()
   assert.deepEqual(M.sonrakiHukumetler(kayit("2002-11-genel"), F).map(h => h.no), [58]);
 });
 
 test("partininSecimleri ittifak listesinden seçilmeyi de bulur", () => {
   const s = M.partininSecimleri("dsp", F);
   assert.deepEqual(s.genel.map(x => x.kayit.id), ["1999-04-genel", "2002-11-genel"]);
   assert.equal(s.genel[1].satir, null);
   assert.deepEqual(s.genel[1].ittifak, { ad: "Sahte İttifak", liste: "chp92", sandalye: 2 });
   assert.deepEqual(s.yerel.map(x => x.kayit.id), ["2004-03-yerel"]);
 });
+
+test("meclisDurumu sandalyesi bilinmeyen partileri ayrı listeler", () => {
+  const k = structuredClone(kayit("1999-04-genel"));
+  k.sonuc.find(s => s.parti === "fp").sandalye = null;
+  const d = M.meclisDurumu(k);
+  assert.deepEqual(d.bilinmeyen.map(s => s.parti), ["fp"]);
+  assert.deepEqual(d.giremeyenler, []);
+  assert.deepEqual(d.girenler.map(s => s.parti), ["dsp", "mhp93"]);
+});
+
+test("kronoloji askerî yönetim aralığındaki kayıtları kaba koyar, bantlara koymaz", () => {
+  const i = P.DONEMLER.findIndex(d => d.kesinti && d.kesinti.tarih === "1980-09-12");
+  const y = P.DONEMLER[i].kesinti.yonetim;
+  assert.ok(y, "1980 kesintisinde yonetim aralığı yok");
+  const S = { secimler: [{ id: y.bas.slice(0, 7) + "-referandum", tur: "referandum", tarih: y.bas }],
+              hukumetler: [{ no: 1, basbakan: "X", partiler: [], baslangic: y.bit, bitis: null,
+                             tip: "partiluestu", bitisNedeni: null }] };
+  const kr = M.kronoloji(S);
+  assert.deepEqual((kr.kaplar[i] || []).map(o => o.tarih), [y.bas, y.bit]);
+  assert.equal(kr.bantlar.reduce((n, b) => n + b.ogeler.length, 0), 0);
+  assert.equal(kr.yersiz.length, 0);
+});
+
+test("kronoloji aynı tarihte seçimi hükümetten önce koyar", () => {
+  // Bugün hem ekleme sırası (seçimler önce) hem karşılaştırıcının eşitlik kuralı bunu garanti ediyor;
+  // test, ikisinden biri değişirse davranışın korunduğunu denetler.
+  const S = { secimler: [{ id: "2002-11-genel", tur: "genel", tarih: "2002-11-18", sonuc: [] }],
+              hukumetler: [{ no: 58, basbakan: "B", partiler: ["akp"], baslangic: "2002-11-18",
+                             bitis: null, tip: "tek-parti", bitisNedeni: null }] };
+  assert.deepEqual(M.kronoloji(S).bantlar[6].ogeler.map(x => x.tur), ["secim", "hukumet"]);
+});
diff --git a/sandik-mantik.js b/sandik-mantik.js
index 7e208a5..cf926e1 100644
--- a/sandik-mantik.js
+++ b/sandik-mantik.js
@@ -37,20 +37,21 @@
       const ad = partiAdi(ilk).kisa;
       if (ilk.sandalye != null && k.meclis != null && ilk.sandalye > k.meclis / 2)
         return ad + " kazandı · tek başına iktidar";
       return ad + " birinci parti";
     }
     function meclisDurumu(k) {
       const sirali = siralaGenel(k);
       return {
         girenler: sirali.filter(s => s.sandalye > 0),
         giremeyenler: sirali.filter(s => s.sandalye === 0),
+        bilinmeyen: sirali.filter(s => s.sandalye == null),
         bagimsiz: k.sonuc.find(s => s.ad === BAGIMSIZ) || null,
         diger: k.sonuc.find(s => s.ad === DIGER) || null
       };
     }
     function bantYillari(d) {
       const p = d.yil.split("–").map(x => +x.trim());
       return { bas: p[0], bit: p[1] || p[0] };
     }
     function donemBul(tarih) {
       for (let i = 0; i < P.DONEMLER.length; i++) {
```
