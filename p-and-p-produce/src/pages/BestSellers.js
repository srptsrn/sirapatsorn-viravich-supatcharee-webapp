import React, { useEffect, useState } from "react";
import "../styles/styleBestSellers.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Picture from "../assets/images/chicken-meat.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";
import CatagoryProduct from "../components/CatagoryProduct.js";

const BestSellers = () => {
  return (
    <div className="app-best-sellers">
      <NavBar bestSellers></NavBar>
      <div className="head-best-sellers">
        <div>
          <h2 className="best-sellers-center"> Best Sellers </h2>
        </div>
      </div>
      <CatagoryProduct bestSellers></CatagoryProduct>
      <Footer></Footer>
    </div>
  );
}

export default BestSellers;
