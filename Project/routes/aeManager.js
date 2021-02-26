const express = require('express');
const router = express.Router();
//var debug = require('debug')('web:server');
var debug = require('debug')('myApp:test');

router.get('/', (req, res)=> {
	res.render('aelayout', { layout : 'aelayout' });
	// res.status(200).send('AEhome');
});

// router.get('/login', (req, res)=> {
// 	res.render('login', { layout : 'login' });
// 	// res.status(200).send('AEhome');
// });

const Site = require('../schemas/site');

router.post('/json', function (req, res) {

  //var site = new Site({ });
  // Function call

  Site.insertMany(req.body).then(function(result){

    console.log(result);

    res.status(201).json(result);

  }).catch(function(err){

    console.error(err);

    next(err);

  });

});

router.get('/json', function (req, res) {
  //Site.find(function(err, sites){

  //  if(err) return res.status(500).send({error: 'database failure'});

  //  res.json(sites);})
  Site.find({}, {_id : 1, parent : 1, text : 1, icon : 1, state : 1, li_attr : 1, a_attr : 1})

    .then((sites) => {

      console.log(sites);

      res.json(sites);

    })

    .catch((err) => {

      console.error(err);

      next(err);

    });



});


router.get('/Batchregistration', (req, res)=> {
	res.render('Batchregistration', { layout : 'Batchregistration' });
	//res.status(200).send('AEhome');
});

router.get('/Deviceregistration', (req, res)=> {
	res.render('Deviceregistration', { layout : 'Deviceregistration' });
	//res.status(200).send('AEhome');
});








module.exports = router;
