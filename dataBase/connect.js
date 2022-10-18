const moongose = require('mongoose');

const connectDB = (url) => {
  console.log('connectinng to DB..');
  return moongose.connect(url, {});
};

module.exports = connectDB;
