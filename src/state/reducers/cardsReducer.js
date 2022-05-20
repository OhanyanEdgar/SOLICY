
// Important
import uuid from "react-uuid";
import {types} from "../actions/cardsActions"

const cardsReducer = (state = [], action) => {
    switch(action.type){
        case types.ADD_CARD:
            return [...state, {
                num: Math.floor(Math.random() * 100),
                id: uuid(),
            }];
        case types.DEL_CARD:
            return state.filter(card => card.id !== action.payload);
        case types.SORT_CARDS:
            return [...state.sort((curent, next) => curent.num - next.num)]
        default:
            return state;
    }
}

export default cardsReducer;