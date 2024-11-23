import React, { useState, useEffect } from "react";
import { getOneProduct } from "../mock/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [product, setProduct]= useState({})
    const { id } = useParams()
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setProduct(res))
        .catch((error)=> console.log(error))
    },[])
    return(
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer