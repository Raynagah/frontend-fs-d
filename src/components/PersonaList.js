import React from "react";
import axios from "axios";
import React, { useState, useEffect } from 'react';
const API_URL : string = "https://backend-fs-d-k547.onrender.com/api/personas";

function PersonaList(){
    const [personas, setPersonas] = useState([]);

    const cargar = async () =>{
        const res = await axios.get(API_URL);
        setPersonas(res.data)
    };

    const eliminar = async (id) =>{
        await axios.delete(`${API_URL}/${id}`);
        cargar()
    };

    useEffect(() =>{
    cargar();
    } ,[]);

    return(
    <ul className = "list-group">
        {personas.map(p =>(
            <li key = "{p.id}"
                className = "list-group-item d-flex justify-content-between">
                    {p.nombre}
                    <button className = "btn btn-danger btn-sm" onClick={()=>eliminar(p.id)}>Eliminar</button>
                </li>
        ))}
    </ul>
    );
}

export default PersonaList;