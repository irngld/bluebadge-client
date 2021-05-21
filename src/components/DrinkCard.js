import {Link} from "react-router-dom";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const DrinkCard = ({drink}) => {


    return (
    <div> 
        <Link to={`/details/${drink.idDrink}`}>
            <p key={drink.idDrink}>{drink.strDrink}</p>
        </Link> 
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