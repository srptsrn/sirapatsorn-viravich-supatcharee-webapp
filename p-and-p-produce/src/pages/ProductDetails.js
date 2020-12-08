import React from "react";
import "../styles/styleProductDetails.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Picture from "../assets/images/chicken-meat.jpg";
import firebase from "../components/Firebase.js";
const connector = firebase.firestore();

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProduct: {
        id: null,
        name: "",
        description: "",
        img: { a: "" },
        inventory: 0,
        price: 0,
        tag: null,
        visibility: true,
        img_order: [],
      },
      noData: false,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      console.log(id);
      let obj = {};
      connector
        .collection("products")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            obj = doc.data();
            obj.id = id;
            this.setState({
              dataProduct: obj,
            });
          } else {
            this.setState({ noData: true });
          }
        })
        .catch(function (error) {
          this.setState({ noData: true });
          console.log("Error getting document:", error);
        });
    } else {
      this.setState({ noData: true });
    }
  }
  render() {
    return (
      <div className="app-product-detail">
        <NavBar></NavBar>
        <div className="head-details">
          <div>
            <h2 className="details-left">Detail of product</h2>
          </div>
        </div>

        <div className="main-product-detail">
          <div className="main-image-product-detail">
            <div className="image-left-column-product-detail">
              <img
                src={
                  this.state.dataProduct.img[
                    this.state.dataProduct.img_order[0]
                  ]
                }
                width="350px"
                height="350px"
              />
            </div>
          </div>

          <div className="details-right-column">
            <div className="product-description">
              <h3>{this.state.dataProduct.name}</h3>
              <p>{this.state.dataProduct.description}</p>
              <h4>฿{this.state.dataProduct.price}</h4>
              <p>Amount</p>
              <input type="number" defaultValue="1" min="1" />
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
    );
  }
}

export default ProductDetail;