import React from "react";
import "../styles/styleAdmin.css";
import AdminNavBar from "../components/AdminNavBar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";
const connector = firebase.firestore();
const firebaseStorage = firebase.storage();
const storageRef = firebaseStorage.ref();
const uploadImge = "img-product/";
class AdminEditProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleOtherTagInput: false,
      dataProduct: {
        id: null,
        name: "",
        description: "",
        img: { a: "" },
        inventory: 0,
        price: 0,
        tag: "all_products",
        visibility: true,
        img_order: [],
      },
      newProduct: false,
      tags: [],
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
            this.setState({ newProduct: true });
          }
          console.log(this.state.newProduct);
        })
        .catch(function (error) {
          this.setState({ newProduct: true });
          console.log("Error getting document:", error);
        });
    } else {
      this.setState({ newProduct: true });
    }
    let arrayTags = [];
    connector
      .collection("tags")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          arrayTags.push(data);
        });
        arrayTags.push({ label: "Other", value: "other" });
        this.setState({ tags: arrayTags });
      });
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

  handleInput = (nameInput, value) => {
    let newDataProduct = this.state.dataProduct;
    newDataProduct.name = value;
    this.setState({ dataProduct: newDataProduct });
  };
  ///////////////////////////////////

  fileOnChange = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      // console.log("fileOnChange: " + path);
      this.OnUpload(file);
    }
  };
  pressUpload = () => {
    document.getElementById("file").click();
  };

  OnUpload = (file) => {
    // console.log("OnUpload");
    const path = uploadImge + file.name;
    console.log(file);
    const uploadTask = storageRef.child(path).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => {
        console.log(err);
      },
      () => {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then((url) => {
            localStorage.setItem("current", url);
            console.log("file : " + url);
            console.log("uploadTask " + url);
            var array = this.state.dataProduct;
            var nameImg = file.name;
            array.img[nameImg] = url;
            array.img_order.push(nameImg);
            this.setState({ dataProduct: array });
            console.log(array);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    );
  };
  getImgUrl = async (path) => {
    return await storageRef.child(path).getDownloadURL();
  };
  onChangePrice = (e) => {
    const re = /^([0-9]*[.])?[0-9]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      let newDataProduct = this.state.dataProduct;
      newDataProduct.price = parseFloat(e.target.value);
      this.setState({ dataProduct: newDataProduct });
    }
  };
  onChangeInv = (e) => {
    const re = /^([0-9]*[.])?[0-9]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      let newDataProduct = this.state.dataProduct;
      newDataProduct.inventory = parseFloat(e.target.value);
      this.setState({ dataProduct: newDataProduct });
    }
  };

  render() {
    const onDeleteImg = async (item) => {
      const cf = window.confirm("Delete this picture?");
      if (cf) {
        console.log(item);
        // const deleteImgRef = storageRef.child(uploadImge + item);
        // deleteImgRef
        //   .delete()
        //   .then((result) => {
        //     console.log("delete " + item + " success");
        var array = this.state.dataProduct; // make a separate copy of the array
        delete array.img[item];
        for (var i = 0; i < array.img_order.length; i++) {
          if (array.img_order[i] === item) {
            array.img_order.splice(i, 1);
          }
        }
        this.setState({ dataProduct: array });
        // })
        // .catch((err) => {
        //   console.log("delete " + item + " fail");
        // });
      }
    };
    const handleSaveChange = (event) => {
      event.preventDefault();
      let {
        pname,
        tag,
        tag_other,
        description,
        price,
        vis,
        inv,
      } = event.target.elements;
      console.log(pname.value);
      if (tag.value === "other") {
        tag.value = tag_other.value;
        const camelTag = tag_other.value
          .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
          })
          .replace(/\s+/g, "");
        connector
          .collection("tags")
          .doc()
          .set({
            label: tag_other.value,
            value: camelTag,
          })
          .then(() => {
            console.log("add new tag");
          })
          .catch((error) => console.error(error));
      }
      if (this.state.newProduct) {
        connector
          .collection("products")
          .doc()
          .set({
            name: pname.value,
            tag: tag.value,
            description: description.value,
            price: price.value,
            inventory: inv.value,
            visibility: vis.value,
            img: this.state.dataProduct.img,
            img_order: this.state.dataProduct.img_order,
          })
          .then(() => {
            window.alert("create new product complete");
          })
          .catch((error) => console.error(error));
      } else {
        connector
          .collection("products")
          .doc(this.state.dataProduct.id)
          .set(
            {
              name: pname.value,
              tag: tag.value,
              description: description.value,
              price: price.value,
              inventory: inv.value,
              visibility: vis.value,
              img: this.state.dataProduct.img,
              img_order: this.state.dataProduct.img_order,
            },
            { merge: true }
          )
          .then(() => {
            window.alert("save complete");
          })
          .catch((error) => console.error(error));
      }
    };
    const optionsVis = [
      { value: true, label: "Show" },
      { value: false, label: "Hide" },
    ];
    var imgList = this.state.dataProduct.img_order.map((image) => (
      <div
        className="div-edit-img-product"
        onClick={() => {
          onDeleteImg(image);
        }}
      >
        <img
          src={this.state.dataProduct.img[image]}
          className="edit-img-product"
        ></img>
        <div className="text-edit-img-product">Delete</div>
      </div>
    ));
    return (
      <div className="app-admin">
        <AdminNavBar products></AdminNavBar>
        <div className="product-tab">
          <form onSubmit={handleSaveChange} className="form-edit-product">
            <div className="head-product-tab">
              <div>
                <h3>{this.state.dataProduct.name}</h3>
              </div>
              <div>
                <Link to="/admin/products">
                  <button>Cancel</button>
                </Link>
                <button
                  type="submit"
                  className={this.state.newProduct ? "show" : "hide"}
                >
                  Create
                </button>
                <button
                  type="submit"
                  className={this.state.newProduct ? "hide" : "show"}
                >
                  Save
                </button>
              </div>
            </div>
            <div className="edit-product">
              <div>
                <div className="display-edit-img-product">
                  {imgList}
                  {Object.keys(this.state.dataProduct.img).length < 5 ? (
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
                      defaultValue={this.state.dataProduct.name}
                      onChange={(e) => this.handleInput("name", e.target.value)}
                    />
                  </label>
                  <label htmlFor="tag">
                    Tag
                    <select
                      name="tag"
                      onChange={(e) => this.handleSelectTag(e.target.value)}
                      defaultValue={this.state.dataProduct.tag}
                    >
                      {this.state.tags.map((option) => (
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
                </div>
                <label>
                  Description
                  <textarea
                    name="description"
                    type="text"
                    placeholder="Detail"
                    defaultValue={this.state.dataProduct.description}
                  />
                </label>
              </div>
              <div>
                <label>
                  Price
                  <input
                    name="price"
                    type="text"
                    value={this.state.dataProduct.price}
                    onChange={this.onChangePrice}
                  />
                </label>
                <label htmlFor="vis">Visibility</label>
                <select
                  name="vis"
                  defaultValue={this.state.dataProduct.visibility}
                >
                  {optionsVis.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
                <label>
                  Inventory
                  <input
                    name="inv"
                    type="number"
                    value={this.state.dataProduct.inventory}
                    onChange={this.onChangeInv}
                  />
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
