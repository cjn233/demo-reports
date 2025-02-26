#!/bin/bash

# Find all user-created folders (excluding .git and system directories)
find . -type d ! -path "./.git*" | while read dir; do
    # Skip folders that are inside "src/"
    if [[ "$dir" == */src/* ]]; then
        echo "Skipping (inside src/): $dir"
        continue
    fi

    # Generate new folder name by replacing spaces and dots with underscores
    new_dir=$(echo "$dir" | sed 's/[ .]/_/g')

    # Rename only if the name changed
    if [[ "$dir" != "$new_dir" ]]; then
        git mv "$dir" "$new_dir"
        echo "Renamed: $dir → $new_dir"
    fi
done

# Commit and push the changes
git commit -m "Renamed folders: replaced spaces and dots with underscores (excluding src/ and system files)"
git push origin main

echo "✅ All folder renames completed, skipping src/ and system folders!"
