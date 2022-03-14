import React, { Component } from "react";
import PropTypes from "prop-types";

import HelpView from "./HelpView.js";
/**
 * Display the help array.
 */
export class HelpSave extends Component {
  /**
   * Map and display the help array.
   */
  renderHelps() {
    return this.props.helps.map((p, i) => (
      <HelpView key={"he" + i} he={p}></HelpView>
    ));
  }

  render() {
    return <div className="row">{this.renderHelps()}</div>;
  }
}

HelpSave.propTypes = {
  helps: PropTypes.array.isRequired,
};

export default HelpSave;
