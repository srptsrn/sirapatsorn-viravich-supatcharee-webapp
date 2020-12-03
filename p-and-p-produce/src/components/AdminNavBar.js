import { render } from "@testing-library/react";
import React from "react";
import "../styles/styleAdNav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";

class AdminNavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleAdmin: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      visibleAdmin: !this.state.visibleAdmin,
    });
    console.log(this.state.visibleAdmin);
  }
  render() {
    const { products, orders, promote, signUp } = this.props;
    return (
      <div className="app-nav">
        <nav>
          <div>
            <Link to="/admin" className="logo-admin">
              <img src={require("../assets/images/icon-ppproduce.png")}></img>
              Admin
            </Link>
            <div className="type-admin-page">
              <Link to="/admin/promote">
                <button
                  id="promote-nav"
                  className={promote ? "select-admin-nav" : ""}
                >
                  Edit Banner
                </button>
              </Link>
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
          <Link>
          <button className="tr-web-home">return to web home</button>
          <button className="new-account">New account</button>
            <button className="my-account">My account</button>
            <button
              className="log-out"
              onClick={() => firebase.auth().signOut()}
            >
              Log out
            </button>
          </Link>
          <div
            className="menu-admin-nav"
            onClick={() => {
              this.toggleMenu();
            }}
          ></div>
        </nav>
        <div
          id="mySidenav"
          id="mySidenav"
          className={this.state.visibleAdmin ? "sidenav-show" : "sidenav-hide"}
        >
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link to="/admin">Edit Banner</Link>
          <Link to="/admin/products">Edit products</Link>
          <Link to="/admin/orders">Orders</Link>
          <Link to="/">Log out</Link>
        </div>
      </div>
    );
  }
}

export default AdminNavigationBar;
