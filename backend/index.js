// import { getMerchants } from "./merchantModel";
import express from "express";
import { getMerchants } from "./merchantModel.js";
const app = express();
const port = 3001;

// Middleware for parsing JSON requests
// Express can accept incoming requests with JSON payloads
app.use(express.json());

// Middleware that lets our Express app allow requests to this app from React
app.use(function (req, res, next) {
	// Set the Access-Control-Allow-Origin header to allow requests from http://localhost:3000 ( React in this case )
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	// Set the Access-Control-Allow-Methods header to specify allowed HTTP methods
	// TODO: add POST,PUT,DELETE,OPTIONS in allowed methods, besides GET
	res.setHeader("Access-Control-Allow-Methods", "GET");
	// Set the Access-Control-Allow-Headers header to specify allowed headers
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Content-Type, Access-Control-Allow-Headers"
	);
	// Call next() to pass control to the next middleware or route handler
	next();
});

app.get("/", (req, res) => {
	getMerchants()
		.then((response) => {
			console.log(response);
			res.status(200).send(response);
		})
		.catch((error) => {
			res.status(500).send(error);
		});
});

// Start the server
app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
