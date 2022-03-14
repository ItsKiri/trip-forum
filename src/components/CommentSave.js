import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentView from "./CommentView.js";
/**
 * Display the comment array.
 */
export class CommentSave extends Component {
  /**
   * Map and display the comment array.
   */
  renderCos() {
    return this.props.comments.map((p, i) => (
      <CommentView key={"comment" + i} comment={p}></CommentView>
    ));
  }

  render() {
    return <div className="row">{this.renderCos()}</div>;
  }
}

CommentSave.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentSave;
