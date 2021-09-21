import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="nav justify-content-between align-items-center shadow-sm p-3">
			<div className="fw-bold">React Redux Shit</div>
			<div className="d-flex">
				<NavLink
					exact
					to="/"
					className="nav-link mx-3 px-1 py-0"
					activeClassName="active fw-bold border-bottom border-2 border-primary">
					Chirper
				</NavLink>
				<NavLink
					to="/users"
					className="nav-link mx-3 px-1 py-0"
					activeClassName="active fw-bold border-bottom border-2 border-primary">
					Users
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
