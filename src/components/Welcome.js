import React, {useState} from "react";
import {
  Jumbotron as Jumbo,
  Container,
  Row,
  Col,
  Button,
  Modal
} from "react-bootstrap";
import styled from "styled-components";
import welcomeBackground2 from "../img/welcomeBackground2.jpg";
import Login from './Auth/Login'

const Styles = styled.div`
  .jumbo {
    background: url(${welcomeBackground2}) no-repeat fixed bottom;
    background-size: cover;
    color: #cecece;
    height: 100vh;
    position: relative;
  }

  .overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const Welcome = () =>{
    const [isOpen, setIsOpen] = useState(false);
    
    const showModal = () => {
        setIsOpen(true);
      };

      const hideModal = () => {
          setIsOpen(false);
      }

    return (
  <Styles>
    <Jumbo fluid className='jumbo'>  
      <Container className='d-flex welcomeText justify-content-end align-items-center'>
        <Row>
          <Col className='mr-5'>
            <h4>WELCOME TO THE</h4>
            <h1>COCKTAIL CABINET</h1>
            <p>Let us help you find the perfect drink.</p>
            <Button type="button" className="bg-yellow" onClick={showModal}>Log In</Button>
            <Button href='#'>Sign UP</Button>
          </Col>
        </Row>
      </Container>
    </Jumbo>
    
    <Modal show={isOpen}>
        <Modal.Header>
        <h3>Login</h3>
        <button className="bg-white border-0" type="button" onClick={hideModal}>X</button>
        </Modal.Header>
      <Modal.Body><Login /></Modal.Body>
    </Modal>
  </Styles>
)
    }

export default Welcome;
