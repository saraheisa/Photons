const express = require('express');
const router = express.Router();
const createTables = require('../DB/initializeDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/initialize',  (req, res) => {
  createTables()
  .then (result => {
    return res.status(200).json({ result });
  })
  .catch(err => {
    return res.status(500).json({ err });
  });
});

module.exports = router;
