import React from "react";
// import "./Header.css";
import { Link } from "react-router-dom";
// import SignInModal from "../Modals/SignInModal";

function Header(){
 
    return (
      <React.Fragment>
        <header className="row_align">
          <div>
            <Link to="/home" className="brand link">
              <i className="fas fa-car brand_logo"></i>HireWheel
            </Link>
          </div>
          <div>
            {/* <button className="sign_in_btn">Sign in</button> */}
            {/* <SignInModal></SignInModal> */}
            <button className="sign_in_btn">
              <Link className="link" to="/signIn">
                Sign In
              </Link>
            </button>
          </div>
        </header>
      </React.Fragment>
    );
}

export default Header;
