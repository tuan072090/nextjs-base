import React, {useEffect, useState} from 'react';
import authStyle from "../screens/auth/authen.module.css";

const withAuth = Component => props => {

    const [auth, setAuth] = useState(null);

    const authentication = () => {
        setAuth(true)
    };

    if(!auth){
        return (
            <div className="container text-center">
                <h2>You need to authen first</h2>

                <img className="no-auth-img" src="/img/no-authen.jpeg"/>


                <button className="btn btn-info" onClick={authentication} type="button">Authen now</button>
            </div>
        )
    }

    return <Component {...props } />;
};
export default withAuth;
