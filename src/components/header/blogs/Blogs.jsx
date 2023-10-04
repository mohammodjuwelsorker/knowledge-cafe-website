import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../blog/Blog";

const Blogs = ({addToBookMarkHandler, timeSpentAddHandler}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data.slice(3, 6)))


    }, [])

    return (
        <div className="w-2/3">  
            {
                blogs.map(blog => <Blog 
                    addToBookMarkHandler={addToBookMarkHandler}
                    timeSpentAddHandler={timeSpentAddHandler}
                    key={blog.id} 
                    blog={blog}></Blog>)
            }     
        </div>
    );
};

export default Blogs;







