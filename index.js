const server = require('./server');
const router = require('./route');
const requestHandlers = require('./requestHandlers');

let handle={};
handle['/']=requestHandlers.start;
handle['/start']=requestHandlers.start;
handle['/upload']=requestHandlers.upload;
handle['/showPicture']=requestHandlers.showPicture;
server.start(router.route,handle);