import React, { Component } from "react";
import PropTypes from "prop-types";
import CreateCommentForm from "./CreateCommentForm.js";
import CommentSave from "./CommentSave.js";
import Comment from "../models/Comment.js";
/**
 * Display the recommendation.
 */
export class RecommendationView extends Component {
  /**
   * Construct new recommendation.
   * @param  {[props]} props [all parameters]
   * @return {[recommendation]}       [new recommendation]
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
   * Create new comment of the recommendation.
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
            <h5 className="card-title">{this.props.re.title}</h5>
            <p className="card-text">Location: {this.props.re.location}</p>
            <p className="card-text">{this.props.re.description}</p>
            <footer className="card-text">
              Author: {this.props.re.author}
            </footer>
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
        <div className="Comment">
          <div>
            <div className="mb-3">
              <br />
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

RecommendationView.propTypes = {
  re: PropTypes.object.isRequired,
};

export default RecommendationView;
