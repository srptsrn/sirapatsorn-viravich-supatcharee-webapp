import React from "react";
import "../styles/styleAdmin.css";
import AdminNavBar from "../components/AdminNavBar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";
const connector = firebase.firestore();
class AdminEditProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleOtherTagInput: false,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      console.log(id);
    } else {
      console.log("no id");
    }
  }
  handleSelectTag(value) {
    if (value === "other") {
      this.setState({
        visibleOtherTagInput: true,
      });
    } else if (this.state.visibleOtherTagInput === true) {
      this.setState({
        visibleOtherTagInput: false,
      });
    }
  }

  render() {
    const handleSaveChange = () => {};
    const optionsTag = [
      {
        label: "Apple",
        value: "apple",
      },
      {
        label: "Mango",
        value: "mango",
      },
      {
        label: "Banana",
        value: "banana",
      },
      {
        label: "Pineapple",
        value: "pineapple",
      },

      {
        label: "Other",
        value: "other",
      },
    ];
    const optionsVis = [
      { value: true, label: "Show" },
      { value: false, label: "Hide" },
    ];
    var imgList = [
      {
        url: "https://www.flaticon.com/svg/static/icons/svg/1864/1864499.svg",
      },
      {
        url: "https://www.flaticon.com/svg/static/icons/svg/1046/1046802.svg",
      },
      {
        url: "https://www.flaticon.com/svg/static/icons/svg/1046/1046802.svg",
      },
      {
        url: "https://www.flaticon.com/svg/static/icons/svg/1046/1046802.svg",
      },
      {
        url: "https://www.flaticon.com/svg/static/icons/svg/1046/1046802.svg",
      },
    ];
    return (
      <div className="app-admin">
        <AdminNavBar products></AdminNavBar>
        <div className="product-tab">
          <form onSubmit={handleSaveChange} className="form-edit-product">
            <div className="head-product-tab">
              <div>
                <h3>Name</h3>
              </div>
              <div>
                <button>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </div>
            <div className="edit-product">
              <div>
                <div className="display-edit-img-product">
                  {imgList.map((image) => (
                    <div className="div-edit-img-product">
                      <img src={image.url} className="edit-img-product"></img>
                      <div class="text-edit-img-product">Delete</div>
                    </div>
                  ))}
                  {imgList.length < 5 ? (
                    <div
                      className="add-banner"
                      onClick={this.pressUpload}
                    ></div>
                  ) : null}
                  <input
                    className="hide"
                    type="file"
                    name="file"
                    id="file"
                    accept="images/*"
                    onChange={(e) => this.fileOnChange(e)}
                  />
                </div>
                <div className="tab-input-edit-product">
                  <label>
                    Name
                    <input
                      name="pname"
                      type="text"
                      placeholder="Product name"
                      defaultValue="nameeeee"
                    />
                  </label>
                  <label htmlFor="tag">
                    Tag
                    <select
                      name="tag"
                      onChange={(e) => this.handleSelectTag(e.target.value)}
                      defaultValue="mango"
                    >
                      {optionsTag.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </label>
                  <input
                    name="tag_other"
                    type="text"
                    placeholder="Tag"
                    className={
                      this.state.visibleOtherTagInput ? "show" : "hide"
                    }
                  />
                  <label>
                    Price
                    <input
                      name="price"
                      type="number"
                      defaultValue="100000000000"
                    />
                  </label>
                </div>
                <label>
                  Description
                  <textarea
                    name="description"
                    type="text"
                    placeholder="Detail"
                    defaultValue="sfgsgdsfgsdfgsdfg"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="vis">Visibility</label>
                <select name="vis" defaultValue={true}>
                  {optionsVis.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
                <label>
                  Inventory
                  <input name="inv" type="number" defaultValue="10000000" />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AdminEditProducts;
