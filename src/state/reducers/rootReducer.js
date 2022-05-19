// Important
import { combineReducers } from "redux";
// Reducers
import cardsReducer from "./cardsReducer"

const rootReducer = combineReducers({
    cards: cardsReducer
});

export default rootReducer;