import React, { Component } from "react";
// import css
import "./webportfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import components
import PopUp from "../components/PopUp";
import { webporfoliodata } from "../components/PortfolioWebsiteData";
import MacWindow from "../components/MacWindow";
// class component
export default class WebPortfolio extends Component {
	componentDidMount() {
		document.title = "Web Portfolio";
	}
	render() {
		const cards = webporfoliodata.map((item, index) => {
			return (
				<div className="portfolio-card" key={index}>
					<div className="item-1" id={item.item1order}>
						<MacWindow img={item} />
					</div>
					<div className="item-2" id={item.item2order}>
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
						<PopUp info={item.popup} />
					</div>
				</div>
			);
		});

		const heading = (
			<div className="webportfolio-heading-box">Web Portfolio</div>
		);
		return (
			<div className="content-webporfolio">
				{heading}
				{cards}
			</div>
		);
	}
}
