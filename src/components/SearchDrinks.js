import {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import DrinkCard from "./DrinkCard";
import Details from "./Details";

const SearchDrinks = (props) => {
    const [drink, setDrink] = useState("");
    const [currentDrinkId, setCurrentDrinkId] = useState();
    const [results, setResults] = useState();
    const [ingredients, setIngredients] = useState();
    const data = props;
    const [showDetails, setShowDetails] = useState(false);

    const fetcher = (e) => {

       e.preventDefault()

        console.log(drink)

        // let defaultAPI = (ingredients?.includes(drink) == false) ? `http://localhost:5000/drink/type` : `http://localhost:5000/drink/name`;
        let defaultAPI = `http://localhost:5000/drink/type`

        if (ingredients?.includes(drink) == false) {
            defaultAPI = `http://localhost:5000/drink/name`
        }
        

        fetch(defaultAPI, {
            method: "POST",
            headers: new Headers( { 
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({drink})                   // e.g. vodka
        })
        .then(res => res.json() )                           // JSON data parsed by `data.json()` call
        .then(obj => {setResults(obj?.drinks?.drinks)
        console.log(obj)
        })
        .catch((error) => {console.error(error)})
          
    }

    useEffect(()=> {  
        fetch(`http://localhost:5000/drink/ingredients`)
        .then(res => res.json() )                       // JSON data parsed by `data.json()` call
        .then(obj => {
            let ingredients = obj.drinks.map(ingredient => ingredient.strIngredient1)
            setIngredients(ingredients)
        console.log(ingredients)
        })
        .catch((error) => {console.error(error)})

        },
    [])

    const handleDrinkSelect=(id) => {

        setCurrentDrinkId(id);
        setShowDetails(true);
    }

    const handleBack=(id) => {

        setCurrentDrinkId(null);
        setShowDetails(false);
    }

    return (
        <>
        {!showDetails ?
        (<div>
            <p>Pick Your Poison</p>
            <form onSubmit={fetcher}>
            <input type="text"
                name="drink" 
                id="drink"
                onChange={(event) => {setDrink(event.target.value)}}
                value={drink}/>
            <button type="submit"> submit
            </button>
            </form>
            <p>Drink: {drink}</p>
            <Container className='d-flex flex-wrap'>

            {
                results==null ? ( <p>No Drinks Found</p> ) :
                    ( results.map((obj, index) => {
                        return  <DrinkCard drink={obj} key={obj.idDrink} onSelect={handleDrinkSelect}/>
                        })
                    )
            }

            </Container>
            
        
        </div>): <Details drinkId={currentDrinkId} onBack={handleBack} />}
        </>
    )
}
export default SearchDrinks;