import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";

const CartView =()=>{
    const {cart} = useContext(CartContext)
    return(
        <div>
            {!cart.length 
            ? <EmptyCart/> 
            : <div>
                <h2>Tu carrito</h2>
                <CartList/>
              </div>
            }
        </div>
    )
}

export default CartView