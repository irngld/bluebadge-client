import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DrinkDetails from "./DrinkDetails";

const DetailsPage = ({ drinkId, onBack, buttonTitle = "Return to Search Results" }) => {
  const [drink, setDrink] = useState();

  const fetcher = () => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:5000/drink/details/${drinkId}`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      }),
    })
      .then((res) => res.json())
      .then((obj) => {
        if (obj.drinks) setDrink(obj?.drinks[0]);
      });
  };

  useEffect(() => {
    fetcher();
  }, [drinkId]);

  return (
    <div>{drink == null ? <p>No drink found</p> : <DrinkDetails drink={drink} onSelect={onBack} buttonTitle={buttonTitle} showButton={true} />}</div>
  );
};
export default DetailsPage;
