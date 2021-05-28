import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DrinkCard from "./DrinkCard";
import Details from "./Details";
import background from "../img/searchDrinksBackground.jpg";

const Favorites = (props) => {
  const [currentDrinkId, setCurrentDrinkId] = useState();
  const [results, setResults] = useState();
  const [ingredients, setIngredients] = useState();
  const data = props;
  const [showDetails, setShowDetails] = useState(false);
  const [showSearch, setShowSearch] = useState(true);

  let getFavDrinks = "http://localhost:5000/favorites/show";
  const token = localStorage.getItem("token");

  const fetcher = () => {
    fetch(getFavDrinks, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        let drinks = json.favDrink?.map((drink) => {
          return {
            id: drink.id,
            userId: drink.userId,
            idDrink: drink.drinkId,
            strDrink: drink.drinkName,
            strDrinkThumb: drink.drinkThumb,
            rating: drink.rating,
            createdAt: drink.createdAt,
            updatedAt: drink.updatedAt,
            isFavorite: true,
          };
        });
        setResults(drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const itemUpdated = () => {
    fetcher();
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div>
      <p>FAVORITES HERE</p>
      <Container className="d-flex flex-wrap">
        {results == null ? (
          <p>No Favorites Found</p>
        ) : (
          results.map((obj, index) => {
            return (
              <DrinkCard
                drink={obj}
                key={obj}
                // onSelect={}
                onUpdate={itemUpdated}
              />
            );
          })
        )}
      </Container>
    </div>
  );
};

export default Favorites;
