import React from "react";
import { ImageBoxData } from "./ImageBoxData";
import { Link } from "react-router-dom";
export default function HomeImageBox() {
	return (
		<div className="boxes-home">
			{ImageBoxData.map((item, index) => {
				return (
					<div className="box-item" key={index}>
						<img src={item.img} alt={item.alt} />
						<Link to={item.path}>
							<div className="img__description" key={index}>
								<div className="img-hover-title">{item.title}</div>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
}
