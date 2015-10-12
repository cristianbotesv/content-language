var http = require('http'),
    server;

server = http.createServer(function(req, res) {
    var contentLanguage = req.headers['accept-language'];
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.end(JSON.stringify({
        acceptLanguage: contentLanguage
    }));
});
server.listen(process.env.PORT || 8080);