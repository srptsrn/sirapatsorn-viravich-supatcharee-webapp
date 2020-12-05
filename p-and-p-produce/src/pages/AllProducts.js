import React from "react";
// import "../styles/styleAllProducts.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import CatagoryProduct from "../components/CatagoryProduct.js";

function AllProducts() {
  return (
    <div className="app-best-sellers">
      <NavBar allProducts></NavBar>
      <div className="head-best-sellers">
        <div>
          <h2 className="best-sellers-center"> All products </h2>
        </div>
      </div>
      <CatagoryProduct allProducts></CatagoryProduct>
      <Footer></Footer>
    </div>
  );
}

export default AllProducts;
