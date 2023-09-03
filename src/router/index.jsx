import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Crear from "../pages/Crear.jsx"
import Editar from "../pages/Editar.jsx";
/* import Editar from "../pages/Editar.jsx"; */

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/create",
        element: <Crear/>  
    }, 
{
        path: "/edit/:id",
        element: <Editar/>  
    },
]);

export default router