import React from 'react'
import Head from 'next/head'

const SEOHeadTag = (props) => {

    return (
        <Head>
            {/*<link rel="stylesheet" type="text/css" href="/ung-ho/css/bootstrap.min.css"/>*/}

            {/*<link rel="stylesheet" type="text/css" href="/ung-ho/css/custom.css"/>*/}

            {/*<script type="text/javascript" src="/ung-ho/js/jquery-3.4.1.min.js"/>*/}
            {/*<script type="text/javascript" src="/ung-ho/js/bootstrap.min.js"/>*/}
            {/*<script src="/ung-ho/js/owl.carousel.min.js"/>*/}
            {/*<script src="/ung-ho/js/jquery.countdown.min.js"/>*/}
            {/*<script src="/ung-ho/vegas/vegas.min.js"/>*/}
            {/*<script src="/ung-ho/js/wow.min.js"/>*/}
            <title>1 cho bạn, 1 để sẻ chia - Chiến dịch phi lợi nhuận hỗ trợ cửa hàng vượt khó</title>

            <meta name="description" content="description of SEO page"/>
            <meta name="keywords" content="keyword1, keyword2,..."/>

            <meta property="og:title" content="page title here"/>
            <meta property="og:description" content="description of SEO page"/>

            <meta property="og:url" content={"page.com/seo-url"}/>
            <meta property="og:site_name" content="page.com"/>
            <meta property="fb:app_id" content={"facebook App ID"}/>

            <meta property="og:image" content={"thumbnail url here"}/>
            <meta property="og:type" content="website"/>

        </Head>
    )
};

export {SEOHeadTag}
