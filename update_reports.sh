#!/usr/bin/env bash
set -e

echo "🔄 running full update_reports.sh …"

# 1️⃣ rename folders (spaces and dots → underscores)
echo "1. cleaning folder names…"
bash rename_folders.sh

# 2️⃣ standardise report files (index.html → report.html)
echo "2. standardising report filenames…"
bash rename_reports.sh

# 3️⃣ rebuild internal.html (real links)
echo "3. regenerating internal.html…"
bash generate_internal.sh

# 4️⃣ rebuild report_links.csv
echo "4. regenerating report_links.csv…"
bash generate_report_links.sh

# 5️⃣ commit and push
echo "5. committing and pushing changes…"
git add internal.html report_links.csv */report.html */src
# Stage all relevant changes (new + modified + deletions)
git add -A

# Only commit if there are changes
if git diff --cached --quiet; then
  echo "ℹ️  No changes to commit."
else
  git commit -m "update: added new reports and updated links"
  git push origin main
  echo "✅ Changes committed and pushed!"
fi

git commit -m "full update: folders cleaned, reports renamed, internal links rebuilt"
git push origin main

echo "✅ all done! ready for netlify deploy."
