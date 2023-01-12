
import Home from './Home'
import Book from "./Book"

//import Apps from "./chil-par"
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
  
    <Route className="login"  path={"/"} component={Home} exact/>
    <Route className="Book"  path={"/book"} component={Book} exact/>


    </BrowserRouter>
  );
}

export default App;
