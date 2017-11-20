import React from 'react';
import {combineReducers} from 'redux';
import MovieReducer from './reducer-movies';
import ActiveMovie from './reducer-active-movie';

const allReducers = combineReducers({
	movies: MovieReducer,
	activeMovie: ActiveMovie
});

export default allReducers;