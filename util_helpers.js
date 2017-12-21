module.exports = {
  // handle internal errors
  handleError: function(response, error, type=''){
    console.log(error.stack);

    if(type=='YELP') {
      response.status(400);
      response.json({error: "error: YELP api error"});
    }
    else{
      response.status(500);
      response.json({error: "error: internal server error"});
    }
  },

  // simple email validator
  validateEmail: function(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
};