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
      <CatagoryProduct bestSellers></CatagoryProduct>
      {/* <div className="row-best-sellers">
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
      </div> */}

      <Footer></Footer>
    </div>
  );
}

export default AllProducts;
