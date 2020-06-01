var express = require('express');
var app = express();

// view engine setup
app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send('Hello World');
  res.sendfile('index.html');
});

function Display() {
  app.get('/hello', function (req, res) {
    res.render('hello', { title: 'Hello', message: 'Hello there!' })
  });
}

app.get('/hello', function (req, res) {
  res.render('hello', { title: 'Hello', message: 'Hello there!' })
});

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});
