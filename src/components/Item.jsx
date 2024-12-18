import React from "react";
import { Link } from "react-router-dom";

const Item =({product})=>{
    return(
        <div>
            <div className="div-card"> 
                 <img className="div-img" src={product.img} alt={product.name} />
                 <h5>{product.name}</h5>
                 <p>${product.price}</p>
                 <Link to={`/item/${product.id}`}><button>Ver más</button></Link> 
            </div>
        </div>
    )
}

export default Item