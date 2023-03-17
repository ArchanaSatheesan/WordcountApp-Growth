import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Crud from './Components/Crud'
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path ="/" exact element={<Home />}></Route>
          <Route path ="/crud" exact element={<Crud />}></Route>
          
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
