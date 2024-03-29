import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  // const { products, count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const pages = Math.ceil(count / size);

  useEffect(() => {
    const url = `https://y-three-ruddy.vercel.app/products?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [page, size]);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const ids = Object.keys(storedCart);

    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    });

    // for (const id in storedCart) {
    //   const addedProduct = products.find((product) => product._id === id);
    //   if (addedProduct) {
    //     const quantity = storedCart[id];
    //     addedProduct.quantity = quantity;
    //     savedCart.push(addedProduct);
    //   }
    // }
    // setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    //   cart.push(product);

    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link className="link-review-orders" to="/orders">
            <button className="btn-review-orders">
              Review Order
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
      <div className="pagination">
        <p>
          Currently selected page : {page} and size: {size}
        </p>
        {[...Array(pages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            className={page === number && "selected"}
          >
            {number}
          </button>
        ))}
        <select onChange={(event) => setSize(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
