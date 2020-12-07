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
          {/* <h1>Category</h1> */}
          {/* <div>
            <label htmlFor="category_chicken_btn">
              <img
                className="icon-chicken-home"
                src={require("../assets/images/rooster.png")}
              />
            </label>

            <button
              id="category_chicken_btn"
              onClick={() => {
                window.location = "/all-products";
              }}
            >
              Chicken
            </button>
            <button
              id="category_pork_btn"
              onClick={() => {
                window.location = "/all-products";
              }}
            >
              Pork
            </button>
            <label htmlFor="category_pork_btn">
              <img
                className="icon-pork-home"
                src={require("../assets/images/pork.png")}
              />
            </label>
          </div> */}
        </div>
        <div className="head-best-sellers">
          <div>
            <h2 className="best-sellers-center"> Best Sellers </h2>
          </div>
        </div>

        <div className="row-best-sellers">
        <CatagoryProduct bestSellers displayNumber="4"></CatagoryProduct>
          {/* <div className="column-best-sellers">
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
          </div> */}
          <Link to="/best-sellers">
          <button>See more..</button>
          </Link>
        </div>

        <div className="head-best-sellers">
          <div>
            <h2 className="best-sellers-center"> All products </h2>
          </div>
        </div>

        <div className="row-best-sellers">
        <CatagoryProduct allProducts displayNumber="4"></CatagoryProduct>
          {/* <div className="column-best-sellers">
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
          </div> */}
          <Link to="/all-products">
          <button>See more..</button>
          </Link>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
