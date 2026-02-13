@echo off
echo ========================================
echo   Deploy Valentine Website ke GitHub
echo ========================================
echo.

echo [1/5] Inisialisasi Git...
git init

echo.
echo [2/5] Menambahkan semua file...
git add .

echo.
echo [3/5] Commit file...
git commit -m "Valentine website - Initial commit"

echo.
echo [4/5] Menambahkan remote repository...
git remote add origin https://github.com/ssnhrii/velentine.git

echo.
echo [5/5] Push ke GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo   Deploy Selesai!
echo ========================================
echo.
echo Website akan aktif di:
echo https://ssnhrii.github.io/velentine/
echo.
echo Tunggu 2-3 menit, lalu aktifkan GitHub Pages:
echo 1. Buka https://github.com/ssnhrii/velentine/settings/pages
echo 2. Di Source, pilih branch "main"
echo 3. Klik Save
echo.
pause
