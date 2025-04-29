#!/usr/bin/env bash
set -e

echo "🔄 Full update running…"

echo "1️⃣  renaming folders…"
bash rename_folders.sh

echo "2️⃣  standardising report files…"
bash rename_reports.sh

echo "3️⃣  building redirects & internal list…"
bash generate_redirects.sh

echo "4️⃣  committing & pushing…"
git add _redirects internal.html report_links.csv
git commit -m "full update: folders↔_, report.html, redirects & internal list refreshed"
git push origin main

echo "✅ All done! Deploy on Netlify to see updates."
