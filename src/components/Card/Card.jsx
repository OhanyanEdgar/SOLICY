

// Important
import React from "react";

// Styles
import "./Card.scss"


const Card = ({ card = 0 }) => {

    const color = Math.random().toString(16).substr(-6);

    return (
        <div className="card" style={{backgroundColor: "#" + color}}>
            {card}
            <button>X</button>
        </div>
    )
}

export default Card;