

// Important
import React from "react";
import { useDispatch } from "react-redux";
import { delCard } from "../../state/actions/cardsActions";
import { Paper } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// Styles
import "./Card.scss"

const Card = ({ card }) => {

    const dispatch = useDispatch();

    return (
        <Paper elevation={3} className="card" >
            <div className="delButtonBox">
                <CloseRoundedIcon className="delButton"
                    onClick={() => dispatch(delCard(card.id))}
                />
            </div>
            <div className="cardNum" >
                {card.num}
            </div>
        </Paper>
    )
}

export default Card;