import React from "react";
import "../styles/stylePayment.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";
const connector = firebase.storage();
const storageRef = connector.ref();
const uploadImgeNewsPublish = "news/";
class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    const handleSubmitOrder = (event) => {
      event.preventDefault();
    };
    const clickConfirmOrder = () => {
        window.confirm('Please check the information is correct before you click the Confirm.')
    }
    const clickCancelOrder = () => {
        window.confirm('Are you sure you want to cancel this order?')
    }
    return (
      <div className="app-franchise">
        <NavBar></NavBar>
        <div className="body-payment-app">
          <div class="payment-header">
            <div>
              <h2>Payment</h2>
            </div>
          </div>
          <div>
            <div className="main-list-order-payment">
              <table className="table-display-product table-display-product-payment">
                <colgroup>
                  <col style={{ width: "40%" }} />
                  <col style={{ width: "30%" }} />
                  <col style={{ width: "30%" }} />
                </colgroup>
                <thead>
                  <tr className="table-topics">
                    <th>Name of product</th>
                    <th>Amount</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody id="body_table_product">
                  <tr class="row-orders">
                    <td class="orders-name">chicken1</td>
                    <td class="amount-orders">1</td>
                    <td class="price-orders">฿50</td>
                  </tr>
                  <tr class="row-orders">
                    <td class="orders-name">chicken2</td>
                    <td class="amount-orders">2</td>
                    <td class="price-orders">฿100</td>
                  </tr>
                  <tr class="row-orders">
                    <td class="orders-name">chicken4</td>
                    <td class="amount-orders">2</td>
                    <td class="price-orders">฿100</td>
                  </tr>
                </tbody>
              </table>

              <div class="total-amount-and-price">
                <h3 class="label-amount">
                  Total <span>5</span> items Total price ฿<span>250</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="fill-out-detail-info-customer">
            <h2>Shipping address</h2>
          </div>
          <form className="form-contact" onSubmit={handleSubmitOrder}>
            <div>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input name="firstName" type="text" id="firstNameCustomer" />
                <label htmlFor="email">
                  Email<span>*</span>
                </label>
                <input name="email" type="email" id="emailCustomer" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" type="text" id="lastName" />
                <label htmlFor="phone">Phone</label>
                <input name="phone" type="text" id="phoneCustomer" />
              </div>
            </div>
            <label htmlFor="textArea">
              Shipping Address<span>*</span>
            </label>
            <textarea
              id="textArea"
              name="textArea"
              rows="4"
              cols="70"
            ></textarea>
            <div>
              <div className="payment-slip-input">
                <label for="slip">
                  Payment slip<span>*</span>
                </label>
                <input
                  name="slip-payment"
                  type="file"
                  id="slipPaymentCustomer"
                />
              </div>
            </div>
          </form>
          <div className="btn-payment">
            <button type="submit" className="btn-cf-payment" onClick={clickConfirmOrder}>
              Confirm order
            </button>
            <button className="btn-cc-payment" onClick={clickCancelOrder}>Cancel</button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Payment;
