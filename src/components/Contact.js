import React from 'react'

function Contact() {
  return (
    <div className="contact">
      <p className="head-text">Contact Me</p>
      <p className="head-text2">Hi there, contact me to ask me about anything you have in mind.</p>

      <form action="" id="form">

      <div className="username-field">
      <label for="html">First Name
        <input type="text" name="first_name" id="first_name"  placeholder="Enter your first name"/>
        </label>

        <label for="html">Last Name
        <input type="text" name="last_name" id="last_name" placeholder="Enter your last name"/>
        </label>
      </div>

        <label for="html">Email</label>
        <input type="email" name="email" id="email" placeholder="yourname@email.com"/>

        <label for="html">Message</label>
        <textarea name="textarea" id="message" cols="30" rows="10" placeholder="Send me a message and i'll reply you as soon as possible"></textarea>

        <input type="checkbox" name="checkbox" id="" />
        <label htmlFor="html">You agree to providing your data to Paul who may contact you.</label>

        <button type="submit" id="btn__submit">Send message</button>
      </form>
    </div>
  )
}

export default Contact
