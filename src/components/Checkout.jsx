import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "../services/firebase"
import { Link } from "react-router-dom"

const Checkout =()=>{
    const [user, setUser] = useState({}) 
    const [validate, setValidate] = useState("")
    const [orderId, setOrderId] = useState("")
    const {cart, cartTotal, clear} = useContext(CartContext)
    const userData = (e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const finalizarCompra = (e)=>{
        e.preventDefault()
        if(!user.name && !user.lastname && !user.address){
            alert("Por favor llene los campos, son obligatorios")
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
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }        
    }
    return(
        <div>
            {orderId !=="" ? <div>
                <h4>Orden generada exitosamente!</h4>
                <h5>El id es: {orderId}</h5>
                <Link to="/"> <button>Volver a PLANTAS</button> </Link>
            </div>
            :
            <div>
            <h3>Completa los datos</h3>
            <form className="form-checkout" onSubmit={finalizarCompra}>
                <input type="text" name="name" placeholder="Su nombre" onChange={userData} />
                <input type="text" name="lastname" placeholder="Su apellido" onChange={userData} />
                <input type="text" name="address" placeholder="Su dirección" onChange={userData} />
                <input type="email" name="email" placeholder="Su correo" onChange={userData} />
                <input type="text" name= "email-verification" placeholder="Confirme su correo" onChange={(e)=> setValidate(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>}
        </div>
    )
}

export default Checkout