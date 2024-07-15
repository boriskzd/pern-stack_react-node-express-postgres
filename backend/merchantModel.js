import 'dotenv/config'; // for process.env. variables
import pkg from 'pg'; // postgres
const { Pool } = pkg;

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: Number(process.env.DB_PORT), // files in .env are treated as strings, so port number has to be transformed from string to number
});

// get all merchants from PostgreSQL DataBase
const getMerchants = async () => {
	console.log('...Get Merchants...');

	try {
		return await new Promise(function (myResolve, myReject) {
			pool.query('SELECT * FROM merchants', (myError, myResults) => {
				if (myError) {
					console.log('ERROR: ', myError);
					myReject(myError);
				}
				if (myResults && myResults.rows) {
					console.log(`Number of merchants: ${myResults.rows.length}`);
					myResolve(myResults.rows);
				} else {
					myReject(new Error('No results found'));
				}
			});
		});
	} catch (error_1) {
		console.error(error_1);
		throw new Error('Internal server error');
	}
};

const createMerchant = (body) => {
	return new Promise(function (myResolve, myReject) {
		const { name, email } = body;
		pool.query(
			'INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *',
			[name, email],
			(myError, myResults) => {
				if (myError) {
					myReject(myError);
				}
				if (myResults && myResults.rows) {
					myResolve(`A new merchant has been added: ${JSON.stringify(myResults.rows[0])}`);
				} else {
					myReject(new Error('No results found'));
				}
			}
		);
	});
};
export { getMerchants, createMerchant };
