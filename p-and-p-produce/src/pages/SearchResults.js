import React from "react";
import "../styles/styleSearchResults.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Picture from "../assets/images/chicken-meat.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function SearchResults() {
  return (
    <div className="app-search-results">
      <NavBar searchResults></NavBar>
      <div className="head-search-results">
        <div>
          <h2 className="search-results-center"> Search Results </h2>
        </div>
      </div>
      <div class="search-tab-search-results">
        <div class="icon-search"></div>
        <input id="search_web" type="text" class="search_web" placeholder="Search" />
      </div>
      <div className="row-best-sellers">
        <div className="column-best-sellers">
          <Link to="/product-details" className="link-no-underline">
            <div className="card-best-sellers">
              <img src={Picture}></img>
              <p className="product-name">Chicken</p>
              <p className="product-price">฿50.00</p>
              <input
                type="number"
                className="input-product-quantity"
                defaultValue="1"
                min="1"
              ></input>
              <Link to="/cart">
                <button type="button" className="btn-add-to-cart">
                  Add to Cart{" "}
                </button>
              </Link>
              <Link to="/cart">
              <button type="button" className="btn-buy-now">
                Buy now
              </button>
              </Link>
            </div>
          </Link>
        </div>
        <div className="column-best-sellers">
          <Link to="/product-details" className="link-no-underline">
            <div className="card-best-sellers">
              <img src={Picture}></img>
              <p className="product-name">Chicken</p>
              <p className="product-price">฿50.00</p>
              <input
                type="number"
                className="input-product-quantity"
                defaultValue="1"
                min="1"
              ></input>
              <Link to="/cart">
                <button type="button" className="btn-add-to-cart">
                  Add to Cart{" "}
                </button>
              </Link>
              <Link to="/cart">
              <button type="button" className="btn-buy-now">
                Buy now
              </button>
              </Link>
            </div>
          </Link>
        </div>
        <div className="column-best-sellers">
          <Link to="/product-details" className="link-no-underline">
            <div className="card-best-sellers">
              <img src={Picture}></img>
              <p className="product-name">Chicken</p>
              <p className="product-price">฿50.00</p>
              <input
                type="number"
                className="input-product-quantity"
                defaultValue="1"
                min="1"
              ></input>
              <Link to="/cart">
                <button type="button" className="btn-add-to-cart">
                  Add to Cart{" "}
                </button>
              </Link>
              <Link to="/cart">
              <button type="button" className="btn-buy-now">
                Buy now
              </button>
              </Link>
            </div>
          </Link>
        </div>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default SearchResults;
