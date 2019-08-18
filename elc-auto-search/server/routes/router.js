var express = require('express');
var router = express.Router();
const data = require('../data')


router.get('/', (req, res, next) =>  {

  let searchQuery = req.query

  console.log(searchQuery.search)

  let searchResults = data.filter(item => 
    item.tags.filter(tag => 
      tag.includes(searchQuery.search)).length ||
    item.name.toLowerCase().includes(searchQuery.search)
  )

  res.json(searchResults)
  
  
})


module.exports = router;