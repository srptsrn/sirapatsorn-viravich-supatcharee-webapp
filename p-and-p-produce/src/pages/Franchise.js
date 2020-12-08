import React from "react";
import "../styles/styleFranchise.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../components/Firebase.js";
const connector = firebase.storage();
const storageRef = connector.ref();
const uploadImgeNewsPublish = "news/";
class Franchise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageNews: { name: "", url: "" },
    };
  }
  getImgUrl = async (path) => {
    return await storageRef.child(path).getDownloadURL();
  };
  componentWillMount() {
    const imageRefNews = storageRef.child(uploadImgeNewsPublish);
    imageRefNews
      .listAll()
      .then((res) => {
        const files = res.items;
        files.forEach((file) => {
          this.getImgUrl(file.fullPath)
            .then((url) => {
              this.setState({ imageNews: { name: file.fullPath, url: url } });
              console.log(this.state.imageNews);
            })
            .catch((error) => {
              console.log({ msg: "error", error });
            });
        });
      })
      .catch((err) => {
        console.log({ msg: "error", err });
      });
  }
  render() {
    return (
      <div className="app-franchise">
        <NavBar franchise></NavBar>
        <div className="franchise-poster">
          <h2>News</h2>
          <a
            href="https://www.facebook.com/PP-Produce-115054696537678"
            target="_blank"
          >
            <img src={this.state.imageNews.url}></img>
          </a>
          <Link to="/contact" className="btn-contact">
            Contact Us
          </Link>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Franchise;
