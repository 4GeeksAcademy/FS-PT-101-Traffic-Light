import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';



function Semaforo(){

  const [index, setIndex] = useState(0);
  let arrayColors = ["colorRed","colorOrange","colorGreen"]

function aumentarIndex(){
  if (index === 2){
   setIndex(0)
  }
  else{
 setIndex(index +1)
  }
}

  

return (
  <div className='alineadoCentro'>
    <button className="p-0" onClick={aumentarIndex}>
      <Home color={arrayColors[index]}/>
    </button>
  </div>
);
};
ReactDOM.createRoot(document.getElementById("root")).render(<Semaforo />);
