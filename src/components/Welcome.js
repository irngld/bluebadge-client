import React, { useState } from "react";

import { Jumbotron as Jumbo, Container, Row, Col, Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import welcomeBackground2 from "../img/welcomeBackground2.jpg";
import rooster from "../img/roosterNoBackground.png";
import margarita from "../img/margaritaIcon.svg";
import tallDrink from "../img/drinkIcon.svg";
import tropical from "../img/tropicalIcon.svg";
import Login from "./Auth/Login";

const Styles = styled.div`
  .jumbo {
    background: black;
    height: 55vh;
  //   background: url(${welcomeBackground2}) no-repeat fixed bottom;
  //   background-size: cover;
  //   color: #cecece;
  //   height: 100vh;
  //   position: relative;
  // }
`;

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <Container className="justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="rooster-container">
                <img src={rooster} alt="rooster logo" className="rooster" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="mt-4" style={{ color: "#e5e5e5" }}>
                WELCOME TO THE
              </h4>
              <h1 className="title mt-4" style={{ color: "#faa51a" }}>
                COCKTAIL CABINET
              </h1>
              <p className="mt-4" style={{ color: "#e5e5e5" }}>
                Let us help you find the perfect drink.
              </p>
              <Button
                variant="default"
                size="lg"
                className="px-3 mx-1 mt-4"
                style={{ color: "white", background: "#3c876f" }}
                type="button"
                onClick={showModal}
              >
                Log In
              </Button>{" "}
              <Button
                variant="default"
                size="lg"
                className="px-3 mx-1 mt-4"
                style={{ color: "#3c876f", background: "white", border: "#3c876f" }}
                href="/register"
              >
                Sign Up
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbo>
      <Row>
        <div className="key-features">
          <h3>KEY FEATURES:</h3>
        </div>
        <Col>
          <div className="drink-container">
            <img src={margarita} alt="margarita image" className="drink-image" />
            <h5>GET RECIPES BY DRINK NAME OR INGREDIENT</h5>
          </div>
        </Col>

        <Col>
          <div className="drink-container">
            <img src={tallDrink} alt="drink image" className="drink-image" />
            <h5>FEELING LUCKY? TRY A RANDOM DRINK RECIPE</h5>
          </div>
        </Col>

        <Col>
          <div className="drink-container">
            <img src={tropical} alt="tropical drink image" className="drink-image" />
            <h5>CREATE A FAVORITES LIST</h5>
          </div>
        </Col>
      </Row>

      <Modal show={isOpen}>
        <Modal.Header>
          <h3>Login</h3>
          <button className="bg-white border-0" type="button" onClick={hideModal}>
            X
          </button>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
    </Styles>
  );
};

export default Welcome;
