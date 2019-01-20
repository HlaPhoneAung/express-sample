var express = require('express');
var router = express.Router();

var userModel = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('*******************');
  res.json(userModel.findAll());
});

router.get('/add', function (req, res, next) {
  res.render('userForm');
});

router.post('/add', function (req, res, next) {
  userModel.add(
    {
      name: req.body.name,
      email: req.body.email
    }
  );
  res.json({
    name: req.body.name,
    email: req.body.email
  });

});


router.get('/testing', function(req, res, next) {
   var id = req.query.id;
   var user = userModel.findById(id);
   res.json(user);
});

//
router.get('/:userId', function (req,res,next) {
  var user = userModel.findById(req.params.userId);
  res.json(user);
});

module.exports = router;
