import {Link} from "react-router-dom";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const DrinkCard = ({drink}) => {


    return (
    <div> 
        <Link to={`/details/${drink.idDrink}`}>
            <p key={drink.idDrink}>{drink.strDrink}</p>
        </Link> 

        <Card className="bg-dark text-white d-flex"
        style={{height: '450px', width: '300px'}}>
  <Card.Img src={drink.strDrinkThumb} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{drink.strDrink}</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
    </div>
    )

    // <div>
    //   <Container>
    //     <Row>
    //       <Col>
    //         <h3>Drink</h3>
    //       </Col>
    //     </Row>
    //     <Row lg={4} md={3}>
    //         <Link to={`/details/${drink.idDrink}`}>
    //              <p key={drink.idDrink}>{drink.strDrink}</p>
    //          </Link> 
    //     </Row>
    //   </Container>
    // </div>
}


export default DrinkCard;