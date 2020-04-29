import React, {useReducer} from 'react';
import dealStyle from './styles/dealDetail.module.css';
import Api from "../../services/API";
import {FormRedeem} from "./components/FormRedeem";
import withBaseLayout from "../../layouts/withBaseLayout";
import {dealReducer} from './reducer'

const DealDetailPage = withBaseLayout(({deal, error}) => {
    const [dealData, dispatch] = useReducer(dealReducer, null);
    
    const saveDealToReducer = () => {
        // @ts-ignore
        dispatch({ type: 'add', data: deal });
    };

    return (
        <div className={dealStyle.dealWrap}>
            <div className="container">
                <h1>Welcome to deal detail page</h1>
                <button onClick={saveDealToReducer}>Save deal</button>

                <code>
                    {
                        deal ? JSON.stringify(deal, null, 4) : JSON.stringify(error)
                    }
                </code>
            </div>

            <FormRedeem/>
        </div>
    )
});

async function staticPath() {

    //  these 2 items with id 27 & 28 will be prev-rendered at build time
    const paths = [
        {params: {id: '27'}},
        {params: {id: '28'}},
        {params: {id: '28'}},
        {params: {id: '30'}}
    ];

    //  fallback true will not show 404 when request id != 27 | 28, it will fallback to server side rendering
    return {paths, fallback: true}
}

// This also gets called at build time
export async function staticProps({params}) {
    try {
        const dealData = await Api.get("https://user.api.dev.meete.co/voucher/deals/" + params.id, {});

        // Pass data to the page via props
        return {
            props: {
                deal: dealData,
                error: null
            }
        }
    } catch (e) {
        return {props: {deal: null, error: e.message}}
    }
}

export {DealDetailPage, staticPath}
