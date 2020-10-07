import React from "react";
import "../styles/styleContact.css";
import NavBar from '../components/NavBar.js';

function Contact() {
  return (
    <div className="app-contact">
        <NavBar contact></NavBar>
        <div className="head-contact">
            <div>
                <h2 className="contact-center"> Contact Us </h2>
            </div>
        </div>
        <div className="main">
            <div className="our-store">
                <h3>Our Store</h3>
                <p>P&amp;P Produce.Co.,Ltd.<br/>
                    Road Don Han, Mueang Khon Kaen District,<br/>
                    Khon Kaen 40260</p>
            </div>
            <div className="custom-service">
                <h3>Customer Service</h3>
                <p>Tel: 080 998 9424<br/>
                    Email: pp.produce.p@gmail.com</p>
            </div>
            <div className="opening-hour">
                <h3>Opening Hours</h3>
                <p>Mon - Fri: 8am - 8pm<br/>
                    Saturday: 9am - 7pm</p>
            </div>
        </div>
        <form className="form-contact">
            <div>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" type="text" id="firstName"/>
                    <label htmlFor="email">Email<span>*</span></label>
                    <input name="email" type="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" type="text" id="lastName"/>
                    <label htmlFor="subJect">Subject</label>
                    <input name="subJect" type="text" id="subJect"/>
                </div>
            </div>

            <textarea id="textArea" name="textArea" rows="10" cols="70"> Type your message here... </textarea>
            <button type="submit">Summit</button>
        </form>

        <div className="info">
            <h4>P&amp;P Product</h4>
            <p>info@my-domain.com 123-456-7890
            <br/>
                500 Terry Francois Street San Francisco, CA 94158
            </p>
            <div className="iconLink">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-instagram"></a>
            </div>
        </div>
    </div>
    );
}

export default Contact;