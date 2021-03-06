// This will be your standard server.js file where you
// will initialize the server 

// Dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


 // Initialize the app and create a port
 const app = express();
 const PORT = process.env.PORT || 3000;

//  Set up body parsing, static, and route middleware
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static("public"));
 app.use("/api", apiRoutes);
 app.use("/", htmlRoutes);


// Starts the server to begin listening
// =============================================================
 app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

  
 
  
 