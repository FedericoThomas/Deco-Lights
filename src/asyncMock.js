const products = [
    {
        id: '1',
        name: 'Lampara Nordica',
        price: 2500,
        category: 'lampara',
        img:'https://thesartori.com.ar/wp-content/uploads/2019/02/pantalla_nordica-600x800.jpg',
        stock: 50,
        description: 'Lampara Colgante Nordica'
        
    },

    {
        id: '2',
        name: 'Velador Nordico',
        price: 1500,
        category: 'velador',
        img:'https://http2.mlstatic.com/D_NQ_NP_925549-MLA50528810610_062022-O.webp',
        stock: 40,
        description: 'Velador Estilo Nordico',
    },
    {
        id: '3',
        name: 'Cuadro Mandala',
        price: 3500,
        category: 'cuadros',
        img:'https://http2.mlstatic.com/D_NQ_NP_946167-MLA50483371397_062022-O.webp',
        stock: 15,
        description: 'Cuadro Triptico Mandala',
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
