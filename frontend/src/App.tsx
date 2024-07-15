import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/tables/Table';

export interface Merchant {
	id: number;
	name: string;
	email: string;
}

export type Merchants = Merchant[] | null;

function App() {
	const [merchants, setMerchants] = useState<Merchants>(null);

	function getMerchant() {
		console.log('[APP] - getMerchants API call');
		fetch('http://localhost:3001') // TODO: import this port from backend ?
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

	function createMerchant() {
		let name = prompt('Enter merchant name');
		let email = prompt('Enter merchant email');

		fetch('http://localhost:3001/merchants', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email }),
		})
			.then((response) => {
				return response.text();
			})
			.then((data) => {
				alert(data);
				getMerchant();
			});
	}

	useEffect(() => {
		getMerchant();
	}, []);

	return (
		<div>
			{!merchants && <div>No merchants available</div>}
			{merchants && <Table data={merchants} />}
			<div>
				<button onClick={createMerchant}>Add Merchant</button>
			</div>
		</div>
	);
}

export default App;
