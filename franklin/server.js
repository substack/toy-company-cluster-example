var http = require('http');
var ports = require('seaport').connect(7007);
var pick = require('deck').pick;
var ecstatic = require('ecstatic')(__dirname);

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        var quotes = [
            "It's all about the Benjamins.",
            'Time to get diplomatic.',
            'BIFOCAL STARE. zzzzzaaaap',
        ];
        res.end([
            '<h1>BENJAMIN FRANKLIN</h1>',
            '<h3>' + pick(quotes) + '</h3>',
            '<img src="images/franklin.png">',
            '<div>' + server.address().port + '</div>',
        ].join('\n'));
    }
    else ecstatic(req, res)
});

ports.service('franklin', function (port, ready) {
    server.listen(port, ready);
});
