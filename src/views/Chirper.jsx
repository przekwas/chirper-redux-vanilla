import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import RootLayout from '../components/RootLayout';
import Timeline from '../components/Timeline';

function generateRandomCreated() {
	return Date.now() - Math.floor(Math.random() * 10000000000);
}

const initialState = [
	{
		id: uuidv4(),
		name: 'Luke',
		message: 'This is cool!',
		created: generateRandomCreated()
	},
	{
		id: uuidv4(),
		name: 'Andrew',
		message: 'Moldy moldy mold',
		created: generateRandomCreated()
	},
	{
		id: uuidv4(),
		name: 'Sammo',
		message: 'Redux is ezpz',
		created: generateRandomCreated()
	}
];

const Chirper = () => {
	const [values, setValues] = useState({});
	const [chirps, setChirps] = useState(initialState);

	const handleChanges = e => setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));

	const addChirp = e => {
		e.preventDefault();
		setChirps(prev => [
			...prev,
			{ id: uuidv4(), name: values.name, message: values.message, created: Date.now() }
		]);
	};

	return (
		<RootLayout>
			<div className="offset-md-3 col-md-6">
				<form className="form-group">
					<label htmlFor="name">Name</label>
					<input
						value={values.name || ''}
						onChange={handleChanges}
						type="text"
						name="name"
						placeholder="Falstad"
						className="form-control"
					/>
					<label htmlFor="message">Message</label>
					<textarea
						value={values.message || ''}
						onChange={handleChanges}
						rows="2"
						name="message"
						placeholder="I am the heir to the Stormhammer throne!"
						className="form-control"
					/>
					<div className="d-flex justify-content-end mt-2">
						<button onClick={addChirp} className="btn btn-primary btn-sm">
							Smack It Down
						</button>
					</div>
				</form>
			</div>
			<div className="offset-md-3 col-md-6 mt-2">
				<Timeline chirps={chirps} />
			</div>
		</RootLayout>
	);
};

export default Chirper;
