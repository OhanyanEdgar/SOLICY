
// Important
import React from 'react';

// Styles
import "./Instructions.scss"

const Instructions = () => {
  return (
    <div className='instructions'>
      <div className='infoBox'>
        <h4 className='title'>Instructions</h4>
        <p>- Press the <span>ADD CARD</span> button to add a new Card.</p>
        <p>- Use the <span>SORT CARDS</span> button to sort the Cards by increase.</p>
        <p>- Press an <span>X</span> icon on the top right to delete them.</p>
      </div>
    </div>
  )
};

export default Instructions;
