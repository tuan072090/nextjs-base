import React, {Fragment, useEffect} from 'react'
import withBaseLayout from "../../layouts/withBaseLayout";
import withAuth from "../../layouts/withAuth";
import authStyle from "./authen.module.css"

let AuthenPage = (props) => {

    return(
        <div className="container text-center">
            <h1>Authen page example</h1>

            <img className={authStyle.authImg} src="/img/authen.png"/>
        </div>
    )
};


AuthenPage = withBaseLayout(withAuth(AuthenPage));

export {AuthenPage}
