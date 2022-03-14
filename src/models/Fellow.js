/**
 * Fellow class.
 */
export class Fellow {
  title;
  author;
  location;
  time;
  description;
  contact;
  /**
   * Construct new fellow.
   * @param  {[string]} _title       [title]
   * @param  {[string]} _author      [author]
   * @param  {[string]} _location    [location]
   * @param  {[string]} _time        [time]
   * @param  {[string]} _description [description]
   * @param  {[string]} _contact     [contact]
   * @return {[fellow]}              [new fellow]
   */
  constructor(_title, _author, _location, _time, _description, _contact) {
    this.title = _title;
    this.author = _author;
    this.location = _location;
    this.time = _time;
    this.description = _description;
    this.contact = _contact;
  }
}

export default Fellow;
