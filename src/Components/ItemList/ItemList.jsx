import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const dataProducts = [
    {
        title: "Producto 1",
        descripcion: "Descripcion del producto 1",
        precio: "100",
    },
    {
        title: "Producto 2",
        descripcion: "Descripcion del producto 2",
        precio: "200",
    },
    {
        title: "Producto 3",
        descripcion: "Descripcion del producto 3",
        precio: "300",
    },
    {
        title: "Producto 4",
        descripcion: "Descripcion del producto 4",
        precio: "400",
    },
    {
        title: "Producto 5",
        descripcion: "Descripcion del producto 5",
        precio: "500",
    },
];

const ItemList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        new Promise((res, rej) => {
            setTimeout(() => {
                res(dataProducts)
            }, 3000)
        }).then((respuesta) => {
            setProductList(respuesta)
        })
        .catch((error) => {console.log(error)})
    }, {})
    
    return (
        <div className='list-container'>
            {productList.map((product, index) => (
                <div className='list-item' key={`${index}`}>
                    <Item title={product.title} description={product.descripcion} precio={product.precio} />
                </div>
                ))}
        </div>
    )
}

export default ItemList
