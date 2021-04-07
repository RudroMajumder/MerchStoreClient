import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {_id} = useParams();
    // const _id = {_id};
    console.log(_id) 
    const [cart,setCart] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:5000/product/'+_id)
        .then( res => res.json())
        .then( data => setCart(data))
        },[])
        


    const addToCart =()=>{
        console.log(cart)
        console.log(loggedInUser)
        const orderDetails = { ...loggedInUser, ...cart};
        console.log(orderDetails);
        fetch('http://localhost:5000/addOrder',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(orderDetails)
        })
        .then( res => res.json())
        .then( data => console.log(data))
    }
    Object.keys(cart).length && console.log(cart)
    return (
        <div>
            <h1> This is checkout </h1>
            <button onClick={addToCart}> Add</button>
        </div>
    );
}

export default Checkout;