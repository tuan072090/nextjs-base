import React from 'react';
import {DealDetailPage, staticPath, staticProps} from "../../src/screens/dealDetail/DealDetailPage";

const DealDetail = ({deal, error}) => {
    return <DealDetailPage deal={deal} error={error} />
};

export async function getStaticPaths(){
    return staticPath();
}
export async function getStaticProps({params}){
    return staticProps({params});
}

export default DealDetail
