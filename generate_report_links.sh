#!/usr/bin/env bash

# base url
base_url="https://europe-demoreports.netlify.app"

echo "Report Name,Link" > report_links.csv

for folder_path in */; do
  folder=${folder_path%/}
  if [[ -f "$folder/report.html" ]]; then
    echo "\"$folder\",\"$base_url/$folder/report.html\"" >> report_links.csv
  fi
done

echo "✅ report_links.csv regenerated"
