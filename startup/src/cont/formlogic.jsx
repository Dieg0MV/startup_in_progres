import React from "react";
import '../estilos/formulario.css'


function FormTask( props){
	return(
		<form className="tarea-form">
			<input 
			className="task-input"
			type="text" 
			placeholder="Write your task"
			/>

			<button className="butontask">Add task</button>
		</form>
	);
}

export default FormTask;