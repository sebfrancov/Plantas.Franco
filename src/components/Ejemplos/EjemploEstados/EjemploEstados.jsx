import React, {useState} from "react"

const EjemploEstados = ()=>{
    const [text, setText]= useState("Ejemplo1")
    const cambiarTexto= ()=>{
        setText("Ejemplo2")
    }
    return(
        <div>
            <p>{text}</p> 
            <button onClick={cambiarTexto}>Cambiar Texto</button>  
        </div>
        
    )
}
export default EjemploEstados