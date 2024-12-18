import { useContext } from "react"
import { CartContext } from "../context/CartContext"
const ShoppingCart = ()=>{
    const {cartQuantity} = useContext(CartContext)
    return(
        <div className="cart-container">
            <img src="./shoppingCart.png" alt="Shopping Cart" className="cart-img" />
            {cartQuantity() > 0 && <p className="cart-number">{cartQuantity()}</p>}
        </div>
    )
}

export default ShoppingCart