# İnceleme paketi: task-4 (9525c43..HEAD)

## Commitler
```
3222139 Sandık'ın saf mantığı ve boş veri dosyası
```
## Özet
```
 araclar/test/fikstur.js            |  41 ++++++++++++++
 araclar/test/sandik-mantik.test.js |  86 +++++++++++++++++++++++++++++
 sandik-mantik.js                   | 108 +++++++++++++++++++++++++++++++++++++
 veri/sandik.js                     |   7 +++
 4 files changed, 242 insertions(+)
```
## Fark
```diff
diff --git a/araclar/test/fikstur.js b/araclar/test/fikstur.js
new file mode 100644
index 0000000..cb8356d
--- /dev/null
+++ b/araclar/test/fikstur.js
@@ -0,0 +1,41 @@
+// SAHTE VERİ — yalnızca testler için. Sayılar ve kişi adları uydurmadır; sitede ASLA kullanılmaz.
+// Parti id'leri gerçek soyağacından seçildi ki bağlantı mantığı sınanabilsin.
+// Node'da require ile, tarayıcıda (araclar/denetim/fikstur.html) window.SANDIK olarak yüklenir.
+const F = {
+  secimler: [
+    { id: "1927-09-genel", tur: "genel", tarih: "1927-09-02", tekParti: true, meclis: null,
+      kayitli: null, kullanilan: null, gecerli: null, baraj: null,
+      sonuc: [{ parti: "chp23", oy: null, sandalye: null }] },
+    { id: "1999-04-genel", tur: "genel", tarih: "1999-04-18", tekParti: false, meclis: 10,
+      kayitli: 1000, kullanilan: 800, gecerli: 700, baraj: 10,
+      sonuc: [
+        { parti: "mhp93", oy: 200, sandalye: 4 },
+        { parti: "dsp", oy: 300, sandalye: 6 },
+        { parti: "fp", oy: 60, sandalye: 0 },
+        { ad: "Bağımsız", oy: 40, sandalye: 0 },
+        { ad: "Diğer", partiSayisi: 3, oy: 100, sandalye: 0 }] },
+    { id: "2002-11-genel", tur: "genel", tarih: "2002-11-03", tekParti: false, meclis: 10,
+      kayitli: 1000, kullanilan: 800, gecerli: 700, baraj: 10,
+      sonuc: [
+        { parti: "chp92", oy: 150, sandalye: 5 },
+        { parti: "akp", oy: 250, sandalye: 5 },
+        { ad: "Diğer", partiSayisi: 5, oy: 300, sandalye: 0 }],
+      ittifak: [{ ad: "Sahte İttifak", liste: "chp92", icinden: [{ parti: "dsp", sandalye: 2 }] }] },
+    { id: "2004-03-yerel", tur: "yerel", tarih: "2004-03-28", olcu: "belediye-meclisi",
+      kayitli: 1000, kullanilan: 700, gecerli: 690,
+      sonuc: [{ parti: "akp", oy: 400 }, { parti: "dsp", oy: 90 }, { ad: "Diğer", partiSayisi: 9, oy: 200 }],
+      buyuksehir: { istanbul: { parti: "akp", aday: "D" }, ankara: { parti: "akp", aday: "E" }, izmir: { parti: "chp92", aday: "F" } } },
+    // referandumda `sonuc` yok, `karar` var: partininSecimleri gibi bütün kayıtları gezen kod bunu da görmeli
+    { id: "2007-10-referandum", tur: "referandum", tarih: "2007-10-21", konu: "Sahte konu",
+      kayitli: 100, kullanilan: 90, gecerli: 88, evet: 80, hayir: 8, karar: "kabul",
+      tutumlar: [{ parti: "akp", tutum: "evet" }] }
+  ],
+  hukumetler: [
+    { no: 57, basbakan: "A", partiler: ["dsp", "mhp93"], baslangic: "1999-05-28",
+      bitis: "2002-11-18", tip: "koalisyon", bitisNedeni: "erken-secim" },
+    { no: 58, basbakan: "B", partiler: ["akp"], baslangic: "2002-11-18",
+      bitis: null, tip: "tek-parti", bitisNedeni: null }
+  ]
+};
+if (typeof module === "object" && module.exports) module.exports = F;
+else window.SANDIK = F;
diff --git a/araclar/test/sandik-mantik.test.js b/araclar/test/sandik-mantik.test.js
new file mode 100644
index 0000000..6dfdb54
--- /dev/null
+++ b/araclar/test/sandik-mantik.test.js
@@ -0,0 +1,86 @@
+const test = require("node:test");
+const assert = require("node:assert/strict");
+const { yukle } = require("../yukle");
+const O = require("../../ortak");
+const F = require("./fikstur");
+
+const P = yukle(["veri/partiler.js"]).PARTILER;
+const M = require("../../sandik-mantik").olustur(P, O);
+const kayit = id => F.secimler.find(k => k.id === id);
+const kisa = id => P.N.find(n => n.id === id).kisa;
+
+test("partiAdi soyağacındaki partiyi ve düz metin satırı ayırır", () => {
+  const a = M.partiAdi({ parti: "dsp" });
+  assert.equal(a.id, "dsp");
+  assert.equal(a.kisa, kisa("dsp"));
+  assert.match(a.renk, /^#[0-9A-F]{6}$/i);
+  assert.deepEqual(M.partiAdi({ ad: "Bağımsız" }), { id: null, kisa: "Bağımsız", ad: "Bağımsız", renk: M.NOTR });
+});
+
+test("oyDegeri ve katilimDegeri sayılardan hesaplar, yoksa yedeğe düşer", () => {
+  const k = kayit("1999-04-genel");
+  assert.ok(Math.abs(M.oyDegeri(k.sonuc[1], k) - 300 / 700 * 100) < 1e-9);
+  assert.equal(M.katilimDegeri(k), 80);
+  assert.equal(M.oyDegeri({ parti: "dsp", oyYuzde: 12.5 }, { gecerli: null }), 12.5);
+  assert.equal(M.oyDegeri({ parti: "dsp", oy: null }, k), null);
+  assert.equal(M.katilimDegeri({ katilimYuzde: 71.2 }), 71.2);
+});
+
+test("siralaGenel sandalyeye, eşitlikte oya göre sıralar; bağımsız ve diğeri dışlar", () => {
+  assert.deepEqual(M.siralaGenel(kayit("1999-04-genel")).map(s => s.parti), ["dsp", "mhp93", "fp"]);
+  assert.deepEqual(M.siralaGenel(kayit("2002-11-genel")).map(s => s.parti), ["akp", "chp92"]);
+});
+
+test("baslikGenel çoğunluk, birincilik ve tek parti durumlarını ayırır", () => {
+  assert.equal(M.baslikGenel(kayit("1999-04-genel")), kisa("dsp") + " kazandı · tek başına iktidar");
+  assert.equal(M.baslikGenel(kayit("2002-11-genel")), kisa("akp") + " birinci parti");
+  assert.equal(M.baslikGenel(kayit("1927-09-genel")), "tek parti seçimi · iki dereceli");
+});
+
+test("meclisDurumu girenleri, giremeyenleri, bağımsızı ve diğeri ayırır", () => {
+  const d = M.meclisDurumu(kayit("1999-04-genel"));
+  assert.deepEqual(d.girenler.map(s => s.parti), ["dsp", "mhp93"]);
+  assert.deepEqual(d.giremeyenler.map(s => s.parti), ["fp"]);
+  assert.equal(d.bagimsiz.ad, "Bağımsız");
+  assert.equal(d.diger.partiSayisi, 3);
+});
+
+test("donemBul tarihi doğru banda koyar", () => {
+  assert.deepEqual(M.donemBul("1927-09-02"), { tur: "donem", i: 0 });
+  assert.deepEqual(M.donemBul("1999-04-18"), { tur: "donem", i: 5 });
+  assert.deepEqual(M.donemBul("2002-11-03"), { tur: "donem", i: 6 });
+});
+
+test("donemBul askerî yönetim aralığını banttan önce denetler", () => {
+  const i = P.DONEMLER.findIndex(d => d.kesinti && d.kesinti.yonetim);
+  if (i === -1) return;   // Görev 1'de yönetim tarihleri doğrulanamadıysa sınanacak bir şey yok
+  const y = P.DONEMLER[i].kesinti.yonetim;
+  assert.deepEqual(M.donemBul(y.bas), { tur: "yonetim", i });
+  assert.deepEqual(M.donemBul(y.bit), { tur: "yonetim", i });
+});
+
+test("donemBul hiçbir yere düşmeyen tarihte null döner", () => {
+  assert.equal(M.donemBul("1900-01-01"), null);
+});
+
+test("kronoloji seçimleri ve hükümetleri tarih sırasıyla bantlara dağıtır", () => {
+  const kr = M.kronoloji(F);
+  assert.deepEqual(kr.bantlar[5].ogeler.map(o => o.tur === "secim" ? o.kayit.id : "h" + o.hukumet.no),
+    ["1999-04-genel", "h57"]);
+  assert.deepEqual(kr.bantlar[6].ogeler.map(o => o.tur === "secim" ? o.kayit.id : "h" + o.hukumet.no),
+    ["2002-11-genel", "h58", "2004-03-yerel", "2007-10-referandum"]);
+  assert.equal(kr.yersiz.length, 0);
+});
+
+test("sonrakiHukumetler bir sonraki genel seçime kadar kurulanları verir", () => {
+  assert.deepEqual(M.sonrakiHukumetler(kayit("1999-04-genel"), F).map(h => h.no), [57]);
+  assert.deepEqual(M.sonrakiHukumetler(kayit("2002-11-genel"), F).map(h => h.no), [58]);
+});
+
+test("partininSecimleri ittifak listesinden seçilmeyi de bulur", () => {
+  const s = M.partininSecimleri("dsp", F);
+  assert.deepEqual(s.genel.map(x => x.kayit.id), ["1999-04-genel", "2002-11-genel"]);
+  assert.equal(s.genel[1].satir, null);
+  assert.deepEqual(s.genel[1].ittifak, { ad: "Sahte İttifak", liste: "chp92", sandalye: 2 });
+  assert.deepEqual(s.yerel.map(x => x.kayit.id), ["2004-03-yerel"]);
+});
diff --git a/sandik-mantik.js b/sandik-mantik.js
new file mode 100644
index 0000000..7e208a5
--- /dev/null
+++ b/sandik-mantik.js
@@ -0,0 +1,108 @@
+/* Sandık'ın saf mantığı. DOM'a dokunmaz; Node'da test edilir.
+   Kullanım: const M = SandikMantik.olustur(window.PARTILER, window.Ortak); */
+(function (kok, fabrika) {
+  var SM = fabrika();
+  if (typeof module === "object" && module.exports) module.exports = SM;
+  else kok.SandikMantik = SM;
+})(typeof window !== "undefined" ? window : this, function () {
+  function olustur(P, O) {
+    const BAGIMSIZ = "Bağımsız", DIGER = "Diğer", NOTR = "#8A8D80";
+    const parti = id => P.N.find(n => n.id === id);
+    const ozelSatir = s => s.ad === BAGIMSIZ || s.ad === DIGER;
+
+    function partiAdi(s) {
+      const n = s.parti ? parti(s.parti) : null;
+      if (n) return { id: n.id, kisa: n.kisa, ad: n.ad, renk: P.AILE[n.aile].ham };
+      return { id: null, kisa: s.ad, ad: s.ad, renk: NOTR };
+    }
+    function oyDegeri(s, k) {
+      if (s.oy != null) return O.yuzde(s.oy, k.gecerli);
+      return s.oyYuzde != null ? s.oyYuzde : null;
+    }
+    function katilimDegeri(k) {
+      if (k.kullanilan != null && k.kayitli != null) return O.yuzde(k.kullanilan, k.kayitli);
+      return k.katilimYuzde != null ? k.katilimYuzde : null;
+    }
+    function siralaGenel(k) {
+      const oy = s => (s.oy != null ? s.oy : (s.oyYuzde != null ? s.oyYuzde : -1));
+      return k.sonuc.filter(s => !ozelSatir(s)).slice().sort((a, b) => {
+        const sa = a.sandalye == null ? -1 : a.sandalye, sb = b.sandalye == null ? -1 : b.sandalye;
+        return sb - sa || oy(b) - oy(a);
+      });
+    }
+    function baslikGenel(k) {
+      if (k.tekParti) return "tek parti seçimi · iki dereceli";
+      const ilk = siralaGenel(k)[0];
+      if (!ilk) return "";
+      const ad = partiAdi(ilk).kisa;
+      if (ilk.sandalye != null && k.meclis != null && ilk.sandalye > k.meclis / 2)
+        return ad + " kazandı · tek başına iktidar";
+      return ad + " birinci parti";
+    }
+    function meclisDurumu(k) {
+      const sirali = siralaGenel(k);
+      return {
+        girenler: sirali.filter(s => s.sandalye > 0),
+        giremeyenler: sirali.filter(s => s.sandalye === 0),
+        bagimsiz: k.sonuc.find(s => s.ad === BAGIMSIZ) || null,
+        diger: k.sonuc.find(s => s.ad === DIGER) || null
+      };
+    }
+    function bantYillari(d) {
+      const p = d.yil.split("–").map(x => +x.trim());
+      return { bas: p[0], bit: p[1] || p[0] };
+    }
+    function donemBul(tarih) {
+      for (let i = 0; i < P.DONEMLER.length; i++) {
+        const y = P.DONEMLER[i].kesinti && P.DONEMLER[i].kesinti.yonetim;
+        if (y && y.bas <= tarih && tarih <= y.bit) return { tur: "yonetim", i };
+      }
+      const yil = +tarih.slice(0, 4);
+      for (let i = 0; i < P.DONEMLER.length; i++) {
+        const b = bantYillari(P.DONEMLER[i]);
+        if (b.bas <= yil && yil <= b.bit) return { tur: "donem", i };
+      }
+      return null;
+    }
+    function kronoloji(S) {
+      const ogeler = S.secimler.map(k => ({ tur: "secim", tarih: k.tarih, kayit: k }))
+        .concat(S.hukumetler.map(h => ({ tur: "hukumet", tarih: h.baslangic, hukumet: h })))
+        .sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 :
+                        (a.tur === b.tur ? 0 : a.tur === "secim" ? -1 : 1));
+      const kr = { bantlar: P.DONEMLER.map((d, i) => ({ i, ogeler: [] })), kaplar: {}, yersiz: [] };
+      for (const o of ogeler) {
+        const y = donemBul(o.tarih);
+        if (!y) kr.yersiz.push(o);
+        else if (y.tur === "yonetim") (kr.kaplar[y.i] = kr.kaplar[y.i] || []).push(o);
+        else kr.bantlar[y.i].ogeler.push(o);
+      }
+      return kr;
+    }
+    function sonrakiHukumetler(k, S) {
+      const sonraki = S.secimler.filter(x => x.tur === "genel" && x.tarih > k.tarih)
+        .map(x => x.tarih).sort()[0] || "9999-12-31";
+      return S.hukumetler.filter(h => h.baslangic >= k.tarih && h.baslangic < sonraki);
+    }
+    function partininSecimleri(id, S) {
+      const genel = [], yerel = [];
+      for (const k of S.secimler) {
+        const satir = (k.sonuc || []).find(s => s.parti === id) || null;
+        if (k.tur === "genel") {
+          let ittifak = null;
+          for (const it of k.ittifak || []) {
+            const ic = it.icinden.find(x => x.parti === id);
+            if (ic) ittifak = { ad: it.ad, liste: it.liste, sandalye: ic.sandalye };
+          }
+          if (satir || ittifak) genel.push({ kayit: k, satir, ittifak });
+        } else if (k.tur === "yerel" && satir) {
+          yerel.push({ kayit: k, satir });
+        }
+      }
+      return { genel, yerel };
+    }
+
+    return { BAGIMSIZ, DIGER, NOTR, partiAdi, oyDegeri, katilimDegeri, siralaGenel,
+             baslikGenel, meclisDurumu, donemBul, kronoloji, sonrakiHukumetler, partininSecimleri };
+  }
+  return { olustur };
+});
diff --git a/veri/sandik.js b/veri/sandik.js
new file mode 100644
index 0000000..1364a60
--- /dev/null
+++ b/veri/sandik.js
@@ -0,0 +1,7 @@
+/* Sandık verisi: seçimler, referandumlar, hükümetler.
+   Kurallar: docs/superpowers/specs/2026-09-11-sandik-design.md §5 ve §8.
+   Her değerin kaynağı araclar/kaynak-defteri.md'dedir. null = doğrulanamadı (ekranda —). */
+window.SANDIK = {
+  secimler: [],
+  hukumetler: []
+};
```
