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

			<Modal
				size={props.info.modal.size}
				centered
				show={show}
				onHide={handleClose}
			>
				<Modal.Header closeButton>
					<Modal.Title>{props.info.modal.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="subtitles">Languages:</div>
					<ul style={{ listStyle: "none" }}>
						{props.info.modal.languages.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
					<div className="subtitles">Description:</div>
					{props.info.modal.body}
					<div className="subtitles">Takeaway:</div>
					{props.info.modal.takeaway}
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary"
						href={props.info.modal.website}
						target="_blank"
					>
						Visit Website
					</Button>
					<Button variant="info" href={props.info.modal.github} target="_blank">
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
