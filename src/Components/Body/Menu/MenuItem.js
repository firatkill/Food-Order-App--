import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import MenuItemCSS from "./MenuItem.module.css";

function MenuItem(props) {
  const styled = MenuItemCSS;

  const clickHandler = () => {
    props.handleIncrement(props.food.name);
  };
  const cartList = useContext(CartContext);
  let food;
  cartList.forEach((elem) => {
    if (elem.name === props.food.name) {
      food = elem.amount;
    }
  });

  return (
    <div className={styled.container}>
      <div className={styled.foodInfo}>
        <p className={styled.foodInfo__name}>{props.food.name}</p>
        <p className={styled.foodInfo__caption}>{props.food.caption}</p>
        <p className={styled.foodInfo__price}>$ {props.food.price}</p>
      </div>
      <div className={styled.amountContainer}>
        <div className={styled.amount}>
          <label className={styled.amount__label}>Amount</label>
          <input
            value={food}
            readOnly
            disabled={props.buttonState}
            type="number"
            className={styled.amount__input}
          />
        </div>
        <button
          disabled={props.buttonState}
          onClick={clickHandler}
          className={styled.amountButton}
        >
          +Add
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
