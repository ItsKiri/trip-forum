/**
 * Comment class.
 */
export class Comment {
  author;
  content;
  /**
   * Construct new comment.
   * @param  {[string]} _author  [author]
   * @param  {[string]} _content [content]
   * @return {[comment]}          [new comment]
   */
  constructor(_author, _content) {
    this.author = _author;
    this.content = _content;
  }
}

export default Comment;
