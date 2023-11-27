import { Route, Routes } from "react-router-dom";
import React, { useContext } from "react";

import Home from './../../feature/home/Home';
import About from "./../../feature/about/About";

import ManageCourse from './../../feature/manage_course/ManageCourse';
import AddCourseForm from './../../feature/manage_course/add_course/AddCourseForm';
import EditCourseForm from './../../feature/manage_course/edit_course/EditCourseForm';

import ViewCourse from './../../feature/manage_course/view_course/ViewCourse'

import LoginForm from './../../feature/login/LoginForm'

import AuthContext from './../../common/context/auth-context'

import AsyncCourseList from './../../feature/async_course_list/AsyncCourseList';

import AddToCart from "./../../feature/manage_cart/add_to_cart/AddToCart";

import CachingSupportCourseList from "../../feature/manage_course/caching_support/CachingSupportCourseList";

function AppRoute() {

    let authCtx = useContext(AuthContext);

    const authMessage = "Login is required";

    return (
        <>
            <Routes>
                
                <Route path="/" exact element={<Home />} />
                
                <Route path="/home" element={<Home />} />
            </Routes>

            {(authCtx.isLoggedIn ?
                <Routes>

                    <Route path="/courses" element={<ManageCourse />} />



                    <Route path="/add_course" element={<AddCourseForm />} />
                    <Route path="/view_course/:id" element={<ViewCourse />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/edit_course/:id" element={<EditCourseForm />} />

                    <Route path="/asyncCourseList" element={<AsyncCourseList />} />

                    <Route path="/login" element={<LoginForm authMessage="" />} />

                    <Route path="/add_to_cart" element={<AddToCart />} />

                    <Route path="/caching_support" element={<CachingSupportCourseList />} />

                </Routes>
                :
                <LoginForm authMessage={authMessage} />
            )}



        </>

    );


}

export default AppRoute;