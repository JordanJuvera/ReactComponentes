import React from 'react';
import '../hojas-de-estilo/Testimonio.css'
function Testimonio(){
   return (
     <div className='contenedor-testimonio'>
       <img className='imagen-testimonio' src={require('../imagenes/TECH(a).jpg')} alt='Foto TECH (a)' />
       <div className='contenedor-texto-testimonio'>
         <p className='nombre-testimonio'>Jordan Brandon Juvera Leon</p>
         <p className='cargo-testimonio'>Ing Software en Ivoy</p>
         <p className='texto-testimonio'>Aprendiendo React con este mini-Proyecto para ver como es que se trabaja con componentes. 
        <br></br>
        <span>It´s Cool!!!</span></p>
       </div>
     </div>
   );
}

export default Testimonio; 