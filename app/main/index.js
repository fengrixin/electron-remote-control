const { app, BrowserWindow } = require('electron')
const path = require('path')
const handleIPC = require('./ipc')
const {create: createMainWindow} = require('./windows/main')
// const {create: createControlWindow} = require('./window/control')

app.on('ready', () => {

    createMainWindow()
    // createControlWindow()

    handleIPC()

})