import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Heart from "react-animated-heart";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const DrinkCard = ({drink, onSelect}) => {
    const [isClick, setClick] = useState(false);

    const selFavorite = () => {
        
        setClick(!isClick)
        const token = localStorage.getItem('token');
        console.log(isClick, token);

        fetch('http://localhost:5000/favorites/add', {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token
                }),
                body: JSON.stringify({
                    drinkId: 123,
                    drinkName: "bob",
                    drinkThumb: "tom",
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

        // () => setClick(!isClick)


    return (
    <div className='px-2 py-2'>
        
            {/* <Link to={`/details/${drink.idDrink}`}> */}
                {/* <p key={drink.idDrink}>{drink.strDrink}</p> */}
                <Card className="text-white d-flex text-left"
                        style={{height: '300px', width: '300px'}}
                        >
                        <Card.Img src={drink.strDrinkThumb} alt="Card image" />
                    <Card.ImgOverlay className="image-overlay" onClick={() => onSelect(drink.idDrink)}>
                    <Card.Title className="">{drink.strDrink}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Heart className="heart" isClick={isClick} onClick={selFavorite} />
                {/* <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> */}
            {/* </Link> */}
        
    </div>
    )
}


export default DrinkCard;