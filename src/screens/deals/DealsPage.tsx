import React from 'react';
import dealsStyle from './styles/deals.module.css';
import Api from "../../services/API";
import withBaseLayout from '../../layouts/withBaseLayout';

const DealsPage = withBaseLayout(({deals}) =>{

    return(
        <div className="container">
            <div className={dealsStyle.wrap}>
                <h1>Welcome to deal list page</h1>

                <code className={dealsStyle.codeReview}>
                    {JSON.stringify(deals, null, 4)}
                </code>
            </div>
        </div>
    )
});

async function staticProps (){
    const dealsData = await Api.get("https://user.api.dev.meete.co/search/deals", {
        provinceId: 1,
        limit: 20
    });

    return {
        props: {deals: dealsData}
    }
}

export {DealsPage, staticProps}
