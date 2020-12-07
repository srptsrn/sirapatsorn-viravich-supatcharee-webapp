import React from "react";
import "../styles/stylePayment.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";
const connector = firebase.firestore();
class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const handleSubmitOrder = (event) => {
      event.preventDefault();
      let {
        firstName,
        email,
        lastName,
        phone,
        address,
      } = event.target.elements;
      console.log(address.value);
      connector
        .collection("orders")
        .doc()
        .set({
          address: address.value,
          confirm: "",
          date: "18:30 16/09/2020",
          email: email.value,
          examiner: {
            cancle: "",
            confirm_order: "",
            send: "",
          },
          name: firstName.value + " " + lastName.value,
          payment_slip: {
            "846047.svg":
              "https://firebasestorage.googleapis.com/v0/b/p-and-p-produce-web-app.appspot.com/o/payment-slip%2F846047.svg?alt=media&token=58058469-6281-4e54-a2cb-98710544b1bc",
          },
          phone: phone.value,
          products: {
            mvHOQpDOV1IEwfVNAtfl: 6,
          },
          status: "",
          tracking: "",
        })
        .then(() => {
          window.location.href = "/";
        })
        .catch((error) => console.error(error));
    };
    const clickConfirmOrder = () => {
      const cf = window.confirm(
        "Please check the information is correct before you click the Confirm."
      );
      if (cf) {
        document.getElementById("btn_submit_form_order").click();
      }
    };
    const clickCancelOrder = () => {
      const cf = window.confirm("Are you sure you want to cancel this order?");
      if (cf) {
        window.location.href = "/";
      }
    };
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
              name="address"
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
            <button
              type="submit"
              className="hide"
              id="btn_submit_form_order"
            ></button>
          </form>
          <div className="btn-payment">
            <button className="btn-cf-payment" onClick={clickConfirmOrder}>
              Confirm order
            </button>
            <button className="btn-cc-payment" onClick={clickCancelOrder}>
              Cancel
            </button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Payment;
