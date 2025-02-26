#!/bin/bash

# Start creating index.html
echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Reports</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; }
        h1 { text-align: center; }
        ul { list-style-type: none; padding: 0; }
        li { margin: 10px 0; }
        a { text-decoration: none; color: #007bff; font-size: 18px; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>Available Demo Reports</h1>
    <ul>' > index.html

# Find all report.html files (excluding src/) and create proper links
find . -type f -name "report.html" ! -path "*/src/*" | sort | while read report; do
    # Remove ./ from the start of the path
    clean_path="${report#./}"
    # Extract the parent directory name
    report_name=$(basename "$(dirname "$clean_path")")
    echo "        <li><a href=\"$clean_path\">$report_name</a></li>" >> index.html
done

# Close the HTML file
echo '    </ul>
</body>
</html>' >> index.html

# Commit and push the updated index.html
git add index.html
git commit -m "Fixed index.html to properly link reports"
git push origin main

echo "✅ Fixed index.html - now linking reports correctly!"
