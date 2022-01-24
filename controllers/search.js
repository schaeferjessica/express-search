// import packages
const express = require('express')
const router = express.Router()

// views

// GET controller

router.get('/', (req, res) => {
  res.send('hi search');
})


// export
module.exports = router
