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
// export const getMerchants = async () => {
// 	console.log("get merchants");

// 	return await new Promise(function (myResolve, myReject) {
// 		pool.query("SELECT * FROM merchants", (error, results) => {
// 			if (error) {
// 				myReject(error);
// 			}
// 			if (results) {
// 				myResolve(results.row);
// 			}
// 		});
// 	});
// };

// getMerchants();

//get all merchants our database
const getMerchants = async () => {
	try {
		return await new Promise(function (resolve, reject) {
			pool.query("SELECT * FROM merchants", (error, results) => {
				if (error) {
					reject(error);
				}
				if (results && results.rows) {
					resolve(results.rows);
				} else {
					reject(new Error("No results found"));
				}
			});
		});
	} catch (error_1) {
		throw new Error("Internal server error");
	}
};

export { getMerchants };
