import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DrinkDetails from "./DrinkDetails";
import FavIcon from "./FavIcon";
import RatingStars from "./RatingStars";

import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const DrinkCard = ({drink, onSelect}) => {
    
    

    return (
    <div className='px-2 py-2'>
        
            {/* <Link to={`/details/${drink.idDrink}`}> */}
                {/* <p key={drink.idDrink}>{drink.strDrink}</p> */}
                <Card 
                    className="text-white d-flex text-left"
                    style={{height: '300px', width: '300px'}}
                >
                <Card.Img src={drink.strDrinkThumb} alt="Card image" />
                <Card.ImgOverlay className="image-overlay" onClick={() => onSelect(drink.idDrink)}>
                <Card.Title className="">{drink.strDrink}</Card.Title>
                </Card.ImgOverlay>
                </Card>
                <RatingStars />
                <FavIcon drink={{drink}}/>
            {/* </Link> */}
    </div>
    )
}


export default DrinkCard;