import React from 'react';
import '../css/Testimonio.css';


function Testimonio () {
  return(
    <div className= 'contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src = {require('../imagenes/testimonio-emma.png')}
      alt = 'Foto de Emma'/>

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
        <p className='texto-testimonio'>"Siempre he tenido problemas para aprender JavaScript. He tomado mucho cursos, pero el curso de FreeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify"</p>
      </div>

    </div>
  )

}

export { Testimonio };