#!/usr/bin/env node
// Resmî il tablosundan ulusal toplam (spesifikasyon §8.1 "hesaplanmış toplamlar").
// Girdi: sekmeyle ayrılmış satırlar; 1. sütun il adı, sonrakiler sayılar ("1.234" biçimi).
const fs = require("fs");

function sayiOku(m) {
  const t = String(m).trim();
  if (!/^\d{1,3}(\.\d{3})*$|^\d+$/.test(t)) throw new Error("sayı değil: " + m);
  return Number(t.replace(/\./g, ""));
}

function topla(satirlar) {
  const n = satirlar[0].length;
  const toplam = new Array(n - 1).fill(0);
  satirlar.forEach((s, i) => {
    if (s.length !== n) throw new Error("satır " + (i + 1) + ": sütun sayısı " + s.length + ", beklenen " + n);
    for (let j = 1; j < n; j++) toplam[j - 1] += sayiOku(s[j]);
  });
  return toplam;
}

module.exports = { sayiOku, topla };

if (require.main === module) {
  const satirlar = fs.readFileSync(process.argv[2], "utf8").split(/\r?\n/)
    .filter(Boolean).map(l => l.split("\t"));
  console.log(JSON.stringify({ satir: satirlar.length, toplamlar: topla(satirlar) }));
}
