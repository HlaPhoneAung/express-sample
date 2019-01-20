var express = require('express');
var router = express.Router();

var taskModel = require('../models/task');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(taskModel.findAll());
});

router.post('/add', function(req, res, next) {
    taskModel.add(
        {
          name:req.body.name,
          description: req.body.description  
        }
    );
  res.json( {
      name: req.body.name,
      description: req.body.description
        
  });
  router.get('/:taskId', function(req,res,next){
    var task =  taskModel.findById(req.params.taskId)
    res.json(task);
  })
});

module.exports = router;
