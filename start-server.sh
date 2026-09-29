#!/bin/bash
# Campus Memory — local server launcher (Mac/Linux)
# Double-click this file (or run `bash start-server.sh`) to serve the site at
# http://localhost:8000 — this avoids file:// browser quirks (Firefox/Safari
# isolate localStorage per folder on file://, which breaks login persistence).
cd "$(dirname "$0")"
PORT=8000
echo "Starting Campus Memory at http://localhost:$PORT ..."
echo "Press Ctrl+C to stop."
if command -v python3 &> /dev/null; then
  python3 -m http.server $PORT
elif command -v python &> /dev/null; then
  python -m http.server $PORT
else
  echo "Python not found. Install Python 3, or open index.html directly in Chrome/Edge."
  read -p "Press Enter to exit..."
fi
