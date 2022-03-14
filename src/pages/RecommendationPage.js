import React, { Component } from "react";
import CreateRecommendationForm from "../components/CreateRecommendationForm.js";
import RecommendationSave from "../components/RecommendationSave.js";
import Recommendation from "../models/Recommendation.js";
import MyMiniMongo from "../models/MyMiniMongo.js";

export default class RecommendationPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recommendations: [
				new Recommendation(
					"Wework",
					"600 California Street, San Francisco, CA",
					"high building with a lot of rooms",
					"student 1"
				),
			],
		};

		this.onCreateRecommendation = this.onCreateRecommendation.bind(this);
		this.myMM=new MyMiniMongo();
	}
	onCreateRecommendation(title, location, description, author) {
		this.setState({
			recommendations: [
				...this.state.recommendations,
				new Recommendation(title, location, description, author),
			],
		});
	}

	render() {
		return (
			<div>
			<br />
				<h1 align="center">Recommendation Page</h1>
				<br />
				<img
					src={require("../images/2.jpeg")}
					className="center"
					width="472.4
					height=310.6"
				/>
				<br />
				<hr />
				<div>
					<div className="mb-3">
						<h3 align="center">Recommendations</h3>
					</div>
					<br />
					<RecommendationSave
						recommendations={this.state.recommendations}
					></RecommendationSave>
					<CreateRecommendationForm
						onCreateRecommendation={this.onCreateRecommendation}
					></CreateRecommendationForm>
				</div>
			</div>
		);
	}
}
