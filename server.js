const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
var mongoose = require("mongoose");

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

app.get('/api/hello', function(req, res) {
  res.json({
    message: 'ok!'
  });
})

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