import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./popup.css";

export default function PopUp(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				{props.info.button.text}
			</Button>

			<Modal size="lg" centered show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Manantial Hotel</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ textAlign: "justify" }}>
					This website was my first job as a freelancer. It was created using
					HTML, Sass and jQuery. Most of the components are from bootstrap, some
					custom Sass for the layout responsiveness and jQuery for animations.
					The job took about 30 days in total to finish, two weeks for logistics
					(going back and forth with the client), a week of conding and a week
					for review, testing and hosting. My main takeaway about this project
					is that more than the actual coding the logistics and design of the
					website can take a long time. Once you or the client have a clear
					picture of what the website should look like, the process ramps up.
					This job inspired my to learn about cloud computing in order to host
					this website. You can find the cloud architecture in the cloud
					portfolio section.{" "}
					<div className="logo-container">
						<img
							src="logo_img.png"
							alt="hotel-manantial-logo"
							className="hotel-logo"
						></img>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary"
						href="https://hotelmanantialchurin.com"
						target="_blank"
					>
						Visit Website
					</Button>
					<Button
						variant="info"
						href="https://github.com/kevinzunigacuellar"
						target="_blank"
					>
						View Code
					</Button>
					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
