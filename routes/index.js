var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

/* GET lovelist page. */
router.get('/lovelist/', function(req, res, next) {
  res.render('lovelist', { title: 'Lovelist' });
});

module.exports = router;
