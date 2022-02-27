/* eslint-disable react/prop-types */
import React from 'react';

const Card = (props) => {
	return (
		<div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-2">
			<img alt='robots' src={`https://robohash.org/${props.id}?10*10`} ></img>
			<div>
				<h2> {props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}
export default Card;