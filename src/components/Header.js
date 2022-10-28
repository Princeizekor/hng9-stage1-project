import React from "react";

export default function Header() {
  return (
    <div>
      <a className="header-desktop-share">
        <img
          style={{width: "50px", height: "50px"}}
          src="../img/_Avatar share button.jpg"
          alt=""
        />
      </a>
      <a className="header-desktop-share header-mobile-share">
        <img
          style={{width: "13px", height: "5px"}}
          
          src="../img/dot-icon.svg"
          alt=""
        />
      </a>
      <div className="desc">
        <div className="share-description">
          Share Link
          <div></div>
        </div>
      </div>

      <div className="profile">
        <div className="profile-img-container">
          <img id="profile__img" src="../img/90438398.jpg" alt="" />
          <div className="profile-hover">
            <img className="camera" src="../img/camera.svg" alt="" />
          </div>
        </div>
        <p id="twitter">PaulIzekor</p>
        <p id="slack">PaulIzekor</p>
      </div>
    </div>
  );
}