import React from 'react'

const Item = ({title, description, precio}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h3>{description} lol</h3>
            <h3>Precio: {precio}</h3>
        </div>
    )
}

export default Item