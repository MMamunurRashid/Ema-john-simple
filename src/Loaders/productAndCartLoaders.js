import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoaders = async () => {
  // get Products
  const productsData = await fetch("http://localhost:5000/products");
  const { products } = await productsData.json();

  // get cart
  const savedCart = getStoredCart();
  const initialCart = [];
  //   console.log(savedCart);
  for (const id in savedCart) {
    // console.log(id);
    const addedProduct = products.find((product) => product._id === id);
    // console.log(addedProduct);
    if (addedProduct) {
      const quantity = savedCart[id];
      //   console.log(id, quantity);
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }
  return { products: products, initialCart: initialCart };
};
