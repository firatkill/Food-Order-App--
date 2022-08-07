import React, { useState, useReducer } from "react";
import { CartContext } from "./Context/CartContext";
import Container from "./Components/Body/Container/Container";
import Navbar from "./Components/Navbar/Navbar";
import Modal from "./Components/UI/Modal/Modal";

const initialCartList = [
  { name: "Sushi", price: 22.99, amount: 0 },
  { name: "Schnitzel", price: 16.5, amount: 0 },
  { name: "Barbecue Burger", price: 12.99, amount: 0 },
  { name: "Green Bowl", price: 18.99, amount: 0 },
  { name: "Kebab", price: 26.99, amount: 0 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state.map((food) => {
        if (food.name === action.name) {
          return { ...food, amount: food.amount + 1 };
        } else {
          return food;
        }
      });
    case "decrement":
      return state.map((food) => {
        if (food.name === action.name) {
          return { ...food, amount: food.amount - 1 };
        } else {
          return food;
        }
      });
    case "reset":
      return initialCartList;
    default:
      return state;
  }
};

const MenuItems = [
  { name: "Sushi", caption: "Finest fish and veggies", price: 22.99 },
  { name: "Schnitzel", caption: "A german specialty !", price: 16.5 },
  { name: "Barbecue Burger", caption: "American,raw,meaty", price: 12.99 },
  { name: "Green Bowl", caption: "Healty.. and green.", price: 18.99 },
  { name: "Kebab", caption: "A tasteful Turkish specialty.", price: 26.99 },
];

function App() {
  const [show, setShow] = useState(false);
  const [orderStatus, setOrderStatus] = useState(false);
  const [cartList, dispatch] = useReducer(reducer, initialCartList);
  const [buttonState, setButtonState] = useState(false);
  const showModalContent = () => {
    setShow(true);
  };
  const hideModalContent = () => {
    setShow(false);
  };
  const onOrder = () => {
    if (cartList.every((elem) => elem.amount === 0)) {
      setShow(false);
    } else {
      setOrderStatus(true);
      setButtonState(true);
      setShow(false);
      dispatch({ type: "reset" });
    }
  };
  const handleIncrement = (food) => {
    dispatch({ type: "increment", name: `${food}` });
  };
  const handleDecrement = (food) => {
    dispatch({ type: "decrement", name: `${food}` });
  };
  return (
    <CartContext.Provider value={cartList}>
      <>
        <Navbar orderStatus={orderStatus} onClick={showModalContent} />
        <Container
          buttonState={buttonState}
          handleIncrement={handleIncrement}
          menuItems={MenuItems}
        />
        <Modal
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          onOrder={onOrder}
          onClose={hideModalContent}
          show={show}
        />
      </>
    </CartContext.Provider>
  );
}

export default App;
