const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');
const {dialog} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
      backgroundColor: '#FF9700',
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
  var my_div = element = null;
  if (login == "Oleg" || password == "olegkrut"){
  var element = document.createElement("div");
  element.innerHTML = "<h1>Привет!</h1>";
  my_div = document.getElementById("password");
    document.body.insertBefore(element, my_div);
}
};
