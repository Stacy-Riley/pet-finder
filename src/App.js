import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Header from './components/Header.js';
import SearchDog from "./components/SearchDog.js";
import SearchCat from "./components/SearchCat.js";
import SearchOther from "./components/SearchOther.js";
import ImageCardDisplay from "./components/ImageCardDisplay.js";
import './App.css';


function App() {
  
  return ( 
      <div className='app-wrapper'>
        <div className='app-container'>
          <Header/>  
        </div>
        <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="searchdog" element= { <SearchDog /> } />
            <Route
              path="/"
              element={
                <ImageCardDisplay>
                  <Route path="search/dogs" element={<SearchDog />} />
                  <Route path="search/cats" element={<SearchCat />} />
                  <Route path="search/other" element={<SearchOther />} />
                </ImageCardDisplay>
              }
            />
        </Routes>

      </div>

  );
}


export default App;
