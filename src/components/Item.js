import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleCart = () => {
    setIsInCart(!isInCart);
  };

  const buttonClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Add to Cart" : "Remove From Cart";

  return (
    <li className={buttonClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
