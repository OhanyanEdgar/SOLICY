
// Important
import { useState } from 'react';

// Components
import Instructions from './components/Instructions';
import Main from "./components/Main"

// Styles
import "./App.scss";

function App() {


  return (
    <div className="app">
      <Main />
      <Instructions />
    </div>
  );
}

export default App;
