import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'

const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    const history = useHistory();
    const handleDelete = (blog) => {
        fetch('http://localhost:3000/blogs/' + blog.id, {
            method: "DELETE"
        }).then(() => {
            // console.log("blog deleted");
            history.push('/deletemessages')
            
            // Assuming you want to update the UI or perform some action after deletion
        });
    }

    return (
        <div className="home1">
            <h2 className="title">{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`./blogs/${blog.title}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p><br />
                        <p> {blog.body}</p>
                    </Link>
                    <button onClick={() => handleDelete(blog)}>Delete blog</button>
                   <h3>blog deleted!</h3>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
