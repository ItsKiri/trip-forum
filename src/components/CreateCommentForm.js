import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
/**
 * Form to create new comment.
 */
export class CreateCommentForm extends Component {
  /**
   * Construct new comment form.
   * @param  {[props]} props [all parameters]
   * @return {[comment form]}       [new comment form]
   */
  constructor(props) {
    super(props);

    this.refForm = createRef();

    this.onCreateComment = this.onCreateComment.bind(this);
  }
  /**
   * Create new blog.
   * @param  {[event]} evt [click to create new comment]
   * @return {[comment]}     [new comment]
   */
  onCreateComment(evt) {
    evt.preventDefault();

    const fd = new FormData(this.refForm.current);

    const author = fd.get("author"),
      content = fd.get("content");

    this.props.onCreateComment(author, content);
  }

  render() {
    return (
      <div>
        <br />
        <h5>Post Comment</h5>
        <form ref={this.refForm}>
          <div>
            <label className="form-label">
              {" "}
              Author:
              <input type="text" className="form-control" name="author" />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              {" "}
              Content:
              <input type="text" className="form-control" name="content" />
            </label>
          </div>

          <div className="mb-3">
            <button onClick={this.onCreateComment} className="btn btn-primary">
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CreateCommentForm.propTypes = {
  onCreateComment: PropTypes.func.isRequired,
};

export default CreateCommentForm;
