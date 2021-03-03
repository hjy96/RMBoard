const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const app = express();
const exphbs = require("express-handlebars"); //123
app.engine("handlebars", exphbs()); //123
app.set("view engine", "handlebars"); //123

router.get('/', function(req, res, next) {
  console.log("#########################문의사항") 
  Post.find({})
  .sort('-createdAt')
  .exec(function(err, posts){
    if(err) return res.json(err);
    res.render('index',{layout : 'posts/index', posts:posts});
  })
});

module.exports = router;