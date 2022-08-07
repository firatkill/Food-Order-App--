import React from "react";
import NavbarCSS from "./Navbar.module.css";
import NavbarCartButton from "./NavbarCartButton";
import NavbarOrderAlert from "./NavbarOrderAlert";
function Navbar(props) {
  const styled = NavbarCSS;

  if (props.orderStatus) {
    return (
      <div className={styled.NavbarContainer}>
        <div className={styled.Brand}>ReactMeal!</div>
        <NavbarOrderAlert />
      </div>
    );
  } else {
    return (
      <div className={styled.NavbarContainer}>
        <div
          onClick={() => {
            window.location.reload();
          }}
          className={styled.Brand}
        >
          ReactMeal!
        </div>
        <NavbarCartButton onClick={props.onClick} />
      </div>
    );
  }
}

export default Navbar;
