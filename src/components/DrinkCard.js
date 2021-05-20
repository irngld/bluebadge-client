import {Link} from "react-router-dom";

const DrinkCard = ({drink}) => {
    return (<> <Link to={`/details/${drink.idDrink}`}><p key={drink.idDrink}>{drink.strDrink}</p></Link> 
    </>)
}


export default DrinkCard;