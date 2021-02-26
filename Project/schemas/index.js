const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);	//hjy
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);	//

module.exports = () => {
	const connect = () => {
		if (process.env.NODE_ENV !== 'production') {
			mongoose.set('debug', true);
		}
		mongoose.connect('mongodb://rmtech:rmtech@192.168.0.117:27017/admin', {      
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: 'nodejs',
		}, (error) => {
			if (error) {
				console.log('몽고디비 연결 에러', error);
			} else {
				console.log('몽고디비 연결 성공');
			}
		});
	};
	connect();
	mongoose.set('useCreateIndex', true)

	mongoose.connection.on('error', (error) => {
		console.error('몽고디비 연결 에러', error);
	});
	mongoose.connection.on('disconnected', () => {
		console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
		connect();
	});
	require('./site');
};
