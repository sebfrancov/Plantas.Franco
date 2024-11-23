import React, {useState} from "react";

const ItemCount = ({stock, onAdd})=>{
    const[count, setCount] = useState(1)
    const sumar = ()=>{
        if(count < stock){
            setCount(count + 1)    
        }
        
    }
    const restar = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    const onAddOtraConst =()=>{
        onAdd(count)
    }
    return(
        <div>
            <div>
                <button onClick={restar}>-</button>
                <span>{count}</span>
                <button onClick={sumar}>+</button>    
            </div>
            <button onClick={()=> onAdd(count)}>Comprar</button>  {/* si la función necesita validación se recomienda crear una const aparte, como se ve en onAddOtraConst */}          
        </div>
    )
}
export default ItemCount