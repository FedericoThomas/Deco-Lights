import ItemCount from "./ItemCount"

const ItemDetail = ({id, name, img, price, category, description, stock, handleOnAdd}) => {
    return (
        <div>

            <h4>{name}</h4>
            <p>{category}</p>
            <img src={img} alt={name}></img>
            <p>${price}</p>
            <p>Descripcion {description}</p>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>

        </div>
        
    )
}

export default ItemDetail