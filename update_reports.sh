#!/bin/bash

# Navigate to the GitHub repository
cd "$(dirname "$0")"

# Pull the latest changes (to avoid conflicts)
git pull origin main

# Add all changes (new, modified, and deleted files)
git add .

# Commit with a timestamp
commit_message="Updated reports - $(date +'%Y-%m-%d %H:%M:%S')"
git commit -m "$commit_message"

# Push to GitHub
git push origin main

echo "✅ Reports updated and pushed to GitHub!"
