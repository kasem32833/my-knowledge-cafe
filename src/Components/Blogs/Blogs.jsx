import {useState, useEffect } from "react";
import Blog from "../Blog/Blog";
import Bookmarks from "../Bookmarks";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="container flex mx-auto">

            <h3>Blogs:{blogs.length}</h3>
            <Blog></Blog>
            <Bookmarks></Bookmarks>
        </div>
    );
};

export default Blogs;