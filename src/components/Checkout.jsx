import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "../services/firebase"

const Checkout =()=>{
    const [user, setUser] = useState({}) 
    const [validate, setValidate] = useState("")
    const {cart, cartTotal} = useContext(CartContext)
    const userData = (e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const finalizarCompra = (e)=>{
        e.preventDefault()
        if(!user.name && !user.lastname && !user.address){
            alert("POr favor llene los campos, son obligatorios")
        }else if(user.email !== validate){
            alert("Los correos no son iguales, por favor intente nuevamente")
        }else{
            let order = {
                buyer: user,
                carrito: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            //Traer la colección 
            const ventas = collection(db, "order")
            //Agregamos un documento
            addDoc(ventas, order)
            .then((res)=>{
                //Actualizar el stock
                cart.forEach((item)=>{
                    const docRef = doc(db, "productos", item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                    })
                })
            })
        }
            

    }
    return(
        <div>
            <h3>Completa los datos</h3>
            <form onSubmit={finalizarCompra}>
                <input type="text" name="name" placeholder="Su nombre" onChange={userData} />
                <input type="text" name="lastname" placeholder="Su apellido" onChange={userData} />
                <input type="text" name="address" placeholder="Su dirección" onChange={userData} />
                <input type="email" name="email" placeholder="Su correo" onChange={userData} />
                <input type="text" name= "email-verification" placeholder="Confirme su correo" onChange={(e)=> setValidate(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout