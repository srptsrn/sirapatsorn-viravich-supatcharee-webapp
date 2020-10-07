import { render } from "@testing-library/react";
import React from "react";
import "../styles/styleAdNav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class AdminNavigationBar extends React.Component {
  render() {
    const { products, orders } = this.props;
    return (
      <div className="app-nav">
        <nav>
          <div>
            <Link to="/admin" className="logo-admin">
              P&amp;P Produce Admin
            </Link>
            <div className="type-admin-page">
              <Link to="/admin/products">
                <button
                  id="product-nav"
                  className={products ? "select-admin-nav" : ""}
                >
                  Edit products
                </button>
              </Link>
              <Link to="/admin/orders">
                <button
                  id="orders-nav"
                  className={orders ? "select-admin-nav" : ""}
                >
                  Orders
                </button>
              </Link>
            </div>
          </div>

          <Link to="/">
            <button className="log-out">Log out</button>
          </Link>
          <div className="menu-admin-nav"></div>
        </nav>
        <div id="mySidenav" className="sidenav">
          <a href="AdminProducts.html">Edit products</a>
          <a href="AdminOrders.html">Orders</a>
          <a>Log out</a>
        </div>
      </div>
    );
  }
}

export default AdminNavigationBar;
