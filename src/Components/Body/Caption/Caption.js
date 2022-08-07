import React from "react";
import Card from "../../../Components/UI/Card/Card";
import CaptionCSS from "./Caption.module.css";

function Caption() {
  const styled = CaptionCSS;

  return (
    <Card className={styled.Container}>
      <div className={styled.CardHeader}>Delicious Food, Delivered To You</div>
      <div className={styled.CardBody}>
        <p className={styled.CardBody__Text}>
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className={styled.CardBody__Text}>
          All our meals are cooked with high quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
        <p></p>
      </div>
    </Card>
  );
}

export default Caption;
