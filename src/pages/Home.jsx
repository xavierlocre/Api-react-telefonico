import MostrarCita from "../componentes/MostrarCita";
import '../pages/Home.css'
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavLink to = "/create"><button className="buttons">Crear Nueva Cita</button></NavLink>
            
            <div>
                <MostrarCita />
            </div>
        </>
    )
}

export default Home;