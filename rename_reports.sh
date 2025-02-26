#!/bin/bash

# Loop through each folder in the current directory
for dir in */ ; do
    # Remove trailing slash
    clean_dir=$(echo "$dir" | sed 's:/*$::')

    # Check if index.html exists and rename it to report.html
    if [[ -f "$clean_dir/index.html" ]]; then
        mv "$clean_dir/index.html" "$clean_dir/report.html"
        echo "Renamed: $clean_dir/index.html → $clean_dir/report.html"
        continue
    fi

    # Find the largest .html file (excluding report.html)
    report_file=$(find "$clean_dir" -maxdepth 1 -type f -name "*.html" ! -name "report.html" ! -name "directory_tree.html" -exec du -b {} + | sort -nr | head -n 1 | awk '{print $2}')

    # If a large HTML file is found, rename it to report.html
    if [[ -f "$report_file" ]]; then
        mv "$report_file" "$clean_dir/report.html"
        echo "Renamed largest HTML file: $report_file → $clean_dir/report.html"
    else
        echo "No suitable report file found in $clean_dir"
    fi
done

# Commit and push the changes
git add .
git commit -m "Auto-renamed main report files while keeping extra files"
git push origin main

echo "✅ Report file renaming completed! Extra files remain unchanged."
