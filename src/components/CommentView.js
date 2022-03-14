import React, { Component } from "react";
import PropTypes from "prop-types";
/**
 * Display the comment.
 */
export class CommentView extends Component {
  /**
   * Construct new comment.
   * @param  {[props]} props [all parameters]
   * @return {[comment]}       [new comment]
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">Author: {this.props.comment.author}</p>
            <p className="card-text">{this.props.comment.content}</p>
            <button
              onClick={() => {
                this.setState({
                  count: this.state.count + 1,
                });
              }}
            >
              Vote
            </button>
            &emsp;
            {this.state.count}
          </div>
        </div>
      </div>
    );
  }
}

CommentView.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentView;
