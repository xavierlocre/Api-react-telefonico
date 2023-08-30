import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import './MostrarCita.css'

const url = "http://localhost:8080/api/v1/citas"
const MostrarCita = () => {
    const [cita, setCita] = useState([])
    useEffect (() => {getAllCitas() 
    }, [])

    const getAllCitas = async () => {
        const response = await axios.get(url)
        let data = response.data
        console.log(data)
        setCita(data)
    }
}







export default MostrarCita