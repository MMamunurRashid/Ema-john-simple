import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
const Cart = ({ cart, clearCart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const GrandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <h4>Selected Items: {quantity}</h4>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Total Tax: ${tax}</p>
      <h4>Grand Total: $ {GrandTotal.toFixed(2)}</h4>

      <button onClick={clearCart} className="btn-clear-cart">
        Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
      </button>
      {children}
    </div>
  );
};

export default Cart;
