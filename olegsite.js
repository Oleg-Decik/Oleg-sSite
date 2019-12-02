const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');
const {dialog} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
      width: 700,
      height: 500,
      icon: __dirname + "/img/icon.png"
    });

    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html' ),
      protocol: 'file:',
      slashes: true
    }));

    win.on('closed', () => {
      win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
app.quit();
})

function isLogin (button) {
  let options = {
    messages: "Hello"
  }
  let response = dialog.showMessageBox(options);
  alert(response);
  console.log(response);
};
