import { Link, useNavigate } from "react-router-dom"
import CartWidget from "./CartWidget"



const NavBar = () =>{

const navigate = useNavigate ()

    return (
        <nav>
            <h1 onClick={()=> navigate('/')}>Deco&Lights</h1>
            <div>
                <Link to="/category/cuadros" > Cuadros </Link>
                <Link to="/category/lampara"> Lamparas </Link>
                <Link to="/category/velador"> Veladores </Link>
            </div>
                        
            <CartWidget />
        </nav>
    )
}

export default NavBar