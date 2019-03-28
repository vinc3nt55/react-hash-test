import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Link to="/">Home</Link>
				<br />
				<Link to="/about">About</Link>
			</React.Fragment>
		);
	}
}

export default Home;
