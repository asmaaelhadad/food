// checks if the user is logged in when trying to access a specific page
const isAdmin = (req, res, next) => {
    if (!req.session.user) {
       next()
    }
   return res.redirect('/')
  }

  module.exports = isAdmin 