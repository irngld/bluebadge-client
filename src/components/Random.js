import { useState, useEffect } from "react";
import DrinkDetails from "./DrinkDetails";
import "../components/Random.css";
import background from "../img/woodbackground.jpg";
import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  color: #b07c0d;
  padding: 10px 30px;
  border-radius: 10px;
  cursor: help;
  // font-family: monospaces;
  font-size: 50px;
  text-transform: proper;

  box-shadow: 0px 2px 2px #d3c4bd;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #e9bf94;
  }
`;

const RandomDrink = () => {
  const [drink, setDrink] = useState();
  const [toggle, setToggle] = useState(false);

  const fetcher = () => {
    fetch(`http://localhost:5000/drink/random`)
      .then((res) => res.json()) // JSON data parsed by `data.json()` call
      .then((obj) => setDrink(obj.drinks[0]))
      .then(() => setToggle(!toggle));
  };

  const handleToggle = () => {
    setToggle(false);
  };

  return (
    <>
      {!toggle ? (
        <>
          {/* <div className="main"> */}
          <div
            className="mainRandom"
            style={{
              backgroundImage: `url(${background})`,
              width: "100vw",
              margin: "0",
              // maxwidth:'100%',
              height: "100vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              // backgroundPosition:
            }}
          >
            <div className="d-flex justify-content-center align-items-center vh-100">
              {/* <Button type="button" onClick={fetcher}>
                  <span style={{ textTransform: "uppercase" }}>Feeling Lucky?</span>
                  <h3 style={{ color: "black" }}>click for random drink</h3>
                </Button> */}
              <Button type="button" onClick={fetcher}>
                <span>Feeling Lucky?</span>
                <h3 style={{ color: "black" }}>click for random drink</h3>
              </Button>
            </div>
          </div>
          {/* </div> */}
        </>
      ) : (
        <>
          {drink == null ? (
            <h5 className="mainrandoms">LOADING A SURPRISE</h5>
          ) : (
            <DrinkDetails drink={drink} onSelect={handleToggle} showButton={true} />
          )}
        </>
      )}
    </>
  );
};
export default RandomDrink;
