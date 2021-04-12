import React from "react";

export default function Contact() {
  return (
    <div className="contactus">
      <div className="container">
        <div className="contact-logo">
          <h2>CONTACT US</h2>
        </div>
        <div className="title-seperator"></div>
        <div className="forms">
          <form>
            <div className="input1">
              <input
                type="text"
                className="nam1"
                placeholder="Your first name"
              />

              <input
                type="text"
                className="nam2"
                placeholder="your last name"
              />
            </div>
            <br />
            <div className="input2">
              <input
                type="text"
                value="firstname"
                className="nam3"
                placeholder="Your Email"
              />
              <input type="text" className="nam4" placeholder="your phone" />
            </div>
            <br />

            <textarea
              className="text"
              rows="20"
              cols="77"
              name="message"
              placeholder="Message:"
            />
            <div>
              <button className="button">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
