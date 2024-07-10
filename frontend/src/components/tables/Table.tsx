import { Merchants } from "../../App";

interface TableProps {
	data: Merchants;
}

const Table = ({ data }: TableProps) => {
	console.log(data);
	// data && console.warn(data[0]);

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
					<tr>
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
