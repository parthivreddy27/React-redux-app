import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetail extends Component{

	render(){
		return(
			<div>
				<p>Title: {this.props.movie.title}</p>
				<p>Release Year : {this.props.movie.releaseYear}</p>
				<p>Release Country : {this.props.movie.releaseCountry}</p>
			</div>
		);
	}
}

function mapStateToProps(state){
	return(
		{movie: state.activeMovie}
	)
}


export default connect(mapStateToProps)(MovieDetail);