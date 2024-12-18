import React from "react";
import { Link } from "react-router-dom";

const Error =()=>{
    return(
        <div>
            <div>
                <h2>Ha ocurrido un error, por favor verifique si la rama que busca hace parte de este arbol</h2>
            </div>
            <Link to="/">Volver a rama principal</Link>
        </div>
    )
}

export default Error