const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pass = require('../pw.js');


// const generatedItems = require('./dbGenerator.js') //UNCOMMENT THIS FOR GENERATING A NEW DB

mongoose.connect(`mongodb+srv://gammazonReview:${pass}@gammazonreviews-iixhb.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, dbName: 'comments' });

var connection = mongoose.connection;

var reviewSchema = new Schema({
  id: {type: String, unique: true},
  name: String,
  link: Schema.Types.Mixed,
  price: Number,
  category: String,
  comments: Array,
  categoryRatings: Object,
  totalPictures: Array,
  average: Number,
  individualRatings: Array
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


// UNCOMMENT THE BELOW LINE TO GENERATE A NEW DB... WILL REQUIRE THE GENERATED ITEMS IMPORT TO WORK.

// reviewModel.collection.insert(generatedItems, function (err, docs) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log("Multiple documents inserted to Collection");
//   }
// });


const fetchSpecificComment = async function(id) {
  var querySpecificPromise = new Promise((resolve, reject) => {
    reviewModel.find({id: `${id}`}, null, (err, result) => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })
  return querySpecificPromise;
}


//needs to be updated to also display updated averages
const updateReviewCount = (name, id) => {
  var updatePromise = new Promise((resolve, reject) => {
    reviewModel.collection.update({name: `${name}`}, { $inc: {[`comments.${id}.helpfulCount`]: 1} }, (err, result) => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    } )
  })

  return updatePromise;
}





module.exports.connection = connection;
module.exports.fetchAllComments = fetchAllComments;
module.exports.updateReviewCount = updateReviewCount;
module.exports.fetchSpecificComment = fetchSpecificComment;