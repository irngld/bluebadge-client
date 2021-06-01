import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import DrinkCard from "./DrinkCard";
import Details from "./Details";
import background from "../img/searchDrinksBackground.jpg";
import SearchBar from "@opuscapita/react-searchbar";
import wood from "../img/wood.jpg";

const SearchDrinks = (props) => {
  const [currentDrinkId, setCurrentDrinkId] = useState();
  const [results, setResults] = useState();
  const [ingredients, setIngredients] = useState();
  const data = props;
  const [showDetails, setShowDetails] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [currentSearch, setCurrentSearch] = useState('');

  const fetcher = (drink) => {
    setCurrentSearch(drink)
    let defaultAPI = `http://localhost:5000/drink/type`;

    if (ingredients?.includes(drink) == false) {
      defaultAPI = `http://localhost:5000/drink/name`;
    }

    fetch(defaultAPI, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ drink }), // e.g. vodka
    })
      .then((res) => res.json()) // JSON data parsed by `data.json()` call
      .then((obj) => {
        setResults(obj?.drinks?.drinks);
        console.log(obj);
        setShowSearch(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/drink/ingredients`)
      .then((res) => res.json()) // JSON data parsed by `data.json()` call
      .then((obj) => {
        let ingredients = obj.drinks.map(
          (ingredient) => ingredient.strIngredient1
        );
        setIngredients(ingredients);
      })
      .catch((error) => {
        console.error(error);
      });
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
    <>
      {!showDetails ? (
        showSearch ? (
          <div
            className='search-drinks-background'
            style={{ backgroundImage: `url(${background})`}}>
            <h2 className="search-title">Search By Drink Name or Ingredient</h2>
            <div className='w-100 d-flex align-items-center justify-content-center'>
              <SearchBar
                className=' w-50'
                inputClassName='search-bar'
                onSearch={fetcher}
                translations={{
                  searchPlaceHolder: "Enter drink name or ingredient",
                }}
              />
            </div>
          </div>
        ) : (
          <div
            className='results-background'
            style={{ backgroundImage: `url(${wood})` }}
          >
              <Container className='d-flex ps-4'>
              <h4 className='search-title pt-5 pb-3' style={{ color: 'white'}}>Showing search results for: <span>{currentSearch}</span> </h4>
              </Container>
                
            <Container className='d-flex flex-wrap'>
              {results == null ? (
                <p>No Drinks Found</p>
              ) : (
                results.map((obj, index) => {
                  return (
                    <DrinkCard
                      drink={obj}
                      key={obj.idDrink}
                      onSelect={handleDrinkSelect}
                    />
                  );
                })
              )}
            </Container>
            <Button
              className='search-again-button'
              type='button'
              onClick={() => setShowSearch(true)}
              size='lg'
              style={{ color: "white", background: "#faa51a", border: "white" }}
            >
              Search Again
            </Button>
          </div>
        )
      ) : (
        <Details drinkId={currentDrinkId} onBack={handleBack} />
      )}
    </>
  );
};
export default SearchDrinks;
