import React, { useEffect, useState } from 'react'

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  useEffect(() => {
    window.scroll(0,0)
  }, [])

  const [data, setData] = useState({
    fName: '',
    lName: '',
    email: '',
    message: '',
    agree: false
})


  return (
    <div className="contact">
      <p className="head-text">Contact Me</p>
      <p className="head-text2">Hi there, contact me to ask me about anything you have in mind.</p>

      <form id="form" onSubmit={handleSubmit}>

      <div className="username-field">
      <label htmlFor="fname">First name<br />
            <input type="text" id="first_name" name="fname" value={data?.fName} onChange={(e) => setData({
                        ...data,
                        fName: e.target.value
                    })} placeholder='Enter your first name' required />
          </label>

          <label htmlFor="lname">Last name<br />
            <input type="text" id="last_name" name="lname" value={data?.lName} onChange={(e) => setData({
                        ...data,
                        lName: e.target.value
                    })} placeholder='Enter your last name' required />
          </label>
      </div>
      <label htmlFor="email">Email<br />
            <input type="email" name="email" id="email" value={data?.email} onChange={(e) => setData({
                        ...data,
                        email: e.target.value
                    })} placeholder="yourname@email.com" required />
          </label>

          <label htmlFor="message">Message<br />
          <textarea name="message" id="message" value={data?.message} onChange={(e) => setData({
                        ...data,
                        message: e.target.value
                    })} placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
        </label>
        <label htmlFor="checkbox" className='check-wrap'>
          <input type="checkbox" id="checkbox" checked={data?.agree} onChange={() => setData({
                        ...data,
                        agree: !data?.agree
                    })} required />You agree to providing your data to Paulizekor who may contact you.
          <span className="check"></span>
        </label><br />

        <button id="btn__submit">Send message</button>
      </form>
    </div>
  )
}

export default Contact
