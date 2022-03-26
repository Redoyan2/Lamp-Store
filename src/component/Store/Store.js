import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    
    const [cart, setCart]=useState([]);
    
    

    useEffect(() => {
        fetch('lampData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (products)=>{
        const newCart = [...cart, products]
        setCart(newCart);
       
    }



    return (
        <div>
            <div className='header'>
                <h1 className='header-line' >LAMP STORE </h1>
                <h3 className='header-line2'>Chose Your Favorite Lamp</h3>
            </div>
            <div className='products-container'>
                <div className='cart-container'>
                    {
                        products.map(product => <Products
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Products>)

                    }
                </div>
                <div className='summary-section'>
                    <h1>Selected Lamp</h1>
                 {
                     cart.map(lamp=><Cart
                     key={lamp.id}
                        lamp={lamp}
                     >
                     </Cart>)
                 }
                 <button className='btn-1'>Choose One</button> <br></br>
                 <button className='btn-1'>Choose Again</button>
                  
                </div>
            </div>
        </div>
    );
};

export default Store;