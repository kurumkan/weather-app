const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
var expressSanitizer = require("express-sanitizer");

var { handleError } = require("./util_helpers.js");

mongoose.connect('mongodb://localhost/facebook-clone');

var User = require('./models/user');

app.use(function(req, res, next){
  if(req.headers["x-forwarded-proto"] === "https"){
    res.redirect("http://"+req.hostname+req.url);
  }else{
    next();
  }
});

app.use(expressSanitizer());
app.use(bodyParser.json({type:'*/*'}));

//auth dependencies
var Auth = require('./auth/authentication');
var PassportServicer = require('./auth/passport');
var passport = require('passport');
var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});

app.use(passport.initialize());

//jwt login
app.post('/auth/signup', Auth.signup);
app.post('/auth/signin', requireSignin, Auth.signin);

app.get('/api/users', function(req, res) {
  User.find({}, function(error, users) {
    if(error) {
      handle500(res, error);
    } else {
      res.json({ users });
    }
  });
});

app.get('/api/users/:username', function(req, res) {
  var { username } = req.params;
  User.find({ username }, function(error, user) {
    if(error) {
      handle500(res, error);
    } else {
      res.json({ user });
    }
  });
});

app.get('/api/users/:username', function(req, res) {
  var { username } = req.params;
  User.find({ username }, function(error, user) {
    if(error) {
      handle500(res, error);
    } else {
      res.json({ user });
    }
  });
});

app.put('/api/users/:username', function(req, res) {
  var { username } = req.params;

  const firstName = req.sanitize(req.body.firstName);
  const  lastName = req.sanitize(req.body.lastName);

  User.findOne({ username }, function(error, user) {
    if(error) {
      handle500(res, error);
    } else {
      user.firstName = firstName;
      user.lastName = lastName;
      user.save();
      res.json({ firstName, lastName });
    }
  });
});


if(process.env.NODE_ENV === 'production') {
  // production
  // get all static data from 'dist' directory
  app.use(express.static('dist'));

  // SPA specific code!!!
  // any get requests will be served with index.template.ejs files
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
} else {
  // alert user - to use webpack dev server
  app.get('*', (req, res) => {
    res.json({
      error: 'In development mode - routes which don\'t match api/* should be handled by webpack-dev-server'
    });
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));