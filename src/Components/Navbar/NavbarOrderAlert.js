import React from "react";
import NavbarOrderAlertCSS from "./NavbarOrderAlert.module.css";
function NavbarOrderAlert() {
  const styled = NavbarOrderAlertCSS;
  return (
    <div className={styled.container}>
      <h3 className={styled.text}>Your order has been sent !</h3>
    </div>
  );
}

export default NavbarOrderAlert;
