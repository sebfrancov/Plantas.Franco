import { createContext, useEffect, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";

export const CartContext = createContext();
const prodFromLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []
export const CartProvider =({children})=>{
    const [cart, setCart] = useState(prodFromLocalStorage)

    //Código para mantener el cart persistente después de refrescar
    useEffect(()=>{
        localStorage.setItem('carrito',JSON.stringify(cart))
    },[cart])

    const addToCart = (item, quantity)=>{
        //Lógica para sumar productos iguales en el carrito y no repetirlos.
        if(isInCart(item.id)){
            setCart(
                cart.map((prod)=>{
                    if(prod.id === item.id){
                        return {...prod, cantidad: prod.cantidad + quantity}
                    }else{
                        return prod
                    }
                })
            )
        }else{
            //Sumar un item nuevo al carrito
           setCart([...cart, {...item, cantidad:quantity}]) 
        }        
    }
    const isInCart =(id)=>{
        return cart.some((prod)=> prod.id === id)
    }

    const clear =()=>{
        setCart([])
    }

    const removeItem =(id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const cartQuantity =()=>{
        return cart.reduce((acc, prod)=> (acc += prod.cantidad), 0)
    }

    const cartTotal =()=>{
        return cart.reduce((acc, prod)=>(acc += prod.price * prod.cantidad), 0)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}