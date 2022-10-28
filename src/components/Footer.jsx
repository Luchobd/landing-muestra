import React from "react";
import { CgComedyCentral } from "react-icons/cg";

import {
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">
        <h2>Collect money, make memories</h2>
        <p>
          <i>
            <CgComedyCentral />
          </i>{" "}
          2022 Bounced Inc.
        </p>
      </div>
      <div className="footer__subtitle">
        <h3>Product</h3>

        <p>
          <a href="#!">Host</a>
        </p>
        <p>
          <a href="#!">Attend</a>
        </p>
        <p>
          <a href="#!">Social Events</a>
        </p>
        <p>
          <a href="#!">Academic Events</a>
        </p>
        <p>
          <a href="#!">Greek Events</a>
        </p>
      </div>
      <div className="footer__subtitle">
        <h3>Company</h3>
        <p>
          <a href="#!">Abaout us</a>
        </p>
        <p>
          <a href="#!">Get Involved</a>
        </p>
        <p>
          <a href="#!">Contact us</a>
        </p>
        <p>
          <a href="#!">Careers</a>
        </p>
      </div>
      <div className="footer__subtitle">
        <h3>Resources</h3>
        <p>
          <a href="#!">Terms and Conditions</a>
        </p>
        <p>
          <a href="#!">Privacy Policy</a>
        </p>
        <div className="footer__subtitle_icon">
          <p className="">
            <i>
              <FaInstagram />
            </i>
          </p>
          <p className="">
            <i>
              <FaTiktok />
            </i>
          </p>
          <p className="">
            <i>
              <FaFacebookF />
            </i>
          </p>
          <p>
            <i className="">
              <FaLinkedinIn />
            </i>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
