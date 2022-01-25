// import packages
const express = require('express')
const router = express.Router()

// views

router.get('/', (req, res) => {
  let user = {
    name: "jessi",
    country: "germany"
  }
  let condition = false;
  res.render('search', {
    name: user.name,
    country: user.country
  });
})

// export
module.exports = router
