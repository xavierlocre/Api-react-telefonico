import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const url = "http://localhost:8080/api/v1/citas"
const CrearCita = () => {
    const [nameCita, setNameCita] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')

    const navigate = useNavigate()
    const store = async (e) => {
        e.preventDefault()
        await axios.post(url, { nameCita: nameCita, nameUser: nameUser, fecha: fecha, hora: hora })
        navigate("/")
    }

    return (
        <>
            <div className="all-container">
                <div className="containet-create">
                    <h3>Crear nueva cita</h3>
                    <form onSubmit={store}>
                        <div>
                            <form>Nombre de cita</form>
                            <input type="text" value={nameCita} onChange={(e) => setNameCita(e.target.value)} />
                        </div>
                        <div>
                            <form>Nombre de usuario</form>
                            <input type="text" value={nameUser} onChange={(e) => setNameUser(e.target.value)} />
                        </div>
                        <div>
                            <form>Fecha</form>
                            <input type="text" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                        </div>
                        <div>
                            <form>Hora</form>
                            <input type="text" value={hora} onChange={(e) => setHora(e.target.value)} />
                        </div>
                        <button className="buttons">Añadir</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CrearCita 