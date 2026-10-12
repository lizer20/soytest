const test = require("node:test");
const assert = require("node:assert/strict");
const O = require("../../ortak");

test("tarihYaz Türkçe ay adlarıyla yazar", () => {
  assert.equal(O.tarihYaz("1950-05-14"), "14 Mayıs 1950");
  assert.equal(O.tarihYaz("2002-11-03", true), "3 Kas 2002");
  assert.equal(O.tarihYaz(null), "—");
});

test("yuzde ve yuzdeYaz", () => {
  assert.equal(O.yuzde(1, 4), 25);
  assert.equal(O.yuzde(null, 4), null);
  assert.equal(O.yuzde(1, 0), null);
  assert.equal(O.yuzdeYaz(52.68), "%52,7");
  assert.equal(O.yuzdeYaz(null), "—");
});

test("sayiYaz binlik noktayla yazar", () => {
  assert.equal(O.sayiYaz(1234567), "1.234.567");
  assert.equal(O.sayiYaz(null), "—");
});

test("hashOku yalnızca güvenli kimlikleri kabul eder", () => {
  assert.equal(O.hashOku("#1950-05-genel"), "1950-05-genel");
  assert.equal(O.hashOku("#akp"), "akp");
  assert.equal(O.hashOku("#<img>"), null);
  assert.equal(O.hashOku(""), null);
});

test("tarihYaz günü bilinmeyen tarihi ay ve yılla yazar", () => {
  assert.equal(O.tarihYaz("1923-06"), "Haziran 1923");
  assert.equal(O.tarihYaz("1923-06", true), "Haz 1923");
});
