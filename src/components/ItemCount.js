import { useState } from "react";   

const ItemCount = ({inicial = 1, stock= 0 , onAdd}) => {
    const [count, setCount] = useState(inicial)

    const increment = () => {
        if(count < stock){
            setCount(prev => prev +1)
        }
    }
    
    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    
    }
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={()=> onAdd(count)}>Sumar al Carrito</button>
        </div>
    
    )
}

export default ItemCount