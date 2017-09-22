var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  request({
  	method: 'post',
  	url: "https://dev.prelo.id/api/auth/login",
  	body: {
  		username_or_email: req.body.username_or_email,
  		password: req.body.password
  	},
  	json: true
  }, function(error,response,body){
  	if (!error && response.statusCode == 200){
  		res.redirect('/lovelist/'+body._data.token);
  	}else{ 
      res.status(400);
      res.json({message: "Bad Request"});
    }
  })
});

/* GET lovelist page. */
router.get('/lovelist/', function(req, res, next) {
  res.render('lovelist', { title: 'Lovelist' });
});

router.get('/lovelist/(:token)', function(req, res, next) {
  res.render('lovelist', { title: 'Lovelist', token: req.params.token });
});

module.exports = router;
