import React from "react";
import "./about.css";
function About() {
	return (
		<div className="content-about">
			<h1 className="title">About me:</h1>
			<div className="img-title">
				<div className="box">
					<img className="img-box" src="mypic.jpg" alt="my face" />
				</div>
				<div>
					<div className="display-title">
						<div>Mechanical Engineer</div>
						<div>Web Developer</div>
					</div>
					<div className="description">
						<div>Here some description</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
