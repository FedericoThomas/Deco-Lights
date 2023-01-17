import {Link, Navigate, useNavigate} from "react-router-dom"

const Item = ({id, name, img, price}) => {
    return (
        <div onClick={() => Navigate(`/item/${id}`)}>
            <h4>{name}</h4>
            <img src={img} alt={name} />
            <p>${price}</p>
            <Link to={`/item/${id}`}>Detalle del Producto</Link>

        </div>
    )

}

export default Item