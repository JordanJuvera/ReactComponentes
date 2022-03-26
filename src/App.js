import './App.css'
import Testimonio from './componentes/Testimonio'


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Trabajando con React</h1>
        <Testimonio 
          nombre = 'Jordan Juvera'
          pais = 'México'
          imagen = 'TECH(a).jpg'
          cargo = 'Ingeniero de Software'
          empresa = 'iVoy'
          testimonio = 'Aprendiendo a progragramar con React para ver como trabaja con componentes'
        />
        <Testimonio 
          nombre = 'Shawn Wang'
          pais = 'Singapur'
          imagen = 'TECH(m).jpg'
          cargo = 'Ingeniero de Software'
          empresa = 'Amazon'
          testimonio = 'Aprendiendo JavaScript de una manera más dinamica'
        />

        <Testimonio 
          nombre = 'Sarah Chema'
          pais = 'Nigeria'
          imagen = 'TECH(n).jpg'
          cargo = 'Ingeniero de Software'
          empresa = 'Microsoft'
          testimonio = 'Aprendiendo JavaScript de una manera más dinamica'
        />
      </div>
          
    </div>
  );
}

export default App;
