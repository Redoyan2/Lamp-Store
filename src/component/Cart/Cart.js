import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { name, img } = props.lamp
    return (
        <div className='summary-body'>
            <img src={img} alt="" srcset="" />
            <h4> {name}</h4> 
            <span><FontAwesomeIcon icon= {faTrash}></FontAwesomeIcon></span>
            
        </div>
    );
};

export default Cart;