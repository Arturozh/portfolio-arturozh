import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

console.log('Running server on ES6');

const APP = express();

// allow cross-origin requests
APP.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// configure app to use bodyParser()
// this will let us get the data from a POST
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());

// APP.get('/*', (req, res) =>
//   res.render(INDEX_DEST_PATH, { root: __dirname })
// );

// REGISTER OUR ROUTES
// public-facing application route
APP.use(express.static(path.resolve(__dirname, '../dist')));
APP.use('/', require('./public/main'));

// all of our API routes will prefixed with /api
APP.use('/api', require('./api/todos'));
console.log('Application', APP);

export default APP;
