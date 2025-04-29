#!/usr/bin/env bash
set -e

base_url="https://europe-demoreports.netlify.app"

# start fresh
> _redirects
cat > internal.html <<'EOF'
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Internal Report Links</title></head>
<body><h1>Internal Access to Reports</h1><ul>
EOF

# CSV header
echo "Report Name,Link" > report_links.csv

for folder_path in */; do
  folder=${folder_path%/}
  # skip if no report.html
  if [[ ! -f "$folder/report.html" ]]; then
    echo "⚠️  skipping $folder (no report.html)"
    continue
  fi

  # build a URL-friendly slug
  slug=$(echo "$folder" \
    | tr '[:upper:]' '[:lower:]' \
    | sed 's/[^a-z0-9]/-/g; s/-\+/-/g; s/^-//; s/-$//'
  )

  # 1) serve the report page
  echo "/$slug    /$folder/report.html    200" >> _redirects

  # 2) serve any asset under slug/* back to folder
  echo "/$slug/*  /$folder/:splat         200" >> _redirects

  # internal.html entry
  echo "  <li><a href=\"$base_url/$slug\">$folder</a></li>" >> internal.html

  # CSV entry
  echo "\"$folder\",\"$base_url/$slug\"" >> report_links.csv
done

# finish internal.html
cat >> internal.html <<'EOF'
</ul>
</body>
</html>
EOF

echo "✅ _redirects, internal.html & report_links.csv rebuilt with asset rewrites"
