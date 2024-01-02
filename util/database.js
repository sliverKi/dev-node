const mysql = require("mysql2");

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "dev-node",
	password: "rhdmsrl98~!",
});
module.exports = pool.promise();