import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount"
import { getProducts } from "../mock/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom" 
import Eventos from "../components/Ejemplos/Ejemplo Eventos/Eventos"
import Loader from "./Loader"
import {collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../services/firebase"

const ItemListContainer = ({greeting})=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()

    //FIREBASE
    useEffect(()=>{
        setLoading(true)
        //Traemos la colección
        const productsCollection = category 
        ? query(collection(db, "productos"), where("category", "==", category)) 
        : collection(db, "productos")
        //Pedimos los documentos
        getDocs(productsCollection)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return {
                    id : product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, [category])
    
    //MOCK LOCAL
   /*  useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res) => {
            if(category){
                //Aquí filtramos para encontrar la categoría fuera del Home
                setProducts(res.filter((prod)=> prod.category === category))
            }else{
                //Si no se encuentra categoría, el Home muestra todos los productos
                setProducts(res)
            }
        })
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    },[category]) */
    return(
        <div>            
            <h1 className="greeting-h1">{greeting} <span>{category}</span></h1> 
            {loading? <Loader/> : <ItemList products={products}/>}
        </div>
    )
}
export default ItemListContainer