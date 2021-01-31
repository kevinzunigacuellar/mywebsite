import { ImPen } from "react-icons/im";
import { BiCode } from "react-icons/bi";

export const webporfoliodata = [
	{
		title: "Manantial Hotel",
		img: "hotelmanantial.png",
		alt: "hotelmanantial-image",
		description: "A simple website showcasing the hotel ameneties and services",
		overview: [
			{
				icon: <ImPen />,
				text: "Web design",
			},
			{
				icon: <BiCode />,
				text: "Static site development",
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
				body: "this is a text body",
				website: "https://hotelmanantial.com",
				github: "https://github.com/kevinzunigacuellar",
			},
		},
	},
];
