import React from 'react';
import Sidebar from './Sidebar';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import axios from 'axios';
import { useState } from 'react';

const AddProducts = () => {

    const { register, handleSubmit, watch, formState: { errors } }  = useForm();
    const[image,setImage] = useState(null);
    const [name,setName] = useState("");
    const [price,setPrice] = useState();
    let productDetails;
    const onSubmit = data => {
        console.log(name,price)
        if(image){
             productDetails = {
                name:name,
                price:price,
                img_url:image
            }
        }
        
        console.log(productDetails)
        const url = `http://localhost:5055/addProduct`;
        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
          })
          .then(res => console.log('server side response', res))
        };

     const  handleChange =  event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set("key","aa494530faedfc89b0971ec1033f6d02");
        imageData.append("image",event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImage(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    // console.log(image)



    return (
        <div>
            <Sidebar></Sidebar>
            <h1 className="title">Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{position: "fixed", top: "10%", left: "40%"}}>
               <h4 className="input-title"> Product Name :</h4>
               <input name="name" defaultValue="New exciting Event" onBlur={e=>{setName(e.target.value)}}  />
                <br/>
                <h4>Product Price :</h4>
                <input name="productPrice" onBlur={e=>{setPrice(e.target.value)}}/>
                <br/>
                <br/>
                <h4>Product Image:</h4>
                <input name="productImage" onChange={handleChange} type="file"  />
                <br/>
                <input type="submit" /> 
            </form>

        </div>
    );
};

export default AddProducts;