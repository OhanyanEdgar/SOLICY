

// Important
import React from "react";

// Styles
import "./Card.scss"

const Card = ({ card = 0 }) => {
  return (
    <div className="card">
        {card}
    </div>
  )
}

export default Card;