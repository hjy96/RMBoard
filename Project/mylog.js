const morgan			= require('morgan');
const fs				= require('fs');
const fileStreamRotator = require('file-stream-rotator');

var logDirectory = __dirname + '/log';
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);


//Create a new named format
morgan.token('request-headers', function (req, res) { return JSON.stringify(req.headers) });
morgan.token("custom",  ":date[iso] :remote-addr :url :request-headers => :status :res[content-length]");
morgan.token("custom2", ":date[iso] :remote-addr :url => :status");

const logFormat = () => 'custom2'; //'custom';


var accessLogStream = fileStreamRotator.getStream({date_format:'YYYYMMDD', filename:logDirectory+'/access-%DATE%.log', frequency:'daily',verbose: false });
//app.use(morgan('combined', {stream: accessLogStream}));


module.exports = {
	morgan : morgan,
	accessLogStream : accessLogStream,
	logFormat : logFormat,
};

 

