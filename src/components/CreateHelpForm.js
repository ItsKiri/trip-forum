import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
/**
 * Form to create new help.
 */
export class CreateHelpForm extends Component {
  /**
   * Construct new help form.
   * @param  {[props]} props [all parameters]
   * @return {[help form]}       [new help form]
   */
  constructor(props) {
    super(props);

    this.refForm = createRef();

    this.onCreateHelp = this.onCreateHelp.bind(this);
  }
  /**
   * Create new help.
   * @param  {[event]} evt [click to create new help]
   * @return {[help]}     [new help]
   */
  onCreateHelp(evt) {
    evt.preventDefault();

    const fd = new FormData(this.refForm.current);

    const title = fd.get("title"),
      author = fd.get("author"),
      description = fd.get("description");

    this.props.onCreateHelp(title, author, description);
  }

  render() {
    return (
      <div>
        <hr />
        <h5>Post Help</h5>
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
              Description:
              <input type="text" className="form-control" name="description" />
            </label>
          </div>

          <div className="mb-3">
            <button onClick={this.onCreateHelp} className="btn btn-primary">
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CreateHelpForm.propTypes = {
  onCreateHelp: PropTypes.func.isRequired,
};

export default CreateHelpForm;
