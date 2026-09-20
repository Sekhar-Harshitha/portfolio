@echo off
title Sekhar Harshitha Portfolio — Dev Server
color 0A
echo.
echo  =====================================================
echo   Sekhar Harshitha Portfolio — Starting Dev Server
echo  =====================================================
echo.

cd /d "%~dp0"

echo [1/2] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed. Is Node.js installed?
    pause
    exit /b 1
)

echo.
echo [2/2] Starting Next.js dev server...
echo.
echo  Open your browser at: http://localhost:3000
echo.
call npm run dev
pause
