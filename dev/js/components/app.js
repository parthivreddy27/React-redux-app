import React from 'react';
require('../../scss/style.scss');
import MovieList from '../containers/movie-list';
import MovieDetail from '../containers/movie-details'

const App = () => {
	return (
	<div>
		<h2>Movies List</h2>
		<MovieList />
		<hr/>
		<h2>Movie Details are</h2>
		<MovieDetail />
	</div>
	)
};

export default App;