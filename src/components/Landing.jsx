import React from "react";
import NavBar from "./NavBar";
import android from "../image/android.png";
import apple from "../image/apple.png";
import phone from "../image/mobile.png";

function landing() {
  return (
    <>
      <NavBar />
      <div className="landing__home">
        <h1>
          Your dream campus <br /> experience starts here
        </h1>
        <p>The one-stop-shop to easily host and attend events</p>
      </div>
      <div className="landing">
        <figure className="landing__service">
          <a href="#!">
            <img src={apple} alt={"Apple"} />
          </a>
          <a href="#!">
            <img src={android} alt={"Android"} />
          </a>
        </figure>
        <figure className="landing__phone">
          <img src={phone} alt={"phone"} />
        </figure>
      </div>
    </>
  );
}

export default landing;
