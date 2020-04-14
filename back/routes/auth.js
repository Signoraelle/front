const express = require("express");

const router = express.Router();
const app = express();


const connection = require("../../helpers/db");

router.post("/", (req, res) => {
  connection.query("INSERT INTO users SET ?", req.body, (error, result) => {
    if (error) {
      res.status(500).json({ flash: error.message });
    } else {
      res.status(200).json({ flash: "User has been signed up!" });
    }
  });
});

module.exports = router;