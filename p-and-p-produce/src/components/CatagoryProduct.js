import React from "react";
import Picture from "../assets/images/chicken-meat.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";
const connector = firebase.firestore();

class CatagoryProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProduct: [{ img: "" }],
    };
  }
  componentDidMount() {
    let array = [];
    // อ่านข้อมูล
    connector
      .collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (this.props.bestSellers && data.tag === "best_sellers") {
            array.push(data);
          }
          if (this.props.allProducts) {
            array.push(data);
          }
          if (JSON.stringify(array[0]) === JSON.stringify({ img: "" })) {
            array.shift();
          }
        });
        this.setState({ dataProduct: array });
      });
  }
  render() {
    const {
      bestSellers,
      allProducts,
      about,
      contact,
      franchise,
      searchResults,
    } = this.props;

    const listCategoryProduct = this.state.dataProduct.map(function (item, i) {
      // const imgUrl = item.img;
      // const nameImg = item.img_order[0];
      return (
        <div className="column-best-sellers">
          <Link to="/product-details" className="link-no-underline">
            <div className="card-best-sellers">
              <img src={Picture}></img>
              <p className="product-name">{item.name}</p>
              <p className="product-price">฿{item.price}</p>
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
      );
    });
    return <div className="row-best-sellers">{listCategoryProduct}</div>;
  }
}

export default CatagoryProduct;
