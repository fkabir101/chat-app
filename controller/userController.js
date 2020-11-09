const db = require("../models");
const User = require("../models/User");
const passport = require('passport');

module.exports = {

  // Create user
  create: function(req,res){
    User.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
}