import React from "react";
import "../styles/styleProductDetails.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Picture from "../assets/images/chicken-meat.jpg";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }
  componentDidMount() {
    const data = localStorage.getItem('products');
    this.setState({ cartItems: JSON.parse(data) });
  }

  addToCart(data) {
    const cartItems = this.state.cartItems;
    let alreadyInCart = false;
    cartItems.forEach((value) => {
      if (value.id === data.id) {
        value.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...data, count: 1 })
    }
    localStorage.setItem('products', cartItems)
  }
  render() {
    const envi = this
    return (
      <div className="app-product-detail">
        <NavBar></NavBar>
        <div className="head-details">
          <div>
            <h2 className="details-left">Detail of product</h2>
          </div>
        </div>
        <div>

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

          <div className="head-best-sellers">
            <div>
              <h2 className="best-sellers-center">Similar product</h2>
            </div>
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
      </div>
    );
  }
}

export default ProductDetail;
