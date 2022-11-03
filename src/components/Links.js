import React from 'react'
import linkData from '../data'
import { Link } from 'react-router-dom'
function Links() {
  return (
    <div>
      <div className='links'>
        {
          linkData?.map((item, i) => <a href={item.link} id={item.id} className='link-button' key={i} target='_blank' rel="noreferrer">{item.title}</a>)
        }
        <Link to="/contact" id="contact" className='link-button' rel="noreferrer">Contact Me</Link>
      </div>

        <div className='socials'>
            <img src="../img/slack.svg" alt="slack icon" />
            <a href="https://github.com/Princeizekor"><img src="../img/github.svg" alt="github icon" /></a>
        </div>
    </div>
  )
}

export default Links