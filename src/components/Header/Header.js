import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Header = () => {
    const navItemStyle={
        color: "white",
        fontSize: "20px",
        paddingRight: "20px",
        textDecoration: "none"
    }
    const loginBtn={
        padding:"5px",
        textDecoration: "none",
        width: "50px",
        border:"none",
        fontSize:'15px'
    }
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#EFEFEF"}}>
        <Link className="nav-link logo"> Merch Store </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/home">Home </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/orders">Orders</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/admin">Admin </Link>
            </li>
            <li className="nav-item active ">
                <Link className="nav-link" to="/checkout">Checkout </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            </ul>
        </div>
        </nav>
        </div>
    );
};

export default Header;