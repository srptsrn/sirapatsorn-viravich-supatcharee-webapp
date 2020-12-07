import React from "react";
import "../styles/styleAdmin.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar.js";
import firebase from "../components/Firebase.js";
const connector = firebase.firestore();

const firebaseStorage = firebase.storage();
const storageRef = firebaseStorage.ref();
const uploadImge = "payment-slip/";

class AdminDetailOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataOrders: { payment_slip: { aa: "ss" }, products: { a: "a" } },
      confirm: "Unconfirmed",
      noData: false,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      console.log(id);
      let obj = {};
      connector
        .collection("orders")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            obj = doc.data();
            obj.id = id;
            this.setState({
              dataOrders: obj,
              confirm: obj.confirm,
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
    var imgSlip = (
      <img
        src={
          this.state.dataOrders.payment_slip[
            Object.keys(this.state.dataOrders.payment_slip)[0]
          ]
        }
      ></img>
    );
    const handleConfirm = () => {
      const cf = window.confirm("Confirm this order?");
      if (cf) {
        const user = firebase.auth().currentUser;
        let newExaminer = this.state.dataOrders.examiner;
        newExaminer.confirm_order = user.displayName;
        connector
          .collection("orders")
          .doc(this.state.dataOrders.id)
          .set(
            {
              confirm: "Confirmed",
              status: "Unsend",
              examiner: newExaminer,
            },
            { merge: true }
          )
          .then(() => {
            for (const [key, value] of Object.entries(
              this.state.dataOrders.products
            )) {
              const increment = firebase.firestore.FieldValue.increment(value);
              console.log(`${key}: ${value}`);
              connector
                .collection("products")
                .doc(key)
                .set({ inventory: increment }, { merge: true })
                .then(() => {})
                .catch((error) => console.error(error));
            }
            window.location.reload(true);
          })
          .catch((error) => console.error(error));
      }
    };

    const handleCancel = () => {
      const cf = window.confirm("Cancel this order?");
      if (cf) {
        const user = firebase.auth().currentUser;
        let newExaminer = this.state.dataOrders.examiner;
        newExaminer.cancel = user.displayName;
        connector
          .collection("orders")
          .doc(this.state.dataOrders.id)
          .set(
            {
              confirm: "Cancel",
              status: "-",
              examiner: newExaminer,
            },
            { merge: true }
          )
          .then(() => {
            window.location.reload(true);
          })
          .catch((error) => console.error(error));
      }
    };

    const handleTracking = (event) => {
      const cf = window.confirm("Confirm tracking this order?");
      event.preventDefault();
      let { tracking } = event.target.elements;
      if (cf) {
        const user = firebase.auth().currentUser;
        let newExaminer = this.state.dataOrders.examiner;
        newExaminer.send = user.displayName;
        connector
          .collection("orders")
          .doc(this.state.dataOrders.id)
          .set(
            {
              status: "Sended",
              tracking: tracking.value,
              examiner: newExaminer,
            },
            { merge: true }
          )
          .then(() => {
            window.location.reload(true);
          })
          .catch((error) => console.error(error));
      }
    };
    const downloadPaymentSlip = () => {
      const path =
        uploadImge + Object.keys(this.state.dataOrders.payment_slip)[0];
      console.log(path);
      storageRef
        .child(path)
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          downloadImage(url, path);
        })
        .catch((err) => {
          console.log({ msg: "download err", err });
        });
    };
    const downloadImage = async (url, fileName) => {
      console.log(url);
      const link = document.createElement("a");
      const response = await fetch(url);
      const blob = await response.blob();
      const objUrl = URL.createObjectURL(blob);
      console.log(response);
      console.log(blob);
      console.log(objUrl);
      link.setAttribute("href", objUrl);
      link.setAttribute("download", fileName);
      link.click();
    };
    const handleExaminer = () => {
      alert(
        `Confirm order: ${this.state.dataOrders.examiner.confirm_order}\nSended order: ${this.state.dataOrders.examiner.send}\nCancel order: ${this.state.dataOrders.examiner.cancel}`
      );
    };
    var listItemsProductOrder = Object.entries(
      this.state.dataOrders.products
    ).map(function (key) {
      return (
        <tr>
          <td>{key[0]}</td>
          <td>{key[1]}</td>
        </tr>
      );
    });
    if (this.state.noData) {
      return (
        <div className="app-admin">
          <AdminNavBar orders></AdminNavBar>
          <div className="orders-tab">
            <div className="head-orders-tab">
              <div>
                <h3>Orders</h3>
              </div>
              <button onClick={handleExaminer}>See examiner</button>
            </div>
            <div className="display-orders">
              <div className="display-detail-orders">
                <div className="display-detail-customer-orders">
                  <h1>Data not found</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="app-admin">
        <AdminNavBar orders></AdminNavBar>
        <div className="orders-tab">
          <div className="head-orders-tab">
            <div>
              <h3>Order</h3>
            </div>
            <button onClick={handleExaminer}>See examiner</button>
          </div>
          <div className="display-orders">
            <div className="display-detail-orders">
              <div className="display-detail-customer-orders">
                <div>
                  <div>
                    <h2>Order</h2>
                    <table className="table-display-product table-display-product-order">
                      <colgroup>
                        <col style={{ width: "80%" }} />
                        <col style={{ width: "20%" }} />
                      </colgroup>
                      <thead>
                        <tr className="table-topics">
                          <th>ID product</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody id="body_table_product">
                        {listItemsProductOrder}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h2>{this.state.dataOrders.name}</h2>
                  <div>
                    <p>
                      Email: <span>{this.state.dataOrders.email}</span>
                    </p>
                    <p>
                      Phone: <span>{this.state.dataOrders.phone}</span>
                    </p>
                    <p>
                      Date order: <span>{this.state.dataOrders.date}</span>
                    </p>
                    <p>
                      Address: <span>{this.state.dataOrders.address}</span>
                    </p>
                    <p>
                      Confirm: <span>{this.state.dataOrders.confirm}</span>
                    </p>
                    <p>
                      Status: <span>{this.state.dataOrders.status}</span>
                    </p>
                    <p
                      className={
                        this.state.dataOrders.status === "Sended"
                          ? "show"
                          : "hide"
                      }
                    >
                      Tracking: <span>{this.state.dataOrders.tracking}</span>
                    </p>
                  </div>
                  <div
                    className={
                      this.state.dataOrders.confirm === "Unconfirmed"
                        ? "show"
                        : "hide"
                    }
                  >
                    <button
                      className="confirm-order-btn"
                      onClick={handleConfirm}
                    >
                      Confirm
                    </button>
                    <button onClick={handleCancel}>Cencel</button>
                  </div>
                  <div
                    className={
                      this.state.dataOrders.status === "Unsend"
                        ? "show"
                        : "hide"
                    }
                  >
                    <form onSubmit={handleTracking}>
                      <label>
                        Tracking
                        <input name="tracking" type="text" />
                      </label>
                      <button className="sended-order-btn" type="submit">
                        Sended order complete
                      </button>
                      <button onClick={handleCancel} type="reset">
                        Cencel
                      </button>
                    </form>
                  </div>
                </div>

                <div>
                  {imgSlip}
                  <button
                    className="download-pp-slip-btn"
                    onClick={downloadPaymentSlip}
                  >
                    Download payment slip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDetailOrders;
