const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});

app.use(expressSanitizer());
app.use(bodyParser.json({type:'*/*'}));

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log('Server started on port ' + PORT));

app.get('/api/users', function(req, res) {
  User.find({}, function(error, users) {
    if(error) {
      res.status(500);
      res.json({error: 'Server error'});
    } else {
      if(!users) {
        response.status(422);
        response.json({error: 'Cannot get users'});
      } else {
        const data = users.map(user => ({
          firstName: user.firstName,
          imageUrl: user.imageUrl,
          lastName: user.lastName,
          username: user.username
        }));
        res.json({users: data});
      }
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


