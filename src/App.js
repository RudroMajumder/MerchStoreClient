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

function App() {
  return (
    <div className="App">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
