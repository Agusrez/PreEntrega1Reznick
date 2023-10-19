import React from 'react';
import './NavBar.css';
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
return (
    <div className='navbar'>
        <p className='titulo'>SoundScape</p>
        <ul className='lista'>
            <li><a className='item' href="">Vinilos</a></li>
            <li><a className='item' href="">CDs</a></li>
            <li><a className='item' href="">HardWare</a></li>
        </ul>
        <CartWidget/>
    </div>
)
}

export default NavBar