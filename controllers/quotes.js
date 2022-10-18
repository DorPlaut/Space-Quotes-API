const QuoteSchema = require('../models/quote.js');
const asyncWrapper = require('../middleware/async');
const Quote = require('../models/quote.js');

// functions
// get all the quotes
const getAllQuotes = asyncWrapper(async (req, res) => {
  let allQuotes = await Quote.find({});
  allQuotes = allQuotes.map((i) => {
    return { quote: i.quote, author: i.author, id: i._id };
  });
  // filter by author from query
  const author = req.query.author;
  if (author) {
    allQuotes = allQuotes.filter((i) => {
      return i.author.toLowerCase() == author.toLowerCase();
    });
    console.log(allQuotes);
    if (allQuotes == '') {
      return res.status(404).json({ error: 'author not found' });
    }
  }
  res.status(201).json(allQuotes);
});

// get random quote
const getRandomQuote = asyncWrapper(async (req, res) => {
  const allQuotes = await Quote.find({});
  const randomNum = Math.floor(Math.random() * allQuotes.length);
  const randomQuote = allQuotes[randomNum];
  res.status(201).json(randomQuote);
});

// post a quote
const createQuote = asyncWrapper(async (req, res) => {
  const quote = await Quote.create(req.body);
  const jsonQuote = {
    quote: quote.quote,
    author: quote.author,
    ID: quote._id,
  };
  console.log(quote);
  res.status(201).json(quote);
});

module.exports = { getAllQuotes, createQuote, getRandomQuote };
