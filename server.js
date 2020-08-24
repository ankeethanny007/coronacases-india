var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static('./dist/covid19india'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/covid19india'})
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});