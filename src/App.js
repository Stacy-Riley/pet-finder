import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import SearchDog from "./components/SearchDog.js";
import SearchCat from "./components/SearchCat.js";
import SearchOther from "./components/SearchOther.js";
import PageNotFound from "./components/PageNotFound.js";
import './App.css';


function App() {
  
  return ( 
      <div className='app-wrapper'>
        <div className='app-container'>
          <Header/>  
        </div>
        <Routes>
            <Route path="/pet-finder" element= {<Home />} />
            <Route path="search/dog" element= { <SearchDog /> } />
            <Route path="search/cat" element= { <SearchCat /> } />
            <Route path="search/other" element= { <SearchOther /> } />
            <Route path="*" element= { <PageNotFound /> } />
        </Routes>

      </div>

  );
}


export default App;
