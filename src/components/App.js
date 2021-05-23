import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  // this data will be passed down to the ShoppingList as a prop
  const [items, setItems] = useState(itemData);
  let [isDark, setToDark] = useState(false);

  function toggleDark(){
      setToDark((isDark) => !isDark);
      }
  

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {toggleDark}>{isDark? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
