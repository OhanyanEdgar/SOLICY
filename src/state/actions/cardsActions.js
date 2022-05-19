

export const fakeCards = [
    {
        num: Math.floor(Math.random() * 100),
        id: Math.random(),
    },
    {
        num: Math.floor(Math.random() * 100),
        id: Math.random(),
    },
    {
        num: Math.floor(Math.random() * 100),
        id: Math.random(),
    },
    {
        num: Math.floor(Math.random() * 100),
        id: Math.random(),
    },
    {
        num: Math.floor(Math.random() * 100),
        id: Math.random(),
    },
];

export const types = {
    ADD_CARD: "ADD_CARD",
};

export const addCard = () => {
    return {
        type: types.ADD_CARD,
    };
};