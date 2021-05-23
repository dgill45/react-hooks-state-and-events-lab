import React from "react";

function Item({ name, category }) {
let [inCart, setInCart] = useState(false)

  function handleAddToCartClick() {
    setInCart((inCart) => !inCart);
  }


  return (
    <li className={"inCart" +(false ? "": 'item is in the cart')}  >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={"inCart" ? "remove": "add"} onClick = {handleAddToCartClick}>{inCart? "Remove from" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
