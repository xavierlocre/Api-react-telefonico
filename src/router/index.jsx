import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/create",
        element: <CrearCita/>  
    },
    {
        path: "/edit/:id",
        element: <EditarCita/>  
    },
]);


export default router