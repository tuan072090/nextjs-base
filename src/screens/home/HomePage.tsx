import React from 'react';
import homeStyle from './styles/home.module.css'
import homeComponent from './styles/homeComponent.module.scss';
import Api from "../../services/API";

function HomePage ({homeData}) {

    return(
        <div className={homeStyle.home}>
            <h1>Welcome to home page</h1>

            <div className={homeComponent.componentWrap}>
                <div className={homeComponent.itemComponent}>
                    <code>
                        {JSON.stringify(homeData)}
                    </code>
                </div>
            </div>
        </div>
    )
}

async function staticProps (){
    const homeData = await Api.get("https://tracking.meete.co/home", {provinceId: 1});

    return {
        props: {homeData: homeData}
    }
}

export {HomePage, staticProps}
