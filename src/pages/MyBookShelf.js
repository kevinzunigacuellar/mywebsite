import React, { Component } from "react";

class MyBookShelf extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			person: null,
		};
	}
	async componentDidMount() {
		/* const url =
			"https://sd65yjxtj4.execute-api.us-east-1.amazonaws.com/prod/friends";
		// Using async - await
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ person: data.results[0], loading: false });

		// using axios
		const axios = require("axios");
		axios.get(url).then((res) => {
			this.setState({ person: res.data });
			console.log(res.data);
		}); */
	}
	render() {
		return (
			<div className="content">
				{/* {this.state.loading || !this.state.person ? (
					<div>loading...</div>
				) : (
					<div>
						{this.state.person.map((item) => {
							return (
								<div>
									<h1>{item.id}</h1>
									<h1>{item.name}</h1>
									<h1>{item.alias}</h1>
								</div>
							);
						})}
					</div>
				)} */}
				<h1 className="title">MyBookShelf</h1>
			</div>
		);
	}
}

export default MyBookShelf;
