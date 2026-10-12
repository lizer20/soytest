const test = require("node:test");
const assert = require("node:assert/strict");
const { sayiOku, topla } = require("../topla");

test("sayiOku binlik noktalı sayıyı okur", () => {
  assert.equal(sayiOku("2.197"), 2197);
  assert.equal(sayiOku("642.708"), 642708);
  assert.equal(sayiOku("1110"), 1110);
  assert.throws(() => sayiOku("12a"), /sayı değil/);
});

test("topla il satırlarını sütun sütun toplar (ilk sütun il adı)", () => {
  assert.deepEqual(topla([["A", "1.000", "10"], ["B", "2.500", "5"]]), [3500, 15]);
});

test("topla sütun sayısı tutmayan satırı reddeder", () => {
  assert.throws(() => topla([["A", "1", "2"], ["B", "1"]]), /satır 2: sütun sayısı/);
});
