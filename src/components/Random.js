import { useState, useEffect } from "react";
import DrinkDetails from "./DrinkDetails";
import '../components/Random.css';
import background from "../img/woodbackground.jpg";
import styled from "styled-components";

const Button = styled.button`
background-color: transparent;
color: #b07c0d;
padding: 10px 30px;
border-radius: 10px;
cursor: help;
font-family: monospaces;
font-size: 50px;
text-transform: uppercase;

box-shadow: 0px 2px 2px #d3c4bd ;
transition: ease background-color 250ms;
&:hover {
  background-color: #94bbe9;
}
`



const RandomDrink = () => {
  
  const [drink, setDrink] = useState();

  const fetcher = () => {
    fetch(`http://localhost:5000/drink/random`)
      .then((res) => res.json()) // JSON data parsed by `data.json()` call
      .then((obj) => setDrink(obj.drinks[0]));
  };

  return (
    <div className="main">
     
   <div className="mainRandom" style={{backgroundImage: `url(${background})`, 
   width:'100vw',
   margin: '0',
    // maxwidth:'100%', 
    height:'100vh', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // backgroundPosition: 
    
 }}>
        <h1>GET RANDOM DRINK</h1>
        <hr/>
        <div className="randombutton">
      <Button type='button' onClick={fetcher}>
        Suprise Me, I'm Feeling Lucky!
      </Button>
      <br/>
      <br/>
      {drink == null ? (
        <h5>LOADING A SURPRISE</h5>
      ) :
       <DrinkDetails drink={drink}/>}
       </div>
      </div>
    </div>
  );
};
export default RandomDrink;
