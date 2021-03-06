const { ipcMain } = require('electron')
const {send: sendMainWindow} = require('./windows/main')
const {create: createControlWindow} = require('./windows/control')

module.exports = function () {
    ipcMain.handle('login', async () => {
        // 先 mock， 返回一个 code
        let code = Math.floor(Math.random() * (999999 - 100000)) + 100000
        return code
    })
    ipcMain.on('control', async(e, remoteCode)=>{
        // 这里跟服务端交互，先 mock 返回
        sendMainWindow('control-state-change', remoteCode, 1)
        createControlWindow()
    })
}