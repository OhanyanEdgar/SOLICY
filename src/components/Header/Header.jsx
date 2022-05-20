
// Important
import React from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../state/actions/cardsActions";
import { sortCards } from "../../state/actions/cardsActions";
import { Button } from '@mui/material';

// Styles 
import "./Header.scss"

const Header = () => {

  const dispatch = useDispatch();

  return (
    <div className='header'>
      <Button variant="outlined" color="success"
        onClick={() => dispatch(addCard())}
      >Add Card</Button>
      <Button variant="outlined" className="ml-3"
        onClick={() => dispatch(sortCards())}
      >Sort Cards</Button>
    </div>
  )
}

export default Header;