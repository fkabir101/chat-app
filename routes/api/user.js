const router = require('express').Router();
const { get } = require('mongoose');
const passport = require('passport');

//Login Route
router
  .route('/login')
  .post(passport.authenticate('local'), function (req,res){
    // Log in and send user info back
    res.json(req.user);
  })
  .get(function(req, res){
    // Check to see if user is logged in
    if(req.user){
      // If logged in, send back this flag and the username
      res.json({
        isLoggedIN: true, 
        username: req.user.username, 
        email: req.user.email
      })
    }else{
      // send back false if user is not logged in
      res.json({isLoggendIn: false})
    }
  })

  // Logout route