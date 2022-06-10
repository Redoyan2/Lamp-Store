import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Defination from '../Defination/Defination';
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
        if(cart.length<=3){
            const newCart = [...cart, products]
        setCart(newCart);
        }
        else{
            alert("Please no more !!!!")
        }
        
       
    }
    const randomLampAdd=()=>{
        const num = parseInt((Math.random()*5))
        const myLamp = cart[num].name
        const divArea=document.getElementById('div-area');
        divArea.innerText=`Your Lamp is:
        ${myLamp}`
        
    }



    return (
        <div>
            <div className='header'>
                <h1 className='header-line' >LAMP STORE </h1>
                <h3 className='header-line2'>Chose Your Favorite Lamps</h3>
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
                    <h1 id='div-area'></h1>
                 {
                     cart.map(lamp=><Cart
                     key={lamp.id}
                        lamp={lamp}
                     >
                     </Cart>)
                 }
                 <button onClick={randomLampAdd} className='btn-1'>Choose One</button> <br></br>
                 <button className='btn-1'>Choose Again</button>
                  
                </div>
                <div>
                    <Defination></Defination>
                </div>
            </div>
        </div>
    );
};

export default Store;