// import packages
const express = require('express')
const router = express.Router()

// views

router.get('/', (req, res) => {
  let users = ['miriam', 'nora']
  res.render('results', {
    users
  });
})

// export module
module.exports = router