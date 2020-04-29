import React from 'react';
import {HomePage, staticProps} from "../src/screens/home/HomePage";

function Home ({homeData}) {
    return(
        <HomePage homeData={homeData} />
    )
}

export async function getStaticProps(){
    return staticProps();
}

export default Home
