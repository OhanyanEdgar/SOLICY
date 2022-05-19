
// Important
import React from "react";

// Components
import Header from "../Header"
import Cards from "../Cards"
import Footer from "../Footer"

const Main = ({ cards }) => {
  return (
    <div className='w-75 bg-light'>
      <Header />
      <Cards cards={cards}/>
      <Footer />
    </div>
  )
}

export default Main;