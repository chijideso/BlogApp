// import { useState, useEffect } from "react";
import BlogList from "./BlogLIst";
import useFetch from "./usefectch";


const OutPut = () => {
   const {data:blogs, isPending, error} = useFetch('http://localhost:3000/blogs/');
    const handleDelete =(id) =>{
        const newBlog = blogs.filter(blog => blog.id !==id);
        setBlog(newBlog);

        
    
}
// fecting data from the fake api we created

    return (
        <div className="home1">
           {blogs && <BlogList blogs={blogs} title="Blogs Lists!"/>}
            {isPending && <div>loading......</div>}
           {error && <div>{error}</div>}
           {/* for deleting a component */}
           {/* {blogs && <BlogList blogs={blogs} title="Blogs Lists!" handleDelete={handleDelete}/>} */}
            {/* <BlogList blogs={blogs.filter((blogs)=>blogs.author==="mario")} title="Marios Blogs Lists!" handleDelete={handleDelete}/> */}
           {/* <p>{name}</p> */}
           {/* for changin na in a component */}
           {/* <button onClick={()=> setName('Mmesoma')}>change name</button> */}
        </div>
        
        
        
      );
}
 
export default OutPut;