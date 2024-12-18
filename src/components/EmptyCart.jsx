import React from "react";
import { Link } from "react-router-dom";

const EmptyCart =()=>{
    return(
        <div>
            <h2>Aún no has agregado nada para florecer</h2>
            <h4>Te invitamos a chismosear nuestras plantas, quizás y te antojas</h4>
            <Link to="/">Volver a PLANTAS</Link>
        </div>
    )
}

export default EmptyCart