import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import RootLayout from '../components/RootLayout';

const UserAdminPanelDetails = () => {
	const { id } = useParams();
	const [user, setUser] = useState();

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/' + id)
			.then(res => res.json())
			.then(user => setUser(user));
	}, [id]);

	return (
		<RootLayout rowClass="justify-content-center">
			<div className="col-md-6">
				<div className="card">
					<div className="card-body text-center">
						<h4 className="card-title">{user?.name}</h4>
						<p className="card-text px-5">
							{user?.company.name} / {user?.company.catchPhrase} / {user?.company.bs}
						</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<small className="text-muted">email</small>
							<div>{user?.email}</div>
						</li>
						<li className="list-group-item">
							<small className="text-muted">username</small>
							<div>{user?.username}</div>
						</li>
						<li className="list-group-item">
							<small className="text-muted">phone</small>
							<div>{user?.phone}</div>
						</li>
						<li className="list-group-item">
							<small className="text-muted">website</small>
							<div>{user?.website}</div>
						</li>
						<li className="list-group-item">
							<small className="text-muted">email</small>
							<div>{user?.email}</div>
						</li>
						<li className="list-group-item">
							<small className="text-muted">address</small>
							<div>
								{user?.address.street} {user?.address.city}, {user?.address.zipcode}
							</div>
						</li>
					</ul>
				</div>
				<Link className="btn btn-outline-secondary btn-sm mt-2" to="/users">
					go back
				</Link>
			</div>
		</RootLayout>
	);
};

export default UserAdminPanelDetails;
