const express = require('express');
// const catalogController = require('./catalogController');
// const createController = require('./createController');
// const logger = require('./logger');
const hbr = require('express-handlebars');

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const deleteController = require('./controllers/deleteController');

const handlebars = hbr.create({
  extname: '.hbs'
});

const app = express();
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('static'));

app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);
app.use('/delete', deleteController);

// equivalent syntax
// res.locals.message = 'Hello there';
// res.locals.response = 'General Kenobi';

//example

// res.render('home', {
//   username: 'Peter',
//   title: 'Handlebars Demo',
//   message: 'Hello there',
//   response: 'General Kenobi',
//   product: {
//     name: 'Product 1',
//     price: 19.45
//   },
//   contacts: [
//     {
//       name: 'Peter',
//       email: 'peter@gmail.com'
//     },
//     {
//       name: 'George',
//       email: 'george@gmail.com'
//     },
//     {
//       name: 'Harry',
//       email: 'harry@gmail.com'
//     }
//   ]
// });


// app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.get('/img', (req, res) => {
//   res.download(__dirname + '/img.png');
// });

// Middleware on all routes
// app.use(logger());

// app.use('/create', createController);
// app.use('/catalog',  (req, res, next) => {
//   console.log('>>>', req.method, req.url);
//   next();
// }, catalogController);

// app.get('/data', (req, res) => {
//   res.json([
//     {
//       name: 'Peter',
//       age: 25
//     },
//     {
//       name: 'John',
//       age: 31
//     }
//   ]);
// });

// app.all('*', (req, res) => {
//   res.status(404).send('404 Not Found (Custom page)');
// });

app.listen(3000);