const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ERP', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Commented out the following due to an error when starting server.
  //useCreateIndex: true,
  //useFindAndModify: false
});

module.exports = mongoose.connection;


//const URI = process.env.MONGODB_URL;
//
//mongoose.connect(URI, {
//   useCreateIndex: true, 
//   useFindAndModify: false, 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
//}, err => {
//   if(err) throw err;
//   console.log('Connected to MongoDB!!!')
//})