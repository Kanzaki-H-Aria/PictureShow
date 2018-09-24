const http = require('http');
const { URL } = require('url');

function start(route,handle) {
    http.createServer(function (req, res) {
        let url = new URL(req.url, 'http://www.dongxing.com:8000/');
        route(req,res,handle,url.pathname);  
    }).listen(8000);

    console.log('Server is running...');
}

module.exports.start = start;