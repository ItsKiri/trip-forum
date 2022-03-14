import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
/**
 * Form to create new blog.
 */
export class CreateBlogForm extends Component {
  /**
   * Construct new blog form.
   * @param  {[props]} props [all parameters]
   * @return {[blog form]}       [new blog form]
   */
  constructor(props) {
    super(props);

    this.refForm = createRef();

    this.onCreateBlog = this.onCreateBlog.bind(this);
  }
  /**
   * Create new blog.
   * @param  {[event]} evt [click to create new blog]
   * @return {[blog]}     [new blog]
   */
  onCreateBlog(evt) {
    evt.preventDefault();

    const fd = new FormData(this.refForm.current);

    const title = fd.get("title"),
      author = fd.get("author"),
      content = fd.get("content");

    this.props.onCreateBlog(title, author, content);
  }

  render() {
    return (
      <div>
        <hr />
        <h5>Post Blog</h5>
        <form ref={this.refForm}>
          <div>
            <label className="form-label">
              {" "}
              Title:
              <input type="text" className="form-control" name="title" />
            </label>
          </div>
          <div className="mb-3">
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
            <button onClick={this.onCreateBlog} className="btn btn-primary">
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CreateBlogForm.propTypes = {
  onCreateBlog: PropTypes.func.isRequired,
};

export default CreateBlogForm;
