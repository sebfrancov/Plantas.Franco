
const ShoppingCart = ({number})=>{
    return(
        <div className="cart-container">
            <img src="./shoppingCart.png" alt="Shopping Cart" className="cart-img" />
            <p className="cart-number">{number}</p>
        </div>
    )
}

export default ShoppingCart