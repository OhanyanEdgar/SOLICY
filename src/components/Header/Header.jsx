
// Important
import React from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../state/actions/cardsActions";

// Styles 
import "./Header.scss"

const Header = () => {

  const dispatch = useDispatch();

  return (
    <div className='header'>
      Header
      <button onClick={() => dispatch(addCard())}>Add Card</button>
    </div>
  )
}

export default Header;