import React from 'react';
import {useState} from 'react';
import background from "../img/fence.jpg";
import '../components/DrinkDetails.css';
import { Container, Button, Collapse, Card, CardImg, CardTitle, CardBody, Fade, CardLink,CardSubtitle, Row} from 'reactstrap';
import styled from 'styled-components';

// const Button = styled.button`
// margin: 0 5px;
//   padding: 8px 14px;
//   background: rgba(155, 155, 155, 0.2);
//   color: #fff;
//   cursor: pointer;
//   border: 1px solid #fff;
//   outline: 0;
//   font-weight: 300;
//   :hover {
//     opacity: 0.8;
//   }
// ` 



const DrinkDetails = ({drink}) => {
  const [open, setOpen] = useState(false);
  
    return (
        <>
        <div className="mainDetails">
          <div className="mainDetailCard" style={{backgroundImage: `url(${background})`, width:'100vw', margin: 0, height:'100vh',backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
         
          <Card className="drink-labels" style={{ width: "250px", margin: "5px", boxShadow: '0 4px 8px 0 rgba(0,0,0,.2)' }}>
          <Container className="drinking">
          <CardImg className="drink-thumb" style={{height: "250px"}} src={drink.strDrinkThumb}/>


<CardTitle>
    <h2 className="card-title">{drink.strDrink}</h2>
    </CardTitle>
    <Row className="card-names" style={{margin:'auto', justifyContent:'center'}}>

    <Button className="drink-details"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       Drink Details 
      </Button>

      <Fade in={open}>
        <div id="drink-description">
          <h3 className="drink-names">{drink.strMeasure1 && `${drink.strMeasure1} ${drink.strIngredient1}`}</h3>
          <h3 className="drink-names">{drink.strMeasure2 && `${drink.strMeasure2} ${drink.strIngredient2}`}</h3>
          <h3 className="drink-names">{drink.strMeasure3 && `${drink.strMeasure3} ${drink.strIngredient3}`}</h3>
          <h3 className="drink-names">{drink.strMeasure4 && `${drink.strMeasure4} ${drink.strIngredient4}`}</h3>
          <h3 className="drink-names">{drink.strMeasure5 && `${drink.strMeasure5} ${drink.strIngredient5}`}</h3>
          <h3 className="drink-names">{drink.strMeasure6 && `${drink.strMeasure6} ${drink.strIngredient6}`}</h3>
          <h4 className="drink-instructions">{drink.strInstructions}</h4>
          </div>
      </Fade>
      </Row>
      </Container>
      </Card>
      
          </div>
          </div>
        </>
      )
}

export default DrinkDetails;