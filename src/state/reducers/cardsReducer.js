

import {fakeCards} from "../actions/cardsActions"

const cardsReducer = (state = fakeCards, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default cardsReducer;