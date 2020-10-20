import React from "react";
import "../styles/styleSearchResults.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Picture from "../assets/images/chicken-meat.jpg";

function SearchResults() {
  return (
    <div className="app-searchResults">
      <NavBar searchResults></NavBar>
      <div className="head-searchResults">
        <div>
          <h2 className="searchResults-center"> Search Results </h2>
        </div>
      </div>
      <div class="search-tab-search-results">
        <div class="icon-search"></div>
        <input id="search_web" type="text" class="search_web" placeholder="Search" />
      </div>

      <div class="btn-group">
        <button>All posts</button>
        <button>Products</button>
        <button>Pages</button>
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
            <img src={Picture}></img>
            <p class="productName">Chicken</p>
            <p class="productPrice">฿50.00</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={Picture}></img>
            <p class="productName">Chicken</p>
            <p class="productPrice">฿50.00</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={Picture}></img>
            <p class="productName">Chicken</p>
            <p class="productPrice">฿50.00</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={Picture}></img>
            <p class="productName">Chicken</p>
            <p class="productPrice">฿50.00</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={Picture}></img>
            <p class="productName">Chicken</p>
            <p class="productPrice">฿50.00</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={Picture}></img>
            <p class="productName">Chicken</p>
            <p class="productPrice">฿50.00</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={Picture}></img>
            <p class="productName">Chicken</p>
            <p class="productPrice">฿50.00</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={Picture}></img>
            <p class="productName">Chicken</p>
            <p class="productPrice">฿50.00</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={Picture}></img>
            <p class="productName">Chicken</p>
            <p class="productPrice">฿50.00</p>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default SearchResults;
