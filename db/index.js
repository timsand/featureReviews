const mongodb = require('mongodb')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//uncomment me and add password
//const pass = 'fixMe';

mongoose.connect(`mongodb+srv://gammazonReview:${pass}@gammazonreviews-iixhb.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });

var connection = mongoose.connection;

var reviewSchema = new Schema({
  id: Number,
  name: String,
  link: Schema.Types.Mixed,
  price: Number
})
var reviewModel = mongoose.model('reviewModel', reviewSchema, 'Reviews');

connection.on('error', () => {
  console.log('crashed');
});
connection.once('open', function () {
  console.log('connected')
});

// var reviewInstance = new reviewModel({
// })



// reviewInstance.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });




module.exports = connection;
//mongodb+srv://gammazonReview:<password>@gammazonreviews-iixhb.mongodb.net/test?retryWrites=true&w=majority