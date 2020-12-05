import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/styleFooter.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="info">
          <h4>P&amp;P Produce</h4>
          <p>
            Tel: 080 998 9424
            <br />
            Email: {' '}
            <a href="mailto:pp.produce.p@gmail.com" target="_blank">
              pp.produce.p@gmail.com
            </a>
            <br />
            Don Han Road, Mueang Khon Kaen District, Khon Kaen 40260
            <br />
            <br />
            <Link to="/admin">for admin</Link>
          </p>
          <div className="icon-link">
            <a
              href="https://www.facebook.com/PP-Produce-115054696537678"
              className="fa fa-facebook"
              target="_blank"
            ></a>
            <a
              href="https://www.facebook.com/PP-Produce-115054696537678"
              className="fa fa-messenger"
              target="_blank"
            ></a>
            <a
              href="mailto:pp.produce.p@gmail.com"
              className="fa fa-email"
              target="_blank"
            ></a>
            <a href="+6680 998 9424" className="fa fa-phone"></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
