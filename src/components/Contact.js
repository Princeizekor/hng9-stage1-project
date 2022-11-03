import React, { useEffect, useState } from 'react'

function Contact() {

  const [detail, setDetail] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agree: false
})

 const handleFormSubmition = (e) => {
   e.preventDefault();

   if (detail.firstName !== '' || detail.lastName !== '' || detail.firstName !== '' || detail.firstName !== '' || !detail.agree) {
    setDetail({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      agree: false
    })
    return;
   }
 };
  
  useEffect(() => {
    window.scroll(0,0)
  }, [])

  return (
    <div className="contact">
      <p className="head-text">Contact Me</p>
      <p className="head-text2">Hi there, contact me to ask me about anything you have in mind.</p>

      <form id="form" onSubmit={handleFormSubmition}>

      <div className="username-field">
      <label htmlFor="firstName">First name<br />
            <input type="text" id="first_name" name="firstName" value={detail?.firstName} onChange={(e) => setDetail({
              ...detail,
                        firstName: e.target.value
                    })} placeholder='Enter your first name' required />
          </label>

          <label htmlFor="lastName">Last name<br />
            <input type="text" id="last_name" name="lastName" value={detail?.lastName} onChange={(e) => setDetail({
              ...detail,
                        lastName: e.target.value
                    })} placeholder='Enter your last name' required />
          </label>
      </div>
      <label htmlFor="email">Email<br />
            <input type="email" name="email" id="email" value={detail?.email} onChange={(e) => setDetail({
              ...detail,
                        email: e.target.value
                    })} placeholder="yourname@email.com" required />
          </label>

          <label htmlFor="message">Message<br />
          <textarea name="message" id="message" value={detail?.message} onChange={(e) => setDetail({
            ...detail,
                        message: e.target.value
                    })} placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
        </label>
        <label htmlFor="checkbox" className='check-wrap'>
          <input type="checkbox" id="checkbox" checked={detail?.agree} onChange={() => setDetail({
            ...detail,
                        agree: !detail?.agree
                    })} required />You agree to providing your data to Paulizekor who may contact you.
          <span className="check"></span>
        </label><br />

        <button id="btn__submit">Send message</button>
      </form>
    </div>
  )
}

export default Contact
