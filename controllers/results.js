// import packages
const express = require('express')
const router = express.Router()

// views

router.post('/', (req, res) => {
  let results = [
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      },
    ],
  },
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      },
    ],
  },
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      },
    ],
  }]

  const getLength = (array) => {
    return array.length
  }
  
  const resultLength = getLength(results);

  //console.log(req.body.search);
  // function results = resultes ..
  // title == req.body.search [{}]
  res.render('results', {results, resultLength})
})

// export module
module.exports = router