import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin';
import AddProducts from './components/Admin/AddProducts';
import ManageProducts from './components/Admin/ManageProducts';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Order/Order';

export const UserContext = createContext();


function App() {
  const  [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/manageProducts">
            <ManageProducts></ManageProducts>
          </Route>
          <Route path="/addProducts">
            <AddProducts></AddProducts>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/orders">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:_id">
            <Checkout></Checkout>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
