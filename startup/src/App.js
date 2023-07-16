import logo from './logo.svg';
import './App.css';
import FormTask from './cont/formlogic';

function App() {
  return (
    <div className="App">     
      <BarraTop/>  
      <Base/>
      
    </div>
  );
}
 
/* barra superior */
function BarraTop(){
  return(
    <div className="barTop">
      <img className='list' src={require('./imag/list.png')}/>    
    </div>
  );
}

/* estilo del contenedor */
function Base(){
  return(
    <div className='task-container'>
        <h1> Task </h1>
        <FormTask/>
    </div>
	);
}



export default App;
