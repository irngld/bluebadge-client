import { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";
import Heart from "react-animated-heart";


const FavIcon = ({drink}) => {
    const [isClick, setClick] = useState(false);

    const selFavorite = (obj) => {
        let {drink} = obj;

        setClick(!isClick)
        const token = localStorage.getItem('token');
        console.log(isClick, drink);

        fetch('http://localhost:5000/favorites/add', {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token
                }),
                body: JSON.stringify({
                    drinkId: Number(drink.idDrink),
                    drinkName: drink.strDrink,
                    drinkThumb: drink.strDrinkThumb,
                    rating: 4
                })
            })
            .then(res => res.json())
            .then(json => {
                console.log(json);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="">
        <Heart 
            className="heart" 
            isClick={isClick} 
            onClick={() => selFavorite(drink)} 
        />
        </div>

    )
}


export default FavIcon;