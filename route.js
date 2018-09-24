function route(req,res,handle,pathname){
    if(typeof handle[pathname]==='function'){
        handle[pathname](res,req);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not found");
        res.end();
    }
    
}

module.exports.route=route;