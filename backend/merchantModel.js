const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: Number(process.env.DB_PORT), // files in .env are treated as strings, so port number has to be transformed from string to number
});
console.log(pool);
