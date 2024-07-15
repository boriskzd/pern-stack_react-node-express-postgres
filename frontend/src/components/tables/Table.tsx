import { Merchants } from '../../App';

interface TableProps {
	data: Merchants;
}

const Table = ({ data }: TableProps) => {
	console.log(data);

	return (
		<table>
			<thead>
				<tr>
					<th colSpan={3}>Merchants</th>
				</tr>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>E-mail</th>
				</tr>
			</thead>
			<tbody>
				{data?.map((merchant) => (
					<tr key={merchant.id}>
						<td>{merchant.id}</td>
						<td>{merchant.name}</td>
						<td>{merchant.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
