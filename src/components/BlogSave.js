import React, { Component } from "react";
import PropTypes from "prop-types";

import BlogView from "./BlogView.js";
/**
 * Display the blog array.
 */
export class BlogSave extends Component {
  /**
   * Map and display the blog array.
   */
  renderBlogs() {
    return this.props.blogs.map((p, i) => (
      <BlogView key={"blog" + i} blog={p}></BlogView>
    ));
  }

  render() {
    return <div className="row">{this.renderBlogs()}</div>;
  }
}

BlogSave.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default BlogSave;
