

import './componentes/ModificarCita.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='Crear Cita'>

      <p>Modificar Cita</p>

      <form id="citaPrevia">
        <label htmlFor="citaId">ID de la Cita</label>
        <input type="text" id="citaId" required></input>

        <label htmlFor="NuevaFecha">Nueva Fecha:</label>
        <input type="date" id="nuevaFecha" required></input>

        <label htmlFor="nuevoHorario">Nuevo Horario:</label>
        <input type="time" id='nuevoHorario' required></input>

        <button type='submit'>Guardar Cita</button>
      </form>


    </div>

  )
}

export default App
