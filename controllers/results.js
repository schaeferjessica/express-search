// import packages
const express = require('express')
const router = express.Router()

// views

router.get('/', (req, res) => {
  res.render('results');
})

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
    title: 'HTML tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'HTML for Beginners',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'HTML for the Web',
        url: 'https://www.w3schools.com/js'
      },
    ],
  },
  {
    title: 'CSS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'CSS for Beginners',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'CSS for the Web',
        url: 'https://www.w3schools.com/js'
      },
    ],
  }]

  results = results.filter(element => element.title.includes(req.body.search) || element.description.includes(req.body.search))

  //const filterObject = (results) => {
  //  const newObject = [];
  //  results.forEach(result => {
  //    if(result.title == req.body.search) {
  //      newObject.push(result);
  //    }
  //  })
  //  return newObject;
  //}
  
  //const filterResult = filterObject(results);

  res.render('results', {results})
})

// export module
module.exports = router