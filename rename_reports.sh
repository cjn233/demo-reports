#!/bin/bash

# Function to process folders recursively while skipping "src/"
rename_report_files() {
    local folder="$1"

    # Skip any folder that contains "src/" in its path
    if [[ "$folder" == *"/src/"* ]]; then
        echo "Skipping: $folder (inside src/)"
        return
    fi

    # Check if index.html exists and rename it to report.html
    if [[ -f "$folder/index.html" ]]; then
        mv "$folder/index.html" "$folder/report.html"
        echo "Renamed: $folder/index.html → $folder/report.html"
        return
    fi

    # Find the largest .html file (excluding report.html)
    report_file=$(find "$folder" -maxdepth 1 -type f -name "*.html" ! -name "report.html" ! -name "directory_tree.html" -exec du -b {} + | sort -nr | head -n 1 | awk '{print $2}')

    # If a large HTML file is found, rename it to report.html
    if [[ -f "$report_file" ]]; then
        mv "$report_file" "$folder/report.html"
        echo "Renamed largest HTML file: $report_file → $folder/report.html"
    else
        echo "No suitable report file found in $folder"
    fi

    # Recursively process subfolders (except those containing src/)
    for subfolder in "$folder"/*/ ; do
        if [[ -d "$subfolder" ]]; then
            rename_report_files "$subfolder"
        fi
    done
}

# Loop through all main folders and call the function recursively
for main_dir in */ ; do
    rename_report_files "$main_dir"
done

# Commit and push the changes
git add .
git commit -m "Recursively renamed report files while skipping src/ folders"
git push origin main

echo "✅ Report file renaming completed in all nested folders, skipping src/!"
