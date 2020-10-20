import React from "react";
import "../styles/styleBestSellers.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Picture from "../assets/images/chicken-meat.jpg";

function BestSellers() {
  return (
    <div className="app-bestSellers">
      <NavBar bestSellers></NavBar>
      <div className="head-bestSellers">
        <div>
          <h2 className="bestSellers-center"> Best Sellers </h2>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="card">
            <img src={Picture}></img>
            <p className="productName">Chicken</p>
            <p className="productPrice">฿50.00</p>
            <input type="number" className="input-product-quantity"></input>
            <button type="button" className="btn-add-to-cart" >Add to Cart </button>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Picture}></img>
            <p className="productName">Chicken</p>
            <p className="productPrice">฿50.00</p>
            <input type="number" className="input-product-quantity"></input>
            <button type="button" className="btn-add-to-cart" >Add to Cart </button>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Picture}></img>
            <p className="productName">Chicken</p>
            <p className="productPrice">฿50.00</p>
            <input type="number" className="input-product-quantity"></input>
            <button type="button" className="btn-add-to-cart" >Add to Cart </button>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Picture}></img>
            <p className="productName">Chicken</p>
            <p className="productPrice">฿50.00</p>
            <input type="number" className="input-product-quantity"></input>
            <button type="button" className="btn-add-to-cart" >Add to Cart </button>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Picture}></img>
            <p className="productName">Chicken</p>
            <p className="productPrice">฿50.00</p>
            <input type="number" className="input-product-quantity"></input>
            <button type="button" className="btn-add-to-cart" >Add to Cart </button>
          </div>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default BestSellers;
