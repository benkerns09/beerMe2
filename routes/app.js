var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('app', {
    title: 'BeerMe',
    bodyclass: 'app'
  });
});

module.exports = router;
