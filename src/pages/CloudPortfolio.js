import React, { Component } from "react";
import "./cloud.css";
import { CloudPortfolioData } from "./CloudPortfolioData";
export default class CloudPortfolio extends Component {
	componentDidMount() {
		document.title = "Cloud Portfolio";
	}

	render() {
		const cloudcard = CloudPortfolioData.map((item, index) => {
			return (
				<div key={index}>
					<div className="cloud-subheading">{item.title}</div>
					<div className="cloud-card">
						<div className="item-1">
							<img src={item.img} alt={item.alt}></img>
						</div>
						<div className="item-2">
							<div className="heading">{item.subtitle}</div>
							<div className="content">{item.description}</div>
						</div>
					</div>
				</div>
			);
		});
		const cloudtitle = <div className="heading-cloud">Cloud Portfolio</div>;
		return (
			<div className="content-cloud">
				{cloudtitle}
				<div className="cloud-container">{cloudcard},</div>
			</div>
		);
	}
}
