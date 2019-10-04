const express = require('express');
const router = express.Router();


const data = require('../articleseeds')

const Article = require('../models/Article')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/articles', (req, res) => {
  Article.find().then(data => {
    res.json(data)
  }).catch(err => res.json(err))
})





























// http://localhost:5555/articleseeds
router.get('/articleseeds', (req, res) => {
  Article.insertMany(data).then(data => console.log(data).catch(err => console.log(err)))
})

module.exports = router;
