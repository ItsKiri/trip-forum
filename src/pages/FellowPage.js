import React, { Component } from "react";
import CreateFellowForm from "../components/CreateFellowForm.js";
import FellowSave from "../components/FellowSave.js";
import Fellow from "../models/Fellow.js";

export default class FellowPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fellows: [
				new Fellow(
					"Any Fellow Travelers?",
					"student 1",
					"SFO",
					"2022",
					"Let's go to Wework",
					"111-222-3333"
				),
			],
		};

		this.onCreateFellow = this.onCreateFellow.bind(this);
	}
	onCreateFellow(title, author, location, time, description, contact) {
		this.setState({
			fellows: [
				...this.state.fellows,
				new Fellow(title, author, location, time, description, contact),
			],
		});
	}
	render() {
		return (
			<div>
				<br />
				<h1 align="center">Fellow Page</h1>
				<br />
				<img
					src={require("../images/5.jpeg")}
					className="center"
					width="495.8
					height=330.6"
				/>
				<br />
				<hr />
				<div>
					<div className="mb-1">
						<h3 align="center">Fellows</h3>
					</div>
					<br />
					<FellowSave fellows={this.state.fellows}></FellowSave>
					<CreateFellowForm
						onCreateFellow={this.onCreateFellow}
					></CreateFellowForm>
				</div>
			</div>
		);
	}
}
