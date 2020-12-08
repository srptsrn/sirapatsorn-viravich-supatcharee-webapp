import React, { useEffect, useState } from "react";
import "../styles/styleBestSellers.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Picture from "../assets/images/chicken-meat.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";
import CatagoryProduct from "../components/CatagoryProduct.js";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getUrlParameter = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    let results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };
  componentDidMount() {}
  render() {
    if (
      this.getUrlParameter("tag") &&
      this.getUrlParameter("tag") === "best_sellers"
    ) {
      return (
        <div className="app-best-sellers">
          <NavBar bestSellers></NavBar>
          <div className="head-best-sellers">
            <div>
              <h2 className="best-sellers-center">Best Sellers</h2>
            </div>
          </div>
          <CatagoryProduct bestSellers></CatagoryProduct>
          <Footer></Footer>
        </div>
      );
    }

    return (
      <div className="app-best-sellers">
        <NavBar allProducts></NavBar>
        <div className="head-best-sellers">
          <div>
            <h2 className="best-sellers-center"> All products </h2>
          </div>
        </div>
        <CatagoryProduct allProducts></CatagoryProduct>
        <Footer></Footer>
      </div>
    );
  }
}

export default Products;
