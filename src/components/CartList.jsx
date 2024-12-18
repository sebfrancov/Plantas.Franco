import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom"

const CartList =()=>{
    const {cart, cartTotal, clear} = useContext(CartContext)
    return(
        <div>
            {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
            <span>Total a Pagar: ${cartTotal()}</span>
            <div>
              <button onClick={clear} >Borrar Carrito</button>  
              <Link to= "/checkout"><button>Terminar Compra</button></Link>
            </div>
            
        </div>
    )
}

export default CartList