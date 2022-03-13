const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
        width: 1600,
        height: 900,
        fullscreen: true,
        icon: "icon.png",
        autoHideMenuBar: true,
        backgroundColor: "#000000",
        title: "YouTube for TV",
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            contextIsolation: false
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
