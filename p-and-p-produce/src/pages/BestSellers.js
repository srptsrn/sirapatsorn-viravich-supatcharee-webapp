import React, { useEffect, useState } from "react";
import "../styles/styleBestSellers.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Picture from "../assets/images/chicken-meat.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";
import CatagoryProduct from "../components/CatagoryProduct.js";

const BestSellers = () => {
  // const connector = firebase.firestore();
  // const [products, setProducts] = useState([]);

  // const componentDidMount = () => {
  //   let array = [];
  //   // อ่านข้อมูล
  //   connector
  //     .collection("products")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         const data = doc.data();
  //         var id = doc.id;
  //         data.id = id;
  //         array.push(data);
  //         console.log(data);
  //         if (JSON.stringify(array[0]) === JSON.stringify({ img: "" })) {
  //           array.shift();
  //         }
  //       });
  //       setProducts(array);
  //     });
  // }
  return (
    <div className="app-best-sellers">
      <NavBar bestSellers></NavBar>
      <div className="head-best-sellers">
        <div>
          <h2 className="best-sellers-center"> Best Sellers </h2>
        </div>
      </div>
      <CatagoryProduct bestSellers></CatagoryProduct>
      {/* <div className="row-best-sellers">
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
      </div> */}
      <Footer></Footer>
    </div>
  );
}

export default BestSellers;
