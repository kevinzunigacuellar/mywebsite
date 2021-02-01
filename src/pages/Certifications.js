import React, { Component } from "react";
import "./certifications.css";
import { certData } from "../components/certData";

export default class Certifications extends Component {
	componentDidMount() {
		document.title = "Certifications";
	}
	render() {
		const heading = (
			<div className="certifications-heading-box">Certifications</div>
		);
		const subtitleAws = <div className="subtitle">AWS</div>;
		const subtitleAzure = <div className="subtitle">Azure</div>;
		const AWScerts = certData.aws.map((item, index) => {
			return (
				<a
					className="item"
					key={index}
					href={item.verify}
					target="_blank"
					rel="noreferrer"
				>
					<img src={item.img} alt={item.alt}></img>
				</a>
			);
		});

		const Azcerts = certData.azure.map((item, index) => {
			return (
				<a
					key={index}
					className="item"
					href={item.verify}
					target="_blank"
					rel="noreferrer"
				>
					<img src={item.img} alt={item.alt}></img>
				</a>
			);
		});
		return (
			<div className="content-certifications">
				{heading}
				{subtitleAws}
				<div className="cert-container">{AWScerts}</div>
				{subtitleAzure}
				<div className="cert-container">{Azcerts}</div>
			</div>
		);
	}
}
