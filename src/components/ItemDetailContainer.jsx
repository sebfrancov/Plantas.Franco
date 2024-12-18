import React, { useState, useEffect } from "react";
import { getOneProduct } from "../mock/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase"

const ItemDetailContainer = ()=>{
    const [product, setProduct]= useState({})
    const [loading, setLoading]= useState(false)
    const { id } = useParams()

    useEffect (()=>{
        setLoading(true)
        //Traer collection y firebase
        const collectionProd = collection(db, "productos") 
        //Se crea una referencia
        const docRef = doc(collectionProd, id)     
        //Traer el documento
        getDoc(docRef)
        .then((res)=> setProduct({id: res.id, ...res.data()})) 
        .catch((error)=> console.log(error))
        .finally(setLoading(false))
    }, [])
    //MOCK LOCAL
    /* useEffect(()=>{
        setLoading(true)
        getOneProduct(id)
        .then((res)=> setProduct(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[]) */

    return(
        <div>
            {loading ? <Loader/> : <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer