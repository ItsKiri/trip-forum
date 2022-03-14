import React, { Component } from "react";
import PropTypes from "prop-types";
import CreateCommentForm from "./CreateCommentForm.js";
import CommentSave from "./CommentSave.js";
import Comment from "../models/Comment.js";
/**
 * Display the fellow.
 */
export class FellowView extends Component {
  /**
   * Construct new fellow.
   * @param  {[props]} props [all parameters]
   * @return {[fellow]}       [new fellow]
   */
  constructor(props) {
    super(props);
    this.state = {
      comments: [new Comment("student 1", "good")],
      count: 0,
    };
    this.onCreateComment = this.onCreateComment.bind(this);
  }
  /**
   * Create new comment of the fellow.
   * @param  {[string]} author  [comment author]
   * @param  {[string]} content [comment content]
   */
  onCreateComment(author, content) {
    this.setState({
      comments: [...this.state.comments, new Comment(author, content)],
    });
  }
  render() {
    return (
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{this.props.fellow.title}</h5>
            <p className="card-text">Author: {this.props.fellow.author}</p>
            <p className="card-text">Location: {this.props.fellow.location}</p>
            <p className="card-text">Date: {this.props.fellow.time}</p>
            <p className="card-text">{this.props.fellow.description}</p>
            <p className="card-text">Contact: {this.props.fellow.contact}</p>
          </div>
          <div>
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
        <br />
        <div className="Comment">
          <div>
            <div className="mb-3">
              <h3>Comment</h3>
            </div>
            <CommentSave comments={this.state.comments}></CommentSave>
            <CreateCommentForm
              onCreateComment={this.onCreateComment}
            ></CreateCommentForm>
          </div>
        </div>
      </div>
    );
  }
}

FellowView.propTypes = {
  fellow: PropTypes.object.isRequired,
};

export default FellowView;
