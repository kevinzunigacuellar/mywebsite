import React from "react";

export default function MacWindow(props) {
	return (
		<>
			<div className="mac-navbar">
				<ul>
					<li className="mac-circle" id="red"></li>
					<li className="mac-circle" id="yellow"></li>
					<li className="mac-circle" id="green"></li>
				</ul>
			</div>
			<div className="window-image-container">
				<img src={props.img.img} alt={props.img.alt} />
			</div>
		</>
	);
}
