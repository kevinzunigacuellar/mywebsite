import React, { Component } from "react";
import "./home.css";
import HomeImageBox from "../components/HomeImageBox";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			person: null,
		};
	}

	componentDidMount() {
		document.title = "Home";
	}
	render() {
		return (
			<div className="content-home">
				<div className="home-fullscreen">
					<div>
						<div className="text-title">Welcome</div>
						<div className="text-subtitle">
							I am <span id="kevin">Kevin</span> a{" "}
							<span id="mechanical-engineer"> Mechanical Engineer</span>,
							selft-taught <span id="web-developer">Web developer</span> and{" "}
							<span id="solucions-architect">Solutions Architect</span>
						</div>
					</div>
				</div>
				<HomeImageBox />
			</div>
		);
	}
}

export default Home;
