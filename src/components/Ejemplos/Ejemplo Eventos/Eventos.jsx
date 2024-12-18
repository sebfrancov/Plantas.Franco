import React, {useState} from "react";

const Eventos =()=>{
    const [name, setName] = useState("")
    const nameHandler = (e) =>{
       setName(e.target.value) 
    }
    /* const noVocales = (e) =>{
        if("aeiou".includes(e.key.toLowerCase())){
            e.preventDefault()
        }
    } */
    return (
        <div>
            <p></p>
            <input type="text" placeholder="Qué está buscando?" name="nombre" onChange={nameHandler} />
            {/* <input type="text" placeholder="NO vocales" onKeyDown={noVocales} /> //Esto es un ejemplo */}
        </div>
        
    )
}
export default Eventos