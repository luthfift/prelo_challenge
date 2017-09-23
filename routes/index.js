var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

/* GET lovelist page. */
router.get('/lovelist/', function(req, res, next) {
  res.redirect('/');
});

router.get('/lovelist/(:token)/(:page)', function(req, res, next) {
  request({
    method: 'get',
    url: "https://dev.prelo.id/api/me/lovelist/"+req.params.page,
    headers: {
      Authorization: "Token " + req.params.token
    },
    json: true
  }, function(error,response,body){
    if (!error && response.statusCode == 200){
      res.render('lovelist', { 
        title: 'Lovelist', 
        data: body._data,
        page: req.params.page
      });
    }else{ 
      res.status(400);
      res.json({message: "Bad Request"});
    }
  })
});

module.exports = router;
