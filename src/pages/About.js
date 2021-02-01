import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
export default class About extends Component {
	componentDidMount() {
		document.title = "About me";
	}
	render() {
		return (
			<div className="content-about">
				<h1 className="about-heading">About me</h1>
				<div className="about-card">
					<div className="item">
						<img src="mypic.jpeg" alt="mypic-alt" />
					</div>
					<div className="item">
						<div className="item2-content">
							<div className="name-heading">Kevin D. Zuñiga Cuellar</div>
							<div className="item-description">
								Greetings! You made it to my about page. Here you will find more
								about my background and some fun facts. Enjoy!
							</div>
							<Button>Resume JSON</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
