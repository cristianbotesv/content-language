var http = require('http'),
    server;

server = http.createServer(function(req, res) {
    var contentLanguage = req.headers['accept-language'];
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({
        acceptLanguage: contentLanguage
    }));
});
server.listen(process.env.PORT || 8080);