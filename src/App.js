
// Important
import { useState } from 'react';

// Components
import Instructions from './components/Instructions';
import Main from "./components/Main"

// Styles
import "./App.scss";

function App() {

  const [cards, setCards] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

  return (
    <div className="app">
      <Main cards={cards} />
      <Instructions />
    </div>
  );
}

export default App;
