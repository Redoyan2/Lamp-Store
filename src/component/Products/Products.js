import React from 'react';
import './Products.css';

const Products = (props) => {

    const{name, price, img}=props.product
    console.log(img);
    return (
        <div>
              <div className='card-body'>
                <img src={img} alt="" srcset="" />
                <h4>{name}</h4>
                <h4>{price}</h4>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;