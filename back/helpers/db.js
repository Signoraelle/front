const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "192.168.64.2",
  password: "",
  database: "homer_odyssey",
});
module.exports = connection;