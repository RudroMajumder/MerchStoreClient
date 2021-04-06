import React from 'react';
import ManageProducts from './ManageProducts';
import Sidebar from './Sidebar';

const Admin = () => {
    
    return (
        <div >
            <Sidebar></Sidebar>
            <ManageProducts></ManageProducts>
        </div>
    );
};

export default Admin;