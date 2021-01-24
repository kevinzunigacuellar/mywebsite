import React, { Component } from "react";

export default class WebPortfolio extends Component {
	componentDidMount() {
		document.title = "Web Portfolio";
	}
	render() {
		return (
			<div>
				<h1>My WebPortfolio</h1>
			</div>
		);
	}
}
