import React, {useContext} from "react";
import {INCREASE_ACTION, store} from "../../../store";

const IncreaseButton = () => {
    const {state, dispatch} = useContext(store);

    const onClickHandler = () => {
        dispatch({type: INCREASE_ACTION, data: "+++"})
    };

    return (
        <button onClick={onClickHandler} type="button" className="btn btn-success">Increase</button>
    )
};

export {IncreaseButton}
