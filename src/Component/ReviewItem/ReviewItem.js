import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, name, price, quantity, img, shipping } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>
            <small>
              Price: $ <span className="price-color">{price}</span>
            </small>
          </p>
          <p>
            <small>
              Shipping: $ <span className="price-color"> {shipping}</span>{" "}
            </small>
          </p>
          <p>
            <small>
              Quantity: <span className="price-color">{quantity}</span>
            </small>
          </p>
        </div>
      </div>
      <div className="delete-container">
        <button onClick={() => handleRemoveItem(id)} className="btn-delete">
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrashAlt}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
