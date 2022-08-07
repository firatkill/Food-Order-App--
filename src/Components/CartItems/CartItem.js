import React from "react";
import CartItemCSS from "./CartItem.module.css";
function CartItem(props) {
  const styled = CartItemCSS;

  const handleDecrement = () => {
    props.handleDecrement(props.food.name);
  };
  const handleIncrement = () => {
    props.handleIncrement(props.food.name);
  };
  return (
    <div className={styled.container}>
      <div className={styled.ItemInfo}>
        <div className={styled.ItemInfo__info}>
          <p className={styled.ItemInfo__info__name}>{props.food.name}</p>
          <p className={styled.ItemInfo__info__price}>
            $ {(props.food.price * props.food.amount).toFixed(2)}
          </p>
        </div>
        <div>
          <button className={styled.ItemInfo__amount} disabled>
            x{props.food.amount}
          </button>
        </div>
      </div>
      <div className={styled.crementButtons}>
        <button onClick={handleDecrement} className={styled.crementButton}>
          -
        </button>
        <button onClick={handleIncrement} className={styled.crementButton}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
