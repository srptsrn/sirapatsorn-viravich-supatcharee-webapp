import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";
import { CounterProvider } from "../components/CounterProvider.js";

const connector = firebase.firestore();
class CatagoryProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProduct: [{ img: {}, img_order: [] }],
      cartItems: [],
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
          if (
            this.props.displayNumber &&
            array.length >= parseInt(this.props.displayNumber)
          ) {
          } else {
            let data = doc.data();
            var id = doc.id;
            data.id = id;
            if (this.props.bestSellers && data.tag === "best_sellers") {
              array.push(data);
            }
            if (this.props.allProducts) {
              array.push(data);
            }
            if (this.props.searchResults) {
              array.push(data);
            }
            if (JSON.stringify(array[0]) === JSON.stringify({ img: "" })) {
              array.shift();
            }
          }
        });
        this.setState({ dataProduct: array });
      });
  }

  handleClick = (event) => {
    const modal = document.querySelector(".modal")
    const closeBtn = document.querySelector(".close")
    modal.style.display = "block";
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    })
  }

  test(a) {
    alert(a)
  }

  addToCart(data) {
    const cartItems = this.state.cartItems;
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === data.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...data, count: 1 })
    }
    localStorage.setItem('products', JSON.stringify(cartItems))
  }



  render() {
    const {
      bestSellers,
      allProducts,
      about,
      contact,
      franchise,
      searchResults,
      displayNumber,
    } = this.props;

    const cardEnvi = this
    const listCategoryProduct = this.state.dataProduct.map(function (item, i) {
      const imgUrl = item.img;
      const nameImg = item.img_order[0];
      return (
        <div className="column-best-sellers">

          <div className="card-best-sellers">
            <Link to={"/product-details/" + item.id} className="link-no-underline">
              <img src={imgUrl[nameImg]}></img>
              <p className="product-name">{item.name}</p>
              <p className="product-price">฿{item.price}</p>
              {/* <input
                type="number"
                className="input-product-quantity"
                defaultValue="1"
                min="1"
              ></input> */}
            </Link>
            <button onClick={() => cardEnvi.addToCart(item)} type="button" className="btn-add-to-cart" >
              Add to Cart
              </button>

            <Link to="/cart">
              <button onClick={() => cardEnvi.addToCart(item)} type="button" className="btn-buy-now">
                Buy now
                </button>
            </Link>
          </div>

        </div>
      );
    });
    return <div className="row-best-sellers">{listCategoryProduct}</div>;
  }
}

export default CatagoryProduct;
