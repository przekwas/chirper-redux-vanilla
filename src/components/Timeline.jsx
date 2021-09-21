import moment from 'moment';

const Timeline = ({ chirps }) => {
	return (
		<ul className="list-group">
			{chirps.map(chirp => (
				<li key={chirp.id} className="list-group-item d-flex flex-column align-items-center py-4">
					<div className="align-self-start fs-6 fw-light text-muted d-flex justify-content-between align-items-center w-100">
						<div>@{chirp.name}</div>
						<div className="fst-italic">
							{moment(chirp.created).format('MMM Do, h:mm:ss a')}
						</div>
					</div>
					<div className="py-4">{chirp.message}</div>
				</li>
			))}
		</ul>
	);
};

export default Timeline;
