import React from "react";
import "../styles/styleAdmin.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AdminNavBar from "../components/AdminNavBar.js";
import firebase from "../components/Firebase.js";
const connector = firebase.firestore();

class AdminOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataOrders: [],
    };
  }
  componentDidMount() {
    let array = [];
    // อ่านข้อมูล
    connector
      .collection("orders")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();

          var id = doc.id;
          data.id = id;
          array.push(data);
        });
        this.setState({ dataOrders: array });
        // let nnn = this.state.dataOrders[0];
        //   delete nnn.id;
        // connector
        //     .collection("orders")
        //     .doc()
        //     .set(nnn)
        //     .then(() => {
        //       console.log("duplicate");
        //     })
      });
  }
  render() {
    const detailProduct = (id) => {
      window.location.href = "/admin/orders/" + id;
    };
    const listItemsOrder = this.state.dataOrders.map(function (item, i) {
      return (
        <tr
          key={i}
          onClick={() => {
            detailProduct(item.id);
          }}
        >
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.date}</td>
          <td>{item.confirm}</td>
          <td>{item.status}</td>
          <Link>
            <td className="detail-order">
              <div className="detail"></div>
            </td>
          </Link>
        </tr>
      );
    });
    return (
      <div className="app-admin">
        <AdminNavBar orders></AdminNavBar>
        <div className="orders-tab">
          <div className="head-orders-tab">
            <div>
              <h3>Orders</h3>
            </div>
          </div>
          <div className="display-orders">
            <div className="select-filter-orders">
              <div>
                <label htmlFor="filter_select_order">Filter by</label>
                <select name="filter_select_order" id="filter_select_order">
                  <option value="all-order">All</option>
                  <option value="cf-order">Confirmed</option>
                  <option value="cc-order">Cencel</option>
                  <option value="uc-order">Unconfirmed</option>
                </select>
              </div>
              <div>
                <label htmlFor="status_select_order">Status</label>
                <select name="status_select_order" id="status_select_order">
                  <option value="all-order">All</option>
                  <option value="sended-order">Sended</option>
                  <option value="unsend-order">Unsend</option>
                </select>
              </div>
              <div className="search-tab">
                <div className="icon-search"></div>
                <input
                  id="search_order"
                  type="text"
                  className="search"
                  placeholder="Search"
                />
              </div>
            </div>
            <table className="table-display-order">
              <colgroup>
                <col style={{ width: "16%" }} />
                <col style={{ width: "16%" }} />
                <col style={{ width: "16%" }} />
                <col style={{ width: "16%" }} />
                <col style={{ width: "16%" }} />
                <col style={{ width: "16%" }} />
                <col style={{ width: "4%" }} />
              </colgroup>
              <thead>
                <tr className="table-topics">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Confirm</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="body_table_orders">{listItemsOrder}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminOrders;
