const express = require('express');
const bcrypt = require ('bcryptjs')
const User = require('../models/User.model');
const router = express.Router();

router.post("/signup", async (req, res, next) => {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    const user = {
        username,
        password: hash,
      };
    
    await User.create(user);
    res.redirect("/login");
  });
  module.exports = router;