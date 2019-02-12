var express = require("express");
var path = require("path");


var app = express();
var PORT = 3000; //To do ADD || PATH VARIABLE WHEN DEPLOYED TO HEROKU

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);


// Sttart Server
// =============================================================
app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT " + PORT);
});
