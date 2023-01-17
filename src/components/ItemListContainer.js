import { getProducts, getProductsByCategory } from "../asyncMock"
import { useEffect, useState } from 'react'
import Itemlist from './Itemlist'
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const {categoryId} = useParams()
    const [products, setProducts] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
        })
            .catch(error => {
                setError(true)
        })
            .finally(() => {
                setCargando(false)

        })
    }, [categoryId])

    if (cargando) {
        return <h3>Estamos preparando todo para que puedas decorar tu hogar </h3>
    }

    if (error) {
        return <h3>Aguarde un momento por favor estamos ultimando detalles  </h3>
    }

    return (
        <div>
            <h2>{greeting}</h2>
            <Itemlist products={products} />
            
        </div>

    )
}

export default ItemListContainer