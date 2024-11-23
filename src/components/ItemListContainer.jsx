import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount"
import { getProducts } from "../mock/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting})=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()
    
    useEffect(()=>{
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
    },[category])
    return(
        <div>
            <h1 className="greeting-h1">{greeting} <span>{category}</span></h1> 
            {loading? <p>Cargando...</p> : <ItemList products={products}/>}
        </div>
    )
}
export default ItemListContainer