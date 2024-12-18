import ShoppingCart from "./ShoppingCart"
import { NavLink } from "react-router-dom"
const NavbarComponent= () =>{
    return(
        <nav className="nav-estilos">
            <NavLink className="NavLink-estilos" to={"/"}>PLANTAS</NavLink>
            <NavLink className="NavLink-estilos" to={"/products/temporada"}>Temporada</NavLink>
            <NavLink className="NavLink-estilos" to={"/products/clasico"}>Clásico</NavLink>
            <NavLink className="NavLink-estilos" to={"/products/mas vendido"}>Más Vendido</NavLink>
            <NavLink className="NavLink-estilos" to={"products/promociones"}>Promociones</NavLink>
            <NavLink to={"/cart"}><ShoppingCart/></NavLink> 
        </nav>
    )
}

export default NavbarComponent