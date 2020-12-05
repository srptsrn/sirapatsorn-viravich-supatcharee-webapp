import React from "react";
import "../styles/styleCart.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    return (
      <div className="app-cart">
        <NavBar></NavBar>
        <div class="head-cart">
          <div>
            <h3 class="cart-left">My cart</h3>
          </div>
        </div>
        <div class="main-carts">
          <div>
            <table class="cart-table">
              <tr class="head-table">
                <th></th>
                <th>Name of product</th>
                <th>price</th>
                <th>Amount</th>
                <th>Total</th>
              </tr>

              <tr>
                <td class="image-table">
                  <Link to="/product-details" className='link-no-underline'>
                    <img
                      src={require("../assets/images/breast.jpg")}
                      alt="breast"
                      width="200px"
                      height="200px"
                    />
                  </Link>
                </td>
                <td class="name">
                  <Link to="/product-details" className='link-no-underline'>
                    Breast
                    <br />1 kg.
                  </Link>
                </td>
                <td class="price">฿50.00</td>
                <td class="quantity">
                  <input type="number" defaultValue="1" min="1" />
                  <button class="button-remove">Delete</button>
                </td>
                <td class="total">฿50.00</td>
              </tr>

              <tr>
                <td class="image-table">
                <Link to="/product-details" className='link-no-underline'>
                  <img
                    src={require("../assets/images/drumstick.jpg")}
                    alt="drumstick"
                    width="200px"
                    height="200px"
                  />
                  </Link>
                </td>
                <td class="name">
                <Link to="/product-details" className='link-no-underline'>
                  Drumstick
                  <br />1 kg.
                  </Link>
                </td>
                <td class="price">฿50.00</td>
                <td class="quantity">
                  <input type="number" defaultValue="2" min="1" />
                  <button class="button-remove">Delete</button>
                </td>
                <td class="total">฿100.00</td>
              </tr>

              <tr>
                <td class="image-table">
                <Link to="/product-details" className='link-no-underline'>
                  <img
                    src={require("../assets/images/wingstick.jpg")}
                    alt="wingstick"
                    width="200px"
                    height="200px"
                  />
                  </Link>
                </td>
                <td class="name">
                <Link to="/product-details" className='link-no-underline'>
                  Wingstick
                  <br />1 kg.
                  </Link>
                </td>
                <td class="price">฿50.00</td>
                <td class="quantity">
                  <input type="number" defaultValue="2" min="1" />
                  <button class="button-remove">Delete</button>
                </td>
                <td class="total">฿100.00</td>
              </tr>
            </table>

            <div class="total-payment">
              <div class="total-cart">
                <label class="total-label">Total</label>
                <br />
                <div class="total-value">฿250.00</div>
              </div>
              <button class="button-payment">Payment</button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Cart;
