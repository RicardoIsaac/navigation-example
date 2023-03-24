import "./App.css";

import Home from "./components/page1/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Other from "./Other/Other";
import { useState, useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const numberPages = 4;
  const pages = [Home, About, Contact, Other];
 
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function getnames(){
    let prev=""
    let next=""
    if(currentPage===1){ prev=null}
    else {prev=pages[currentPage - 2].name}

    if(currentPage===4){ next=null}
    else {next=pages[currentPage].name}

   let buttonsname={
    prev:prev,next:next
   }
    return buttonsname
  }


  return (
    <div className="all"  style={{width:dimensions.width}}>
      <div className="left">
        {currentPage !== 1 ? (
          <button style={{width:dimensions.width*.05}}
            className="sButton"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {getnames().prev}
          </button>
        ) : (
          <button style={{width:dimensions.width*.05}} className="noButton">Home</button>
        )}
      </div>
      <div>
        {currentPage === 1 ? <Home dimensions={dimensions} /> : <div> </div>}
        {currentPage === 2 ? <About dimensions={dimensions} /> : <div> </div>}
        {currentPage === 3 ? <Contact dimensions={dimensions} /> : <div> </div>}
        {currentPage === 4 ? <Other dimensions={dimensions} /> : <div> </div>}
      </div>
      <div className="righy">
        {currentPage !== numberPages ? (
          <button
          style={{width:dimensions.width*.05}}
            className="sButton"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
           {getnames().next}
          </button>
        ) : (
          <button style={{width:dimensions.width*.05}} className="noButton">Other</button>
        )}
      </div>
    </div>
  );
}

export default App;
