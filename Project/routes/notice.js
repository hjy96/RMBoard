const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const app = express();
const exphbs = require("express-handlebars"); //123
app.engine("handlebars", exphbs()); //123
app.set("view engine", "handlebars"); //123

// app.engine(
//   "hbs",
//   exphbs({
//     extname: "hbs",
//     helpers: {
//       CheckPosts: function (arg1, arg2, options) {
//         return arg1 === null ? options.fn() : options.inverse();
//       },
//     },
//   })
// );

// Index
 router.get('/', function (req, res, next) {
    res.render('notice', { layout : 'notice' });
 });
//   Post.find({})
//   .sort('-createdAt')
//   .exec(function(err, notice){
//     if(err) return res.json(err);
//     res.render('posts/index',{layout : 'notice', post:post});
//   });
// });

// // New
// router.get('/new', function(req,res){
//   res.render('notice', { layout : 'notice' });
//   res.render('posts/new');
// });

// // create
// router.post('/', function(req, res){
//   res.render('notice', { layout : 'notice' });
//   Post.create(req.body, function(err, post){
//     if(err) return res.json(err);
//     res.redirect('/notice');
//   });
// });

// // show
// router.get('/:id', function(req, res){
//   res.render('notice', { layout : 'notice' });
//   Post.findOne({_id:req.params.id}, function(err, post){
//     if(err) return res.json(err);
//     res.render('posts/show', {post:post});
//   });
// });

// // edit
// router.get('/:id/edit', function(req, res){
//   res.render('notice', { layout : 'notice' });
//   Post.findOne({_id:req.params.id}, function(err, post){
//     if(err) return res.json(err);
//     res.render('posts/edit', {post:post});
//   });
// });

// // update
// router.put('/:id', function(req, res){
//   res.render('notice', { layout : 'notice' });
//   req.body.updatedAt = Date.now(); //2
//   Post.findOneAndUpdate({_id:req.params.id}, req.body, function(err, post){
//     if(err) return res.json(err);
//     res.redirect("/posts/"+req.params.id);
//   });
// });

// // destroy
// router.delete('/:id', function(req, res){
//   res.render('notice', { layout : 'notice' });
//   Post.deleteOne({_id:req.params.id}, function(err){
//     if(err) return res.json(err);
//     res.redirect('/notice');
//   });
// });




 module.exports = router;
