/* eslint-disable react/prop-types */ //TODO: upgrade to latest eslint tooling
import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-2"
				type="search"
				placeholder="Search for Robots"
				onChange={searchChange}
			/>
		</div >
	);
}

export default SearchBox;