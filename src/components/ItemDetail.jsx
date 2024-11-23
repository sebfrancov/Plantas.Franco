import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail =({product})=>{

    const onAdd = (cantidad)=>{
        if(cantidad > 0){
            alert(`Se agregó al carrito ${cantidad} producto/s`)
        }else{
            alert("No hay nada para agregar al carrito, por favor seleccione algún producto")
        }        
    }

    return(
        <div>
            <h2>Producto: {product.name}</h2>
            <img src="" alt={product.name} />
            <p>Detalle del producto</p>
            <p>{product.price}</p>
            <ItemCount stock={product.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail