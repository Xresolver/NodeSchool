     const electron = require('electron')
     const path = require('path')

     electron.app.on('ready', function () {
       var mainWindow = new electron.BrowserWindow({width: 600, height: 800,     
          webPreferences: {preload: path.join(__dirname, 'index.js')}})
       mainWindow.loadURL('file://' + __dirname + '/index.html')
     })