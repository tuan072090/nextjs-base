import React, {createContext, useEffect, useReducer} from 'react';
import StoreDispatch from "./storeDispatch";
import {Logger} from "./logger";

const initialState = {
    isAuthen: false,
    counter: 0
};

export const INCREASE_ACTION = 'increase';
export const DECREASE_ACTION = 'decrease';
export const RESET_ACTION = 'reset';


const reducer = Logger((state, action) => {

    switch(action.type) {
        case INCREASE_ACTION:
            const newData =  {...state, counter: state.counter+1};;
            window.localStorage.setItem("data", JSON.stringify(newData))

            return newData;

        case DECREASE_ACTION:
            return {...state, counter: state.counter-1};

        case RESET_ACTION:
            return initialState;

        default:
            throw new Error('action is not accepted');
    }
});

const store = createContext(initialState);
const { Provider} = store;

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    StoreDispatch.setDispatch(dispatch);
    StoreDispatch.setState(state);

    return <Provider value={{ state, dispatch }}>
        {children}
    </Provider>;
};

export { store, StateProvider }



