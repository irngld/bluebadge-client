import {Link} from "react-router-dom";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const DrinkCard = ({drink, onSelect}) => {


    return (
    <div className='px-2 py-2'>
        
            {/* <Link to={`/details/${drink.idDrink}`}> */}
                {/* <p key={drink.idDrink}>{drink.strDrink}</p> */}
                <Card className="text-white d-flex text-left"
                        style={{height: '300px', width: '300px'}}
                        onClick={() => onSelect(drink.idDrink)}>
                        <Card.Img src={drink.strDrinkThumb} alt="Card image" />
                    <Card.ImgOverlay className="image-overlay">
                    <Card.Title className="">{drink.strDrink}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            {/* </Link> */}
        
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