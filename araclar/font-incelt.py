"""ortak.css içine gömülü yazı tiplerini inceltir (12 Ekim 2026).

Ne yapar:
  * Latin-ext dilimlerini (Fraunces, Plex Mono 400/500/600, Plex Sans) Latin Extended-A'ya
    (U+0100-017F) indirir. Sitede bu aralık dışında Latin-ext harfi yok; Türkçe harfler (Ğ ğ İ Ş ş)
    bu aralıkta, ı ise zaten Latin dilimindedir.
  * Değişken yazı tiplerinin kalınlık eksenini CSS'te kullanılan aralığa daraltır:
    Fraunces 500-700, IBM Plex Sans 400-600. Aralık içindeki çizim değişmez.
  * @font-face sırası ve CSS kuralları aynı kalır; yalnız base64 verisi ve Latin-ext
    unicode-range'i değişir.

Kullanım (fonttools ve brotli gerekir: pip install fonttools brotli):
    python3 araclar/font-incelt.py ortak.css
Betik özgün (inceltilmemiş) ortak.css üzerinde bir kez çalıştırılmak içindir; inceltilmiş dosyada
yeniden çalıştırmak zararsızdır ama kazanç getirmez.
"""
import base64
import io
import re
import sys

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

EKSEN = {"Fraunces": {"wght": (500, 700)}, "IBM Plex Sans": {"wght": (400, 600)}}
EXT_A = range(0x100, 0x180)


def incelt(veri, aile, latin_ext):
    f = TTFont(io.BytesIO(veri))
    if aile in EKSEN and "fvar" in f:
        f = instancer.instantiateVariableFont(f, EKSEN[aile])
        tampon = io.BytesIO(); f.flavor = "woff2"; f.save(tampon)
        f = TTFont(io.BytesIO(tampon.getvalue()), lazy=False)
    if latin_ext:
        o = subset.Options()
        o.layout_features = ["*"]; o.name_IDs = ["*"]; o.name_languages = ["*"]
        o.notdef_outline = True; o.flavor = "woff2"
        s = subset.Subsetter(o); s.populate(unicodes=EXT_A); s.subset(f)
    cikti = io.BytesIO(); f.flavor = "woff2"; f.save(cikti)
    return cikti.getvalue()


def main(yol):
    css = open(yol, encoding="utf-8").read()

    def degistir(m):
        b = m.group(0)
        aile = re.search(r'font-family:"([^"]+)"', b).group(1)
        latin_ext = "U+0100-02BA" in b or "U+0100-017F" in b
        eski = base64.b64decode(re.search(r"base64,([^)]+)\)", b).group(1))
        yeni = incelt(eski, aile, latin_ext)
        if len(yeni) >= len(eski):
            return b
        b = re.sub(r"base64,[^)]+\)", "base64," + base64.b64encode(yeni).decode() + ")", b)
        if latin_ext:
            b = re.sub(r"unicode-range:[^;]+;", "unicode-range:U+0100-017F;", b)
        print(aile, "latin-ext" if latin_ext else "latin", len(eski), "->", len(yeni))
        return b

    yeni = re.sub(r"@font-face\{.*?\}", degistir, css, flags=re.S)
    open(yol, "w", encoding="utf-8").write(yeni)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "ortak.css")
