const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin')
//const bcrypt = require ('bcryptjs')
const User = require('../models/User.model');

const Recipe= require('../models/recipe.model');
///recipes
router.get("/recipes" , (req,res) =>{
   res.render("recipe")
}
)
router.get('/:recipeId', async (req, res) => {
  const recipeFound = await Recipe.findById(req.params.recipeId)
 res.render('recipes/one', { recipeFound })
})
 //add new

router.get("/recipes/new" ,  (req,res) =>{
res.render("new")
    //res.redirect("recipe")
}) 
  router.post('/recipes/new',   async (req, res) => {
    const body = req.body
 await Recipe.create(
     body
)
 res.redirect('/recipes/recipes')
  })
   // render file, redirect page url
//delete
  router.post("/:recipeId/delete", isAdmin , async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.recipeId)
       res.redirect("/recipes/recipes")
      })
//update
  router.post('/:recipeId/update', async (req, res) => {
     await Recipe.findByIdAndUpdate(req.params.recipeId, {
    ...req.body,
    ingredients: req.body.ingredients.split(' '),
  })

  res.redirect(`/recipes/${req.params.recipeId}`)
})

  


module.exports = router;