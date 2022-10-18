const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./dataBase/connect');
const asyncWrapper = require('./middleware/async');

const quotesRoutes = require('./routes/quotes');

// global vars
const port = process.env.PORT;

// middlewares
app.use('/api/V1', quotesRoutes);
app.use(express.json());
app.use(express.static('./public'));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
