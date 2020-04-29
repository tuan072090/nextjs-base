import React, {Fragment, useEffect} from 'react'
import {SEOHeadTag} from "./components/SEOHeadTag";
import withBaseLayout, {useDeviceInfo} from "../../layouts/withBaseLayout";

let CustomSEOPage = (props) => {
    const device = useDeviceInfo();

    //  @ts-ignore
    const {seoData} = props;

    return(
        <Fragment>
            <SEOHeadTag/>

            <div className="container">
                <h1>SEO custom page {device}</h1>

                <p>{seoData}</p>
            </div>
        </Fragment>
    )
};

const staticProps = () => {
    return {
        props: {seoData: "this is SEO data"}
    }
};

CustomSEOPage = withBaseLayout(CustomSEOPage);
export {CustomSEOPage, staticProps}
