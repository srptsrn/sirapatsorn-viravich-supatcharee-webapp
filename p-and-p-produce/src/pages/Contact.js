import React from "react";
import "../styles/styleContact.css";

function Contact() {
  return (
    <div className="App">
        <nav>
            <a href="#header" class="logo"> P&amp;P Produce </a>
        </nav>
        <div class="head-contact">
            <div>
                <h2 class="contact-center"> Contact Us </h2>
            </div>
        </div>
        <div class="main">
            <div class="our-store">
                <h3>Our Store</h3>
                <p>P&amp;P Produce.Co.,Ltd.<br/>
                    Road Don Han, Mueang Khon Kaen District,<br/>
                    Khon Kaen 40260</p>
            </div>
            <div class="custom-service">
                <h3>Customer Service</h3>
                <p>Tel: 080 998 9424<br/>
                    Email: pp.produce.p@gmail.com</p>
            </div>
            <div class="opening-hour">
                <h3>Opening Hours</h3>
                <p>Mon - Fri: 8am - 8pm<br/>
                    Saturday: 9am - 7pm</p>
            </div>
        </div>
        <form class="form-contact">
            <div>
                <div>
                    <label for="firstName">First Name</label>
                    <input name="firstName" type="text" id="firstName"/>
                    <label for="email">Email<span>*</span></label>
                    <input name="email" type="email" id="email"/>
                </div>
                <div>
                    <label for="lastName">Last Name</label>
                    <input name="lastName" type="text" id="lastName"/>
                    <label for="subJect">Subject</label>
                    <input name="subJect" type="text" id="subJect"/>
                </div>
            </div>

            <textarea id="textArea" name="textArea" rows="10" cols="70"> Type your message here... </textarea>
            <button type="submit">Summit</button>
        </form>

        <div class="info">
            <h4>P&amp;P Product</h4>
            <p>info@my-domain.com 123-456-7890
            <br/>
                500 Terry Francois Street San Francisco, CA 94158
            </p>
            <div class="iconLink">
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-instagram"></a>
            </div>
        </div>
    </div>
    );
}

export default Contact;