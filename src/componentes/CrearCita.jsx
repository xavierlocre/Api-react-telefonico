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
        await axios.post(url, {nameCita: nameCita, nameUser: nameUser, fecha: fecha, hora: hora})
        navigate("/")
    }



}
export default CrearCita 