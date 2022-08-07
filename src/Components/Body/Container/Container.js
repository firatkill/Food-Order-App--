import React from "react";
import Caption from "../Caption/Caption";
import ContainerCSS from "./Container.module.css";
import Menu from "../Menu/Menu";
function Container(props) {
  const styled = ContainerCSS;
  return (
    <div className={styled.Container}>
      <Caption />
      <Menu
        buttonState={props.buttonState}
        handleIncrement={props.handleIncrement}
        menuItems={props.menuItems}
      />
    </div>
  );
}

export default Container;
