import { FaHome, FaAddressCard } from "react-icons/fa";
import {
	BsFillBriefcaseFill,
	BsAwardFill,
	BsPieChartFill,
} from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { RiQuillPenFill } from "react-icons/ri";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
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
		icon: <FaHome />,
		component: Home,
	},
	{
		title: "Portfolio",
		name: "porfolio-page",
		path: "/portfolio",
		icon: <BsFillBriefcaseFill />,
		component: Portfolio,
	},
	{
		title: "About",
		name: "about-page",
		path: "/about",
		icon: <FaAddressCard />,
		component: About,
	},
	{
		title: "Book Shelf",
		name: "book-page",
		path: "/mybookshelf",
		icon: <ImBooks />,
		component: MyBookShelf,
	},
	{
		title: "Certifications",
		name: "cert-page",
		path: "/certifications",
		icon: <BsAwardFill />,
		component: Certifications,
	},
	{
		title: "Blog",
		name: "blog-page",
		path: "/blog",
		icon: <RiQuillPenFill />,
		component: Blog,
	},
	{
		title: "Investments",
		name: "invest-page",
		path: "/investments",
		icon: <BsPieChartFill />,
		component: Investments,
	},
];
