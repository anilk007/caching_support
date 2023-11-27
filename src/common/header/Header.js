import { Link, NavLink } from 'react-router-dom';

import React, { useContext } from "react";

import AuthContext from './../context/auth-context';

import './Header.css';

const Header = () => {

    let authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        console.log("Header logoutHandler is called ");

        authCtx.onLogout();
    }

    const cartClickHandler = () => {
        console.log("Header cartClickHandler is called ");

        //  authCtx.onLogout();
    }



    return (

        <div className='navbar navbar-expand-lg navbar-light bg-light'>

            <div> Cart
                <button className="btn btn-primary text-start"
                    type="button" onClick={() => cartClickHandler()}>
                    0
                </button>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/home">
                        Home
                    </NavLink >
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/courses">
                        courses
                    </NavLink >
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/about">
                        About
                    </NavLink >
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/asyncCourseList">
                        Async/Await CourseList
                    </NavLink >
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/login">
                        Login
                    </NavLink >
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/caching_support">
                    caching_support
                    </NavLink >
                </li>
                <div>
                <button className="btn btn-primary text-start"
                    type="button" onClick={() => logoutHandler()}>
                    Logout
                </button>
            </div>

            </ul>
        </div>


    )


}

export default Header;