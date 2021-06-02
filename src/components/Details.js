import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DrinkDetails from "./DrinkDetails";

const DetailsPage = ({ drinkId, onBack }) => {
  const [drink, setDrink] = useState();

  const fetcher = () => {
    fetch(`http://localhost:5000/drink/details/${drinkId}`)
      .then((res) => res.json())
      .then((obj) => {
        if (obj.drinks) setDrink(obj?.drinks[0]);
      });
  };

  useEffect(() => {
    fetcher();
  }, [drinkId]);

  return (
    <div>
      {drink == null ? <p>No drink found</p> : <DrinkDetails drink={drink} />}
      <button type="button" onClick={onBack}>
        Return to Search Results
      </button>
    </div>
  );
};
export default DetailsPage;
