import React, { Component } from "react";
import "./investments.css";
import { Doughnut } from "react-chartjs-2";
export default class Investments extends Component {
	componentDidMount() {
		document.title = "Investments";
	}
	render() {
		const data = {
			datasets: [
				{
					data: [15, 20, 20, 20, 15, 10],
					backgroundColor: [
						"rgba(255, 99, 132, 0.9)",
						"rgba(54, 162, 235, 0.9)",
						"rgba(255, 206, 86, 0.9)",
						"rgba(75, 192, 192, 0.9)",
						"rgba(153, 102, 255, 0.9)",
						"rgba(255, 159, 64, 0.9)",
					],
				},
			],

			labels: ["TSLA", "SNOW", "AMZN", "MSFT", "GOOGL", "PLTR"],
		};
		const options = {
			legend: {
				display: true,
				position: "bottom",
				onClick: () => {},
				labels: {
					fontSize: 12,
				},
			},
		};
		return (
			<div className="content-investments">
				<div className="investments-heading-box">Investments</div>
				<div className="item-container">
					<div className="invest-card">
						<div className="item">
							<Doughnut data={data} width={120} options={options} />
						</div>
						<div className="item">
							My current portfolio is cloud concentrated. In my opinion, the
							cloud industry has brought a lot of value to businesses around the
							world. It provides the means to store, process and analyze large
							amounts of information to best serve the costumers.
						</div>
					</div>
				</div>
			</div>
		);
	}
}
