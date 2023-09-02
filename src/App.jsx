

import Navbar from './Navbar'
import BlogDetails from './blogdetail';
import Create from './create';
import DeletMessages from './deletemessages';
import Home from './home'
import Output from './outputlist'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  

  // const title =" welcome to our react first project"
 
  return (
    <Router>
      <div className="App">
       <Navbar/>
       <div className="content">
       <Switch>
        <Route exact path ="/">
          <Home/> 
       <Output/>
          
        </Route>
        <Route path ="/create">
         <Create/>
          
        </Route>
        <Route path ="/blogs">
         <BlogDetails/>
          
        </Route>
        
        <Route path ="/deletemessages">
        <DeletMessages/>
          
        </Route>
       </Switch>
       </div>
      </div>
    </Router>
  )
}

export default App;
