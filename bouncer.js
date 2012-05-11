var seaport = require('seaport');
var ports = seaport.createServer();
var pick = require('deck').pick;
ports.listen(7007);

var bouncy = require('bouncy');

var server = bouncy(function (req, bounce) {
    var domain = req.headers.host.toString().split('.')[0];
    var ps = ports.query(domain);
    var server = pick(ps);
    
    if (server) bounce(server)
    else bounce.respond().end('no such service: ' + domain)
});
server.listen(8080);
