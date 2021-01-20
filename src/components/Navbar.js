import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./Navbar.css";
import { MenuData } from "./MenuData";

export default function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => {
		setSidebar(!sidebar);
	};
	return (
		<div
			className={sidebar ? "navbar-open" : "navbar-close"}
			onClick={showSidebar}
		>
			{sidebar ? (
				<OpenMenu />
			) : (
				<div className="little-menu">
					<div id="menu-text">MENU</div>
					<div className="menu-bars">
						<FaBars />
					</div>
				</div>
			)}
		</div>
	);
}

function OpenMenu() {
	return (
		<ul className="menu-items">
			<li>
				<Link to="#">
					<ImCross />
				</Link>
			</li>
			{MenuData.map((item, index) => {
				return (
					<li key={index}>
						<Link to={item.path}>
							{item.icon} <span>{item.title}</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
