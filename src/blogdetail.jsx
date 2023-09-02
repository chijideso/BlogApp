import {useParams} from "react-router-dom";
import useFetch from "./usefectch";

const BlogDetails = () => {
    const id = useParams();
    const decodedId = decodeURIComponent(id);
    const {data:blogs, isPending, error} = useFetch('http://localhost:3000/blogs/'+ id);
    return ( 
        <div className="blog-details">
            {isPending && <div> loading....</div>}
            {error && <div> {error}</div>}
            {blogs && (
                
                <article>

                    <h2>{blogs.title}</h2>
                    <div> { blogs.body}</div>
                    <p>witten by {blogs.author}</p>
                </article>
            )
            }
            
        </div>
     );
}
 
export default BlogDetails;