import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    const {product, handleAddToCart}=props
    const { name, price, img, ratings } = product

    return (
        <div>
            <div className='card-body'>
                <img src={img} alt="" srcset="" />
                <h4>{name}</h4>
                <h4>Price: ${price}</h4>
                <small>Ratings: {ratings}</small>
                <button onClick={()=>handleAddToCart(product)}  className='cart-btn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} 
                ></FontAwesomeIcon></button>

            </div>
        </div>
    );
};

export default Products;