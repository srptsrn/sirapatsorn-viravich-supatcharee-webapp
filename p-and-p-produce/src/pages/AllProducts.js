import React from "react";
import "../styles/styleAllProducts.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Picture from "../assets/images/chicken-meat.jpg";

function AllProducts() {
  return (
    <div className="app-allProducts">
      <NavBar allProducts></NavBar>
      <div className="head-allProducts">
        <div>
          <h2 className="allProducts-center"> All Products </h2>
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
      <button type="button" className="btn-more" >More </button>
      <Footer></Footer>
    </div>
  );
}

export default AllProducts;
