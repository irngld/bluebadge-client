import { useState, useEffect } from "react";

const RandomDrink = () => {
  const [drink, setDrink] = useState("");

  const fetcher = () => {
    fetch(`http://localhost:5000/drink/random`)
      .then((res) => res.json()) // JSON data parsed by `data.json()` call
      .then((obj) => setDrink(obj.drinks[0]));
  };

  return (
    <div>
      <p>GET RANDOM DRINK</p>
      <button type='button' onClick={fetcher}>
        Suprise Me, I'm Feeling Lucky!
      </button>
      <p>Drink: {drink.strDrink}</p>
    </div>
  );
};
export default RandomDrink;
