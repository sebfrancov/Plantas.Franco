import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem =({prod})=>{
    const {removeItem} = useContext(CartContext)
    return(
        <div className="div-cart-item">
            <img className="cart-img" src={prod.img} alt={prod.name} />
            <span>{prod.name}</span>
            <span>{prod.cantidad}</span>
            <span>${prod.price}</span>
            <button onClick={()=> removeItem(prod.id)}>X</button>
        </div>
    )
}

export default CartItem