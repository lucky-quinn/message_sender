var express = require('express');
var bodyParser = require('body-parser')


var app = express();
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(8080, function () {  //the router code
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at %s", port)
})

app.post('/sendmsg', function (req, res) {
    res.render('index', { title: 'Recived message', message: req.body.message })
});