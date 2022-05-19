
export const types = {
    ADD_CARD: "ADD_CARD",
    DEL_CARD: "DEL_CARD",
};

export const addCard = () => {
    return {
        type: types.ADD_CARD,
    };
};
export const delCard = cardId => {
    return {
        type: types.DEL_CARD,
        payload: cardId,
    };
};