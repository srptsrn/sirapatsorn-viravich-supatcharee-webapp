import React from "react";
import "../styles/styleProductDetails.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="app-product-detail">
        <NavBar></NavBar>
        <div className="head-details">
          <div>
            <h2 className="details-left">Detail of product</h2>
          </div>
        </div>

        <div className="main-product-detail">
          <div className="main-image-product-detail">
            <div className="image-left-column-product-detail">
              <img
                src={require("../assets/images/drumstick.jpg")}
                alt="drumstick"
                width="350px"
                height="350px"
              />
            </div>
          </div>

          <div className="details-right-column">
            <div className="product-description">
              <h3>Drumstick</h3>
              <p>
                I'm a product description. This is a great place to "sell"
                product and grab buyers' attention. Describe your product
                clearly and concisely. Use unique keywords.
              </p>
              <h4>฿50.00</h4>
              <p>จำนวน</p>
              <input type="number" defaultValue='1' min="1" />
              <br />
            </div>

            <div className="button-add-product-detail">
              <Link to="/cart">
                <button className="button-add-order">add to cart</button>
              </Link>
              <br />
              <Link to="/cart">
                <button className="button-buy">Buy now</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="similar-product">
          <h4>Similar product</h4>
        </div>

        <div className="row-image">
          <div className="column-image">
            <img
              src={require("../assets/images/wingstick.jpg")}
              alt="wingsticks"
              width="200px"
              height="200px"
              className="best-seller"
            />
            <div class="ribbon-on-image-first">Best Seller</div>
            <h5>Wingsticks 1 kg.</h5>
            <h5>฿50.00</h5>
          </div>

          <div class="column-image">
            <img
              src={require("../assets/images/breast.jpg")}
              alt="breasts"
              width="200px"
              height="200px"
              class="best-seller"
            />
            <div class="ribbon-on-image-second">Best Seller</div>
            <h5>Breasts 1 kg.</h5>
            <h5>฿50.00</h5>
          </div>

          <div class="column-image">
            <img
              src={require("../assets/images/drumstick.jpg")}
              alt="drumsticks "
              width="200px "
              height="200px "
              class="best-seller"
            />
            <div class="ribbon-on-image-third">Best Seller</div>
            <h5>Drumsticks 1 kg.</h5>
            <h5>฿50.00</h5>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ProductDetail;
