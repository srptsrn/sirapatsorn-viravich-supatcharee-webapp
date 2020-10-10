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
      <Footer></Footer>
    </div>
  );
}
}

export default Home;
