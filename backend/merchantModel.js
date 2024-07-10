import "dotenv/config"; // for process.env. variables
import pkg from "pg"; // postgres
const { Pool } = pkg;

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: Number(process.env.DB_PORT), // files in .env are treated as strings, so port number has to be transformed from string to number
});

// get all merchants from
// WORK IN PROGRESS
const getMerchants = async () => {
	console.log("...Get Merchants...");

	try {
		return await new Promise(function (myResolve, myReject) {
			pool.query("SELECT * FROM merchants", (error, results) => {
				if (error) {
					console.log("ERROR: ", error);
					myReject(error);
				}
				if (results && results.rows) {
					console.log(`Number of merchants: ${results.rows.length}`);
					myResolve(results.rows);
				} else {
					myReject(new Error("No results found"));
				}
			});
		});
	} catch (error_1) {
		console.error(error_1);
		throw new Error("Internal server error");
	}
};

export { getMerchants };
