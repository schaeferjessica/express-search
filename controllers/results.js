// import packages
const express = require('express')
const router = express.Router()

// views

//router.get('/', (req, res) => {
  // code here
//})

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

  const filterObject = (results) => {
    const newObject = [];
    results.forEach(result => {
      if(result.title == req.body.search) {
        newObject.push(result);
      }
    })
    console.log(newObject)
    return newObject;
  }
  
  const filterResult = filterObject(results);

  // console.log(req.body.search);
  // title == req.body.search [{}]
  res.render('results', {results, resultLength, filterResult})
})

// export module
module.exports = router