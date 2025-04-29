#!/bin/bash

# Only rename top-level folders (depth = 1)
find . -mindepth 1 -maxdepth 1 -type d ! -name "src" ! -name ".git" | while read dir; do
    # Get folder name only (strip ./)
    base_name=$(basename "$dir")

    # Skip folders that contain src in the name (just in case)
    if [[ "$base_name" == *src* ]]; then
        echo "Skipping: $base_name (contains 'src')"
        continue
    fi

    # Generate new name (replace space and dot with underscore)
    new_base=$(echo "$base_name" | sed 's/[ .]/_/g')

    # Only rename if needed
    if [[ "$base_name" != "$new_base" ]]; then
        git mv "$base_name" "$new_base"
        echo "Renamed: $base_name → $new_base"
    fi
done

# Commit and push
git commit -m "Renamed top-level folders: replaced spaces and dots with underscores"
git push origin main

echo "✅ Folder renaming complete (top level only)"
