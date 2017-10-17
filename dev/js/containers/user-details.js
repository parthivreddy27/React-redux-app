import React, {Component} from 'react';
import {connect} from 'react-redux';

class userDetail extends Component{

	render(){
		return(
			<div>
				<p>First Name: {this.props.user.first}</p>
				<p>Last Name : {this.props.user.last}</p>
				<p>Age : {this.props.user.age}</p>
			</div>
		);
	}
}

function mapStateToProps(state){
	return(
		{user: state.activeUser}
	)
}


export default connect(mapStateToProps)(userDetail);