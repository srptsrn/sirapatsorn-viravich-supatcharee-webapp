import React from "react";
import "../styles/styleHome.css";
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

function Home() {
  return (
    <div className="app-home">
        <NavBar></NavBar>
        <Footer></Footer>
    </div>
    );
}

export default Home;