import { HashRouter as Router, Switch as Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Chirper from './views/Chirper';
import UserAdminPanel from './views/UserAdminPanel';
import UserAdminPanelDetails from './views/UserAdminPanelDetails';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/">
					<Chirper />
				</Route>
				<Route exact path="/users">
					<UserAdminPanel />
				</Route>
                <Route exact path="/users/:id">
					<UserAdminPanelDetails />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
