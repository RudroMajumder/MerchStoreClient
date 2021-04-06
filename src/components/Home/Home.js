import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';
import './Home.css'
import ClockLoader from "react-spinners/ClipLoader";

const Home = () => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then( res => res.json())
        .then( data => setProducts(data))
    },[])
    console.log(products)
    return (
        <div className="container products">
            <div style={style}>
                {products.length === 0 &&  <ClockLoader color='teal' size={50} />}
            </div>
            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
        </div>
    );
};

export default Home;