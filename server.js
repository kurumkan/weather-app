const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressSanitizer = require('express-sanitizer');

const MONGO_URL = process.env.MONGOLAB_URI || 'mongodb://localhost/facebook-clone';
mongoose.connect(MONGO_URL);

const ActiveSockets = require('./models/activesockets');
const User = require('./models/user');
ActiveSockets.remove({});

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});

app.use(expressSanitizer());
app.use(bodyParser.json({type:'*/*'}));

//auth dependencies
const Auth = require('./auth/authentication');
const PassportServicer = require('./auth/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

app.use(passport.initialize());

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log('Server started on port ' + PORT));

// sockets
const io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  socket.on('AUTH_USER', function(data) {
    ActiveSockets.update(
      { username: data.username },
      { socketId: socket.id },
      { upsert: true },

      function (error, newSocket) {
        if(!error) {
          socket.broadcast.emit('CLIENT_CONNECTED', data.username);
          ActiveSockets.find({}, function(error, activeSockets) {
            if(!error) {
              socket.emit('SET_ACTIVE_CLIENTS', activeSockets);
            }
          });
        }
      }
    );
  });

  socket.on('UNAUTH_USER', function(data) {
    ActiveSockets.findOne({ socketId: socket.id }, function (error, data) {
      if(!error) {
        if(data) {
          socket.broadcast.emit('CLIENT_DISCONNECTED', data.username);
          data.remove();
        }
      }
    });
  });


  socket.on('disconnect', function() {
    ActiveSockets.findOne({ socketId: socket.id }, function (error, data) {
      if(!error) {
        if(data) {
          socket.broadcast.emit('CLIENT_DISCONNECTED', data.username);
          data.remove();
        }
      }
    });
  });
});


//jwt login
app.post('/api/auth/signup', Auth.signup);
app.post('/api/auth/signin', requireSignin, Auth.signin);

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

app.get('/api/users/:username', function(req, res) {
  const { username } = req.params;
  User.find({ username }, function(error, users) {
    if(error) {
      res.status(500);
      res.json({error: 'Server error'});
    } else {
      if(!users) {
        res.status(422).json({ error: 'User does not exist' });
      }
      const user = users[0];
      const data = {
        firstName: user.firstName,
        imageUrl: user.imageUrl,
        lastName: user.lastName,
        username: user.username
      };
      res.json({ user: data });
    }
  });
});

app.put('/api/users/:username', function(req, res) {
  const { username } = req.params;

  const firstName = req.sanitize(req.body.firstName);
  const lastName = req.sanitize(req.body.lastName);
  const imageUrl = req.sanitize(req.body.imageUrl);

  User.findOne({ username }, function(error, user) {
    if(error) {
      res.status(500);
      res.json({error: 'Server error'});
    } else {
      if(!user) {
        res.status(422).json({ error: 'user does not exist' });
      } else {
        user.firstName = firstName;
        user.lastName = lastName;
        user.imageUrl = imageUrl;
        user.save();
        res.json({ firstName, lastName, imageUrl });
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


