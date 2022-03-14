/**
 * Help class.
 */
export class Help {
  title;
  author;
  description;
  /**
   * Construct new hellp.
   * @param  {[string]} _title       [title]
   * @param  {[string]} _author      [author]
   * @param  {[string]} _description [description]
   * @return {[help]}              [new help]
   */
  constructor(_title, _author, _description) {
    this.title = _title;
    this.author = _author;
    this.description = _description;
  }
}

export default Help;
