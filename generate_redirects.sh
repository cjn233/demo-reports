#!/usr/bin/env bash
# run from demo-reports root

# where your report folders live
BASE="."

# clear old
> _redirects

for dir in "$BASE"/*/; do
  # skip dot-folders
  [[ "$(basename "$dir")" =~ ^[._] ]] && continue

  # find a suitable html: prefer index.html, then *.html
  if     [[ -f "$dir/index.html"    ]]; then target="$dir/index.html"
  elif   [[ -f "$dir/report.html"   ]]; then target="$dir/report.html"
  else
    # any other .html?
    target=$(find "$dir" -maxdepth 1 -type f -iname "*.html" | head -n1)
  fi

  if [[ -z "$target" ]]; then
    echo "⚠️  no html found in $dir, skipping"
    continue
  fi

  # make slug: lowercase, non-alnum→hyphen, collapse
  slug=$(basename "$dir" \
    | tr '[:upper:]' '[:lower:]' \
    | sed 's/[^a-z0-9]/-/g; s/-\+/-/g; s/^-//; s/-$//'
  )

  # write the redirect
  echo "/$slug  /${target#./}  200" >> _redirects
done

echo "✅  _redirects generated:"
cat _redirects

