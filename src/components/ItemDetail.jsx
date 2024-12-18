import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail =({product})=>{
    const [compra, setCompra] = useState(false)
    const {addToCart} = useContext(CartContext)
    const onAdd = (cantidad)=>{
        if(cantidad > 0){
            let cartItem = {
                name: product.name,
                img: product.img,
                price: product.price,
                stock: product.stock,
                id: product.id
            }
            addToCart(cartItem, cantidad)
            alert(`Se agregó al carrito ${cantidad} producto/s`)
        }else{
            alert("No hay nada para agregar al carrito, por favor seleccione algún producto")
        }    
        setCompra(true)    
    }

    return(
        <div>
            <h2>Producto: {product.name}</h2>
            <img className="detail-img" src={product.img} alt={product.name} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            {compra 
            ?<div>
                <Link to="/cart"><button>Ir al carrito</button></Link> 
                <Link to="/"><button>Seguir Comprando</button></Link>
            </div>
            : <ItemCount stock={product.stock} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail