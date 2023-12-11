import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Header from './components/Header.js';
import SearchDog from "./components/SearchDog.js";
import './App.css';


function App() {
  
  return ( 
      <div className='app-wrapper'>
        <div className='app-container'>
          <Header/>  
        </div>
        <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/searchdog" element= { <SearchDog /> } />
        </Routes>

      </div>

  );
}


export default App;
