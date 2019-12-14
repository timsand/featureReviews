const csv = require('csv-parser');
const fs = require('fs');

var listOfPeople = [
  ['John', 'https://gammazon-users.s3.us-east-2.amazonaws.com/userItems/user1.jpeg'], ['Jane', undefined],
  ['Doctor Pinkerton', 'https://gammazon-users.s3.us-east-2.amazonaws.com/userItems/user2.jpeg'],
  ['Nimble Finch', undefined], ['President Ronald', 'https://gammazon-users.s3.us-east-2.amazonaws.com/userItems/user3.jpg'], ['Atkinson', undefined],
  ['Lea', undefined], ['Romero', undefined], ['Ziggy', undefined], ['JP', undefined]
];
var listOfComments = [
  'Shopping on Gamazon is so easy! This really saves me a trip into the nuclear wasteland!',
  'Complete waste of my time. I could have easily gotten this off a mutant, and it would have been in better shape.. WOULD NOT BUY AGAIN.',
  'Does the job I guess',
  `I'm just glad that capitalism is alive and well still!`,
  'Overpriced, but I really needed this. Oh well.',
  'Mixed feelings on this one...',
  'SO many bottlecaps, but totally worth it!',
  'How are we all even talking to each other?'
];
var listOfTitles = [
  'Too good to be true!',
  'A COMPLETE waste of my time!',
  'Easy even for a wastelander like me',
  'So-so',
  'Just what I needed to keep me going',
  'Gammazon is literally more powerful than the government'
];
var listOfDates = [
  'June 13, 2017', 'July 8, 2019', 'December 2, 2019', 'December 2, 2019', 'December 2, 2019', 'January 14, 2016', 'August 4, 2018'
]
var foodList = [
  'https://gammazon-users.s3.us-east-2.amazonaws.com/food/canned1.jpg', 'https://gammazon-users.s3.us-east-2.amazonaws.com/food/canned2.jpg',
  'https://gammazon-users.s3.us-east-2.amazonaws.com/food/canned3.jpg', 'https://gammazon-users.s3.us-east-2.amazonaws.com/food/canned4.jpeg',
  'https://gammazon-users.s3.us-east-2.amazonaws.com/food/canned5.jpg', 'https://gammazon-users.s3.us-east-2.amazonaws.com/food/canned6.jpg',
  'https://gammazon-users.s3.us-east-2.amazonaws.com/food/canned7.jpg', 'https://gammazon-users.s3.us-east-2.amazonaws.com/food/canned8.jpeg',
  'https://gammazon-users.s3.us-east-2.amazonaws.com/food/canned9.jpg', 'https://gammazon-users.s3.us-east-2.amazonaws.com/food/canned10.jpg'
]
var sportsList = [
  'https://gammazon-users.s3.us-east-2.amazonaws.com/sports/basketball1.jpg', 'https://gammazon-users.s3.us-east-2.amazonaws.com/sports/basketball2.jpg',
  'https://gammazon-users.s3.us-east-2.amazonaws.com/sports/basketball3.jpeg', 'https://gammazon-users.s3.us-east-2.amazonaws.com/sports/basketball4.jpeg',
  'https://gammazon-users.s3.us-east-2.amazonaws.com/sports/basketball5.jpeg', 'https://gammazon-users.s3.us-east-2.amazonaws.com/sports/basketball6.jpg',
  'https://gammazon-users.s3.us-east-2.amazonaws.com/sports/basketball7.jpeg'
]
var disclaimerText = [
  '"*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.\n\nStatements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition."'
]
var safetyWarning = [
  'These products are incredibly dangerous. Use them at your own peril. If you use this product, you will die of radition poisoning. We super seriously guarantee it. But hey, buy our stuff anyway please!',
  'The products are totally safe. We promise that if you take these products, you will not die a slow and gruesome death from radiation poisoning. Whoever told you that is CLEARLY lying',
  'Our product is tested and safe for consumption. We take great pride in making sure that all of our products are safe for all ages. If you have any issues, please do not hesitate to reach out to our customer service hotline!'
]
var foodIngredients = [
  'Flour, Lead, Mostly clean water, Grass, A dash of radiation, A heaping spoonful of milk, sugar'
]
var sportsDirections = [
  'This is a product for you enjoyment. Use however you see fit, but please read the attached directions on the product. We were too lazy to post them to the website, so you are going to have to dig into the product and read them yourself. Please do not contact us ever for any reason. Contact Gammazon instead (good luck).'
]
var foodDirections = [
  'Unpack from the container and heat for three minutes. If you do not have a stove to heat, then just eat cold/lukewarm (not recommended). Feel free to add any and all toppings that you choose to the product. If these directions are not clear enough, please ask anyone but us for further assistance.'
]
var ratings = [1, 2, 3, 4, 5];
// var primePantry = [{Taste: 0, Rated: 0, Total: 0}, {Nutrition: 0, Rated: 0, Total: 0}, {Price: 0, Rated: 0, Total: 0}];
var primePantry = { Taste: { Total: 0, Rated: 0 }, Nutrition: { Total: 0, Rated: 0 }, Price: { Total: 0, Rated: 0 } };
// var primeWardrobe = [{Fit: 0, Rated: 0, Total: 0}, {Style: 0, Rated: 0, Total: 0}, {radiationProtection: 0, Rated: 0, Total: 0}];
var primeWardrobe = { Fit: { Total: 0, Rated: 0 }, Style: { Total: 0, Rated: 0 }, radiationProtection: { Total: 0, Rated: 0 } };
// var health = [{Style : 0, Rated: 0, Total: 0}, {Accessibility: 0, Rated: 0, Total: 0}, {Price: 0, Rated: 0, Total: 0}];
var health = { Style: { Total: 0, Rated: 0 }, Accessibility: { Total: 0, Rated: 0 }, Price: { Total: 0, Rated: 0 } };
// var sports = [{Fun : 0, Rated: 0, Total: 0}, {Durability: 0, Rated: 0, Total: 0}, {Price: 0, Rated: 0, Total: 0}];
var sports = { Fun: { Total: 0, Rated: 0 }, Durability: { Total: 0, Rated: 0 }, Price: { Total: 0, Rated: 0 } };

var items = []
fs.createReadStream('/Users/tim/Desktop/moreFeatures/featureReviews/db/Gammazon Products List  - PRODUCT LIST.csv')
  .pipe(csv())
  .on('data', (row) => {
    items.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');

    for (let i = 0; i < items.length; i++) {
      var itemName = items[i].name;
      var total = 0;
      var average;
      var individualRatings = [];
      var totalPictures = [];
      var oneStarRatings = 0;
      var twoStarRatings = 0;
      var threeStarRatings = 0;
      var fourStarRatings = 0;
      var fiveStarRatings = 0;
      items[i].disclaimerText = disclaimerText[0];
      items[i].comments = [];
      items[i].categoryRatings = [];
      if (items[i].category === "sports & Outdoors" || items[i].category === "Sports & Outdoors") {
        items[i].categoryRatings = { Fun: { Total: 0, Rated: 0, Overall: 0 }, Durability: { Total: 0, Rated: 0, Overall: 0 }, Price: { Total: 0, Rated: 0, Overall: 0 } };
        items[i].safetyWarning = safetyWarning[(Math.floor(Math.random() * safetyWarning.length))];
        items[i].directions = sportsDirections[0]
      } else if (items[i].category === "health & personal care" || items[i].category === "Health & personal care") {
        items[i].categoryRatings = { Style: { Total: 0, Rated: 0, Overall: 0 }, Accessibility: { Total: 0, Rated: 0, Overall: 0 }, Price: { Total: 0, Rated: 0, Overall: 0 } };
      } else if (items[i].category === "Prime Wardrobe") {
        items[i].categoryRatings = { Fit: { Total: 0, Rated: 0, Overall: 0 }, Style: { Total: 0, Rated: 0, Overall: 0 }, radiationProtection: { Total: 0, Rated: 0, Overall: 0 } };
      } else {
        items[i].foodIngredients = foodIngredients[0];
        items[i].directions = foodDirections[0];
        items[i].safetyWarning = safetyWarning[(Math.floor(Math.random() * safetyWarning.length))];
        items[i].categoryRatings = { Taste: { Total: 0, Rated: 0, Overall: 0 }, Nutrition: { Total: 0, Rated: 0, Overall: 0 }, Price: { Total: 0, Rated: 0, Overall: 0 } };
      }
      for (let x = 0; x < 30; x++) {
        let comment = {};
        let idx = Math.floor(Math.random() * listOfPeople.length)
        let person = listOfPeople[idx];
        idx = Math.floor(Math.random() * listOfComments.length);
        let body = listOfComments[idx];
        idx = Math.floor(Math.random() * listOfTitles.length);
        let title = listOfTitles[idx];
        idx = Math.floor(Math.random() * ratings.length);
        let rating = ratings[idx]

        if (items[i].category === "sports & Outdoors" || items[i].category === "Sports & Outdoors") {
          let rando = Math.floor(Math.random() * 10);

          if (rando !== 8) {
            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.Fun.Total += ratings[idx];
            items[i].categoryRatings.Fun.Rated++;
            items[i].categoryRatings.Fun.Overall = ((items[i].categoryRatings.Fun.Total) / (items[i].categoryRatings.Fun.Rated))

            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.Durability.Total += ratings[idx];
            items[i].categoryRatings.Durability.Rated++;  
            items[i].categoryRatings.Durability.Overall = ((items[i].categoryRatings.Durability.Total) / (items[i].categoryRatings.Durability.Rated))
          }
          if (rando !== 7) {
            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.Price.Total += ratings[idx];
            items[i].categoryRatings.Price.Rated++;
            items[i].categoryRatings.Price.Overall = ((items[i].categoryRatings.Price.Total) / (items[i].categoryRatings.Price.Rated))
          }

        } else if (items[i].category === "health & personal care" || items[i].category === "Health & personal care") {
          let rando = Math.floor(Math.random() * 10);

          if (rando !== 8) {
            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.Style.Rated++;
            items[i].categoryRatings.Style.Total += ratings[idx];
            items[i].categoryRatings.Style.Overall = ((items[i].categoryRatings.Style.Total) / (items[i].categoryRatings.Style.Rated))

            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.Accessibility.Rated++;
            items[i].categoryRatings.Accessibility.Total += ratings[idx];
            items[i].categoryRatings.Accessibility.Overall = ((items[i].categoryRatings.Accessibility.Total) / (items[i].categoryRatings.Accessibility.Rated))
          }

          if (rando !== 7) {
            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.Price.Rated++;
            items[i].categoryRatings.Price.Total += ratings[idx];
            items[i].categoryRatings.Price.Overall = ((items[i].categoryRatings.Price.Total) / (items[i].categoryRatings.Price.Rated))
          }
        } else if (items[i].category === "Prime Wardrobe") {
          let rando = Math.floor(Math.random() * 10);

          if (rando !== 8) {
            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.Fit.Rated++;
            items[i].categoryRatings.Fit.Total += ratings[idx];
            items[i].categoryRatings.Fit.Overall = ((items[i].categoryRatings.Fit.Total) / (items[i].categoryRatings.Fit.Rated))


            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.Style.Rated++;
            items[i].categoryRatings.Style.Total += ratings[idx];
            items[i].categoryRatings.Style.Overall = ((items[i].categoryRatings.Style.Total) / (items[i].categoryRatings.Style.Rated))
          }

          if (rando !== 7) {
            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.radiationProtection.Rated++;
            items[i].categoryRatings.radiationProtection.Total += ratings[idx];
            items[i].categoryRatings.radiationProtection.Overall = ((items[i].categoryRatings.radiationProtection.Total) / (items[i].categoryRatings.radiationProtection.Rated))
          }
        } else {
          let rando = Math.floor(Math.random() * 10);

          if (rando !== 8) {
            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.Taste.Rated++;
            items[i].categoryRatings.Taste.Total += ratings[idx];
            items[i].categoryRatings.Taste.Overall = ((items[i].categoryRatings.Taste.Total) / (items[i].categoryRatings.Taste.Rated))

            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.Nutrition.Rated++;
            items[i].categoryRatings.Nutrition.Total += ratings[idx];
            items[i].categoryRatings.Nutrition.Overall = ((items[i].categoryRatings.Nutrition.Total) / (items[i].categoryRatings.Nutrition.Rated))
          }

          if (rando !== 7) {
            idx = Math.floor(Math.random() * ratings.length);
            items[i].categoryRatings.Price.Rated++;
            items[i].categoryRatings.Price.Total += ratings[idx];
            items[i].categoryRatings.Price.Overall = ((items[i].categoryRatings.Price.Total) / (items[i].categoryRatings.Price.Rated))
          }
        }

        //find and store number of ratings
        if (rating === 1) {
          oneStarRatings++;
        } else if (rating === 2) {
          twoStarRatings++;
        } else if (rating === 3) {
          threeStarRatings++;
        } else if (rating === 4) {
          fourStarRatings++;
        } else {
          fiveStarRatings++;
        }

        // idx = Math.floor(Math.random() * listOfDates.length)
        // let date = listOfDates[idx];
        comment.id = x;
        comment.person = person;
        comment.title = title;
        comment.body = body;
        comment.rating = rating;
        comment.itemName = itemName;
        comment.pictureArray = [];
        comment.helpfulCount = Math.floor((Math.random() * 10));
        comment.date = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));

        if ((Math.random() * 100) < 80) {
          comment.verified = true;
        } else {
          comment.verified = false;
        }

        total += rating;
        if (x === 29) {
          average = total / 30;
          items[i].average = average;
          items[i].totalPictures = totalPictures;
          individualRatings.push({ oneStarRatings: oneStarRatings })
          individualRatings.push({ twoStarRatings: twoStarRatings })
          individualRatings.push({ threeStarRatings: threeStarRatings })
          individualRatings.push({ fourStarRatings: fourStarRatings })
          individualRatings.push({ fiveStarRatings: fiveStarRatings })
          items[i].individualRatings = individualRatings;
        }
        items[i].comments.push(comment);
        var secondCount = 0;
        if (x === 29) {
          if (items[i].category === "sports & Outdoors" || items[i].category === "Sports & Outdoors") {
            sportsList.forEach((url) => {
              secondCount++;
              let info = {};
              let idx = Math.floor(Math.random() * 30)
              info.url = url;
              info.id = items[i].comments[idx].id;
              info.pictureId = secondCount;
              items[i].comments[idx].pictureArray.push(info);
              items[i].totalPictures.push(info);
            });
          } else if (items[i].category === "Prime Pantry") {
            if (i !== 0) {
              foodList.forEach((url) => {
                secondCount++;
                let info = {};
                let idx = Math.floor(Math.random() * 30)
                info.url = url;
                info.id = items[i].comments[idx].id;
                info.pictureId = secondCount;
                items[i].comments[idx].pictureArray.push(info);
                items[i].totalPictures.push(info);
              });
            }
          }
        }
        items[i].comments.sort((a, b) => { return b.helpfulCount - a.helpfulCount })
      }
    }


    const urlList = [
      'https://gammazon-users.s3.us-east-2.amazonaws.com/01/01-01.png', 'https://gammazon-users.s3.us-east-2.amazonaws.com/01/01-02.jpg',
      'https://gammazon-users.s3.us-east-2.amazonaws.com/01/01-03.png', 'https://gammazon-users.s3.us-east-2.amazonaws.com/01/02-01.jpg',
      'https://gammazon-users.s3.us-east-2.amazonaws.com/01/03-01.jpg', 'https://gammazon-users.s3.us-east-2.amazonaws.com/01/03-02.jpg',
      'https://gammazon-users.s3.us-east-2.amazonaws.com/01/04-01.jpg', 'https://gammazon-users.s3.us-east-2.amazonaws.com/01/05.png',
      'https://gammazon-users.s3.us-east-2.amazonaws.com/01/06.jpg', 'https://gammazon-users.s3.us-east-2.amazonaws.com/01/07.jpg'
    ]

    let count = 0;

    urlList.forEach((url) => {
      count++;
      let info = {};
      let idx = Math.floor(Math.random() * 30)
      info.url = url;
      info.id = items[0].comments[idx].id;
      info.pictureId = count;
      items[0].comments[idx].pictureArray.push(info);
      items[0].totalPictures.push(info);
    });























  });





var items2 = [
  {
    id: 1,
    name: 'Bottled Water',
    link: 'https://www.amazon.com/Nestle-Pure-Life-Purified-Plastic/dp/B00NP79AI8/ref=sr_1_4?fpw=pantry&keywords=bottled+water&qid=1574886162&s=pantry&sr=8-4',
    price: 2.23,
    comments: [],
  },
  {
    id: 2,
    name: 'Hazmat Suit',
    link: 'https://www.amazon.com/MIRA-SAFETY-Disposable-Protective-Respirator-Fit/dp/B07QPX3YLV/ref=sr_1_8?keywords=hazmat+suit&qid=1574887933&sr=8-8',
    price: 129.95,
    comments: []

  },
  {
    id: 3,
    name: 'Nuka-Cola Quantum',
    link: 'https://www.amazon.com/Nuka-Quantum-Fallout-Jones-Bottle/dp/B016ZEGTBS/ref=sr_1_2?keywords=nuka+cola&qid=1574887971&sr=8-2',
    price: 14.99,
    comments: []

  },
  {
    id: 4,
    name: 'Bottle caps (144 pcs)',
    link: 'https://www.amazon.com/RiteBrew-Gold-Oxygen-Absorbing-Bottle/dp/B0038L5T68/ref=sr_1_3?keywords=bottle+caps&qid=1574888139&s=hpc&sr=1-3',
    price: 7.08,
    comments: []

  },
  {
    id: 5,
    name: 'First Aid Kit',
    link: 'https://www.amazon.com/First-Aid-Only-Piece-All-Purpose/dp/B000069EYA/ref=sxin_3_ac_d_rm?ac_md=0-0-bWVkIGtpdA%3D%3D-ac_d_rm&keywords=med+kit&pd_rd_i=B000069EYA&pd_rd_r=1a9353c0-e178-4072-b9d9-e5a5218b8a05&pd_rd_w=4RypA&pd_rd_wg=Sv0gh&pf_rd_p=6d29ef56-fc35-411a-8a8e-7114f01518f7&pf_rd_r=YM5MTNN3S77W68QZS4S0&psc=1&qid=1574888000',
    price: 16.82,
    comments: []

  },
  {
    id: 6,
    name: `Campbell's Chicken Noodle Soup (Pack of 8)`,
    link: 'https://www.amazon.com/s?k=campbells+chicken+noodle+soup&i=hpc&ref=nb_sb_noss_2',
    price: 12.26,
    comments: []

  },
  {
    id: 7,
    name: 'Wet Cat Food Variety Pack',
    link: 'https://www.amazon.com/Purina-Friskies-Pate-Adult-Variety/dp/B002CJARMI/ref=sr_1_4?keywords=pet+food&qid=1574888218&s=hpc&sr=1-4',
    price: 12.84,
    comments: []

  },
  {
    id: 8,
    name: 'Survival Knife',
    link: 'https://www.amazon.com/SOG-Fixed-Blade-Knives-Sheath/dp/B001D0PZX8/ref=sr_1_1?keywords=survival+knife&qid=1574888063&s=hpc&sr=1-1',
    price: 115.17,
    comments: []

  },
  {
    id: 9,
    name: 'Blanket',
    link: 'https://www.amazon.com/Bedsure-Fleece-Blanket-Lightweight-Microfiber/dp/B0157T1UMA/ref=sxin_3_ac_d_pm?ac_md=1-0-VW5kZXIgJDE1-ac_d_pm&keywords=blanket&pd_rd_i=B0157T1UMA&pd_rd_r=4d815da3-6b02-4b03-b6cf-3b75f5da588f&pd_rd_w=7oQq3&pd_rd_wg=WmzR7&pf_rd_p=24d053a8-30a1-4822-a2ff-4d1ab2b984fc&pf_rd_r=3KGKJEHQ4JG52YZYKK8X&psc=1&qid=1574888248&s=hpc',
    price: 14.99,
    comments: []

  },
  {
    id: 10,
    name: 'Solimo 99% Isopropyl Alcohol (16 fl oz)',
    link: 'https://www.amazon.com/Amazon-Brand-Isopropyl-Antiseptic-Technical/dp/B07NFSFBXQ/ref=sr_1_4?keywords=rubbing+alcohol&qid=1574888298&s=hpc&sr=1-4',
    price: 3.05,
    comments: []
  }
]





// reviewModel.collection.insert(items, function (err, docs) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log("Multiple documents inserted to Collection");
//   }
// });

module.exports = items;