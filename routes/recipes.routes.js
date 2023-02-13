const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin')
//const bcrypt = require ('bcryptjs')
const User = require('../models/User.model');

const Recipe= require('../models/recipe.model');
//     /recipes
router.get("/recipe" , (req,res) =>{
    
    res.render("recipe")
}

)
/*router.get('/recipe', async (req, res) => {
    const recipeFound = await Recipe.findById(req.params.recipeId).populate('owner')
    console.log({ recipeFound })
    res.render('recipes/one', { recipeFound })
  })*/
  router.get("/recipe/new" , (req,res) =>{
    
    res.render("recipe/new")
})
  router.post('/recipe/new', isAdmin,  async (req, res) => {
    const body = req.body
    
    await Recipe.create({
      ...body,
      ingredients: body.ingredients.split(' '),
      title : ''
    })
  
    res.redirect('/recipe')
  })
  router.post('/delete', isAdmin , async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.recipeId)
  
    res.redirect('/recipe')
  })
  


module.exports = router;