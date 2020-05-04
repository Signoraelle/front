const authRouter = require('./auth/auth')
// declare all the necessary libraries
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const jwt = require("jsonwebtoken");
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");

const app = express();
// set up the application

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/auth", require("./routes/auth/auth"));

app.get("/auth/signup", (req, res) => {
  res.send("I am in POST signup");


});


// launch the node server
let server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port);
});