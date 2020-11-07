// This will be your standard server.js file where you
// will initialize the server 

// Dependencies
var express = require("express");


// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

// Routers
require('./routes/htmlRoutes');
require('./routes/apiRoutes');

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

