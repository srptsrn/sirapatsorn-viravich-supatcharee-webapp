import React from "react";
import "../styles/styleHome.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import ImgSlide from "../components/ImgSlide.js";
import CatagoryProduct from "../components/CatagoryProduct.js";
import Picture from "../assets/images/chicken-meat.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="app-home">
        <NavBar></NavBar>
        <ImgSlide></ImgSlide>
        <div className="category-btn">
        </div>
        <div className="head-best-sellers">
          <div>
            <h2 className="best-sellers-center"> Best Sellers </h2>
          </div>
        </div>
        <CatagoryProduct bestSellers displayNumber="4"></CatagoryProduct>
        <Link to="/best-sellers">
          <button>See more..</button>
        </Link>


        <div className="head-best-sellers">
          <div>
            <h2 className="best-sellers-center"> All products </h2>
          </div>
        </div>

          <CatagoryProduct allProducts displayNumber="4"></CatagoryProduct>
          <Link to="/all-products">
            <button>See more..</button>
          </Link>
        
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
