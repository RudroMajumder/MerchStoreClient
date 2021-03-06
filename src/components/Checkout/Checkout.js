import React, { useEffect, useState } from 'react';
import { table } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const {_id} = useParams();
    // const _id = {_id};
    console.log(_id) 
    const [cart,setCart] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://whispering-wildwood-87552.herokuapp.com/product/'+_id)
        .then( res => res.json())
        .then( data => setCart(data[0]))
        },[])
        
        console.log(cart)

    const addToCart =()=>{
        console.log(loggedInUser)
        const orderDetails = { ...loggedInUser, ...cart, date: new Date()};
        console.log(orderDetails);

            fetch('https://whispering-wildwood-87552.herokuapp.com/addOrder',{
                method:"POST",
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(orderDetails)
            })
            .then( res => res.json())
            .then( data => console.log(data))
            alert("Order Placed Successfully");
    }
    return (
        <div className="container">
            <h1> This is checkout </h1>
            <div className="table-responsive">
            <table className="table table-striped" >
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{cart && cart.name}</td>
                    <td>1</td>
                    <td>${cart && cart.price}</td>
                    </tr>
                    <tr style={{textAlign:"right"}}>
                    <td colSpan="3"><button className="addOrderBtn" onClick={addToCart}> Place Order </button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Checkout;