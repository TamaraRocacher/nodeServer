var express = require ('express');
var compression = require('compression');
var app = express();
var fs = require('fs');
var forceDomain = require('forcedomain');

app.set('port', process.env.PORT || 80);

app.use(express.static(__dirname +'/public' ));

/*app.use(forceDomain({
    hostname: 'www.tamara.rocacher.com'
}));*/

app.use(compression());

app.use(function(req, res, next) {
    var log = fs.createWriteStream('auth.log', {
	'flags': 'a'
    });
    
    var info = new Date() + ' | ' + req.connection.remoteAddress + ' | ' +
	req.url + ' | ' + req.method ;
    
    /*if (req.session.user) {
      info += ' | ' + req.session.user.email;
      }*/
    
    console.log(info);
    log.write(info + '\n');
    log.end();
    next();
});



app.get('/', function(req,res) {
    res.sendFile(__dirname+ '/pages/index.html');
 });

app.get('/cv', function(req, res){
    res.sendFile(__dirname + '/pages/cv.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/pages/contact.html');
});

app.get('/projet', function(req, res){
    res.sendFile(__dirname + '/pages/projet.html');
});

app.listen(app.get('port'),function() {
    console.log('Start on port '+app.get('port'));
}); 
