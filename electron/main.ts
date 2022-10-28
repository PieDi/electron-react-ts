import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.webContents.openDevTools()
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(`https://juejin.cn/post/7077545184807878692`);
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, './public/index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
//@ts-ignore
app.allowRendererProcessReuse = true;