/**
 * Blog class.
 */
export class Blog {
  title;
  author;
  content;
  /**
   * Construct new blog.
   * @param  {[string]} _title   [title]
   * @param  {[string]} _author  [author]
   * @param  {[string]} _content [content]
   * @return {[blog]}          [new blog]
   */
  constructor(_title, _author, _content) {
    this.title = _title;
    this.author = _author;
    this.content = _content;
  }
}

export default Blog;
