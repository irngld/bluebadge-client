import { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";
import Heart from "react-animated-heart";

const FavIcon = ({ drink, onUpdate, newRating }) => {
  let isFavorite = drink?.isFavorite ?? false == true;
  const [isClick, setClick] = useState(isFavorite);
  const handleUpdate = () => {
    if (onUpdate != null) onUpdate();
  };

  const selFavorite = (obj) => {
    let drink = obj;
    let initialState = isClick;
    setClick(!isClick);
    const token = localStorage.getItem("token");
    console.log(isClick, drink);

    if (!initialState) {
      console.log(`Adding favorite: ${newRating}`);
      fetch("http://localhost:5000/favorites/add", {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        }),
        body: JSON.stringify({
          drinkId: Number(drink.idDrink),
          drinkName: drink.strDrink,
          drinkThumb: drink.strDrinkThumb,
          // rating: 4,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          handleUpdate();
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch(`http://localhost:5000/favorites/remove/${drink.idDrink}`, {
        method: "DELETE",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          handleUpdate();
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="">
      <Heart className="heart" isClick={isClick} onClick={() => selFavorite(drink)} />
    </div>
  );
};

export default FavIcon;
