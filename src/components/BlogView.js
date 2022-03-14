import React, { Component } from "react";
import PropTypes from "prop-types";
import CreateCommentForm from "./CreateCommentForm.js";
import CommentSave from "./CommentSave.js";
import Comment from "../models/Comment.js";
/**
 * Display the blog.
 */
export class BlogView extends Component {
  /**
   * Construct new blog.
   * @param  {[props]} props [all parameters]
   * @return {[blog]}       [new blog]
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
   * Create new comment of the Blog.
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
            <h5 className="card-title">{this.props.blog.title}</h5>
            <p className="card-text">Author: {this.props.blog.author}</p>
            <p className="card-text">{this.props.blog.content}</p>
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

BlogView.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogView;
