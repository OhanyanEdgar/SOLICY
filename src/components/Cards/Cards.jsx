
// Important
import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import { useSelector } from "react-redux";

// Components
import Card from "../Card"

// Styles
import "./Cards.scss"

const Cards = ({}) => {

  const {cards} = useSelector(state => state);

  return (
    <div className="cards">
      <div className='container'>
        
        <Grid container spacing={2} >
        {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
        {cards.map(card => (
          <Grid item xs={2} sm={4} md={6} key={card.id}>
          {/* <Grid item xs={2} sm={4} md={4} key={index}> */}
            <Card card={card} />
          </Grid>
        ))}
      </Grid>
      </div>
    </div>
  )
}

export default Cards