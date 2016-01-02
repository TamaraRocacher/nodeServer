var express = require ('express');
var app = express();

app.set('port', process.env.PORT || 80);

app.use(express.static(__dirname +'/public' ));


app.get('/', function(req,res) {
    res.sendFile(__dirname+ '/pages/index.html');
 });

app.get('/cv', function(req, res){
    res.sendFile(__dirname + '/pages/cv.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/pages/contact.html');
});

app.listen(app.get('port'),function() {
    console.log('Start on port '+app.get('port'));
}); 
