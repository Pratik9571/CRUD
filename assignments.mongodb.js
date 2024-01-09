use("MERN");

//?Find movies whose status is "Ended"
// db.movies.find({ status: "Ended" });

// ?find movies whose rating is 9
// db.movies.find({ "rating.average": 8 });

// ?find movies whose rating is greater than 7 and less than 9
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
// });

// ?find movies whose genres is Thriller
// db.movies.find({ genres: "Thriller" });

// ?find movies whose status is Running
// db.movies.find({ status: "Running" });

//? find movies whose status is Ended and runtime is 60
// db.movies.find({ $and: [{ status: "Ended" }, { runtime: 60 }] });

// ?find movies whose weight is 75 and network country is Canada
// db.movies.find({ $and: [{ weight: 65 }, { "network.country": "Canada" }] });

// ?find movies whose weight is 96 or runtime is 60
// db.movies.find({ $or: [{ weight: 96 }, { runtime: 60 }] });

// ? find movies whose rating average is not 9
// db.movies.find({ $not: { average: 9 } });

// ? find movies whose rating average is either 6 or 6.5 or
// db.movies.find({ $or: [{ "rating.average": 6 }, { "rating.average": 6.5 }] });

// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8
// db.movies.find({
//   $or: [
//     { "rating.average": 9 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 8.6 },
//     { "rating.average": 7.7 },
//     { "rating.average": 7.8 },
//     { "rating.average": 6.1 },
//   ],
// });

// ?find students whose hobby is both Gaming and Singing
// db.movies.find();

// ? find students whose hobby is neither Swimming nor Dancing

// db.movies.find();
