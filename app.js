var express = require('express')
var app = express() ;
var path    = require('path');
var port = 3000

app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname + 'public')));
app.set('view engine', 'html');

// Dummy users
var users = [
  { name: 'tobi', email: 'tobi@learnboost.com' },
  { name: 'loki', email: 'loki@learnboost.com' },
  { name: 'jane', email: 'jane@learnboost.com' }
];

app.get('/', function(req, res){
  res.render('users', {
    users: users,
    title: "EJS example",
    header: "Some users"
  });
});




app.listen(port, function () {
  console.log('Example app listening on port'+ port);
})