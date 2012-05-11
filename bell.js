var http = require('http');
var ports = require('seaport').connect(7007);
var pick = require('deck').pick;
var ecstatic = require('ecstatic')(__dirname);

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        var quotes = [
            'Let freedom RIIIIIIINNNNNNNGGGGGGGGGGGG',
            'Ding dong!',
            "I'll see you in BELL",
            'Eat bell, vile villain!',
            'Listen to THIS',
            'Ring ring ring ring ring ring. LIBERTY PHONE',
        ];
        res.end([
            '<h1>Liberty Bell</h1>',
            '<h3>' + pick(quotes) + '</h3>',
            '<img src="images/liberty_bell.png">',
            '<div>' + server.address().port + '</div>',
        ].join('\n'));
    }
    else ecstatic(req, res)
});

ports.service('bell', function (port, ready) {
    server.listen(port, ready);
});
