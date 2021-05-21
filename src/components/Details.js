import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DrinkDetails from "./DrinkDetails";

const DetailsPage = () => {
  const [drink, setDrink] = useState();
  const { id } = useParams();

  const fetcher = () => {
    fetch(`http://localhost:5000/drink/details/${id}`)
      .then((res) => res.json())
      .then((obj) => {
        if (obj.drinks) setDrink(obj?.drinks[0]);
      });
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div>
      <p>DRINK DETAILS</p>
      {drink == null ? (
        <p>No drink found</p>
      ) : <DrinkDetails drink={drink}/>}
    </div>
  );
};
export default DetailsPage;
