import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DrinkDetails from "./DrinkDetails";
import FavIcon from "./FavIcon";
import RatingStars from "./RatingStars";

import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

const DrinkCard = ({ drink, onSelect, onUpdate }) => {
  return (
    <div className='px-3 py-3'>
      {/* <Link to={`/details/${drink.idDrink}`}> */}
      {/* <p key={drink.idDrink}>{drink.strDrink}</p> */}
      <Card
        className='drinkCard text-dark d-flex text-left bg-light'
        style={{ height: "auto", width: "400px" }}
      >
        <Card.Img
          src={drink.strDrinkThumb}
          alt='Card image'
          className='card-image p-2'
          onClick={() => onSelect(drink.idDrink)}
        ></Card.Img>

        <Card.Title className='mt-4'>{drink.strDrink}</Card.Title>
        <hr />
        <div className='d-flex justify-content-between align-items-top bg-light'>
          <div className='pt-3 ps-4'>
            <RatingStars className='stars' />
          </div>

          <div className=''>

              <FavIcon className='heart' drink={drink} onUpdate={onUpdate} />

          </div>
        </div>
      </Card>

      {/* </Link> */}
    </div>
  );
};

export default DrinkCard;
