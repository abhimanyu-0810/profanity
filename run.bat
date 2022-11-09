@echo off
echo Profanity v0.1
echo Author: 0x0is1
if exist node_modules\ (
  echo npm packages found! 
) else (
  echo npm packages not found. Installing...
  npm install
)
echo 1. Get one result
echo 2. Get all results
echo 3. Get Question Paper
set /p input=Select action: 
if %input%==1 (
    npm run result
    pause
) 
if %input%==2 (
    npm run export
    pause
) 
if %input%==3 (
    npm run question
    pause
) else (
    echo Wrong option selected
    pause
)
pause