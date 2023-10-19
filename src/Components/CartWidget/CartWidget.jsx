import React from 'react'
import myImage from './shopping-cart.png'
import './CartWidget.css'

const CartWidget = () => {
return (
    <div className='cart-widget'>
        <img className='carrito' src={myImage} alt="" />
        <p className='notificacion'>5</p>
    </div>
)
}

export default CartWidget