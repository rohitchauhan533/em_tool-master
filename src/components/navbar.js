import React, { Fragment } from "react";
import Logo from "./assests/images/outline_email_black_24dp.png";
import "../css/style.css"
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const msg=props.msg
    const buttonInput=props.buttonInput
    const link=props.link
  return (
    <Fragment>
      <div>
        <header className="navbar-header">
          <div className="box box1">
            <img className="tile" src={Logo} alt="" />
            <p className="tile">Just mail </p>
          </div>
          <div className="box box2">
            <p className="tile">{msg}</p>
            <Link className="tile" to={link}>
             {buttonInput}
            </Link>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Navbar;
