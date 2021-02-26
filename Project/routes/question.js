const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const app = express();
const exphbs = require("express-handlebars"); //123
app.engine("handlebars", exphbs()); //123
app.set("view engine", "handlebars"); //123

// exphbs.registerHelper('CheckPosts', function (object, propertyName, defaultValue, options) {
//   var result = options.lookupProperty(object, propertyName)
//   if (result != null) {
//       return result
//   }
//   return defaultValue
// })
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("#########################문의사항") 
   /*
  Post.find({})
  .sort('-createdAt')
  .exec(function(err, post){
    if(err) return res.json(err);
    res.render('question',{layout : 'question', post:post});
  })*/

  res.render('question',{layout : 'question' , post : null});
});

module.exports = router;