const express = require('express');
const router = express.Router();
//const bcrypt = require ('bcryptjs')
const User = require('../models/User.model');

const Recipe= require('../models/recipe.model');
//     /recipes
router.get("/" , (req,res) =>{
    
    res.render("recipe")
}

)



module.exports = router;