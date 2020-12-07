import React from "react";
import "../styles/styleCart.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }
  componentDidMount() {
    const data = localStorage.getItem('products');
    this.setState({cartItems:JSON.parse(data)});
  }

  removeToCart(data) {
    let mainIndex = 0;
    this.state.cartItems.forEach((item, index) => {
      if (item.id === data.id) {
        mainIndex = index;
      }
    });
    this.setState({cartItems:this.state.cartItems.splice(mainIndex, 1)});
    localStorage.setItem('products', JSON.stringify(this.state.cartItems))
  }

  render() {
    let total = 0;
    for(const cart of this.state.cartItems) {
      total += cart.count * cart.price;
    }
    const envi = this
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
            {this.state.cartItems.length > 0 ? (
              <div>
                <div className="cart-left">You have {this.state.cartItems.length} in the cart{" "}</div>

                <table class="cart-table">

                  <tr class="head-table">
                    <th></th>
                    <th>Name of product</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                  </tr>
                  {this.state.cartItems.map((value, index) => {
                    return (<tr>
                      <td class="image-table">
                        <Link to="/product-details" className='link-no-underline'>
                          <img
                            src={value ? value.img[value.img_order[0]] : ""}
                            width="200px"
                            height="200px"
                          />
                        </Link>
                      </td>
                      <td class="name">
                        <Link to="/product-details" className='link-no-underline'>
                        {value.name}
                  </Link>
                      </td>
                      <td class="price">฿{value.price}</td>
                      <td class="quantity">
                        <input type="number" defaultValue="1" min="1" />
                        <button class="button-remove" onClick={() => envi.removeToCart(value)}>Delete</button>
                      </td>
                      <td class="total">฿{value.price}</td>
                    </tr>)
                  })
                  }

                </table>
                <div class="total-payment">
                  <div class="total-cart">
                    <label class="total-label">Total</label>
                    <br />
                <div class="total-value">฿{total}</div>
                  </div>
                  <button class="button-payment">Payment</button>
                </div>
              </div>
            ) : (
                <div className="cart-left">Cart is emtry</div>
              )}
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Cart;
