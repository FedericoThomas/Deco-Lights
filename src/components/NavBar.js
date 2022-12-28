import CartWidget from "./CartWidget"

const NavBar = () =>{
    return (
        <nav>
            <h1>Deco&Lights</h1>
            <div>
                <button>Cuadros</button>
                <button>Lamparas</button>
                <button>Veladores</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar