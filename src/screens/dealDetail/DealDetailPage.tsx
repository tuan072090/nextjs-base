import React from 'react';
import dealStyle from './styles/dealDetail.module.css';
import Api from "../../services/API";

function DealDetailPage({deal, error}) {
    console.log("error", error)

    return (
        <div className={dealStyle.dealWrap}>
            <h1>Welcome to deal detail page</h1>

            <div className="container">
                <code>
                    {
                        deal ? JSON.stringify(deal, null, 4) : JSON.stringify(error)
                    }
                </code>
            </div>
        </div>
    )
}

async function staticPath() {

    //  these 2 items with id 27 & 28 will be prev-rendered at build time
    const paths = [
        // {params: {id: '27'}},
        // {params: {id: '28'}}
    ];

    //  fallback true will not show 404 when request id != 27 | 28, it will fallback to server side rendering
    return {paths, fallback: true}
}

// This also gets called at build time
export async function staticProps({params}) {
    try {
        const dealData = await Api.get("https://user.api.dev.meete.co/voucher/deals/" + params.id, {});

        // Pass data to the page via props
        return {props: {deal: dealData, error: null}}
    } catch (e) {
        return {props: {deal: null, error: e.message}}
    }
}

export {DealDetailPage, staticPath}
