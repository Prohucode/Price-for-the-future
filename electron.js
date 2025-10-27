import { app, BrowserWindow, ipcMain } from "electron";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const PORT = 3000;

// Раздаём файлы из dist
server.use(express.static(path.join(__dirname, "dist")));

// Запускаем сервер
server.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});

function createWindow() {
    const win = new BrowserWindow({
        width: 1600,
        height: 1000,
        fullscreen:true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,   // обязательно
            nodeIntegration: false,   // обязательно
        },
    });
    win.setMenu(null); // Отключаем меню
    win.loadURL(`http://localhost:${PORT}`);
}

app.whenReady().then(createWindow);

ipcMain.on('exit-app', () => {
    app.quit();
});