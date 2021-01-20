import React, { Component } from "react";
import "./about.css";
import Background from "../images/background.jpg";
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
				<div
					className="heading-box"
					style={{
						backgroundImage: `url(${Background})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						opacity: 1,
					}}
				>
					<div>
						<h1 className="heading-text-1">Hello! </h1>
						<h1 className="heading-text-2">Welcome to my site</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
