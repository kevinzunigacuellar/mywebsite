import React, { Component } from "react";
import "./home.css";
import HomeImageBox from "../components/HomeImageBox";
import FullscreenHeading from "../components/FullscreenHeading";
class Home extends Component {
	componentDidMount() {
		document.title = "Home";
	}
	render() {
		return (
			<div className="content-home">
				<FullscreenHeading />
				<HomeImageBox />
			</div>
		);
	}
}

export default Home;
