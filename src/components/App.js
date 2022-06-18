import Header from './Header';
import Formulario from './Formulario';


function App() {
  return (
    <div className="Contenedor">
      <Header
        titulo = 'Buscador de vehículos'
      />

      <div className='contenedor-formulario'>
        <Formulario />

      </div>


    </div>
  );
}

export default App;
