import React from 'react';
import HamburgerMenu from "./HamburgerMenu";
import { Container, Button, Row, Col } from "react-bootstrap";
import margarita from "../img/margaritaIcon.svg";
import tallDrink from "../img/drinkIcon.svg";
import tropical from "../img/tropicalIcon.svg";
import { Link } from 'react-router-dom';

const Home  = () => {
    return (
    <div>
        <HamburgerMenu />
        <Row>
    <div className='home-text mt-5 mb-3'>
      <h3>Welcome, </h3>
      <br />
      <h5>Let's find your perfect cocktail! Choose an option below.</h5>
    </div>
    
      <Col className="icons">
        <Link to="/searchdrinks" className='drink-link'>
          <img src={margarita} alt="margarita image"  className='drink-image' style={{ maxWidth: '22rem'}} />
          <h5 className="text-link mt-3" style={{color: 'black'}}>SEARCH DRINK RECIPES</h5>
        </Link>
      </Col>

      <Col className="icons">
      <Link to="/random" className='drink-link'>
          <img src={tallDrink} alt="drink image"  className='drink-image' />
          <h5 className="text-link mt-3" style={{color: 'black'}}>FEELING LUCKY? TRY A RANDOM DRINK RECIPE</h5>
        </Link>
      </Col>

      <Col className="icons">
      <Link to="/favorites" className='drink-link'>
          <img src={tropical} alt="tropical drink image"  className='drink-image' />
          <h5 className="text-link mt-3" style={{color: 'black'}}>GO TO YOUR FAVORITES</h5>
        </Link>
      </Col>
    </Row>
    </div>
  )  
}

export default Home;