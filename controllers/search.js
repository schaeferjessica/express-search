// import packages
const express = require('express')
const router = express.Router()

// views

router.get('/', (req, res) => {
  res.render('search');
})

// export
module.exports = router
