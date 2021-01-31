import React, { Component } from "react";
import "./webportfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PopUp from "../components/PopUp";
import PopUptest from "../components/PopUptest";
import { ImPen } from "react-icons/im";
import { BiCode } from "react-icons/bi";
import { webporfoliodata } from "../components/PortfolioWebsiteData";
export default class WebPortfolio extends Component {
	constructor(props) {
		super(props);
	}
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
								<ImPen /> Web design
							</li>
							<li>
								<BiCode /> Static site development
							</li>
						</ul>
						<PopUp />
					</div>
				</div>
				{webporfoliodata.map((item, index) => {
					return (
						<div className="portfolio-card" key={index}>
							<div className="item-1">
								<div className="mac-navbar">
									<ul>
										<li className="mac-circle" id="red"></li>
										<li className="mac-circle" id="yellow"></li>
										<li className="mac-circle" id="green"></li>
									</ul>
								</div>
								<div className="window-image-container">
									<img src={item.img} alt={item.alt} />
								</div>
							</div>
							<div className="item-2">
								<div className="title">{item.title}</div>
								<div className="description">{item.description}</div>
								<ul className="overview">
									{item.overview.map((itemlist, index) => {
										return (
											<li key={index}>
												{itemlist.icon} {itemlist.text}
											</li>
										);
									})}
								</ul>
								<PopUptest info={item.popup} />
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
