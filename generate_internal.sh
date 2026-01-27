#!/usr/bin/env bash

base_url="https://europe-demoreports.netlify.app"
timestamp=$(date +"%Y-%m-%d %H:%M %Z")
password="novogene4omics"

cat > internal.html <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Internal Demo Report Index</title>

  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      max-width: 900px;
      margin: 40px auto;
      padding: 0 20px;
      background: #f9f9f9;
      color: #333;
    }
    h1 {
      text-align: center;
      margin-bottom: 10px;
    }
    .disclaimer {
      background-color: #ffe5e5;
      border: 1px solid #ff5a5a;
      padding: 15px;
      color: #a60000;
      font-weight: bold;
      margin-bottom: 30px;
      text-align: center;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      background: #fff;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      padding: 12px 18px;
      border-radius: 5px;
      transition: background 0.2s;
    }
    li:hover {
      background: #f0f0ff;
    }
    .meta {
      font-size: 12px;
      color: #777;
      margin-left: 10px;
    }
    a {
      color: #0056b3;
      text-decoration: none;
      font-size: 16px;
    }
    a:hover {
      text-decoration: underline;
    }
    .timestamp, .csv-link {
      font-size: 13px;
      color: #555;
      text-align: center;
      margin-top: 30px;
    }
  </style>

  <script>
    const allowedPassword = "$password";
    const stored = localStorage.getItem("internalAccess");

    function unlockPage() {
      const tmpl = document.getElementById("main-template");
      if (tmpl) {
        document.body.innerHTML = tmpl.innerHTML;
      }
    }

    function lockAndRedirect() {
      alert("❌ Access denied. Redirecting...");
      localStorage.removeItem("internalAccess");
      window.location.href = "https://www.google.com";
    }

    function promptPassword(tries = 2) {
      const pass = prompt(\`🔒 Enter internal access password: (\${tries} tries left)\`);
      if (pass === allowedPassword) {
        localStorage.setItem("internalAccess", allowedPassword);
        unlockPage();
      } else {
        if (tries > 1) {
          alert("❌ Wrong password. Please try again.");
          promptPassword(tries - 1);
        } else {
          lockAndRedirect();
        }
      }
    }

    if (stored === allowedPassword) {
      window.onload = unlockPage;
    } else {
      window.onload = () => promptPassword();
    }
  </script>
</head>

<body>
  <template id="main-template">
    <h1>Internal Demo Report Index</h1>
    <div class="disclaimer">
      STRICTLY CONFIDENTIAL — For Internal Use Only. Do Not Share Externally.
    </div>
    <ul>
EOF

# Build report_links.csv with disclaimer
echo "CONFIDENTIAL - For internal use only. Do not forward or share externally." > report_links.csv
echo "Report Name,Last Updated,Link" >> report_links.csv

# Add each report to HTML + CSV with timestamp
for folder in */; do
  folder=${folder%/}
  report_file="$folder/report.html"
  if [[ -f "$report_file" ]]; then
    last_updated=$(date -r "$report_file" +"%Y-%m-%d %H:%M")
    report_url="$base_url/$folder/report.html"

    echo "      <li><a href=\"$report_url\">$folder</a><span class=\"meta\">– updated $last_updated</span></li>" >> internal.html
    echo "$folder,$last_updated,$report_url" >> report_links.csv
  fi
done

# Finish HTML
cat >> internal.html <<EOF
    </ul>
    <div class="csv-link">
      <a href="report_links.csv" download>Download full report link list (CSV)</a>
      <p style="font-size: 12px; color: #a60000; text-align: center; margin-top: 5px;">
        ⚠️ This file is for internal use only. Do not forward or share externally.
      </p>
    </div>
    <div class="timestamp">
      Last updated on: $timestamp
    </div>
  </template>
</body>
</html>
EOF

# Auto-commit and push
git add internal.html report_links.csv
git commit -m "update: added last modified dates to report list and CSV"
git push origin main

echo "✅ internal.html and report_links.csv updated with last modified info and pushed."
