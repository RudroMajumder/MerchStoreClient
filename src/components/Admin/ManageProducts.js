import React from 'react';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { MdDelete,MdCreate } from "react-icons/md";
import ClockLoader from "react-spinners/ClipLoader";
import './ManageProduct.css'


const ManageProducts = () => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then( res => res.json())
        .then( data => setProducts(data))
    },[])

    const deleteProduct = (id)  =>{
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application.json"},
            body:JSON.stringify()
        })
        .then( res => res.json())
        .then( data => console.log(data))
        alert("Deleted Successfully")
        window.location.reload(true);
    }

    return (
        <div>
            <Sidebar> </Sidebar>
            <h1 className="title"> Manage Products </h1>
            <Table striped bordered hover  className="w-75 mt-5" style={{position: "fixed", top: "10%", left: "20%"}}>
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
                                <td> <MdDelete size={30} onClick={()=>deleteProduct(`${product._id}`)}/> &nbsp; &nbsp;   <MdCreate size={30}/>  </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;