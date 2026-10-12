#!/usr/bin/env bash
# kullanım: review.sh ETIKET BASE HEAD  -> inceleme paketinin yolunu basar
set -e
REPO="C:/Users/Lizer/Desktop/projects/siyasi parti"; W="$REPO/.superpowers/sdd/2026-09-11-sandik"
OUT="$W/review-$1.md"; cd "$REPO"
{
  echo "# İnceleme paketi: $1 ($2..$3)"; echo
  echo "## Commitler"; echo '```'; git log --oneline "$2..$3"; echo '```'
  echo "## Özet"; echo '```'; git diff --stat "$2" "$3"; echo '```'
  echo "## Fark"; echo '```diff'; git diff -U10 "$2" "$3"; echo '```'
} > "$OUT"
echo "$OUT"
