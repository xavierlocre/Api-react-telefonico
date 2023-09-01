import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import './MostrarCita.css'

const url = "http://localhost:8080/api/v1/citas"
const MostrarCita = () => {
    const [cita, setCita] = useState([])
    useEffect(() => {
        getAllCitas()
    }, [])

    const getAllCitas = async () => {
        const response = await axios.get(url)
        let data = response.data
        console.log(data)
        setCita(data)
    }

    const handleDelete = async (id) => {
        await axios.delete(`${url}/${id}`);
        setCita((prevCita) => prevCita.filter((cita) => cita.id !== id));
        alert(`ATENCION! ELIMINANDO CITA ID#${id}`);
    };

    return (
        <>
            {cita.map(cita => (
                <div className="all-container">
                    <div className="contenedor-cita" key={cita.id}>
                        <p> ID#{cita.id}</p>
                        <p> {cita.nameCita}</p>
                        <p> {cita.nameUser} </p>
                        <p> {cita.fecha} </p>
                        <p> hora: {cita.hora}:00</p>
                    </div>
                    <div className="container-buttones">
                        <NavLink to={`/edit/${cita.id}`}><button className="buttons">Editar Cita</button></NavLink>
                        <button className="buttons" onClick={() => handleDelete(cita.id)}>Eliminar Cita</button>
                    </div>
                </div>
            ))}
        </>
    )

}


export default MostrarCita