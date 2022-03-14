import React, { Component } from "react";
import PropTypes from "prop-types";

import RecommendationView from "./RecommendationView.js";
/**
 * Display the recommendation array.
 */
export class RecommendationSave extends Component {
  /**
   * Map and display the recommendation array.
   */
  renderRes() {
    return this.props.recommendations.map((p, i) => (
      <RecommendationView key={"re" + i} re={p}></RecommendationView>
    ));
  }

  render() {
    return <div className="row">{this.renderRes()}</div>;
  }
}

RecommendationSave.propTypes = {
  recommendations: PropTypes.array.isRequired,
};

export default RecommendationSave;
