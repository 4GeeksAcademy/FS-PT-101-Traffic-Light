import React from "react";

//create your first component

const Home = (props) => {
	
	return (
		<div>
			<div className="relativo divImg" id="siluetaSemaforo">
				<img className="relativo" src="/src/img/semaforo.png"></img>
				<div className={props.color} id="colorSemaforo">

				</div>

			</div>
			
		</div>
	);
};

export default Home;