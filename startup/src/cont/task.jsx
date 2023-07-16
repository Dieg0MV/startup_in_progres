import React from "react";
import '../estilos/style.css'
import {GrFormClose} from "react-icons/gr"

function Task({texto, complet}){
  return(
    <div className={complet ? 'contTask complet' : 'contTask'}>
      <div className="tareas">
         {texto}  
      </div>
      <div className="conten-icon">
        <GrFormClose className="icon"/>
      </div>
    </div>
  );
}

export default Task;