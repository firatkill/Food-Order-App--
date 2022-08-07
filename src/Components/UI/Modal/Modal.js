import React, { useContext, Fragment } from "react";
import { CartContext } from "../../../Context/CartContext";
import ModalCSS from "./Modal.module.css";
import CartItem from "../../CartItems/CartItem";
function Modal(props) {
  const styled = ModalCSS;
  const cartList = useContext(CartContext);
  // const food = { name: "Sushi", price: 22.49, amount: 2 };

  if (!props.show) {
    return null;
  }
  let totalAmount = 0;
  cartList.forEach((item) => {
    totalAmount += item.price * item.amount;
  });

  return (
    <div className={styled.modal} onClick={props.onClose}>
      <div
        className={styled.modal_content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styled.modal_content__header}>
          <h4 className={styled.modal_content__header__title}>Cart</h4>
        </div>
        <div className={styled.modal_content__body}>
          {cartList.map((food) => {
            if (food.amount > 0) {
              return (
                <Fragment key={cartList.indexOf(food)}>
                  <CartItem
                    handleDecrement={props.handleDecrement}
                    handleIncrement={props.handleIncrement}
                    key={food.name}
                    food={food}
                  />
                  <hr key={food.price} />
                </Fragment>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className={styled.modal_content__footer}>
          <div className={styled.modal_content__footer__total}>
            <p className={styled.modal_content__footer__totalText}>
              Total Amount
            </p>
            <p className={styled.modal_content__footer__totalAmount}>
              ${totalAmount.toFixed(2)}
            </p>
          </div>
          <div className={styled.modal_content__footer__buttons}>
            <button
              onClick={props.onClose}
              className={styled.modal_content__footer__closeButton}
            >
              Close
            </button>
            <button
              onClick={props.onOrder}
              className={styled.modal_content__footer__orderButton}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
