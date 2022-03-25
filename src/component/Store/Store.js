import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    console.log(products)



    useEffect(()=>{
        fetch('lampData.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])


    return (
        <div>
            <div className='header'>
                <h1 className='header-line' >LAMP STORE </h1>
                <h3 className='header-line2'>Chose Your Favorite Lamp</h3>
            </div>
            <div>
            {
                   products.map(product=><Products
                   key={product.id}
                   product={product}

                   >

                   </Products>)
                   
               }
            </div>
        </div>
    );
};

export default Store;