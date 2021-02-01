import { BiCode } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";
import { CgOpenCollective } from "react-icons/cg";
import { FaAws } from "react-icons/fa";
export const webporfoliodata = [
	{
		title: "Manantial Hotel",
		img: "hotelmanantial.png",
		alt: "hotelmanantial-image",
		description: "A simple website showcasing the hotel ameneties and services",
		item1order: "order-1",
		item2order: "order-2",
		overview: [
			{
				icon: <HiOutlinePencil style={{ fontSize: "25px" }} />,
				text: "Web design",
			},
			{
				icon: <BiCode style={{ fontSize: "30px" }} />,
				text: "Static site development",
			},
			{
				icon: <FaAws style={{ fontSize: "30px" }} />,
				text: "Hosting",
			},
		],

		popup: {
			button: {
				text: "More details",
				variant: "primary",
			},
			modal: {
				size: "lg",
				title: "About Manantial Hotel",
				languages: ["HTML", "CSS (Bootstrap)", "Javascript (jQuery)"],
				body:
					"This website was my first job as a freelancer. It was created using HTML, CSS and jQuery. Most of the components are from Bootstrap, some custom CSS for the layout responsiveness and jQuery for animations. The job took about 30 days to finish, two weeks for logistics and web design, a week of conding and a week for review, testing and hosting. ",
				website: "https://hotelmanantialchurin.com",
				github: "https://github.com/kevinzunigacuellar",
				takeaway:
					"My takeaway for this project is that more than the actual coding the logistics/web design can take a long time. Once you or the client have a clear picture of what the website should look like, the process ramps up. This job inspired me to learn about cloud computing to host this website. You can find the cloud architecture in the cloud portfolio section.",
			},
		},
	},
	{
		title: "My Website",
		img: "mywebsite.png",
		alt: "mywebsite-image",
		description: "A dynamic website showcasing my skills and ongoing projects",
		overview: [
			{
				icon: <HiOutlinePencil style={{ fontSize: "25px" }} />,
				text: "Web design",
			},
			{
				icon: <CgOpenCollective style={{ fontSize: "30px" }} />,
				text: "Dynamic site development",
			},
			{
				icon: <FaAws style={{ fontSize: "30px" }} />,
				text: "Serverless application",
			},
		],

		popup: {
			button: {
				text: "More details",
				variant: "primary",
			},
			modal: {
				size: "lg",
				title: "About My Website",
				languages: [
					"HTML",
					"CSS (Bootstrap, Sass)",
					"Javascript (React.js, Node.js)",
					"Python",
				],
				body:
					"This serverless web app was writen in Javascript using libraries such as React, react-router-dom, axios, react-icons and react-bootstrap. The database in hosted in AWS DynamoDB, Lambda and API Gateway which feeds data to the website. The lambda functions were written in Node.js and Python",
				website: "https://kevinzunigacuellar.com",
				github: "https://github.com/kevinzunigacuellar",
				takeaway:
					"I started this website as a django app hosted in AWS EC2. I migrated to serverless to save about 80% of overall costs. My takeaway is that if no in depth configuration is needed (Database and Compute) serverless might be the best way to save in monthly costs.",
			},
		},
	},
];
