import React, { Component } from "react";
import "./home.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			person: null,
		};
	}
	render() {
		return (
			<div className="content-about">
				<div className="home-fullscreen">
					<div className="home-container-1">cher ami.</div>
					<div className="home-container-2">Welcome</div>
				</div>
				<div className="boxes-home">
					<div className="box-item">1</div>
					<div className="box-item">2</div>
					<div className="box-item">3</div>
					<div className="box-item">4</div>
					<div className="box-item">5</div>
					<div className="box-item">6</div>
				</div>
			</div>
		);
	}
}

export default Home;
