const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const apiLoginRoutes = require("./routes/api-routes")
const htmlRoutes = require("./routes/html-routes")
const session = require("express-session");
const passport = require("./config/passport");


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Add routes, both API and view// Add routes, both API and view
app.use(routes);
app.use(apiLoginRoutes);
app.use(htmlRoutes);

// Start the API server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
