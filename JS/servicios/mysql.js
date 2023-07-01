const mysql = require("mysql");
require("dotenv").config();

var pool = mysql.createPool({
  connectionLimit: 4,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Conexion a la base de datos exitosa");
  connection.release();
});

module.exports = pool;
