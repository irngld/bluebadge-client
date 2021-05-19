import {useState, useEffect} from 'react';


const SearchDrinks = (props) => {
    const [drink, setDrink] = useState("");
    const [results,setResults] = useState();
   
    const data = props;

    const fetcher = (e) => {

       e.preventDefault()

        console.log(drink)
        fetch(`http://localhost:5000/drink/type`, {
            method: "POST",
            headers: new Headers( { 
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({drink})  // e.g. vodka
        })
        .then(res => res.json() )   // JSON data parsed by `data.json()` call
        .then(obj => console.log(obj))
        .then(obj => setResults(obj))
          
        }

    return (
     <div>
         <p>INVENTORY HERE</p>
         <form onSubmit={fetcher}>
         <input type="text"
        name="drink" 
        id="drink"
        onChange={(event) => {setDrink(event.target.value)}}
        value={drink}/>
        <button type="submit"> submit
        </button>
        </form>
        {/* <p>Drink: {drink}</p>
        {results && results.drinks.ingredients.map((obj, index) => {
            return  <p>{obj.strDescription}</p>
        })}
        {results && results.drinks} */}
    </div>
    )
}
export default SearchDrinks;