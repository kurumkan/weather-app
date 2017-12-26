const jwt = require('jwt-simple');

const User = require('../models/user');
const {validateEmail} = require("../util_helpers");

const getToken = function(user){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.secret);
};

exports.getToken = getToken;

exports.signup = function(request, response, next){
  const { firstName, lastName, username, email, password, imageUrl } = request.body;
  if(!username || !email || !password || !firstName || !lastName) {
    response.status(422).json({error: 'You must provide: username, email, password, firstname and lastname'});
  }

  if(!validateEmail(email))
    response.status(422).json({error: 'Invalid email'});

  //see if a user exists
  User.findOne({$or: [{email: email}, {username: username}]}, function(error, user){

    if(error){
      return next(error);
    }
    if(user){
      //if a user exists - return error
      //unprocessable entity
      return response.status(422).send({error:'The Email or the Username is in use'});
    }
    else{
      //if a user doesnt exist - create one db entry
      const newUser = new User({
        username,
        email,
        password,
        lastName,
        firstName,
        imageUrl
      });
      newUser.save(function(error){
        if(error)
          return next(error);
        else
          response.json({
            token: getToken(newUser),
            username: newUser.username,
            userid: newUser.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            imageUrl: newUser.imageUrl
          });
      });

    }
  });
}


exports.signin = function(request, response, next){
  //At this stage user has authorized their password and email
  //we need give a token!
  const user = request.user;
  response.send({
    token: getToken(user),
    userid: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl
  })
};