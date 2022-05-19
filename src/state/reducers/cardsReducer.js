

import {fakeCards} from "../actions/cardsActions"
import {types} from "../actions/cardsActions"

const cardsReducer = (state = [], action) => {
    switch(action.type){
        case types.ADD_CARD:
            return [...state, {
                num: Math.floor(Math.random() * 100),
                id: Math.random(),
                color: Math.random().toString(16).substr(-6),
            }]
        default:
            return state;
    }
}

export default cardsReducer;