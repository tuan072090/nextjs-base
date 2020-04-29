import { useAmp } from 'next/amp'
import {CustomSEOPage,staticProps} from "../../src/screens/customSEO";
import React from "react";

//  true | hybrid
export const config = { amp: 'hybrid' };

function SEOPage ({seoData}) {
    const isAmp = useAmp();

    return(
        <CustomSEOPage seoData={seoData} />
    )
}

export async function getStaticProps(){
    return staticProps();
}

export default SEOPage
