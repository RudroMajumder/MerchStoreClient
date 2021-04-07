import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const Product = (props) => {
    const {name,img_url,price,_id} = props.product;
    const [cart,setCart] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const addToCart =()=>{
        const addedProduct = {
            productName: name,
            productPrice: price,
            id: _id,
            quantity:1
        };
        const orderDetails = { ...loggedInUser,...addedProduct};
        setCart(addedProduct);

        fetch('https://whispering-wildwood-87552.herokuapp.com/addOrder',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(orderDetails)
        })
        .then( res => res.json())
        .then( data => console.log(data))
    }
    Object.keys(cart).length && console.log(cart)
    const history = useHistory()

    const handleAddOrder = (id) =>{
        history.push(`/checkout/${id}`);
    }
    


    return (
        <div className="card-group">
            <div className="card">
                <div className="text-center">
                    <img src={img_url} className="card-img-top w-75 mt-2 r" alt="..."/>
                </div>
                <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <h4>${price}</h4>
                    <button className="btn" onClick={()=>handleAddOrder(_id)}> <FaCartPlus/>  Add to cart </button>
                </div>
            </div>
        </div>
    );
};

export default Product;