import { FaRegAddressCard } from "react-icons/fa";
import { BsPieChart, BsFileCode } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { BiCloud, BiAward, BiPen } from "react-icons/bi";

import { BiHomeAlt } from "react-icons/bi";
import { SiProbot } from "react-icons/si";
import Home from "../pages/Home";
import WebPortfolio from "../pages/WebPortfolio";

import CloudPortfolio from "../pages/CloudPortfolio";
import MechanicalPortfolio from "../pages/MechanicalPortfolio";
import Certifications from "../pages/Certifications";
import MyBookShelf from "../pages/MyBookShelf";
import Blog from "../pages/Blog";
import Investments from "../pages/Investments";
import About from "../pages/About";

export const MenuData = [
	{
		title: "Home",
		name: "home-page",
		exact: true,
		path: "/",
		icon: <BiHomeAlt />,
		component: Home,
	},
	{
		title: "About",
		name: "about-page",
		path: "/about",
		icon: <FaRegAddressCard />,
		component: About,
	},
	{
		title: "Web Portfolio",
		name: "web-porfolio-page",
		path: "/webportfolio",
		icon: <BsFileCode />,
		component: WebPortfolio,
	},
	{
		title: "Mech Portfolio",
		name: "mech-portfolio",
		path: "/mechanicalportfolio",
		icon: <SiProbot />,
		component: MechanicalPortfolio,
	},
	{
		title: "Cloud Portfolio",
		name: "cloud-porfolio-page",
		path: "/cloudportfolio",
		icon: <BiCloud />,
		component: CloudPortfolio,
	},
	{
		title: "Certifications",
		name: "cert-page",
		path: "/certifications",
		icon: <BiAward />,
		component: Certifications,
	},
	{
		title: "Blog",
		name: "blog-page",
		path: "/blog",
		icon: <BiPen />,
		component: Blog,
	},
	{
		title: "Investments",
		name: "invest-page",
		path: "/investments",
		icon: <BsPieChart />,
		component: Investments,
	},
];
