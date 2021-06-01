import React from 'react';
import {useState} from 'react';
import background from "../img/fence.jpg";
import '../components/DrinkDetails.css';
import { Container, Button, Collapse, Card, CardImg, CardTitle, CardBody, Fade, CardLink,CardSubtitle, Row} from 'reactstrap';
import styled from 'styled-components';
import FavIcon from "./FavIcon";
import RatingStars from "./RatingStars";


const DrinkDetails = ({drink, onSelect, onUpdate }) => {
const [open, setOpen] = useState(false);
const data = drink;
  const [showSearch, setShowSearch] = useState(true);
    return (
        <>
        <div className="mainDetails">
          <div className="mainDetailCard" style={{backgroundImage: `url(${background})`, width:'100vw', margin: 0, height:'100vh',backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
         
          <Card className="drink-labels" style={{ height: "auto", width: "400px" }}>



          <Container className="drinking">
          <CardImg className="drink-thumb" src={drink.strDrinkThumb}  onClick={ () => onSelect(drink.idDrink)} />


<CardTitle>
    <h3 className="card-title">{drink.strDrink}</h3>
    </CardTitle>
   
        <div id="drink-description">
          <h5 className="drink-names">{drink.strMeasure1 && `${drink.strMeasure1} ${drink.strIngredient1}`}</h5>
          <h5 className="drink-names">{drink.strMeasure2 && `${drink.strMeasure2} ${drink.strIngredient2}`}</h5>
          <h5 className="drink-names">{drink.strMeasure3 && `${drink.strMeasure3} ${drink.strIngredient3}`}</h5>
          <h5 className="drink-names">{drink.strMeasure4 && `${drink.strMeasure4} ${drink.strIngredient4}`}</h5>
          <h5 className="drink-names">{drink.strMeasure5 && `${drink.strMeasure5} ${drink.strIngredient5}`}</h5>
          <h5 className="drink-names">{drink.strMeasure6 && `${drink.strMeasure6} ${drink.strIngredient6}`}</h5>
          <h6 className="drink-instructions">{drink.strInstructions}</h6>
          </div>
     
      <hr />
        <div className="d-flex justify-content-between align-items-top bg-light">
          <div className="pt-3 ps-4">
            <RatingStars className="stars" />
          </div>
          <div className="">
            <FavIcon className="heart" drink={drink} onUpdate={onUpdate} />
          </div>
        </div>
      </Container>
      </Card>
  
          </div>
          </div>

          {/* <Button
              className='search-again-button'
              type='button'
              onClick={() => setShowSearch(true)}
              size='lg'
              style={{ color: "white", background: "#faa51a", border: "white" }}
            >
              Search Again
            </Button> */}
        </>
      )
}

export default DrinkDetails;