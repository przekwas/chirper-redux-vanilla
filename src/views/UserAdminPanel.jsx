import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RootLayout from '../components/RootLayout';

const UserAdminPanel = () => {
	const { push } = useHistory();
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(users => setUsers(users));
	}, []);

	return (
		<RootLayout rowClass="justify-content-center">
			<div className="col-md-8">
				<small className="d-block text-center text-muted">click user row for details</small>
				<ul className="list-group">
					{users.map(user => (
						<li
							onClick={() => push(`/users/${user.id}`)}
							role="button"
							key={`user-item-${user.id}`}
							className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-4">
							<div>
								<div className="text-muted" style={{ fontSize: '0.9rem' }}>
									name
								</div>
								<div>{user.name}</div>
							</div>
							<div>
								<div className="text-muted text-end" style={{ fontSize: '0.9rem' }}>
									email
								</div>
								<div>{user.email}</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</RootLayout>
	);
};

export default UserAdminPanel;
