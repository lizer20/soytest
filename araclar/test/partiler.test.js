const test = require("node:test");
const assert = require("node:assert/strict");
const { yukle } = require("../yukle");
const { dogrulaPartiler } = require("../dogrula");

const P = yukle(["veri/partiler.js"]).PARTILER;

test("PARTILER yüklenir ve soyağacının sayıları korunur", () => {
  assert.ok(P, "window.PARTILER tanımlı değil");
  assert.equal(P.N.length, 94);
  assert.equal(P.E.length, 88);
  assert.equal(P.AILE.length, 7);
  assert.equal(P.DONEMLER.length, 8);
  assert.deepEqual(Object.keys(P.ROZET).sort(), ["faal", "kapandi", "kapatildi", "katildi"]);
});

test("kesintiler null ya da {tarih, metin} nesnesi", () => {
  for (const d of P.DONEMLER) {
    if (d.kesinti === null) continue;
    assert.match(d.kesinti.tarih, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(typeof d.kesinti.metin, "string");
    if (d.kesinti.yonetim) {
      assert.match(d.kesinti.yonetim.bas, /^\d{4}-\d{2}-\d{2}$/);
      assert.match(d.kesinti.yonetim.bit, /^\d{4}-\d{2}-\d{2}$/);
      assert.ok(d.kesinti.yonetim.bas <= d.kesinti.yonetim.bit);
    }
  }
});

test("28 Şubat kesintisi Refah Partisi'nin kapatılmasını 1998'e koyar", () => {
  const k = P.DONEMLER.map(d => d.kesinti).find(k => k && k.tarih === "1997-02-28");
  assert.ok(k, "1997-02-28 tarihli kesinti yok");
  assert.match(k.metin, /Refah Partisi/);
  assert.match(k.metin, /1998/);
});

test("gerçek veri soyağacı denetiminden hatasız geçer", () => {
  assert.deepEqual(dogrulaPartiler(P).hatalar, []);
});

test("denetim bozuk veriyi yakalar", () => {
  const bozuk = structuredClone(P);
  bozuk.N.push({ ...bozuk.N[0] });                        // yinelenen id
  bozuk.E.push(["yok1", "yok2", "devam"]);                // bilinmeyen uç
  bozuk.E.push([bozuk.N[0].id, bozuk.N[1].id, "tuhaf"]);  // bilinmeyen tür
  delete bozuk.BILGI[bozuk.N[2].id];                      // künyesiz parti
  bozuk.N[3] = { ...bozuk.N[3], durum: "faal", yil: "1950 – 1960" }; // faal ama bitmiş
  const h = dogrulaPartiler(bozuk).hatalar.join("\n");
  assert.match(h, /yinelenen parti id/);
  assert.match(h, /bilinmeyen uç/);
  assert.match(h, /bilinmeyen bağ türü/);
  assert.match(h, /BILGI kaydı yok/);
  assert.match(h, /faal ama bitiş yılı var/);
});
