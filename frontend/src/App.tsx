import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/tables/Table";

export interface Merchant {
	id: number;
	name: string;
	email: string;
}

export type Merchants = Merchant[] | null;

function App() {
	const [merchants, setMerchants] = useState<Merchants>(null);

	function getMerchant() {
		fetch("http://localhost:3001") // TODO: import this port from backend ?
			.then((response) => {
				return response.text();
			})
			.then((data) => {
				setMerchants(JSON.parse(data));
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		getMerchant();
	}, []);

	return (
		<div>
			{!merchants && <div>No merchants available</div>}
			{merchants && <Table data={merchants} />}
		</div>
	);
}

export default App;
