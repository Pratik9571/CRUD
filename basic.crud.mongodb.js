use("MERN");

//! insert
//? insertOne => to add one document

// db.students.insertOne({
//   name: "Pratik",
//   College: "Kings",
//   address: {
//     temporary: "Bkt",
//     permanent: "Bkt",
//   },
// });

// db.students.insertOne({
//   name: "Suraj",
//   college: "KIST",
//   address: {
//     temporary: null,
//     permanent: "Maitidevi",
//   },
// });

//? insertMany => to add many documents

// db.courses.insertMany([
//   {
//     name: "MERN Stack",
//     price: 25000,
//     days: 90,
//   },
//   {
//     name: "Spring boot",
//     price: 25000,
//     duration: 100,
//   },
//   {
//     name: "DevOps",
//     price: 30000,
//     duration: 60,
//   },
// ]);

//! Read
//? findOne, find
//? returns always array if no data returns empty array

//? find
// db.students.find();

//? findOne returns only one data depending on the condition applied.
//? if no condition applied shows first doc

// db.courses.findOne({ name: "MERN Stack" });
// db.courses.findOne({ duration: 100 });

//! Delete
//? deleteOne
// db.courses.deleteOne({ name: "DevOps" });

//? deleteMany
// db.courses.deleteMany({});
// db.courses.find();

//! Update
//? updateOne
// db.courses.updateOne(
//   { name: "DevOps" },
//   {
//     $set: {
//       price: 25000,
//       duration: 70,
//     },
//   }
// );

// db.courses.find();

//? updateMany
// db.courses.updateMany(
//   { price: 25000 },
//   {
//     $set: {
//       durations: 120,
//     },
//   }
// );
// db.courses.find();

//!-----------------------------Assignments----------------

//? insert
// db.products.insertMany([
//   {
//     name: "Muscle Blaze Whey",
//     price: 7770,
//     ratings: 4.6,
//   },
//   {
//     name: "ON Whey",
//     price: 7690,
//     ratings: 4.5,
//   },
//   {
//     name: "My Protein Whey",
//     price: 8880,
//     ratings: 4.9,
//   },
// ]);

// db.products.insertOne({
//   name: "F2 Whey",
//   price: 7690,
//   ratings: 4.5,
// });

// ? read
// db.products.findOne({ price: 8880 });
db.products.find();

// ? delete
// db.products.deleteOne({ name: "F2 Whey" });
// db.products.deleteMany({});

// ? update

// db.products.updateOne({ name: "F2 Whey" }, { $set: { price: 7999 } });

// db.products.updateMany(
//   { ratings: 4.5 },
//   {
//     $set: {
//       price: 10190,
//     },
//   }
// );
