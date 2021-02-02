import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
export default class About extends Component {
	componentDidMount() {
		document.title = "About me";
	}

	render() {
		const introcard = (
			<div className="about-card">
				<div className="item">
					<img src="mypic.jpeg" alt="mypic-alt" />
				</div>
				<div className="item">
					<div className="item2-content">
						<div className="name-heading">Kevin D. Zuñiga Cuellar</div>
						<div className="item-description">
							Hello! Welcome to my about page. Here you will find more about my
							background. Feel free to download my resume or check out the API
							in JSON format. Enjoy!
						</div>
					</div>
				</div>
			</div>
		);

		const educard = (
			<div className="education-card">
				<div className="education-img">
					<img src="uvm.jpg" alt="uvmlogo"></img>
				</div>
				<div className="university-description">
					<div>University of Vermont | Burlington, VT</div>
					<div className="inline-flex">
						<div>Bachelor of Science in Mechanical Engineering</div>
						<div>2016-2020</div>
					</div>
					<div>Minor in Computer Science</div>
					<div>3.5 GPA</div>
				</div>
			</div>
		);
		return (
			<div className="content-about">
				<div className="about-heading">About me</div>
				{introcard}
				<div className="about-subheading">Resume</div>
				<div className="resume-button">
					<Button
						className="button-1"
						href="https://api.kevinzunigacuellar.com/resume-json"
						target="_blank"
					>
						Resume API
					</Button>
					<Button className="button-1" variant="danger">
						Download PDF
					</Button>
				</div>

				<div className="about-subheading">Education</div>
				{educard}
			</div>
		);
	}
}
