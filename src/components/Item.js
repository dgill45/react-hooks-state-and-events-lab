import React from "react";

function Item({ name, category }) {

let [inCart, setInCart] = useState(item)
  return (
    <li className={"inCart" +(false ? "item is not in the cart": 'item is in the cart')}  >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
