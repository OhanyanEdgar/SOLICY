

// Important
import React from "react";

// Styles
import "./Card.scss"

const Card = ({ card }) => {


    return (
        <div className="card" style={{backgroundColor: "#" + card.color}}>
            {card.num}
            <button>X</button>
        </div>
    )
}

export default Card;