import { createStore } from "redux";
import reducers from "./reducers";

const persistedState = localStorage.getItem("cards") &&
                       JSON.parse(localStorage.getItem("cards")) || {} ;
                       

// const store = createStore(reducers, persistedState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// store.subscribe(() => {
//     localStorage.setItem("cards", JSON.stringify(store.getState()));
// });

export default store;