import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const GrandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <h4>Selected Items: {cart.length}</h4>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Total Tax: ${tax}</p>
      <h4>Grand Total: $ {GrandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
