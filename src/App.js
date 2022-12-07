import './App.css';
import { Testimonio }  from './componentes/Testimonio';
import {Shawn,Sara,Emma} from './personas.js';


function App() { //componente principal
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre = {Shawn.nombre}
          pais = {Shawn.pais}
          imagen = {Shawn.imagen}
          testimonio = {Shawn.testimonio}
          cargo = {Shawn.cargo}
          empresa  = {Shawn.empresa} />

        <Testimonio
          nombre = {Sara.nombre}
          pais = {Sara.pais}
          imagen = {Sara.imagen}
          testimonio = {Sara.testimonio}
          cargo = {Sara.cargo}
          empresa  = {Sara.empresa} />

        <Testimonio
          nombre = {Emma.nombre}
          pais = {Emma.pais}
          imagen = {Emma.imagen}
          testimonio = {Emma.testimonio}
          empresa  = {Emma.empresa} />

          

        
      </div>


      
    </div>
  );
}

export default App;
