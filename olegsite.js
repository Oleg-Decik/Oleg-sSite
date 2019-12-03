const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');
const {dialog} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
      backgroundColor: '#7608AA',
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


function isLogin () {
  var login = document.getElementsByClassName('login');
  var last = login[login.length -1].value;
  var password = document.getElementsByClassName('password');
  var password = password[password.length -1].value;
  if (login == "Oleg" || password == "olegkrut"){
  alert("This is easy");
}

};
