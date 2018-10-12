const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view// Add routes, both API and view
app.use(routes);

// Start the API server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
