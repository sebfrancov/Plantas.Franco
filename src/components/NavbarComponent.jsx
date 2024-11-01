import ShoppingCart from "./ShoppingCart"
const NavbarComponent= () =>{
    return(
        <nav className="nav-estilos">
            <a className="a-estilos">PLANTAS</a>
            <a className="a-estilos">De Temporada</a>
            <a className="a-estilos">Lo Clásico</a>
            <a className="a-estilos">Lo Más Vendido</a>
            <a className="a-estilos">Promociones</a>
            <ShoppingCart number={5}/>
        </nav>
    )
}

export default NavbarComponent