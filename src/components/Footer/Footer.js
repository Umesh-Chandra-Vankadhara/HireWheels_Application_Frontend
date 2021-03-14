import React from "react";
// import "./Footer.css";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <React.Fragment>
      <footer className="row_align">
        <div className="media">
          <a className="link" href="https://www.upgrad.com/contact/">
            Contact Us
          </a>
        </div>
        <div>
          <Link to="/home" className="copyright link">
            &copy;upGrad
          </Link>
        </div>
        <div className="media">
          <a className="link" href="https://www.facebook.com/upGradGlobal/">
            Facebook
          </a>
          <a className="link" href="https://twitter.com/UpGrad_Edu">
            Twitter
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
