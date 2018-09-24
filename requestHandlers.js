const fs = require('fs');
const formidable=require('formidable')
function start(res){
    res.writeHead(200,{'Content-Type':'text/html'});
    let data=fs.createReadStream('./index.html');
    data.pipe(res);
}
function upload(res,req){
    //处理上传的图片
    let form =new formidable.IncomingForm();
    //保存图片的临时路径
    form.uploadDir='tmp';
    form.parse(req,function(err,fields,files){
        fs.renameSync(files.upload.path,'images/test.png');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<img src='/showPicture' />");
        res.end();
    })
}
function showPicture(res){
    fs.readFile('images/test.png','binary',function(err,file){
        if(err) throw err;
        res.writeHead(200,{'Content-Type':'image/png'});
        res.write(file,'binary');
        res.end();
    })
}

module.exports={
    start:start,
    upload:upload,
    showPicture:showPicture,
}