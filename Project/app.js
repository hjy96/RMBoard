const createError	= require('http-errors');
const cookieParser	= require('cookie-parser');
const express		= require('express');
const hbs			= require('hbs');
const bodyParser = require('body-parser');  //
const path			= require('path');
const fs			= require('fs');
const exphbs = require("express-handlebars"); //123
const logger		= require('./mylog');
const aeRouter	= require('./routes/aeManager');

const loginRouter	= require('./routes/login');

const consoleRouter	= require('./routes/consoleManagement');

const connect	= require('./schemas/');
const app = express();
//hjy
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//


connect();

hbs.registerPartial('partial', fs.readFileSync(__dirname + '/views/partial.hbs', 'utf8'));
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper("playerList", function(items, options) {
  const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
  return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
});


hbs.registerHelper("question", function(conditional, options) {
  if (conditional) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});



app.use(logger.morgan(logger.logFormat(), {stream: logger.accessLogStream}));

app.engine("handlebars", exphbs()); //123
app.set("view engine", "handlebars"); //123
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//hjy
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(methodOverride('_method'));
//

// // const indexRouter=require('./routes/index');
// // app.use('/', indexRouter);

const usersRouter=require('./routes/users');
app.use('/', usersRouter);
//hjy
app.use('/notice', require('./routes/notice'));
app.use('/question', require('./routes/question'));
//
// // const usersRouter=require('./routes/users');
// // app.use('/facility', usersRouter);

app.use('/login', loginRouter);
//app.use(testRouter);
app.use('/aeManager', aeRouter);

app.use('/consoleManagement', consoleRouter);

app.use(function(req, res, next) { next(createError(404)); });

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
