import React, { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { getUser } from "./Auth/UserToken";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import margarita from "../img/margaritaIcon.svg";
import tallDrink from "../img/drinkIcon.svg";
import tropical from "../img/tropicalIcon.svg";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [drinkFact, setDrinkFact] = useState();
  console.log("props", props);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/drink/drinkfact`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      }),
    })
      .then((res) => res.json()) // JSON data parsed by `data.json()` call
      .then((obj) => setDrinkFact(obj));
  }, []);
  return (
    <div>
      <HamburgerMenu />

      <Row className="home-top">
        <div className="home-text">
          <h2>Welcome, {JSON.parse(localStorage.getItem("user")).firstName}!</h2>
          <br />
          <h5>Let's find your perfect cocktail! Choose an option below.</h5>
        </div>
        <Container className="d-flex">
          <Col className="icons">
            <Link to="/searchdrinks" className="drink-link">
              <img src={margarita} alt="margarita image" className="drink-image" style={{ maxWidth: "22rem" }} />
              <h5 className="text-link mt-3" style={{ color: "black" }}>
                SEARCH DRINK RECIPES
              </h5>
            </Link>
          </Col>

          <Col className="icons">
            <Link to="/random" className="drink-link">
              <img src={tallDrink} alt="drink image" className="drink-image" />
              <h5 className="text-link mt-3" style={{ color: "black" }}>
                FEELING LUCKY? TRY A RANDOM DRINK RECIPE
              </h5>
            </Link>
          </Col>

          <Col className="icons">
            <Link to="/favorites" className="drink-link">
              <img src={tropical} alt="tropical drink image" className="drink-image" />
              <h5 className="text-link mt-3" style={{ color: "black" }}>
                GO TO YOUR FAVORITES
              </h5>
            </Link>
          </Col>
        </Container>
      </Row>

      <Row className="home-bottom" style={{}}>
        <Container className="w-75 align-content-center">
          <Card className="drink-fact">
            <h3 className="p-3">The More You Know (about your cocktail ingredients)</h3>
            <Card.Body className="">
              <Card.Title>{drinkFact?.strIngredient}</Card.Title>
              <Card.Text className="text-left p-3">{drinkFact?.strDescription}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Happy Mixing!</Card.Footer>
          </Card>
        </Container>
      </Row>
    </div>
  );
};

export default Home;
