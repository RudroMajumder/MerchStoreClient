import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Order.css';
import { Table } from 'react-bootstrap';


const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders?email='+loggedInUser.email,{
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
            <h1 className="title">you have {orders.length} orders</h1><br/>
            <Table striped bordered className="mt-5">
                <thead>
                    <tr>
                    <th>Email</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order=>
                            <tr>
                                <td>{order.email}</td>
                                <td>{order.name}</td>
                                <td>1</td>
                                <td>{order.price}</td>
                                <td>{(new Date(order.date).toDateString('dd/MM/yyyy'))}</td>
                            </tr>    
                                )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Order;