import React from "react";
import "../styles/styleHome.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import ImgSlide from "../components/ImgSlide.js";

class Home extends React.Component {
  render() {
    return (
      <div className="app-home">
        <NavBar></NavBar>
        <ImgSlide></ImgSlide>
        <div className="category-btn">
          <h1>Category</h1>
          <div>
            <label htmlFor="category_chicken_btn">
              <img
                className="icon-chicken-home"
                src={require("../assets/images/rooster.png")}
                
              />
            </label>

            <button id="category_chicken_btn" onClick={() => {console.log('ck');}}>Chicken</button>
            <button id="category_pork_btn" onClick={() => {console.log('p');}}>Pork</button>
            <label htmlFor="category_pork_btn">
              <img
                className="icon-pork-home"
                src={require("../assets/images/pork.png")}
              />
            </label>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
