import React, { Component } from "react";
import PropTypes from "prop-types";

import FellowView from "./FellowView.js";
/**
 * Display the fellow array.
 */
export class FellowSave extends Component {
  /**
   * Map and display the fellow array.
   */
  renderFellows() {
    return this.props.fellows.map((p, i) => (
      <FellowView key={"fellow" + i} fellow={p}></FellowView>
    ));
  }

  render() {
    return <div className="row">{this.renderFellows()}</div>;
  }
}

FellowSave.propTypes = {
  fellows: PropTypes.array.isRequired,
};

export default FellowSave;
