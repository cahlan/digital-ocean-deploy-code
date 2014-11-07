var express = require('express')
var passport = require('passport');


var app = express();
app.use(express.static(__dirname+'/public'));

console.log(process.env);
console.log("current port", process.env.EXPRESS_PORT || 8888);

app.post('/test', function(req, res) {
    console.log("POST to the /test endpoint");
    return res.status(200).end(); 
});

app.listen(process.env.EXPRESS_PORT || 8888);