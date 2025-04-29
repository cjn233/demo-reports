#!/bin/bash

# safer rename_reports.sh
rename_report_files() {
  local folder="$1"

  # Skip src folders
  if [[ "$folder" == *"/src/"* ]]; then
    echo "Skipping src/ folder: $folder"
    return
  fi

  # If report.html already exists, do nothing
  if [[ -f "$folder/report.html" ]]; then
    echo "✅ report.html already exists in $folder, skipping."
    return
  fi

  # If index.html exists, rename it
  if [[ -f "$folder/index.html" ]]; then
    mv "$folder/index.html" "$folder/report.html"
    echo "✏️ Renamed index.html → report.html in $folder"
    return
  fi

  # Otherwise, find a large enough html file (>50KB) to be considered a report
  candidate=$(find "$folder" -maxdepth 1 -type f -iname "*.html" -size +50k | head -n1)

  if [[ -f "$candidate" ]]; then
    mv "$candidate" "$folder/report.html"
    echo "✏️ Renamed large html file to report.html in $folder"
  else
    echo "⚠️  No suitable large report.html found in $folder, skipping."
  fi

  # Then process subfolders recursively
  for subfolder in "$folder"*/ ; do
    if [[ -d "$subfolder" ]]; then
      rename_report_files "$subfolder"
    fi
  done
}

# Start processing from root
for main_dir in */ ; do
  rename_report_files "$main_dir"
done

echo "✅ Done renaming all reports!"
