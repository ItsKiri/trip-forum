/**
 * Recommendation class.
 */
export class Recommendation {
  title;
  location;
  description;
  author;
  /**
   * Construct new recommendation.
   * @param  {[string]} _title       [title]
   * @param  {[string]} _location    [location]
   * @param  {[string]} _description [description]
   * @param  {[string]} _author      [author]
   * @return {[recommendation]}              [new recommendation]
   */
  constructor(_title, _location, _description, _author) {
    this.title = _title;
    this.location = _location;
    this.description = _description;
    this.author = _author;
  }
}

export default Recommendation;
