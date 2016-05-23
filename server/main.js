require('babel/register');
var server = require('./server.js');
// The database instance is created when this file is required

var PORT = process.env.PORT || 3800; // set our port

// Initialize the server
server.listen(PORT, function() {
  console.log('Node server listening on port', PORT);
});
