var http = require('http');
var ports = require('seaport').connect(7007);
var pick = require('deck').pick;
var ecstatic = require('ecstatic')(__dirname);

var quotes = [
    'No pain, no palm; no thorns, no throne; no gall, no glory; no cross, no crown.',
    'Much reading is an oppression of the mind.',
    'The public must and will be served.',
];
var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.end([
            '<h1>William Penn</h1>',
            '<h3>' + pick(quotes) + '</h3>',
            '<img src="images/william_penn.png">',
            '<div>' + server.address().port + '</div>',
        ].join('\n'));
    }
    else ecstatic(req, res)
});

ports.service('penn', function (port, ready) {
    server.listen(port, ready);
});
