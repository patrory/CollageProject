
import './App.css';
import Login from './Component/LoginPage/Login';
import {BrowserRouter ,Routes,Route,Link} from "react-router-dom";
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';
// import Login from './Component/LoginPage/Login';
function App() {
  return (
    // <div className="App">
    //  <Login/>

    // </div>
    <BrowserRouter>
    <nav>
      <Link to="/"> Home</Link> 
      <Link to="/login" >Login</Link>
      <Link to="/CreatePost">CreatePost</Link>
    </nav>
      <Routes>

   
       <Route path="/CreatePost"  element={<CreatePost/>} />
        <Route path="/" element ={ <Home/>}/>
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
