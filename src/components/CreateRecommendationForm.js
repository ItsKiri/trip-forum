import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
/**
 * Form to create new recommendation.
 */
export class CreateRecommendationForm extends Component {
  /**
   * Construct new recommendation form.
   * @param  {[props]} props [all parameters]
   * @return {[recommendation form]}       [new recommendation form]
   */
  constructor(props) {
    super(props);

    this.refForm = createRef();

    this.onCreateRecommendation = this.onCreateRecommendation.bind(this);
  }
  /**
   * Create new recommendation.
   * @param  {[event]} evt [click to create new recommendation]
   * @return {[recommendation]}     [new recommendation]
   */
  onCreateRecommendation(evt) {
    evt.preventDefault();

    const fd = new FormData(this.refForm.current);

    const title = fd.get("title"),
      location = fd.get("location"),
      description = fd.get("description"),
      author = fd.get("author");

    this.props.onCreateRecommendation(title, location, description, author);
  }

  render() {
    return (
      <div>
        <hr />
        <h5>Post Recommendation</h5>
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
              Location:
              <input type="text" className="form-control" name="location" />
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
              Author:
              <input type="text" className="form-control" name="author" />
            </label>
          </div>

          <div className="mb-3">
            <button
              onClick={this.onCreateRecommendation}
              className="btn btn-primary"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CreateRecommendationForm.propTypes = {
  onCreateRecommendation: PropTypes.func.isRequired,
};

export default CreateRecommendationForm;
