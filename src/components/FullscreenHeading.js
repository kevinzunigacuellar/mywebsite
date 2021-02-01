import React from "react";
import "../pages/home.css";
export default function FullscreenHeading() {
	return (
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
	);
}
