import { useState, useEffect } from "react";
import "./App.css";

type Merchants = string | false;

function App() {
	const [merchants, setMerchants] = useState<Merchants>(false);

	function getMerchant() {
		fetch("http://localhost:3001")
			.then((response) => {
				return response.text();
			})
			.then((data) => {
				setMerchants(data);
			});
	}

	useEffect(() => {
		getMerchant();
	}, []);

	return (
		<div>
			{merchants ? merchants : "There is no merchant data available"}
		</div>
	);
}

export default App;
