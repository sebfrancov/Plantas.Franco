import React, { useEffect } from "react"
import { getProducts } from "../../../mock/data"

const EjemploPromise =()=>{
    let error = false
    /* const Simulacion = new Promise((reject, resolve)=>{
        if(error){
            reject("Se rechaza la promesa porque no podemos cumplirla.")
        } else{
            resolve("Se resuelve porque podemos cumplir la promesa.")
        }
    }) */

    const fakeApi = new Promise((reject, resolve)=>{
        setTimeout(()=>{
            if(error){
                reject("Hubo un problema, procure luego")
            }else{
                resolve([{name:"Ejemplo", price: 123, stock: 4}, {name:"Ejemplo2", price: 456, stock: 7}])
            }
        }, 3000)
    })
    console.log(fakeApi)
    useEffect(()=>{
        fakeApi
        .then((res) => console.log("Respuesta: ", res))
        .catch((error) => console.log(error))
    },[])

    useEffect(()=>{
        getProducts()
        .then((res)=> console.log("Respuesta: ", res))
        .catch((error)=> console.log(error))
    },[]) 
    return(
        <div>EjemploPromise</div>
    )
}

export default EjemploPromise