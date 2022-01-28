// import packages
const express = require('express');
const async = require('hbs/lib/async');
const router = express.Router()
const Results = require('../models/results');

// views

router.get('/',  async (req, res) => {
  res.render('results');
})

router.post('/', async (req, res) => {
  try {
    let results = await Results.find({})
    //results = results.filter(element => element.title.includes(req.body.search) || element.description.includes(req.body.search))
    res.render('results', {results})
  } catch (err) {
    throw err;
  }
})

// export module
module.exports = router