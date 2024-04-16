//17_.js
import React, { useState } from 'react';

const Product = ({ name, price, quantity }) => {
  const [productQuantity, setProductQuantity] = useState(quantity);

  const increaseQuantity = () => {
    setProductQuantity(prevQuantity => prevQuantity + 1);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {productQuantity}</p>
      <button onClick={increaseQuantity}>Increase Quantity</button>
    </div>
  );
};

export default Product;