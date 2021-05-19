import {useState, useEffect} from 'react';


const Favorites = () => {
    const fetcher = () => {
        fetch(`http://localhost:5000/drink/posion`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        
        })
    }
    return <div>INVENTORY HERE</div>
}

export default Favorites;