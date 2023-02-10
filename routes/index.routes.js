const express = require('express');
const router = express.Router();
const bcrypt = require ('bcryptjs')
const User = require('../models/User.model');
//const session = require("express-session")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// signup
router.get("/signup", (req, res, next) => {
  res.render("signup");
});
router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;
  //TODO - CHECK IF THE USER EXISTS
 const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
 const user = {
    username,
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
  if (checkPassword) {
    req.session.currentUser = loggedUser;
    res.redirect("/profile");
  }
});


module.exports = router;
