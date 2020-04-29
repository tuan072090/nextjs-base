import React from 'react';
import {DealsPage, staticProps} from "../../src/screens/deals/DealsPage";

function DealList ({deals}) {
    return(
        <DealsPage deals={deals} />
    )
}

export async function getStaticProps(){
    return staticProps();
}

export default DealList
