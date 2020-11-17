const express = require('express');
const router = express.Router();
const createTables = require('../DB/initializeDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
