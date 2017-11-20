import React, {Component} from 'react';
import {connet} from 'react-redux';

export default function(state={}, action){
	switch(action.type){
		case "MOVIE_SELECTED":
			return action.payload;
			break;
	}
	return state;
};