@echo off
echo.
echo ===================================
echo   Ratheesh's Portfolio Setup
echo ===================================
echo.

echo 1. Starting Frontend Development Server...
cd /d "e:\Projects\rat-portfolio"
start "Frontend Server" cmd /k "npm run dev"

timeout /t 3 /nobreak >nul

echo 2. Starting Python Chatbot Backend...
cd /d "e:\Projects\rat-portfolio\chatbot-backend"
start "Chatbot Backend" cmd /k "E:/Projects/rat-portfolio/chatbot-backend/venv/Scripts/python.exe app.py"

timeout /t 2 /nobreak >nul

echo.
echo ✅ Portfolio is starting up!
echo.
echo 📱 Frontend: http://localhost:8081
echo 🤖 Chatbot Backend: http://localhost:5000
echo.
echo Press any key to close this window...
pause >nul
