import React, { useEffect, useState } from "react";
import "../styles/styleSearchResults.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Picture from "../assets/images/chicken-meat.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SearchResults = () => {

  const products = [{
    name: 'c1',
    price: 50.0
  },
  {
    name: 'c2',
    price: 50.0
  },
  {
    name: 'c3',
    price: 50.0
  }]

  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(new URLSearchParams(window.location.search).get('search'));
    // console.log(new URLSearchParams(window.location.search).get('search'));
  }, [])

  const handleSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      window.location = `/search-results?search=${search}`;
    }
  }

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

        <input id="search_web" type="text" class="search_web" value={search} onChange={handleSearchValueChange} onKeyDown={handleKeyDown} placeholder="Search" />
      </div>
      <div className="row-best-sellers">
        {products.map((value, index) => {
          return <div className="column-best-sellers">
          <Link to="/product-details" className="link-no-underline">
            <div className="card-best-sellers">
              <img src={Picture}></img>
              <p className="product-name">{value.name}</p>
              <p className="product-price">฿{value.price}</p>
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
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default SearchResults;
