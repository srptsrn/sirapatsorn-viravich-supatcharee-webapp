import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import history from './history';
import AdminOrders from "./pages/AdminOrders.js";
import AdminProducts from "./pages/AdminProducts.js";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import AdminPromote from "./pages/AdminPromote.js";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/products">
          <AdminProducts></AdminProducts>
        </Route>
        <Route path="/admin/orders">
          <AdminOrders></AdminOrders>
        </Route>
        <Route path="/admin/promote">
          <AdminPromote></AdminPromote>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/admin">
        <AdminPromote></AdminPromote>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
