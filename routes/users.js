var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
	res.redirect(301,'../login.html');   //redirect导向的是货真价实的网页，导入/public/login.html虽然地址对了，但无权访问，而/login.html则可以访问，因为先转化成URL再访问。
});

module.exports = router;
