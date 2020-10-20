import React from "react";
import "../styles/styleFranchise.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Franchise extends React.Component {
  render() {
    return (
      <div className="app-franchise">
        <NavBar franchise></NavBar>
        <div className="franchise-poster">
          <h2>Join with us</h2>
          <a
            href="https://www.facebook.com/PP-Produce-115054696537678"
            target="_blank"
          >
            <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/120840878_380330713343407_138052855224277582_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeFl4FpYPSYMd-_uxW8z3LlSRlkEjg-o0HdGWQSOD6jQdwGy_FesELPHJFmmKRdweOXsyxo_FDgQa0JLaPU3EF2J&_nc_ohc=eMVRi6GsjNAAX-ue1dN&_nc_ht=scontent.fbkk10-1.fna&oh=17c892e1bd6030e08252fbe1f1ebff89&oe=5FAD3564"></img>
          </a>
          <Link to="/contact" className='btn-contact'>
            Contact Us
          </Link>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Franchise;
