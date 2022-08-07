import React from "react";
import CardCSS from "./Card.module.css";
function Card(props) {
  const styled = CardCSS;
  return (
    <div className={`${props.className} ${styled.Card}`}>{props.children}</div>
  );
}

export default Card;
