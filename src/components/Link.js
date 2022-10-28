import React from 'react'
import linkData from '../data'

function Link() {
  return (
    <div>
      <div className='links'>
        {
          linkData?.map((item, i) => <a href={item.link} id={item.id} className='link-button' key={i} target='_blank' rel="noreferrer">{item.title}</a>)
        }
      </div>

        <div className='socials'>
            <img src="../img/slack.svg" alt="" />
            <a href="https://github.com/Princeizekor"><img src="../img/github.svg" alt="" /></a>
        </div>
    </div>
  )
}

export default Link