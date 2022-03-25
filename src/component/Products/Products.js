import React from 'react';

const Products = (props) => {
    console.log(props.name)
    const{name, price, img, stock}=props
    return (
        <div>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Products;