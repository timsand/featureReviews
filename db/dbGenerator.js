var listOfPeople = ['John', 'Jane', 'Doctor Pinkerton', 'Nimble Finch', 'President Ronald', 'Atkinson', 'Lea', 'Romero', 'Ziggy', 'JP'];
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
var ratings = [1, 2, 3, 4, 5];






var items = [
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


for (let i = 0; i < items.length; i++) {
  var itemName = items[i].name;
  var total = 0;
  var average;
  var individualRatings = [];
  var oneStarRatings = 0;
  var twoStarRatings = 0;
  var threeStarRatings = 0;
  var fourStarRatings = 0;
  var fiveStarRatings = 0;
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

    idx = Math.floor(Math.random() * listOfDates.length)
    let date = listOfDates[idx];
    comment.id = x;
    comment.person = person;
    comment.title = title;
    comment.body = body;
    comment.rating = rating;
    comment.itemName = itemName;
    comment.helpfulCount = 0;
    comment.date = date;
    total += rating;
    if (x === 29) {
      average = total / 30;
      items[i].average = average;
      individualRatings.push({ oneStarRatings: oneStarRatings })
      individualRatings.push({ twoStarRatings: twoStarRatings })
      individualRatings.push({ threeStarRatings: threeStarRatings })
      individualRatings.push({ fourStarRatings: fourStarRatings })
      individualRatings.push({ fiveStarRatings: fiveStarRatings })
      items[i].individualRatings = individualRatings;
    }
    items[i].comments.push(comment);
  }
}


// reviewModel.collection.insert(items, function (err, docs) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log("Multiple documents inserted to Collection");
//   }
// });

module.exports = items;