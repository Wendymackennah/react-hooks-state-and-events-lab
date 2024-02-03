import React, { useState } from "react";

const items = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

function Item({ item, addToCart }) {
  const [inCart, setInCart] = useState(false);

  const handleButtonClick = () => {
    setInCart((prevInCart) => !prevInCart);
    addToCart(item); // Placeholder addToCart function
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      {item.name} - {item.category}
      <button onClick={handleButtonClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

function ShoppingList() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Placeholder addToCart function, you need to implement the actual logic
    // For example, you can add or remove items from the cart array.
    setCart((prevCart) =>
      inCart ? prevCart.filter((i) => i.id !== item.id) : [...prevCart, item]
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} addToCart={addToCart} />
      ))}
    </ul>
  );
}

export default ShoppingList;
