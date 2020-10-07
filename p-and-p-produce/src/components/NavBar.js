import { render } from "@testing-library/react";
import React from "react";
import "../styles/styleNav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class AdminNavigationBar extends React.Component {
  render() {
    const { bestSellers, allProducts, about, contact } = this.props;
    return (
      <div>
        <nav>
          <div>
            <Link to="/" className="logo-admin">
              P&amp;P Produce
            </Link>
          </div>
          <div className="menu-nav">
            <Link to="/" className={bestSellers ? "on-page" : ""}>
              Best Sellers
            </Link>
            <Link to="/" className={allProducts ? "on-page" : ""}>
              All Products
            </Link>
            <Link to="/" className={about ? "on-page" : ""}>
              About
            </Link>
            <Link to="/contact" className={contact ? "on-page" : ""}>
              Contact
            </Link>
            <div className="search-tab-nav">
              <div className="icon-search"></div>
              <input
                id="search_web"
                type="text"
                className="search_web"
                placeholder="Search"
              />
            </div>
            <div className="cart-nav">
              <div className="cart-icon"></div>
              <div id="cart-amount">
                <p>3</p>
              </div>
            </div>
          </div>
          <div className="menu-admin-nav"></div>
        </nav>
        <div id="mySidenav" className="sidenav">
          <Link to="/" className={bestSellers ? "on-page" : ""}>
            Best Sellers
          </Link>
          <Link to="/" className={allProducts ? "on-page" : ""}>
            All Products
          </Link>
          <Link to="/" className={about ? "on-page" : ""}>
            About
          </Link>
          <Link to="/contact" className={contact ? "on-page" : ""}>
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default AdminNavigationBar;
