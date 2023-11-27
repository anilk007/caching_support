import React, { useContext, useState } from "react";

import doAuthenticateHelper from './helper/doAuthenticateHelper';

import { useNavigate } from 'react-router-dom'

import AuthContext from './../../common/context/auth-context'

const LoginForm = (props) => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState();

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    let authCtx = useContext(AuthContext);

    console.log("LoginForm props.authMessage ", props.authMessage);

    const handleUserNameChange = (e) => {
      
        setUserName(e.target.value);
        let _errors = {
            username : "",
            password : errors.password
        }
        
        setErrors(_errors);

    }



    const handlePasswordChange = (e) => {
   
        setPassword(e.target.value);
        let _errors = {
            username : errors.username,
            password : ""
        }
        
        setErrors(_errors);
    }

    const isFormValid = () => {

        let isValid = false;

        let _errors = {}

        if (!username) {
            _errors.username = "username is required"
        } 


        if (!password) {
            _errors.password = "password is required"
        } 

        if (Object.keys(_errors).length !== 0) {
            setErrors(_errors);
            return isValid;
        } else {
            isValid = true;
            return isValid;
        }


    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("handleLogin is called")
        console.log("handleLogin username :", username);
        console.log("handleLogin password :", password);

        if (!isFormValid()) {
            return;
        }

        let isAuthenticated = doAuthenticateHelper(username, password);

        if (isAuthenticated) {
            console.log("authCtx.isLoggedIn");
            console.log(authCtx.isLoggedIn);
            //console.log("window.location.pathname" , window.location.pathname);

            authCtx.onLogIn();
            navigate("/courses");
        } else {
            setErrorMessage("Username/Password is incorrect !!!")
        }

    }



    return (<div className="container">


        {props.authMessage &&
            <div>{props.authMessage}</div>}


        {errorMessage &&
            <div> errorMessage: {errorMessage}</div>
        }

        <div className="row mt-4 p-2 ">

            <form className="border border-primary p-3 rounded border-2 w-50"
                onSubmit={handleLogin}  >
                <div className="mb-5">Login</div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="Username">Username
                        <span className="p-1 text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" name="username"
                        value={username} placeholder="Enter Username"
                        onChange={handleUserNameChange} />
                    {errors.username &&
                        <span className="alert alert-danger">{errors.username}</span>}
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="password">Password
                        <span className="p-1 text-danger">*</span>
                    </label>
                    <input className="form-control" type="password" name="password"
                        value={password} placeholder="Enter Password"
                        onChange={handlePasswordChange} />
                    {errors.password &&
                        <span className="alert alert-danger">{errors.password}</span>}
                </div>

                <div className="form-group mt-4 float-end">
                    <button className="btn btn-primary" type="submit"
                    >Login</button>
                </div>
            </form>
        </div>



    </div>);
}


export default LoginForm;