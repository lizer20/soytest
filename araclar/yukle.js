// Tarayıcı için yazılmış dosyaları (window.X = …) Node'da çalıştırır.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const KOK = path.join(__dirname, "..");

function yukle(dosyalar) {
  const window = {};
  const ctx = vm.createContext({ window, console });
  for (const d of dosyalar) {
    const tam = path.join(KOK, d);
    if (!fs.existsSync(tam)) continue;
    vm.runInContext(fs.readFileSync(tam, "utf8"), ctx, { filename: d });
  }
  return window;
}

module.exports = { yukle, KOK };
