import React, { useState } from "react";

//create your first component

const Home = () => {

	const [red, setRed] = useState("off");
	const [orange, setOrange] = useState("off");
	const [green, setGreen] = useState("off");

	
	let divRojo = document.querySelector(".div1")
	let divNaranja = document.querySelector(".div2")
	let divVerde = document.querySelector(".div3")


	function activarRojo(){
		if(red === "on"){	
			setRed("off")
			divRojo.classList.remove("encendido")
		}else{
			setRed("on")
			setOrange("off")
			setGreen("off")
			divRojo.classList.add("encendido")
			divNaranja.classList.remove("encendido")
			divVerde.classList.remove("encendido")
			
		}
	}
	function activarNaranja(){

		if(orange === "on"){	
			setOrange("off")
			divNaranja.classList.remove("encendido")
		}else{
			setOrange("on")
			setRed("off")
			setGreen("off")
			divNaranja.classList.add("encendido")
			divRojo.classList.remove("encendido")
			divVerde.classList.remove("encendido")
		}
	}
	function activarVerde(){
		if(green === "on"){	
			setGreen("off")
			divVerde.classList.remove("encendido")
		}else{
			setGreen("on")
			setOrange("off")
			setRed("off")
			divVerde.classList.add("encendido")
			divNaranja.classList.remove("encendido")
			divRojo.classList.remove("encendido")
		}
	}


	
	

	
	return (
		<div>
			<div className="relativo divImg" id="siluetaSemaforo">
				<img className="relativo" src="/src/img/semaforo.png"></img>
				
  
    <div onClick={activarRojo} className="div1">

    </div>
  

	<div onClick={activarNaranja} className="div2">

	</div>

	<div onClick={activarVerde} className="div3">

	</div>
			
				

			</div>
			
		</div>
	);
};

export default Home;