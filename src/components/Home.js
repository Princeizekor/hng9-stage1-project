import React from 'react'

function Home() {
  return (
    <div className="home">
      <div className="profile-wrap">
      <div id="profile__img">
          <div className="profile-hover">
              <img src="./img/camera.svg" alt="camera-icon" />
          </div>
      </div>
      
      <div className="share-wrap">
      <img src="./img/Content.jpg" alt="share side-bar" className="sidebar"/>
          <img src="./img/_Avatar share button.jpg" alt="share-icon" className="share"/>
          <img src="./img/_Avatar share button (1).jpg" alt="menu" className="menu"/>
      </div>
      </div>
      {/* <h1 id="slack">Paul Izekor</h1> */}
      <h3 id="twitter">Paul Izekor</h3>

      <div className="button-wrapper">
          <a href="https://twitter.com/Paullizekor"><button className="btn">Twitter Link</button></a>
          <a href="https://training.zuri.team/"><button className="btn__zuri">Zuri Team</button></a>
          <a href="http://books.zuri.team"><button className="books">Zuri Books</button></a>
          <a href="https://books.zuri.team/"><button className="book__python">Python Books</button></a>
          <a href="https://background.zuri.team"><button className="pitch">Background Check for Coders</button></a>
          <a href="https://books.zuri.team/design-rules"><button className="book__design">Design Books</button></a>
      </div>

      <div className="social">
          <img src="./img/slack.svg" alt="slack-icon" />
          <a href="https://github.com/Princeizekor"><img src="./img/Github.svg" alt="github-icon" /></a>
      </div>

      <div className="footer">
          <img src="./img/Vector (1).jpg" alt="" />
          <p className="footer-text">HNG Internship 9 Frontend Task</p>
          <img src="./img/I4G.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home
