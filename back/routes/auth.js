const express = require("express");

const router = express.Router();
const app = express();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const connection = require("../../helpers/db");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  const payload = jwt.verify(req.headers["x-auth-token"], "secret");

  if (!payload) return res.status(404).send("User do not exists");

  connection.query(
    "SELECT * FROM users WHERE id = ?",
    payload.id,
    (err, users) => {
      const user = users[0];

      delete user.password;

      res.send(user);
    }
  );
});

router.post("/signup", (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 10);
  const user = {
    ...req.body,
    password: hash,
  };
  connection.query("INSERT INTO users SET ?", user, (error, result) => {
    if (error) {
      res.status(500).json({ flash: error.message });
    } else {

    }
  });
  router.post("/signin", function (req, res) {
    if (!req.body.email && !req.body.password) {
      return res.status(400).send({ flash: "Please send email and password" });
    }

    connection.query(
      "SELECT * FROM users WHERE email = ?",
      req.body.email,
      (err, users) => {
        if (err) return res.status(404).send("User not exists");

        const user = users[0];

        const isSame = bcrypt.compareSync(req.body.password, user.password);

        if (!isSame) {
          return res.status(401).send("Password is incorrect");
        }

        // User logged in successfully
        const token = jwt.sign({ id: user.id }, "secret");

        res.send({
          token,
        })
      }
    )
  });
})
