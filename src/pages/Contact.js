import React from 'react'
import "../styles/Contact.css";
import ContactPic from "../assets/contactpic.jpg"

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{backgroundImage: `url(${ContactPic})`}}>
      </div>
      <div className="rightSide">
        <h2>Contact Us</h2>
        <form id="contact-form" method="post">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter Name" type="text" />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email" type="email" />
                <label htmlFor="message">Message</label>
                <textarea rows="8" placeholder='Enter Message' name="message" required></textarea>
                <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
