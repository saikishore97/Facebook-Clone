import React from 'react';
import './Login.styles.css';
import Button from '@material-ui/core/Button';
import {auth,provider} from './firebase';
import {useDataLayerValue} from './DataLayer';


function Login() {

    const[{user},dispatch]=useDataLayerValue();

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{

            dispatch({
                type:'SET_USER',
                payload:result.user,
            });

        })

        .catch(error=>console.log(error.message))
    };

    return (
        <div className="loginpage">

            <div className="login__logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="facebook-logo"/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="fb-text-logo"/>
            </div>

            <Button type="submit" onClick={signIn}>Sign In</Button>
            
        </div>
    )
}

export default Login;
