const express = require('express');
const router = express.Router();
const bcrypt = require ('bcryptjs')
const User = require('../models/User.model');
//const session = require("express-session")
const isAdmin = require('../middleware/isAdmin')
/* GET home page */
//            /
router.get("/", (req, res, next) => {
  res.render("index");
});


// signup
router.get("/signup", (req, res, next) => {
  res.render("signUp");
});
router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;
  //TODO - CHECK IF THE USER EXISTS
 const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
 const user = {
  ...req.body,
    username:username,
    password: hash,
    
  }
 //after import user model
  await User.create(user);
  res.redirect("/login");
});

// login
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

 
  const loggedUser = await User.findOne({username: username});
  const checkPassword = await bcrypt.compare(password, loggedUser.password);
 
  console.log (loggedUser);
  if (checkPassword) {
    req.session.user = loggedUser; 
    res.redirect("/profile");
  }
})
//profile 
router.get("/profile", (req, res) => {
  
  console.log("the req", req.session.user)
  res.render("profile", {user : req.session.user});
});
router.get('/logout',  (req, res) => {
  req.session.destroy(err => {
    if (err) next(err)
    res.render("index")
  })

  
})


module.exports = router;
