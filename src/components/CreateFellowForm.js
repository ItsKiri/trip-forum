import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
/**
 * Form to create new fellow.
 */
export class CreateFellowForm extends Component {
  /**
   * Construct new fellow form.
   * @param  {[props]} props [all parameters]
   * @return {[fellow form]}       [new fellow form]
   */
  constructor(props) {
    super(props);

    this.refForm = createRef();

    this.onCreateFellow = this.onCreateFellow.bind(this);
  }
  /**
   * Create new fellow.
   * @param  {[event]} evt [click to create new fellow]
   * @return {[fellow]}     [new fellow]
   */
  onCreateFellow(evt) {
    evt.preventDefault();

    const fd = new FormData(this.refForm.current);

    const title = fd.get("title"),
      author = fd.get("author"),
      location = fd.get("location"),
      time = fd.get("time"),
      description = fd.get("description"),
      contact = fd.get("contact");

    this.props.onCreateFellow(
      title,
      author,
      location,
      time,
      description,
      contact
    );
  }

  render() {
    return (
      <div>
        <hr />
        <h5>Post Fellow</h5>
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
              Location:
              <input type="text" className="form-control" name="location" />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              {" "}
              Time:
              <input type="text" className="form-control" name="time" />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              {" "}
              Description:
              <input type="text" className="form-control" name="description" />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              {" "}
              Contact:
              <input type="text" className="form-control" name="contact" />
            </label>
          </div>

          <div className="mb-3">
            <button onClick={this.onCreateFellow} className="btn btn-primary">
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CreateFellowForm.propTypes = {
  onCreateFellow: PropTypes.func.isRequired,
};

export default CreateFellowForm;
