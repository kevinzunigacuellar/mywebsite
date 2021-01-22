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
					<div>
						<div className="text-title">Welcome</div>
						<div className="text-subtitle">
							I am <span id="kevin">Kevin</span> a{" "}
							<span id="mechanical-engineer">Mechanical Engineer</span>{" "}
							selft-taught <span id="web-developer">Web developer</span> and{" "}
							<span id="solucions-architect">Solutions Architect</span>
						</div>
					</div>
				</div>

				<div className="boxes-home">
					<div className="box-item">
						<img src="lima.jpg" alt="no-show"></img>
					</div>
					<div className="box-item" id="green">
						<button>About me</button>
					</div>
					<div className="box-item" id="yellow">
						3
					</div>
					<div className="box-item" id="blue">
						4
					</div>
					<div className="box-item" id="sky-blue">
						5
					</div>
					<div className="box-item" id="pink">
						6
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
