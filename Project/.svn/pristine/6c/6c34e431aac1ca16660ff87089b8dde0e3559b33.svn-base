const express = require('express');
const router = express.Router();
//var debug = require('debug')('web:server');
var debug = require('debug')('myApp:test');

const cluster = require('cluster');


router.use((req, res, next)=> {
	debug("------------------------------");
	console.log("PID : ", cluster.worker.process.pid);
    console.log("ALLWAYS");
    next();
});

router.get('/', (req, res)=> {
	res.locals = {
		some_value: 'foo bar',
		list: ['cat', 'dog'],
		title:'RMTech',
	}
	res.render('index');
	//res.status(200).send('home');
});

router.get('/a', (req, res, next)=> {
    console.log('/a: the response will be sent by the next function ...');
    next();
},(req, res)=> {
    console.log("/a : route terminated");
    res.status(200).send( 'a');
});

router.get('/a', (req, res)=> {
    console.log('/a : never called');
    res.send('a');
});



router.get('/b', (req, res, next) => {
    console.log('/b : route not terminated');
    next();
});
router.use((req, res, next) => {
	debug("------------------------------");
    console.log('SOMETIME');
    next();
});

router.get('/b', (req, res, next)=>{
    console.log('/b (part 2): error thrown' );
    throw new Error('b failed');
});
router.use('/b', (err, req, res, next)=>{
    console.log('/b error detected and passed on');
    next(err);
});


router.get('/c', (err, req)=>{
     console.log('/c : error thrown' );
     throw new Error('c failed');
});

router.use('/c', (err, req, res, next)=>{
     console.log('/c: error detected but not passed on');
     next();
});



var cb0 = (req, res, next)=> {
	console.log('CB0');
	next();
}

var cb1 = (req, res, next)=> {
	console.log('CB1');
	next();
}

var cb2 = (req, res)=> {
	res.send('Hello from D!');
}

router.get('/d', [cb0, cb1, cb2]);


router.get('/e', [cb0, cb1], (req, res, next)=> {
	console.log('response will be sent by the next function ...');
	next();
}, function (req, res) {
	res.send('Hello from E!');
});


router.get('/f', function(req, res){
    //res.render('index', {
    res.render('./partials/partial4', {
      people: [
        {
          firstname: "Yehuda",
          lastname: "Katz",
        },
        {
          firstname: "Carl",
          lastname: "Lerche",
        },
        {
          firstname: "Alan",
          lastname: "Johnson",
        },
      ],
      title : "Helper Function",
      female : true,
      married : false
    }
    );
});


module.exports = router;


