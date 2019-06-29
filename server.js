const express = require("express");
const session= require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect to the Mongo DB
 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/plantslist");
// Sessions
app.use(
  session({
      secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
      resave: false, //required
      saveUninitialized: false //required
  })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser
// Add routes, both API and view
app.use(routes);




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
