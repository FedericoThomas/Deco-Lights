import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import { getProductById } from "../asyncMock"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const {productId} = useParams()
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)

    useEffect( () => {
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                setError(true)
                
            })
    }, [productId] )

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...product}/>
        </div>
    
    )
}

export default ItemDetailContainer