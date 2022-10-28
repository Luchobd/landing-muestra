import React, { useState } from "react";
import logo from "../image/bounce_logo.png";
import Swal from "sweetalert2";

import { FcAbout, FcKindle, FcApproval } from "react-icons/fc";
import { TbUser } from "react-icons/tb";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAlertLogin = async () => {
    await Swal.fire({
      title: "Temporarily disabled",
      icon: "warning",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="navbar">
      <picture className="navbar__logo">
        <img src={logo} alt="Logo" />
      </picture>

      <div className={`navbar__item ${isOpen && "open"}`}>
        <div className="navbar__item_icons">
          <a href="#!">
            <i>
              <FcKindle />
            </i>
            <p>Product</p>
          </a>
        </div>
        <div className="navbar__item_icons navabr__item_borderCenter">
          <a href="#!">
            <i>
              <FcApproval />
            </i>
            <p>Get Involed</p>
          </a>
        </div>

        <div className="navbar__item_icons">
          <a href="#!">
            <i>
              <FcAbout />
            </i>
            <p>About Us</p>
          </a>
        </div>
      </div>

      <div className="navbar__login" onClick={handleAlertLogin}>
        <p className="navbar__login_cuenta">
          <i>
            <TbUser />
          </i>
          <a href="#!">Login</a>
        </p>
      </div>

      <div
        className={`navbar__toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="navbar__toggle_bar"></div>
      </div>
    </div>
  );
}

export default NavBar;
