import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const DeleteCharacter = () => {
    const navigate = useNavigate();
    const { characterId } = useParams();
    const [characterName, setCharacterName] = useState("");

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/characters/${characterId}`);
            navigate("/"); // Navegar a la página principal después de borrar el personaje
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Escribe el nombre del personaje que quieres borrar</h2>
            <input
                type="text"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
            />
            <button onClick={handleDelete}>Borrar personaje</button>
        </div>
    );
};

export default DeleteCharacter;