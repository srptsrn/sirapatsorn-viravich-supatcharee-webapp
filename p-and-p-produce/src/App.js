import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import history from './history';
import AdminOrders from "./pages/AdminOrders.js";
import AdminProducts from "./pages/AdminProducts.js";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Franchise from "./pages/Franchise.js";
import Cart from "./pages/Cart.js";
import ProductDetails from "./pages/ProductDetails.js";
import AdminPromote from "./pages/AdminPromote.js";
import BestSellers from "./pages/BestSellers.js";
import AllProducts from "./pages/AllProducts.js";
import SearchResults from "./pages/SearchResults.js";

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
        <Route path="/product-details">
          <ProductDetails></ProductDetails>
        </Route>
        <Route path="/all-products">
          <AllProducts></AllProducts>
        </Route>
        <Route path="/best-sellers">
          <BestSellers></BestSellers>
        </Route>
        <Route path="/search-results">
          <SearchResults></SearchResults>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/franchise">
          <Franchise></Franchise>
        </Route>
        <Route path="/cart">
        <Cart></Cart>
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
