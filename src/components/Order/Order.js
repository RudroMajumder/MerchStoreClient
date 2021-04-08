import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Order.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://whispering-wildwood-87552.herokuapp.com/orders?email='+loggedInUser.email,{
            method:"GET",
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then( res => res.json())
        .then( data => setOrders(data))
    },[])
    console.log(orders)
    return (
        <div className="container">
            <p className="order-title"><big>you have {orders.length} orders</big></p><br/>
            <div className="table-responsive">
            <table className="table table table-striped  mt-5 ">
                <thead>
                    <tr>
                    <th >Email</th>
                    <th >Product Name</th>
                    <th >Quantity</th>
                    <th >Price</th>
                    <th >Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order=>
                            <tr>
                                <td >{order.email}</td>
                                <td >{order.name}</td>
                                <td >1</td>
                                <td >{order.price}</td>
                                <td >{(new Date(order.date).toDateString('dd/MM/yyyy'))}</td>
                            </tr>    
                                )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Order;