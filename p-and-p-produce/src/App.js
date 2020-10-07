import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminOrders from "./pages/AdminOrders.js";
import AdminProducts from "./pages/AdminProducts.js";
import Contact from "./pages/Contact.js";

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
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/admin">
          <AdminProducts></AdminProducts>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}
export default App;
