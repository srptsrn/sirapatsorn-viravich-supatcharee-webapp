import React from "react";
import "../styles/styleProductDetails.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="app-product-detail">
        <NavBar></NavBar>
        <div class="head-details">
          <div>
            <h2 class="details-left">รายละเอียดสินค้า</h2>
          </div>
        </div>

        <div class="main">
          <div class="main-image">
            <div class="image-left-column">
              <img
                src={require("../assets/images/drumstick.jpg")}
                alt="drumstick"
                width="350px"
                height="350px"
              />
            </div>
          </div>

          <div class="details-right-column">
            <div class="product-description">
              <h3>Drumstick</h3>
              <p>
                I'm a product description. This is a great place to "sell"
                product and grab buyers' attention. Describe your product
                clearly and concisely. Use unique keywords.
              </p>
              <h4>฿50.00</h4>
              <p>จำนวน</p>
              <input type="number" value="1" min="1" />
              <br />
            </div>

            <div class="button-add">
              <button class="button-add-order">เพิ่มลงในตะกร้าสินค้า</button>
              <br />
              <button class="button-buy">ซื้อเลย</button>
            </div>
          </div>
        </div>

        <div class="similar-product">
          <h4>สินค้าที่คล้ายกัน</h4>
        </div>

        <div class="row-image">
          <div class="column-image">
            <img
              src={require("../assets/images/wingstick.jpg")}
              alt="wingsticks"
              width="200px"
              height="200px"
              class="best-seller"
            />
            <div class="ribbon-on-image-first">Best Seller</div>
            <h5>Wingsticks 1 kg.</h5>
            <h5>฿50.00</h5>
          </div>

          <div class="column-image">
            <img
              src={require("../assets/images/breast.jpg")}
              alt="breasts"
              width="200px"
              height="200px"
              class="best-seller"
            />
            <div class="ribbon-on-image-second">Best Seller</div>
            <h5>Breasts 1 kg.</h5>
            <h5>฿50.00</h5>
          </div>

          <div class="column-image">
            <img
              src={require("../assets/images/drumstick.jpg")}
              alt="drumsticks "
              width="200px "
              height="200px "
              class="best-seller"
            />
            <div class="ribbon-on-image-third">Best Seller</div>
            <h5>Drumsticks 1 kg.</h5>
            <h5>฿50.00</h5>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ProductDetail;
