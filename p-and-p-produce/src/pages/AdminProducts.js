import React from "react";
import "../styles/styleAdmin.css";
import AdminNavBar from "../components/AdminNavBar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";
const connector = firebase.firestore();

class AdminProducts extends React.Component {
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
          var id = doc.id;
          data.id = id;
          array.push(data);
          console.log(data);
          if (JSON.stringify(array[0]) === JSON.stringify({ img: "" })) {
            array.shift();
          }
        });
        this.setState({ dataProduct: array });
      });
  }
  render() {
    const changeVis = (index, selectItem) => {
      // let dataProduct = [...this.state.dataProduct];
      // if (selectItem.visibility == false) {
      //   dataProduct[index] = { ...dataProduct[index], visibility: true };
      //   this.setState({ dataProduct });
      // } else {
      //   dataProduct[index] = { ...dataProduct[index], visibility: false };
      //   this.setState({ dataProduct });
      // }
      var vis = selectItem.visibility;
      const cf = window.confirm(
        (vis ? "Hide " : "Show ") + selectItem.name + "?"
      );
      if (cf) {
        connector
          .collection("products")
          .doc(selectItem.id)
          .set(
            {
              visibility: !vis,
            },
            { merge: true }
          )
          .then(() => {
            console.log("visibility");
            let dataProduct = [...this.state.dataProduct];
            if (vis == false) {
              dataProduct[index] = { ...dataProduct[index], visibility: true };
              this.setState({ dataProduct });
            } else {
              dataProduct[index] = { ...dataProduct[index], visibility: false };
              this.setState({ dataProduct });
            }
          })
          .catch((error) => console.error(error));
      }
    };
    const duplicateDoc = (index, selectItem) => {
      const cf = window.confirm("Duplicate " + selectItem.name + "?");
      if (cf) {
        let data = selectItem;
        delete data.id;
        data.name = data.name + " (copy)";
        connector
          .collection("products")
          .doc()
          .set(this.state.dataProduct[index])
          .then(() => {
            console.log("duplicate");
            window.location.reload(true);
          })
          .catch((error) => console.error(error));
      }
    };
    const deleteDoc = (index, selectItem) => {
      const cf = window.confirm("Delete " + selectItem.name + "?");
      if (cf) {
        connector
          .collection("products")
          .doc(selectItem.id)
          .delete()
          .then(() => {
            console.log("Delete");
            window.location.reload(true);
          })
          .catch((error) => console.error(error));
      }
    };
    const editProduct = (id) => {
      console.log(id);
      window.location.pathname.includes("/admin/products/" + id);
    };
    const visibility = {
      true: "https://www.flaticon.com/svg/static/icons/svg/565/565654.svg", // show
      false: "https://www.flaticon.com/svg/static/icons/svg/565/565655.svg", // hide
    };
    const listItemsProduct = this.state.dataProduct.map(function (item, i) {
      return (
        <tr
          key={i}
          onClick={() => {
            editProduct(item.id);
          }}
        >
          <td>
            <Link to={"/admin/products/" + item.id}>
              <img className="table-img-product" src={item.img}></img>
            </Link>
          </td>
          <td className="name-product-list-table-display-product">
            <Link to={"/admin/products/" + item.id}>{item.name}</Link>
          </td>
          <td>{item.price}</td>
          <td>{item.inventory}</td>
          <td className="action-edit-product">
            <div
              className="visibility"
              style={{
                backgroundImage: `url("${visibility[item.visibility]}")`,
              }}
              onClick={() => {
                changeVis(i, item);
              }}
            ></div>
            <div
              className="duplicate"
              onClick={() => {
                duplicateDoc(i, item);
              }}
            ></div>
            <div
              className="delete"
              onClick={() => {
                deleteDoc(i, item);
              }}
            ></div>
          </td>
        </tr>
      );
    });
    return (
      <div className="app-admin">
        <AdminNavBar products></AdminNavBar>
        <div className="product-tab">
          <div className="head-product-tab">
            <div>
              <h3>Products</h3>
              <h3 id="num-product">{this.state.dataProduct.length}</h3>
            </div>
            <button>+ New Product</button>
          </div>
          <div className="display-product">
            <div className="select-filter-product">
              <div>
                <label htmlFor="collection_select_product">Collection</label>
                <select
                  name="collection_select_product"
                  id="colection_select_product"
                >
                  <option value="all-product">All products</option>
                  <option value="best-sell">Best sellers</option>
                </select>
              </div>
              <div>
                <label htmlFor="filter_select_product">Filter by</label>
                <select name="filter_select_product" id="filter_select_product">
                  <option value="all-product">All</option>
                  <option value="in-stock">In stock</option>
                  <option value="out-stock">Out of stock</option>
                  <option value="show">Visibility show</option>
                  <option value="hide">Visibility hide</option>
                </select>
              </div>
              <div className="search-tab">
                <div className="icon-search"></div>
                <input
                  id="search_product"
                  type="text"
                  className="search"
                  placeholder="Search"
                />
              </div>
            </div>
            <table className="table-display-product">
              <colgroup>
                <col style={{ width: "22%" }} />
                <col style={{ width: "22%" }} />
                <col style={{ width: "18%" }} />
                <col style={{ width: "22%" }} />
                <col style={{ width: "16%" }} />
              </colgroup>
              <thead>
                <tr className="table-topics">
                  <th></th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>
                    INV<span>ENTORY</span>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="body_table_product">{listItemsProduct}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminProducts;
