

import {types} from "../actions/cardsActions"

const cardsReducer = (state = [], action) => {
    switch(action.type){
        case types.ADD_CARD:
            return [...state, {
                num: Math.floor(Math.random() * 100),
                id: Math.random(),
                color: Math.random().toString(16).substr(-6),
            }];
        case types.DEL_CARD:
            return state.filter(card => card.id !== action.payload);
        case types.SORT_CARDS:
            return [...state.sort((a, b) => a.num - b.num)]
        default:
            return state;
    }
}

export default cardsReducer;