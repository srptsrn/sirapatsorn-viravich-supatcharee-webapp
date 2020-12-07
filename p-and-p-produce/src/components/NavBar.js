import { render } from "@testing-library/react";
import React from "react";
import "../styles/styleNav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      visible: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleSearchValueChange = (event) => {
    this.setState({search: event.target.value})
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
    console.log(this.state.visible);
  }
  render() {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        window.location = `/search-results?search=${this.state.search}`;
      }
    };

    const {
      bestSellers,
      allProducts,
      about,
      contact,
      franchise,
      searchResults,
    } = this.props;
    return (
      <div>
        <nav>
          <div>
            <Link to="/" className="logo-admin">
              <img src={require("../assets/images/icon-ppproduce.png")}></img>
            </Link>
          </div>
          <div className="menu-nav">
            <Link to="/best-sellers" className={bestSellers ? "on-page" : ""}>
              Best Sellers
            </Link>
            <Link to="/all-products" className={allProducts ? "on-page" : ""}>
              All Products
            </Link>
            <Link to="/franchise" className={franchise ? "on-page" : ""}>
              News
            </Link>
            <Link to="/contact" className={contact ? "on-page" : ""}>
              Contact
            </Link >
            <div className="search-tab-nav">
              <Link to={`/search-results?search=${this.state.search}`} className={"icon-search " + (searchResults ? "on-page" : "")}></Link>
              <input
                id="search_web"
                type="text"
                value={this.state.search}
                onChange={this.handleSearchValueChange}
                className="search_web"
                placeholder="Search"
                onKeyDown={handleKeyDown}
              />
            </div>
          
            <Link to="/cart" className="cart-nav">
              <div className="cart-icon"></div>
              <div id="cart-amount">
                <p>3</p>
              </div>
            </Link>
          </div>
          <div
            className="menu-admin-nav"
            onClick={() => {
              this.toggleMenu();
            }}
          ></div>
        </nav>
        <div
          id="mySidenav"
          className={this.state.visible ? "sidenav-show" : "sidenav-hide"}
        >
          <Link >
          </Link>
          <Link to="/best-sellers" className={bestSellers ? "on-page" : ""}>
            Best Sellers
          </Link>
          <Link to="/all-products" className={allProducts ? "on-page" : ""}>
            All Products
          </Link>
          <Link to="/contact" className={contact ? "on-page" : ""}>
            Contact
          </Link>
          <Link to="/best-sellers" className={bestSellers ? "on-page" : ""}>
              Best Sellers
            </Link>
            <Link to="/all-products" className={allProducts ? "on-page" : ""}>
              All Products
            </Link>
            {/* <Link to="/" className={about ? "on-page" : ""}>
              About
            </Link> */}
            <Link to="/franchise" className={franchise ? "on-page" : ""}>
              Join with us
            </Link>
            <Link to="/contact" className={contact ? "on-page" : ""}>
              Contact
            </Link>
            <Link to="/search-results" className={searchResults ? "on-page" : ""}>
              Search
            </Link>
            <Link to="/cart">
              Cart
            </Link>
        </div>
        <a
          className="messenger-nav"
          href="https://www.facebook.com/PP-Produce-115054696537678"
          target="_blank"
        >
          <div></div>
        </a>
      </div>
    );
  }
}

export default NavigationBar;
