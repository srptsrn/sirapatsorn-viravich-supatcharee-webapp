import React from "react";
import "../styles/styleCart.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";

class Cart extends React.Component {
  render() {
    return (
      <div className="app-cart">
        <NavBar></NavBar>
        <div class="head-cart">
          <div>
            <h3 class="cart-left">ตะกร้าสินค้าของฉัน</h3>
          </div>
        </div>
        <div class="main-carts">
          <div>
            <table class="cart-table">
              <tr class="head-table">
                <th>รูปสินค้า</th>
                <th>ชื่อสินค้า</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th>รวม</th>
              </tr>

              <tr>
                <td class="image-table">
                  <img
                    src={require("../assets/images/breast.jpg")}
                    alt="breast"
                    width="200px"
                    height="200px"
                  />
                </td>
                <td class="name">
                  Breast
                  <br />1 kg.
                </td>
                <td class="price">฿50.00</td>
                <td class="quantity">
                  <input type="number" value="1" min="1" />
                  <button class="button-remove">ลบสินค้า</button>
                </td>
                <td class="total">฿50.00</td>
              </tr>

              <tr>
                <td class="image-table">
                  <img
                    src={require("../assets/images/drumstick.jpg")}
                    alt="drumstick"
                    width="200px"
                    height="200px"
                  />
                </td>
                <td class="name">
                  Drumstick
                  <br />1 kg.
                </td>
                <td class="price">฿50.00</td>
                <td class="quantity">
                  <input type="number" value="2" min="1" />
                  <button class="button-remove">ลบสินค้า</button>
                </td>
                <td class="total">฿100.00</td>
              </tr>

              <tr>
                <td class="image-table">
                  <img
                    src={require("../assets/images/wingstick.jpg")}
                    alt="wingstick"
                    width="200px"
                    height="200px"
                  />
                </td>
                <td class="name">
                  Wingstick
                  <br />1 kg.
                </td>
                <td class="price">฿50.00</td>
                <td class="quantity">
                  <input type="number" value="2" min="1" />
                  <button class="button-remove">ลบสินค้า</button>
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
            </div>
            <button class="button-payment">ชำระเงิน</button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Cart;
