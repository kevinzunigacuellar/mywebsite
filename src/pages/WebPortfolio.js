import React, { Component } from "react";
import "./webportfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PopUp from "../components/PopUp";
import { ImPen } from "react-icons/im";
import { BiCode } from "react-icons/bi";
export default class WebPortfolio extends Component {
	componentDidMount() {
		document.title = "Web Portfolio";
	}
	render() {
		return (
			<div className="content-webporfolio">
				<div className="webportfolio-heading-box">Web Portfolio</div>
				<div className="portfolio-card">
					<div className="item-1">
						<div className="mac-navbar">
							<ul>
								<li className="mac-circle" id="red"></li>
								<li className="mac-circle" id="yellow"></li>
								<li className="mac-circle" id="green"></li>
							</ul>
						</div>
						<div className="window-image-container">
							<img src="hotelmanantial.png" alt="example" />
						</div>
					</div>
					<div className="item-2">
						<div className="title">Manantial Hotel</div>
						<div className="description">
							A simple website showcasing the hotel ameneties and services.
						</div>
						<ul className="overview">
							<li>
								{" "}
								<ImPen /> Web Design
							</li>
							<li>
								{" "}
								<BiCode /> Static Site Development
							</li>
						</ul>
						<PopUp />
					</div>
				</div>
			</div>
		);
	}
}
