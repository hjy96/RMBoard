var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/idnex', function(req, res, next) {
  res.render('Atmospheric', { layout: 'Atmospheric' });
});

module.exports = router;
