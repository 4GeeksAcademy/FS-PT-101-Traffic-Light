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
  

return (
  <div className='alineadoCentro'>
      <Home/>
  </div>
);
};
ReactDOM.createRoot(document.getElementById("root")).render(<Semaforo />);
