const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { session } = require("passport");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express;

const PORT = process.env.PORT || 3001;

app.request(morgan('dev'));

app.request(session({secret: "keyboard dog", resave: true, saveUninitialized : true}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(PORT, function(){
  console.log(`Listening on port: ${PORT}`);
})