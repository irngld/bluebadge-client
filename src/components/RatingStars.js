import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";


const RatingStars = ({drink}) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className="">
        <ReactStars
            count={5}
            size={40}
            isHalf={true}
            onChange={ratingChanged}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
        />
        </div>

    )
}


export default RatingStars;