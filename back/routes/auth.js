const express = require("express");

const router = express.Router();
const app = express();


const connection = require("../../helpers/db");

router.post("/", (req, res) => {
  connection.query("INSERT INTO users SET ?", req.body, (err, result) => {
    res.send(result);
  });
});

module.exports = router;