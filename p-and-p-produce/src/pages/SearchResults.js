import React, { useEffect, useState } from "react";
import "../styles/styleSearchResults.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Picture from "../assets/images/chicken-meat.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";

const SearchResults = () => {
  const connector = firebase.firestore();

  const [search, setSearch] = useState("");

  const [products, setProducts] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  const filter = (search) => {
    if (search != "") {
      console.log(products);
      const result = products.filter((product) =>
        String(product.name.toLowerCase()).includes(search.toLowerCase())
      );
      console.log(result);
      setSearchResults(result);
    }
  };

  useEffect(() => {
    const getData = async () => {
      let array = [];
      // อ่านข้อมูล
      await connector
        .collection("products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            var id = doc.id;
            data.id = id;
            array.push(data);
            if (JSON.stringify(array[0]) === JSON.stringify({ img: "" })) {
              array.shift();
            }
          });
          setProducts(array);
          setSearchResults(array);
        });
    };
    setSearch(new URLSearchParams(window.location.search).get("search"));
    getData();
  }, []);

  useEffect(() => {
    console.log(search);
    filter(search);
    if (search === "") {
      setSearchResults(products);
    }
  }, [search, products]);

  const handleSearchValueChange = (event) => {
    setSearch(event.target.value);
  };

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
        <input
          id="search_web"
          type="text"
          class="search_web"
          value={search}
          onChange={handleSearchValueChange}
          placeholder="Search"
        />
      </div>
      <div className="row-search-results">
        {searchResults.map((value, index) => {
          console.log("value is" + value)
          return (
            <div className="column-search-results">
              <Link to="/product-details" className="link-no-underline">
                <div className="card-search-results">
                  <img src={value ? value.img[value.img_order[0]] : ""}></img>
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
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SearchResults;