@echo off
REM Campus Memory — local server launcher (Windows)
REM Double-click this file to serve the site at http://localhost:8000
cd /d "%~dp0"
echo Starting Campus Memory at http://localhost:8000 ...
echo Press Ctrl+C to stop.
python -m http.server 8000
if errorlevel 1 (
  py -m http.server 8000
)
pause
