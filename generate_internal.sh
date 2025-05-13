#!/usr/bin/env bash

base_url="https://europe-demoreports.netlify.app"
timestamp=$(date +"%Y-%m-%d %H:%M %Z")
password="demo2025"

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

# add links
for folder in */; do
  folder=${folder%/}
  if [[ -f "$folder/report.html" ]]; then
    echo "      <li><a href=\"$base_url/$folder/report.html\">$folder</a></li>" >> internal.html
  fi
done

# add CSV and timestamp
cat >> internal.html <<EOF
    </ul>
    <div class="csv-link">
      <a href="report_links.csv" download>Download full report link list (CSV)</a>
    </div>
    <div class="timestamp">
      Last updated on: $timestamp
    </div>
  </template>
</body>
</html>
EOF

# optional: auto-commit and push
git add internal.html
git commit -m "fix: reliable unlock with window.onload"
git push origin main

echo "✅ internal.html fully updated and pushed!"