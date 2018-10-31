var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.redirect(301,'../index.html');
    res.redirect(301,'../index.html');
	//res.send('respond with a resource');
});

module.exports = router;
