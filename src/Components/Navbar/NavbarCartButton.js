import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import NavbarCartButtonCSS from "./NavbarCartButton.module.css";

function NavbarCartButton(props) {
  const cartList = useContext(CartContext);
  let totalAmount = 0;
  cartList.forEach((item) => (totalAmount += item.amount));
  const styled = NavbarCartButtonCSS;
  return (
    <div onClick={props.onClick} className={styled.Container}>
      <FaShoppingCart />
      <p className={styled.CartText}>Amount</p>
      <div className={styled.Amount}>{totalAmount}</div>
    </div>
  );
}

export default NavbarCartButton;
