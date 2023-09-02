import {Link} from 'react-router-dom'
const DeletMessages = () => {
    return ( 
        <div className="deletemessage">

            <h2>you have succesffully <span>Deleted </span> a blog  click on the button bellow to  <span>Add</span> new blog </h2>
            <Link to={"./create"}>
               <button>Add new blog</button> 
                </Link>
        </div>
         );
}
 
export default DeletMessages;