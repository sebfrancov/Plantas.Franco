import React, {useState} from "react";

const Form =()=>{ 
    const [nombre, setNombre]= useState("")
    const [apellido, setApellido]= useState("")
    const [direccion, setDireccion]= useState("")
    const [email, setEmail]= useState("")

    const enviarDatos =(e)=>{
        e.preventDefault()
        const data = {nombre, apellido, direccion, email}
        console.log(data)
    }
    return(
        <div>
            <form onSubmit={enviarDatos}>
                <div>
                    <label>Nombre</label>
                    <input type="text" placeholder="Nombre" onChange={(e)=> setNombre(e.target.value)}/>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" placeholder="Apellido" onChange={(e)=> setApellido(e.target.value)}/>
                </div>
                <div>
                    <label>Dirección</label>
                    <input type="text" placeholder="Dirección" onChange={(e)=> setDireccion(e.target.value)}/>
                </div>
                <div>
                    <label> E-mail</label>
                    <input type="email" placeholder="E-mail" onChange={(e)=> setEmail(e.target.value)}/>
                </div> 
                <button type="submit">Enviar</button>               
            </form>
        </div>
    )
}
export default Form