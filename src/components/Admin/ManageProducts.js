import React from 'react';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { MdDelete,MdCreate } from "react-icons/md";
import ClockLoader from "react-spinners/ClipLoader";



const ManageProducts = () => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then( res => res.json())
        .then( data => setProducts(data))
    },[])
    return (
        <div>
            <Sidebar></Sidebar>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <div style={style}>
                    {products.length === 0 &&  <ClockLoader color='teal' size={50} />}
                    </div>
                    {
                        products.map(product => 
                            <tr>
                                <td> {product.name} </td>
                                <td> {product.price} </td>
                                <td> <MdDelete size={30}/> &nbsp; &nbsp;   <MdCreate size={30}/>  </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;