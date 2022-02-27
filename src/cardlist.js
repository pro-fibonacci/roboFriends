/* eslint-disable react/prop-types */ //TODO: upgrade to latest eslint tooling
import React from 'react';
import Card from './card';

const Cardlist = ({ robots }) => {
	const cardcomponent = robots.map((user, i) => {
		return <Card key={i}
			id={user.id}
			name={user.name}
			email={user.email} />
	})

	return (
		<div>
			{cardcomponent}
		</div>
	);
}

export default Cardlist;