const express = require('express');
const router = express.Router();
const {
  getAllQuotes,
  createQuote,
  getRandomQuote,
} = require('../controllers/quotes.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.route('/quotes').get(getAllQuotes);
// .post(jsonParser, createQuote); uncomment to use post
router.route('/quotes/random').get(getRandomQuote);

module.exports = router;
