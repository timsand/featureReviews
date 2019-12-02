const mongodb = require('mongodb')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//uncomment me and add password
const pass = 'gammazonReview';


// const generatedItems = require('./dbGenerator.js') //UNCOMMENT THIS FOR GENERATING A NEW DB

mongoose.connect(`mongodb+srv://gammazonReview:${pass}@gammazonreviews-iixhb.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });

var connection = mongoose.connection;

var reviewSchema = new Schema({
  id: {type: Number, unique: true},
  name: String,
  link: Schema.Types.Mixed,
  price: Number,
  comments: Array
})
var reviewModel = mongoose.model('reviewModel', reviewSchema, 'Reviews');

connection.on('error', () => {
  console.log('crashed');
});
connection.once('open', function () {
  console.log('connected')
});


const fetchAllComments = async function() {
  var queryPromise = new Promise((resolve, reject) => {
    reviewModel.find({}, (err, result) => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })
  return queryPromise;
}


//UNCOMMENT THE BELOW LINE TO GENERATE A NEW DB... WILL REQUIRE THE GENERATED ITEMS IMPORT TO WORK.

// reviewModel.collection.insert(generatedItems, function (err, docs) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log("Multiple documents inserted to Collection");
//   }
// });





module.exports.connection = connection;
module.exports.fetchAllComments = fetchAllComments;