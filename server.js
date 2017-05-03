var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user');

var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/jemnDB');

app.listen(4000, function(){
  console.log('server up on port 4000');
});

app.post('/gems', function(req,res){
  console.log('in post gems');
  var newGem = new User({
    name: req.body.name,
    gemType: req.body.gemType,
    estimatedValue: req.body.estimatedValue,
    rare: req.body.rare,
    dateCollected: req.body.dateCollected
  });

  newGem.save(function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    else{
      res.sendStatus(201);
    }
  });
});

app.get('/gems',function(req,res){
  User.find({}, function(err, userResults){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    else{
      console.log(userResults);
      res.send(userResults);
    }
  });
});
