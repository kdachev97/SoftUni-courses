// const mongodb = require('mongodb');

// const connectionString = 'mongodb://localhost:27017';
// start();

// async function start() {
//   const connection = new mongodb.MongoClient(connectionString, {
//     useUnifiedTopology: true
//   });

//   await connection.connect();

//   const db = connection.db('local');
//   const collection = db.collection('startup_log');
//   const query = collection.find({});
//   const data = await query.toArray();
//   console.log(data);
// }

//using Mongoose

const mongoose = require('mongoose');
const Article = require('./models/Article');
const Comment = require('./models/Comment');
// const Person = require('./models/Person');

const connectionString = 'mongodb://localhost:27017/testdb2';
start();

async function start() {
  await mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  console.log('Database connected');

  // const person = new Person({
  //   firstName: 'Jose',
  //   lastName: 'Smith',
  //   age: 34,
  //   nationality: 'Bulgarian'
  // });

  // await person.save();

  // const data = await Person.find({});
  // console.log(data[0].sayHi());
  // console.log(data[0].name);

  // data[0].name = 'John Peterson';
  // await data[0].save();

  // const person = await Person.findOne({ firstName: 'John' });
  // console.log(person);
  // person.age = 16;

  // await person.save();

  // await Person.create({
  //   firstName: 'Peter',
  //   lastName: 'Johnson',
  //   age: 27
  // });

  // await Person.create({
  //   firstName: 'Mary',
  //   lastName: 'Ivanova',
  //   age: 25
  // });

  // const result = await Person
  //   .find({})
  //   .where('age')
  //   .gte(17)
  //   .lte(30)
  //   .sort({ age: 1 });
  //   //.skip(10) // Pagination
  //   //limit(10) // Pagination
  // // .select('firstName lastName');
  // console.log(result);

  // await Article.create({
  //   author: 'Peter',
  //   title: 'First Article',
  //   content: 'Lorem Ipsum',
  // });

  // await Comment.create({
  //   author: 'John',
  //   content: 'Nice Article',
  // });

  // const article = await Article.findOne({});
  // const comment = await Comment.findOne({});

  // article.comments.push(comment);
  // await article.save();

  const article = await Article.findOne({}).populate('comments');
  console.log(article);

  await mongoose.disconnect();
}