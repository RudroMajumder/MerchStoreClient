import React from 'react';
import { FaCartPlus } from "react-icons/fa";
const Product = (props) => {
    const {name,img_url,price} = props.product;
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
                    <button className="btn"> <FaCartPlus/>  Add to cart </button>
                </div>
            </div>
        </div>
    );
};

export default Product;