// import packages
const express = require('express')
const router = express.Router()

// views

// POST controller

router.get('/', (req, res) => {
  res.send('hi results');
})

// export module
module.exports = router