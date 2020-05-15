import React, {useContext} from "react";
import {DECREASE_ACTION, INCREASE_ACTION, store} from "../../../store";

const DecreaseButton = () => {
    const {state, dispatch} = useContext(store);

    const onClickHandler = () => {
        dispatch({type: DECREASE_ACTION, data: "---"})
    };

    return (
        <button onClick={onClickHandler} type="button" className="btn btn-danger">Decrease</button>
    )
};

export {DecreaseButton}
