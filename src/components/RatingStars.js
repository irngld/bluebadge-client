import React from "react";

class RatingStars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: [],
      rating: this.props.drink?.rating ?? 0,
      hovered: 0,
      selectedIcon: "★",
      deselectedIcon: "☆", // color: #808080  (grey)
    };

    let outOf = props.outOf ? props.outOf : 5;

    for (var i = 0; i < outOf; i++) {
      this.state.stars.push(i + 1);
    }
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });

    if (this.props.onChange) this.props.onChange(newRating);
    console.log(newRating, this.props.drink);

    let getDrinkRatings = `http://localhost:5000/favorites/rating/${this.props.drink.idDrink}`;
    const token = localStorage.getItem("token");

    fetch(getDrinkRatings, {
      method: "PUT",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      }),
      body: JSON.stringify({ newRating }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  hoverRating(rating) {
    this.setState({
      hovered: rating,
    });
  }

  render() {
    const { stars, rating, hovered, deselectedIcon, selectedIcon } = this.state;

    return (
      <div>
        <div className="rating" style={{ fontSize: "45px", color: "#FED902" }}>
          {stars.map((star) => {
            return (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeRating(star);
                }}
                onMouseEnter={() => {
                  this.hoverRating(star);
                }}
                onMouseLeave={() => {
                  this.hoverRating(0);
                }}
              >
                {rating < star ? (hovered < star ? deselectedIcon : selectedIcon) : selectedIcon}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RatingStars;

// import { useState, useEffect } from "react";
// import ReactStars from "react-rating-stars-component";

// const RatingStars = ({ drink }) => {
//   const ratingChanged = (newRating, drink) => {
//     console.log(newRating);
//   };

//   return (
//     <div className="">
//       <ReactStars
//         count={5}
//         size={40}
//         isHalf={true}
//         onChange={ratingChanged}
//         emptyIcon={<i className="far fa-star"></i>}
//         halfIcon={<i className="fa fa-star-half-alt"></i>}
//         fullIcon={<i className="fa fa-star"></i>}
//         activeColor="#ffd700"
//       />
//     </div>
//   );
// };

// export default RatingStars;
