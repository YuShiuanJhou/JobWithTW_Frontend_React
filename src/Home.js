import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'title1', body: "body1", author: "author1", id: 1 },
        { title: 'title2', body: "body2", author: "author2", id: 2 },
        { title: 'title3', body: "body3", author: "author3", id: 3 }
    ]);
    // const [name, setName] = useState("mario");
    // const [age, setAge] = useState(25);

    const handleClick = () => {
        console.log(blogs)
        let newv = { title: 'title1', body: "body1", author: "author1", id: 4 }
        blogs.push(newv);
        setBlogs(blogs)
    }

    // const handleClickAgain = (name, e) => {
    //     console.log("hello" + name, e.target);
    // }


    return (



        <div className="home inline-flex flex-col">
            <h2>HomePage</h2>
            <button onClick={handleClick} className="inline addBtn  rounded-xl	border border-grey-900 bg-black text-white p-2 shadow-xl">
                Add Blog
            </button>
            {blogs.map((blog) => (
                <div className="max-w-4xl blog-preview flex flex-col  justify-between mx-auto shadow-xl border-2 border-green-500" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>writen by {blog.author}</p>
                </div>
            ))}
            {/* <h2 style={{ color: "#000", backgroundColor: "#efefef",textAlign:"center" }}>{name} is {age} yearsold</h2>
            <button onClick={handleClick} style={{ boder: "1px solid", display:"block" }} >Click me</button>
            <button onClick={(e) => { handleClickAgain('yoshi', e) }}> click me again again</button> */}

        </div>

    );
}

export default Home;