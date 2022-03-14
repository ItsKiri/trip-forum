import React, { Component } from "react";
import CreateBlogForm from "../components/CreateBlogForm.js";
import BlogSave from "../components/BlogSave.js";
import Blog from "../models/Blog.js";

export default class BlogPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogs: [
				new Blog(
					"San Francisco",
					"student 1",
					"sf is a good place with a lot of buildings."
				),
			],
		};

		this.onCreateBlog = this.onCreateBlog.bind(this);
	}
	onCreateBlog(title, author, content) {
		this.setState({
			blogs: [...this.state.blogs, new Blog(title, author, content)],
		});
	}
	render() {
		return (
			<div>
				<br />
				<h1 align="center">Blog Page</h1>
				<br />
				<img src={require("../images/3.jpeg")} className="center" />
				<br />
				<hr />
				<div>
					<div className="mb-3">
						<h3 align="center">Blogs</h3>
					</div>
					<br />
					<BlogSave blogs={this.state.blogs}></BlogSave>
					<CreateBlogForm
						onCreateBlog={this.onCreateBlog}
					></CreateBlogForm>
				</div>
			</div>
		);
	}
}
