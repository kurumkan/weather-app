const passport = require('passport');
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//setup options for local strategy
const localOptions = {
  usernameField: 'login'
};
//create local strategy
const localLogin = new LocalStrategy(localOptions, function(login, password, done){
  //verify username and password.
  User.findOne({$or: [{email: login}, {username: login}]}, function(error, user){
    //DB error
    if(error){
      return done(error)
    }

    //this email is not in DB
    if(!user){
      return done(null,false)
    }

    //compare 'password' with user.password
    user.comparePassword(password, function(error, isMatch) {
      if(error){
        return done(error);
      }

      //if not ok - call done with false
      if(!isMatch){
        return done(null, false);
      }
      //if ok call done with the user
      return done(null, user);
    })
  })
})


//Setup options for JWT Strategy
const jwtOptions = {
  //tell passport where to find token - in header 'authorization'
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  //what the secret? - to decode and get id
  secretOrKey: process.env.secret
};

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  //the callback is called when user attemts to login with jwt

  //check if user Id in the payload exists in the DB
  User.findById(payload.sub, function(error, user){
    //if no - call 'done' without user object
    if(error){
      return done(error, false);
    }


    if(user){
      //if yes - call 'done' with the user
      done(null, user);
    }else{
      //if no - call 'done' without user object
      done(null,false);
    }
  })
});

//Tell passport to use JWT Strategy
passport.use(jwtLogin);
//Tell passport to use local strategy
passport.use(localLogin);

//serializeUser and deserializeUser are required for social strategies(facebook, vk etc.)
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});






