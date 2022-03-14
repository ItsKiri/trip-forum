import React, { Component } from "react";
import CreateHelpForm from "../components/CreateHelpForm.js";
import HelpSave from "../components/HelpSave.js";
import Help from "../models/Help.js";

export default class HelpPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			helps: [new Help("I Need Help", "student 1", "I am lost.")],
		};

		this.onCreateHelp = this.onCreateHelp.bind(this);
	}
	onCreateHelp(title, author, description) {
		this.setState({
			blogs: [...this.state.blogs],
			recommendations: [...this.state.recommendations],
			helps: [...this.state.helps, new Help(title, author, description)],
			fellows: [...this.state.fellows],
		});
	}
	render() {
		return (
			<div>
				<br />
				<h1 align="center">Help Page</h1>
				<br />
				<img
					src={require("../images/4.jpeg")}
					className="center"
					width="425.2
					height=318.8"
				/>
				<br />
				<hr />
				<div>
					<div className="mb-1">
						<h3 align="center">Helps</h3>
						<br />
					</div>
					<HelpSave helps={this.state.helps}></HelpSave>
					<CreateHelpForm
						onCreateHelp={this.onCreateHelp}
					></CreateHelpForm>
				</div>
			</div>
		);
	}
}
