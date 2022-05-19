

// Important
import React from "react";
import { useDispatch } from "react-redux";
import { delCard } from "../../state/actions/cardsActions";

// Styles
import "./Card.scss"

const Card = ({ card }) => {


    const dispatch = useDispatch();


    return (
        <div className="card" style={{backgroundColor: "#" + card.color}}>
            {card.num}
            <button onClick={() => dispatch(delCard(card.id))}>X</button>
        </div>
    )
}

export default Card;