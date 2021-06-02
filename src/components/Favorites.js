import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DrinkCard from "./DrinkCard";
import Details from "./Details";
import DrinkDetails from "./DrinkDetails";
import background from "../img/searchDrinksBackground.jpg";
import wood from "../img/wood.jpg";

const Favorites = (props) => {
  const [currentDrinkId, setCurrentDrinkId] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [results, setResults] = useState();

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
    // Allows page to update when favorite removed
    fetcher();
  };

  useEffect(() => {
    fetcher();
  }, []);

  const handleDrinkSelect = (id) => {
    setCurrentDrinkId(id);
    setShowDetails(true);
  };

  const handleBack = (id) => {
    setCurrentDrinkId(null);
    setShowDetails(false);
  };

  return (
    <div>
      <div
            className='results-background'
            style={{ backgroundImage: `url(${wood})` }}
          >
      {!showDetails ? (
        <>
          <h2 className='search-title justify-content-center' style={{ color: 'white'}}>My Favorites</h2>
          <Container className='d-flex flex-wrap pt-5 pb-3 mb-5'>
            {results == null ? (
              <p className>No Favorites Found</p>
            ) : (
              results.map((obj, index) => {
                return (
                  <DrinkCard
                    drink={obj}
                    key={obj.id}
                    key={obj.idDrink}
                    onSelect={handleDrinkSelect}
                  />
                );
              })
            )}
          </Container>
        </>
      ) : (
        <Details
          drinkId={currentDrinkId}
          onBack={handleBack}
          buttonTitle='Back to Favorites'
        />
      )}
      </div>
    </div>
  );
};

export default Favorites;
