#!/usr/bin/env bash
# kullanım: brief.sh N [harita]  -> task-N-brief.md yolunu basar
set -e
REPO="C:/Users/Lizer/Desktop/projects/siyasi parti"; W="$REPO/.superpowers/sdd/2026-09-11-sandik"
PLAN="$REPO/docs/superpowers/plans/2026-09-11-sandik.md"; N="$1"; OUT="$W/task-$N-brief.md"
{
  echo "# Görev $N — brief (kaynak: docs/superpowers/plans/2026-09-11-sandik.md)"; echo
  awk '/^## Global Constraints/{f=1} /^## Uygulama sırası/{exit} f' "$PLAN"
  if [ "$2" = "harita" ]; then awk '/^## Kaynak haritası \(/{f=1} /^### Görev 1:/{exit} f' "$PLAN"; fi
  awk -v n="$N" 'BEGIN{p="^### Görev " n ":"} $0 ~ p {f=1; print; next} /^### Görev [0-9]+:/{if(f) exit} f' "$PLAN"
} > "$OUT"
echo "$OUT"
