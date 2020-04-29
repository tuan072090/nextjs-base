import React, {useEffect, Fragment, useState} from 'react';
import Head from 'next/head'

const withBaseLayout = Component => props => {

    const [device, setDevice] = useState("desktop");

    useEffect(() => {
        const deviceName = window.innerWidth <= 768 ? "mobile" : window.innerWidth <= 992 ? "tablet" : "desktop";

        setDevice(deviceName);

        window.addEventListener('resize', changeWindowSize);

        // return window.removeEventListener('resize', changeWindowSize)
    }, []);

    const changeWindowSize = () => {
        // console.log("window width change...", window.innerWidth);

        const deviceName = window.innerWidth <= 768 ? "mobile" : window.innerWidth <= 992 ? "tablet" : "desktop";
        setDevice(deviceName);
    };

    console.log("deviceName", device);
    return (
        <Fragment>
            <Head>
                <title>Detail page title</title>
                <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"/>
                <link rel="stylesheet" type="text/css" href="/css/styles.css"/>
                <script type="text/javascript" src="/js/jquery-3.4.1.min.js"/>
                <script type="text/javascript" src="/js/bootstrap.min.js"/>
            </Head>

            <header>
                <div className="container">
                    <h3>{device} header</h3>
                </div>
            </header>

            <main>
                <Component {...props}/>
            </main>

            <footer>
                <div className="container">

                    <h3>{device} footer</h3>

                </div>
            </footer>
        </Fragment>
    );
};

export default withBaseLayout;
