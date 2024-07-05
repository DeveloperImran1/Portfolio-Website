
import { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";


const Blogs = () => {
   const [blogs, setBlogs] = useState([]);
    
    useEffect(()=> {
        fetch("./Blogs.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBlogs(data)
        })
    },[])
    return (
        <div>
     
            <div id="blogs" className="flex  items-center justify-between" >
                <div className="flex flex-col justify-start items-start gap-4 my-7" >
                    <p className="text-[18px] text-center sriracha px-2 rounded-md text-white  -rotate-6 bg-[#076aa5] " >Bloogs</p>
                    <h2 className="text-3xl font-bold " >Explore My Blogs</h2>
                </div>
              
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 " >
                {
                    blogs?.map(blog => <BlogsCard key={blog?._id} blog={blog}  ></BlogsCard>)
                }
            </div>


        </div>

    );
};

export default Blogs;