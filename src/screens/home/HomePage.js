import React, {createContext, Fragment, useContext, useMemo, memo, PureComponent} from 'react';
import homeStyle from './styles/home.module.css'
import Api from "../../services/API";

import {RESET_ACTION, store} from "../../store";



import {IncreaseButton} from './components/IncreateButton'
import {DecreaseButton} from './components/DecreateButton';
import withBaseLayout from "../../layouts/withBaseLayout";
import {resetCounter} from './services';
import StoreDispatch from "../../storeDispatch";


const forceLogin = (func) => (...arg) => {

    if("chua login"){
        alert("show popup login");
        return;
    }

    return func(arg)
};

const HomePage = withBaseLayout(({homeData}) => {
    const {state, dispatch} = useContext(store);

    const resetHandler = forceLogin(() => {
        StoreDispatch.dispatch({type: RESET_ACTION, data: "ok"})
    });

    const ResetButton = memo(() => <button className="btn btn-secondary" onClick={resetHandler}>RESET</button>);

    return (
        <Fragment>
            <div className="container" style={{marginTop: "20px"}}>
                <div className="d-flex align-items-center justify-content-md-between">
                    <DecreaseButton/>

                    <h3>{state.counter}</h3>

                    <IncreaseButton/>

                </div>

                <ResetButton />
            </div>
        </Fragment>
    )
})

async function staticProps() {
    return {
        props: {homeData: null}
    }
}

export {HomePage, staticProps}
