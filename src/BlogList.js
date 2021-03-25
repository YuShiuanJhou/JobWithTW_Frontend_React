const BlogList = ({blogs}) => {
    // const blogs = props.blogs;
    return (
        <div className="blogList">
            {blogs.map((blog) => (
                <div className="max-w-4xl blog-preview flex flex-col  justify-between mx-auto shadow-xl border-2 border-green-500" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>writen by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;