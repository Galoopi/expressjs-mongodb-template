var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res) {
	const db = req.db	;
	const collection = db.get('usercollection');
	collection.find({},{}, function(e,docs){
		res.render('users',{
			userlist : docs
		})
	});
  });


module.exports = router;
