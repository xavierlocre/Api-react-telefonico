import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const url = "http://localhost:8080/api/v1/citas"
const EditarCita = () => {
    const [nameCita, setNameCita] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('') ;
    const [cita, setCita] = useState(null);
    
    const navigate = useNavigate()
    const cancel = () => {
        navigate("/");
    };

    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${url}/${id}`, {nameCita: nameCita, nameUser: nameUser, fecha: fecha, hora: hora})
        navigate("/");
    }
    useEffect(() => {
        const getCitaById = async () => {
            const response = await axios.get(`${url}/${id}`);
            const data = response.data;
            setCita(data);
            setNameCita(data.nameCita);
            setNameUser(data.nameUser);
            setFecha(data.fecha);
            setHora(data.hora);
        }
getCitaById()
    }, [id])

    return(
        <>
        <div className="all-container-edit">
            <div className="container-create">
                <h3>Modificar cita ID {id}</h3>
                <form onSubmit={update}>
                    <div>
                        <form>Nonbre de cita</form>
                        <input type="text" id="hover"
                        value={nameCita} onChange={(e) => setNameCita(e.target.value)}/>
                    </div>
                    <div>
                        <form>Nonbre de usuario</form>
                        <input type="text" id="hover"
                        value={nameUser} onChange={(e) => setNameUser(e.target.value)}/>
                    </div>
                    <div>
                        <form>Fecha</form>
                        <input type="text" id="hover"
                        value={fecha} onChange={(e) => setFecha(e.target.value)}/>
                    </div>
                    <div>
                        <form>Hora</form>
                        <input type="text" id="hover"
                        value={hora} onChange={(e) => setHora(e.target.value)}/>
                    </div>
                    <button className="buttons">Confirmar</button>
                    <button className="buttons" onClick={cancel}>Cancelar</button>   

                </form>
            </div>
        </div>
        </>
    )

}

export default EditarCita;