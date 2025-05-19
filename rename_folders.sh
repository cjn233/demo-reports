#!/bin/bash

# Only rename top-level folders (depth = 1)
find . -mindepth 1 -maxdepth 1 -type d ! -name "src" ! -name ".git" | while read dir; do
    base_name=$(basename "$dir")

    # Skip folders containing 'src' in the name
    if [[ "$base_name" == *src* ]]; then
        echo "⚠️ Skipping: $base_name (contains 'src')"
        continue
    fi

    # Skip folders that are actually already empty/untracked
    if [[ -z "$(ls -A "$dir" 2>/dev/null)" ]]; then
        echo "⚠️ Skipping empty folder: $base_name"
        continue
    fi

    # Generate new name
    new_base=$(echo "$base_name" | sed 's/[ .]/_/g')

    # Only rename if different
    if [[ "$base_name" != "$new_base" ]]; then
        echo "🔄 Attempting to rename: $base_name → $new_base"
        
        # Ensure contents are staged first so Git doesn't ignore it
        git add "$base_name" 2>/dev/null

        # Try renaming
        if git mv "$base_name" "$new_base" 2>/dev/null; then
            echo "✅ Renamed: $base_name → $new_base"
        else
            echo "❌ Git rename failed: $base_name. Falling back to manual rename."

            mv "$base_name" "$new_base"
            git add "$new_base"
            git rm -r --cached "$base_name" 2>/dev/null
            echo "✅ Fallback rename done: $base_name → $new_base"
        fi
    fi
done

# Commit and push if any changes
if git diff --cached --quiet; then
    echo "ℹ️  No folder renames to commit."
else
    git commit -m "Renamed top-level folders: replaced spaces and dots with underscores"
    git push origin main
    echo "✅ Folder renaming complete and pushed!"
fi
