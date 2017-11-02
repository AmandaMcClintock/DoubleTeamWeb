var express = require('express');
var app = express();

app.get('/ping', function(req, res) {
    res.send({ping: 'hello this is a server and I alive'});
});

app.get('/ping:id', function(req, res) {
    res.send({ping: 'hello this is a server and I got ' +req.param.id});
})

app.listen(3000);
console.log('Listening on prot 3000...');