var express = require('express');
var path    = require('path');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.engine('html',require('hogan-express'));
app.set('view engine','html');

app.use(express.static(path.join(__dirname,'public')));
app.set('port',3000);

var router = express.Router();


router.get('/',function(req,res,nest){
	res.render('index',{});
    });
 
app.use('/',router);


var server = require('http').createserver(app);

server.listen(app.get('port'),function(){
	console.log('my express app running on port' + app.get('port'));
    })

